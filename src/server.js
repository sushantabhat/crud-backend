import express from 'express'; 
import mynotesRoutes from "./routes/notesRoutes.js"
import usersRoutes from "./routes/usersRoutes.js"
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/notes", mynotesRoutes);
app.use("/api/users", usersRoutes);

// HTML route for users view
app.get('/users', async (req, res) => {
    try {
        const response = await fetch('http://localhost:5001/api/users');
        const data = await response.json();
        res.render('users', { users: data.users });
    } catch (error) {
        console.error('Error:', error);
        res.render('users', { users: [] });
    }
});

// Add user form submission
app.post('/users', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        if (!name || !email || !password) {
            return res.render('users', {
                users: [],
                error: 'All fields are required',
                formData: req.body
            });
        }

        const response = await fetch('http://localhost:5001/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            res.redirect('/users');
        } else {
            res.render('users', { 
                users: [], 
                error: data.message || 'Failed to create user',
                formData: req.body
            });
        }
    } catch (error) {
        console.error('Error:', error);
        res.render('users', { 
            users: [], 
            error: 'Failed to create user',
            formData: req.body
        });
    }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
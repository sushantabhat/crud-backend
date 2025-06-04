import mongoose from 'mongoose';

//1
const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 20
    },
    content: {
        type: String,
        required: true
    },
},
    {timestamps: true}
);

const Note = mongoose.model('Note', noteSchema);

export default Note;
// Exporting the Note model to use in controllers
// This model will be used to interact with the 'notes' collection in MongoDB
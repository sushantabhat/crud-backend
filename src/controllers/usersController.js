import { createUser, getAllUsers, getUserById as getUserByIdService, updateUser as updateUserService, deleteUser as deleteUserService, findUserByEmail } from '../services/userService.js';

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await createUser({ name, email, password });
        res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        res.status(500).json({ message: "User registration failed", error: error.message });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await findUserByEmail(email);
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // TODO: Add password comparison logic here
        res.status(200).json({ message: "User logged in successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Login failed", error: error.message });
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.status(200).json({ message: "Users fetched successfully", users });
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch users", error: error.message });
    }
};

export const getUserById = async (req, res) => {
    try {
        const user = await getUserByIdService(req.params.id);
        res.status(200).json({ message: "User fetched successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch user", error: error.message });
    }
};

export const updateUser = async (req, res) => {
    try {
        const user = await updateUserService(req.params.id, req.body);
        res.status(200).json({ message: "User updated successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Failed to update user", error: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const user = await deleteUserService(req.params.id);
        res.status(200).json({ message: "User deleted successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete user", error: error.message });
    }
};
import User from '../models/userModel.js';

// Create a new user
export const createUser = async (userData) => {
    console.log("xxxx------>",userData);
    try {
        const user = await User.create(userData);
        return user;
    } catch (error) {
        throw error;
    }
};

// Get all users
export const getAllUsers = async () => {
    try {
        const users = await User.find({}).select('-password');
        return users;
    } catch (error) {
        throw error;
    }
};

// Get user by ID
export const getUserById = async (userId) => {
    try {
        const user = await User.findById(userId).select('-password');
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw error;
    }
};

// Update user
export const updateUser = async (userId, updateData) => {
    try {
        const user = await User.findByIdAndUpdate(
            userId,
            updateData,
            { new: true, runValidators: true }
        ).select('-password');
        
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw error;
    }
};

// Delete user
export const deleteUser = async (userId) => {
    try {
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw error;
    }
};

// Find user by email
export const findUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email });
        return user;
    } catch (error) {
        throw error;
    }
}; 
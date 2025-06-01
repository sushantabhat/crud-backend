import Note from '../models/Note.js';

export const createnotes = async (req,res) =>{
    res.status(201).json({message: "note created successfully"});
}

export const  getnotes = async (req,res) =>{
    try{
        const notes = await Note.find();
        res.status(200).json(notes);
    }
    catch(error){
        console.error("Error fetching notes:", error);
        res.status(500).json({message: "internal server error"});
    }
}

export const updatednotes = (req,res) =>{
    res.status(200).json({message:"you updated the notes"})
}

export const deletenotes = (req,res) =>{
    res.status(200).json({message: "note deleted successfully"})
}
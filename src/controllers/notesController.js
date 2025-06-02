import Note from '../models/Note.js';

export const createnotes = async (req,res) =>{
    try{
        const {title,content} = req.body;
        const newNote = new Note({title, content});

        await newNote.save();
        res.status(201).json({message: "note created successfully", note: newNote});
    }
    catch(error){
        console.error("Error creating note:", error);
        res.status(500).json({message: "internal server error"});
    }
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

export const updatednotes = async (req,res) =>{
    try{
        const {id} = req.params;
        const {title, content} = req.body;

        const updatedNote = await Note.findByIdAndUpdate(id, {title, content}, {new: true});
        
        if(!updatedNote){
            return res.status(404).json({message: "note not found"});
        }

        res.status(200).json({message: "note updated successfully", note: updatedNote});
    }
    catch(error){
        console.error("Error updating note:", error);
        res.status(500).json({message: "internal server error"});
    }
}

export const deletenotes = (req,res) =>{
    try{
        const {id} = req.params;

        const deletedNote = Note.findByIdAndDelete(id);
        
        if(!deletedNote){
            return res.status(404).json({message: "note not found"});
        }

        res.status(200).json({message: "note deleted successfully"});
    }
    catch(error){
        console.error("error deleting note:", error);
        res.status(500).json({message: "internal server error"});
    }
}
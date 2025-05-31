export const createnotes = (req,res) =>{
    res.status(201).json({message: "note created successfully"});
}

export const getnotes = (req,res) =>{
    res.status(200).json({message:"you got 100 notes"})
}

export const updatednotes = (req,res) =>{
    res.status(200).json({message:"you updated the notes"})
}

export const deletenotes = (req,res) =>{
    res.status(200).json({message: "note deleted successfully"})
}
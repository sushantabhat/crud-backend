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
import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
    title: { type: String, required: true, maxlength: 100 },
    content: { type: String, required: true, maxlength: 2000 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

NoteSchema.pre("save", function () {
    this.updatedAt = Date.now();
    // No next() needed if you don't include it in the parameters
});

const Note = mongoose.models.Note || mongoose.model("Note", NoteSchema)

export default Note
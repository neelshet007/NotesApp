import Image from "next/image";
import dbConnect from "@/lib/db";
import Note from "@/models/Note";
import { NotesClient } from "@/components/NotesClient";
//as this is server realted thing you don't want to add components here 

async function getNotes() {
  await dbConnect();
  const rawnotes = await Note.find({}).sort({ createdAt: -1 }).lean();
  const notes = JSON.parse(JSON.stringify(rawnotes));

  return notes.map((note) => ({
    ...note,
    _id: note._id.toString(),

  }));
}

export default async function Home() {
  const notes = await getNotes();
  console.log(notes);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Notes</h1>
      <NotesClient initialNotes={notes} />
    </div>
  );
}

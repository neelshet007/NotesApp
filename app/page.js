import Image from "next/image";
import dbConnect from "@/lib/db";
import Note from "@/models/Note";
import { NotesClient } from "@/components/NotesClient";
//as this is server realted thing you don't want to add components here 

export default async function Home() {
  await dbConnect();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Notes</h1>
      <NotesClient />
    </div>
  );
}

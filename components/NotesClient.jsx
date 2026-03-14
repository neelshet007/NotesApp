"use client"
import React, { useState } from 'react'

export const NotesClient = ({ initialNotes }) => {
    const [notes, setNotes] = useState(initialNotes);
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [loading, setLoading] = useState(false)
    const createNote = async (e) => {
        e.preventDefault();

        if (!title.trim() || !content.trim()) return;
        setLoading(true);
        try {
            const response = await fetch("/api/notes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    content
                })
            })
            const result = await response.json()
            if (result.success) {
                setNotes([result.note, ...notes])
                toast.success("Note created successfully")
                setTitle("")
                setContent("")
            }
            console.log(result)
            setLoading(false)
        } catch (error) {
            console.log(error)
            toast.error("Failed to create note")
        }
    }
    const deleteNote = async (id) => {
        try {
            const response = await fetch(`/api/notes/${id}`, {
                method: "DELETE",
            });
            const result = await response.json();
            if (result.success) {
                setNotes(notes.filter((note) => note._id !== id));
                toast.success("Note deleted successfully");
            }
        } catch (error) {
            console.log(error);
            toast.error("Failed to delete note");
        }
    };
    return (
        <div className='space-y-6'>
            <form onSubmit={createNote} className="bg-white p-6 rounded-lg shadow-md" action="">
                <h2 className="text-xl text-gray-800 font-semibold mb-4">Create New Note</h2>
                <div className="space-y-4">
                    <input suppressHydrationWarning type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2
                     focus:ring-blue-500 text-gray-800" required
                    />

                    <textarea
                        suppressHydrationWarning
                        className="w-full px-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2
                     focus:ring-blue-500 text-gray-800"
                        placeholder='Note Content' value={content} onChange={(e) => setContent(e.target.value)} rows={4} />
                    <button suppressHydrationWarning disabled={loading} type="submit" className='bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 disabled:opacity-50'>{loading ? "Creating ..." : "Create Note"}</button>
                </div>
            </form>

            <div className="space-y-4">
                <h2 className='text-xl font-semibold '>Your Notes ({notes.length})</h2>
                {
                    notes.length === 0 ? (
                        <p className='text-gray-500'>No notes yet. Create one above!</p>
                    ) : (
                        notes.map((note) => (
                            <div key={note._id} className='bg-white p-6 rounded-lg shadow-md'>
                                <div className='flex justify-between items-start mb-2'>
                                    <h3 className='text-lg font-semibold'>{note.title}</h3>
                                    <div className="flex gap-2">
                                        <button className='text-blue-500 hover:text-blue-700 text-sm'>Edit</button>
                                        <button onClick={() => deleteNote(note._id)} className='text-red-500 hover:text-red-700 text-sm'>Delete</button>
                                    </div>
                                </div>
                                <p className='text-gray-700 mb-2'>{note.content}</p>
                                <p className='text-sm text-gray-500'>Created: {new Date(note.createdAt).toLocaleString()}</p>
                                {note.updatedAt !== note.createdAt && (
                                    <p className='text-sm text-gray-500'>Updated: {new Date(note.updatedAt).toLocaleString()}</p>
                                )}
                            </div>
                        ))
                    )
                }
            </div>

        </div>

    )
}

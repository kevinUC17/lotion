import "./index.css";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Title from "./Title";
import { useEffect, useState } from "react";
import uuid from "react-uuid";

function App() {
  const[notes, setNotes] = useState(JSON.parse(localStorage.saved_notes) || []);
  const [activeNote, setActiveNote] = useState(false);

  ///Storage
  useEffect(() => {
    localStorage.setItem("saved_notes", JSON.stringify(notes));

  }, [notes]);

  const addNote = () => {
    const newNote = {
      id:  uuid(),
      title: "Untitled Note",
      body: "",
      lastDateModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id)
  };

  const deleteNote = (deleteID) => {
    setNotes(notes.filter((note) => note.id !== deleteID));
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const updateNote = (updatedNote) => {
    const updatedNoteArray = notes.map((note) => {
      if(note.id === activeNote) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNoteArray);
  };

  return <div className="App">
    <Title />
    <Sidebar 
      notes={notes} 
      addNote = {addNote} 
      deleteNote = {deleteNote}

      activeNote = {activeNote}
      setActiveNote = {setActiveNote}
    />
    <Main 
      activeNote={getActiveNote()}  
      updateNote={updateNote}
    />
  </div>

}

export default App;

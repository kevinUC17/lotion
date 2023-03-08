import "./index.css";
import Sidebar from "./Sidebar";
import Temp_Sidebar from "./Temp_Sidebar";
import Main from "./Main";
import Main_prev from "./Main_prev";
import { useEffect, useState } from "react";
import uuid from "react-uuid";

import {BrowserRouter, Routes, Route, Link } from "react-router-dom";


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


  //ONLY WORKS IF MAIN IS IN APP FOR SOME REASON (IT JUST WORKS)//
  const [openSidebar, setOpenSidebar] = useState(true);
  




  return (
    <>
  
  <div className="App">

    <div className="title" >
        <ul className="top">
        <li><h1 className="lotion-title">Lotion</h1></li>
        <li><h1 className="title-bar"><button onClick={()=>setOpenSidebar(!openSidebar)}>&#9776;</button></h1></li>
        <li><h1 className="title-description"><p>Like Norton but im dying on the inside</p></h1></li>

        </ul>
    </div>
    
 

  </div>




  <Routes>
  <Route path ="/" element={   <>     <Sidebar
      notes={notes} 
      addNote = {addNote} 
      deleteNote = {deleteNote}

      activeNote = {activeNote}
      setActiveNote = {setActiveNote}
      
      openSidebar={openSidebar}
      setOpenSidebar={setOpenSidebar}
    /> </>
    }/>


    <Route path ="/:id/edit" element={   <> <Main 
      activeNote={getActiveNote()}  
      updateNote={updateNote}

      openSidebar={openSidebar}
      deleteNote = {deleteNote}
      />     <Temp_Sidebar
      notes={notes} 
      addNote = {addNote} 
      deleteNote = {deleteNote}

      activeNote = {activeNote}
      setActiveNote = {setActiveNote}
      
      openSidebar={openSidebar}
      setOpenSidebar={setOpenSidebar}
    /> </>
    }/>


    <Route path ="/:id/preview" element={   <> <Main_prev
      activeNote={getActiveNote()}  
      updateNote={updateNote}

      openSidebar={openSidebar}
      deleteNote = {deleteNote}
      
    /> <Sidebar
    notes={notes} 
    addNote = {addNote} 
    deleteNote = {deleteNote}

    activeNote = {activeNote}
    setActiveNote = {setActiveNote}
    
    openSidebar={openSidebar}
    setOpenSidebar={setOpenSidebar}
  />
  </>
    
    }/>
  </Routes>

  </>
  );
}

export default App;

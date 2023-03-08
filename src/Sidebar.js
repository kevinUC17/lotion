import { Link, useParams, navigate } from "react-router-dom";
import { useState } from "react";

function Sidebar({ notes, addNote, deleteNote, activeNote, setActiveNote,   openSidebar }) {

    const [count, setCount] = useState(1);

    const [idNum] = useState(1);

    const incrementCount = () => {
        setCount(count + 1);
        idNum = count;
      };


    const sortedNotes = notes.sort((a,b) => b.lastModified - a.lastModified);
    return (

        openSidebar?

        
        <div className = "sidebar">

        <div className = "sidebar-header">
            <h1>Notes</h1>
            <h1><button onClick = {addNote}><Link to = {`/${(idNum)}/edit`} >+</Link></button></h1>
        </div>

        <div className="sidebar-saved-notes">
        <Link to ={`/${idNum}/preview`}> 
            {sortedNotes.map((note) => (
                <div className={`sidebar-note ${note.id === activeNote && "active"}`}
                onClick={() => {setActiveNote(note.id)}} >

                        <div className="sidebar-note-title">
                            <strong>{note.title}</strong>
                            {//<button onClick = {(e) => deleteNote(note.id)}><Link to ="/">Delete</Link></button>//
                            }
                        </div>

                        <p>{note.body && note.body.substr(0, 100) + "..."}</p>

                        <small className="note-record">
                            Last modified {new Date(note.lastDateModified).toLocaleDateString("en-GB", {
                                hour: "2-digit",
                                minute: "2-digit",  /*THIS IS TEMPORARY*/
                            })}
                            </small>
                    
                </div>
            ))}
            </Link>   
        </div>
    </div> 
    : null

    );

}

export default Sidebar;
import { Link, useParams, navigate } from "react-router-dom";
import { useState } from "react";

function Temp_Sidebar({ notes, addNote, deleteNote, activeNote, setActiveNote,   openSidebar }) {

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
            <h1><button onClick = ""><Link to = {`/${(idNum)}/edit`} >+</Link></button></h1>
        </div>

        <div className="sidebar-saved-notes">
        <Link to ={`/${idNum}/preview`}> 
            {sortedNotes.map((note) => (
                <div className={`sidebar-note ${note.id === activeNote && "active"}`}
                onClick={() => {}} >

                        <div className="sidebar-note-title">
                            <strong>Untitled</strong>
                        </div>



                        <p>...</p>
                    
                </div>
            ))}
            </Link>   
        </div>
    </div> 
    : null

    );

}

export default Temp_Sidebar;
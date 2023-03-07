function Sidebar({ notes, addNote, deleteNote, activeNote, setActiveNote,   openSidebar }) {

    const sortedNotes = notes.sort((a,b) => b.lastModified - a.lastModified);
    return (
        openSidebar?
        <div className = "sidebar">

        <div className = "sidebar-header">
            <h1>Notes</h1>
            <h1><button onClick = {addNote}>+</button></h1>
        </div>

        <div className="sidebar-saved-notes">

            {sortedNotes.map((note) =>(
            <div className={`sidebar-note ${note.id === activeNote && "active"}`}
            onClick={() => setActiveNote(note.id)}>

                <div className="sidebar-note-title">
                    <strong>{note.title}</strong>
                    <button onClick = {(e) => deleteNote(note.id)}>Delete</button>
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
        </div>
    </div> 
    : null);

}

export default Sidebar;
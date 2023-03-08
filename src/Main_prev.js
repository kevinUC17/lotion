import { Link, useParams, navigate } from "react-router-dom";

function Main_prev({ activeNote, updateNote, deleteNote,    openSidebar }) {

    const editField = (key, value) => {
        updateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now(),
        });
    };

    if(!activeNote) return <div className="no-active-note">No note selected</div>

    return (
     <div className="main">

        <div className = "writeHeader">
            <h1 className="main-preview-title">{activeNote.title}</h1>
            <div className="imdead">
                <ul><button className = ".editSaveButton"><Link to = {`/notes/1/edit`} >Edit</Link></button></ul>
                <ul><button className = ".deleteButton" onClick = {(e) => deleteNote(activeNote.id)}><Link to = {`/`} >Delete</Link></button></ul>
            </div>
        </div>


        <div className="main-preview">
            <div className="main-preview-markdown">{activeNote.body}</div>
        
        </div>
    </div>
    );
}

export default Main_prev;
import { Link, useParams, navigate,} from "react-router-dom";

function Main({ activeNote, updateNote, deleteNote,    openSidebar }) {

    const editField = (key, value) => {
        updateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now(),
        });
    };

    const updateField = () => {


    };

    if(!activeNote) return <div className="no-active-note">No note selected</div>

    return (
     <div className="main">

        <div className = "writeHeader">
            <h1 className="main-preview-title">Untitled Notes</h1>
            <div className="imdead">
                <ul><button className = ".editSaveButton" onClick = {(e) => activeNote(activeNote.id)}><Link to = {`/notes/1/preview`} >Save</Link></button></ul>
                <ul><button className = ".deleteButton" onClick = {(e) => deleteNote(activeNote.id)}><Link to = {`/`} >Delete</Link></button></ul>
            </div>
        </div>


        <div className="main-edit">
            <Link to ="/notes/1/edit"> 
            <input type="text" id="title" value={activeNote.title} onChange={(e) => editField("title", e.target.value)}></input>
            <textarea id="body" placeholder="Your Note Here" value={activeNote.body} onChange={(e) => editField("body", e.target.value)}></textarea>
            </Link>
       </div>
        
    </div>
    );
}

export default Main;
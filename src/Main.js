function Main({ activeNote, updateNote }) {

    const editField = (key, value) => {
        updateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now(),
        });
    };

    if(!activeNote) return <div className="no-active-note">No note selected</div>

    return <div className="main">
        <div className="main-edit">
            <input type="text" id="title" value={activeNote.title} onChange={(e) => editField("title", e.target.value)}></input>
            <textarea id="body" placeholder="Your Note Here" value={activeNote.body} onChange={(e) => editField("body", e.target.value)}></textarea>
        </div>

        <div className="main-preview">

            <h1 className="main-preview-title">{activeNote.title}</h1>
            <div className="main-preview-markdown">{activeNote.body}</div>
        
        </div>
    </div>
}

export default Main;
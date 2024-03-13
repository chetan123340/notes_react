
const NoteList = ({notes}) => {

    return (
        <div className="container">
            {notes.map((note) =>(
                    <div className="card" style={{width: "18rem"}} key={note.id}> 
                        <div className="card-body">
                            <h5 className="card-title">{note.title}</h5>
                            <p className="card-text">{note.content}</p>
                            {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                )
            )}
        </div>
    )
}

export default NoteList;
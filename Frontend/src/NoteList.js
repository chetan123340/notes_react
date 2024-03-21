import { Link } from "react-router-dom";

const NoteList = ({notes}) => {

    return (
        <div className="container mt-4">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {notes.map((note) =>(
                    <div className="col" key={note.id}>
                        <div className="card shadow-sm mr-1" >
                            <div className="card-body">
                                <h5 className="card-title">{note.title}</h5>
                                <p className="card-text">{note.content.split(" ").slice(1,10).join(" ")}........</p>
                                <Link to={`/detail/${note.id}`} className="btn btn-primary">Read more..</Link>
                            </div>
                        </div>
                    </div>
                )
            )}
            </div>
        </div>
    )
}

export default NoteList;
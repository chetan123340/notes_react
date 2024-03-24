import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Detail = () => {
    const { id } = useParams()
    const { data: note, isPending, error } = useFetch('http://localhost:8000/api/notes/' + id)
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/api/notes/' + note.id, {
            method: "DELETE"
        }).then(() => {
            navigate("/")
        })
    }
    return (
        <div>
            {isPending && <div className="container">Loading...</div>}
            {error && <div className="container">{error}</div>}
            {note && <div className="container my-5">
                <div className="p-5 text-center bg-body-tertiary rounded-3">
                    <h1 className="text-body-emphasis">{note.title}</h1>
                    <p className="lead">
                        {note.content}
                    </p>
                    <div className="button-container">
                        <button className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" onClick={handleClick}>
                            <span className="material-symbols-outlined">
                                delete
                            </span>
                        </button>
                        <Link to={`/edit/${note.id}`}>
                        <button className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill">
                            <span className="material-symbols-outlined">
                                edit_note
                            </span>
                        </button>
                        </Link>
                    </div>
                </div>

            </div>}
        </div>
    );
}

export default Detail;
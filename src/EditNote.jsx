import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useEffect, useState } from "react";

const EditNote = () => {
    const {id} = useParams()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const {data: note, isPending, error} = useFetch('http://localhost:8000/notes/'+id)
    const navigate = useNavigate()

    useEffect(()=>{
        if (note) {
            setTitle(note.title)
            setContent(note.content)
        }
    },[note])
    
    

    const handleSubmit = (e)=>{
        e.preventDefault()
        const newNote = {title, content}
        fetch('http://localhost:8000/notes/'+id,{
            method: "PUT",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newNote)
        }).then(()=>{
            navigate("/")
        })
    }

    return ( 
        <div>
        {isPending && <div className="container">Loading...</div>}
        {error && <div className="container">{error}</div>}
        {note && <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text" className="form-control" 
                        required
                        value={title}
                        onChange={(e)=>{
                            setTitle(e.target.value)
                        }}    
                    />
                </div>
                <div className="mb-3">
                    <textarea type="text" className="form-control" 
                        required
                        value={content}
                        onChange={(e)=>{
                            setContent(e.target.value)
                        }}  
                    ></textarea>
                </div>
                {!isPending && <button type="submit" className="btn btn-primary">Submit</button>}
                {isPending && <button type="submit" className="btn btn-primary" disabled="true">Submit</button>}

            </form>
        </div>}
        </div>
     );
}
 
export default EditNote;
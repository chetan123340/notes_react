import { useState } from "react";

const Form = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [isPending, setIsPending] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault()
        const note = {title, content}
        
        fetch('http://localhost:8000/api/notes', {
            method: "POST",
            headers: {"Content-Type":"applicaton/json"},
            body: JSON.stringify(note)
        }).then(()=>{
            console.log("Addition Success");
            console.log(JSON.stringify(note))
            setIsPending(false)
        }).catch(err=>{
            console.log(err);
        })
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text" className="form-control" 
                        required
                        placeholder="Title"
                        value={title}
                        onChange={(e)=>{
                            setTitle(e.target.value)
                        }}    
                    />
                </div>
                <div className="mb-3">
                    <textarea type="text" className="form-control" 
                        required
                        placeholder="Enter your note here"
                        value={content}
                        onChange={(e)=>{
                            setContent(e.target.value)
                        }}  
                    ></textarea>
                </div>
                {!isPending && <button type="submit" className="btn btn-primary">Submit</button>}
                {isPending && <button type="submit" className="btn btn-primary" disabled="true">Submit</button>}

            </form>
        </div>
    );
}

export default Form;
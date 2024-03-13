import { useState } from "react";

const Form = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [isPending, setIsPending] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault()
        const data = {title, content}
        fetch('http://localhost:8000/notes', {
            method: "POST",
            headers: {"Content-Type":"applicaton/json"},
            body: JSON.stringify(data)
        }).then(()=>{
            console.log("Addition Success");
            setIsPending(false)
            window.location.reload();
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
                    <input type="text" className="form-control" 
                        required
                        placeholder="Enter your note here"
                        value={content}
                        onChange={(e)=>{
                            setContent(e.target.value)
                        }}  
                    />
                </div>
                {!isPending && <button type="submit" className="btn btn-primary">Submit</button>}
                {isPending && <button type="submit" className="btn btn-primary" disabled="true">Submit</button>}

            </form>
        </div>
    );
}

export default Form;
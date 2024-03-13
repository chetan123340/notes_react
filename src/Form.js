const Form = () => {
    return (
        <div className="container">
            <form>
                <div className="mb-3">
                    <input type="text" className="form-control" 
                        required
                        placeholder="Title"/>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" 
                        required
                        placeholder="Enter your note here"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Form;
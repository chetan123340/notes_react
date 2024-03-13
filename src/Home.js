import Form from "./Form";
import NoteList from "./NoteList";
import React from "react";
import useFetch from "./useFetch";

const Home = () => {
    const { data: notes, isPending, error } = useFetch('http://localhost:8000/notes')
    return ( 
        <div className="home">
            {isPending && <div>Loading ....</div>}
            {error && <div>{error}</div>}
            <Form />
            {notes && <NoteList notes={notes} />}
        </div>
     );
}
 
export default Home;
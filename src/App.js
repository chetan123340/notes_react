import Detail from "./Detail";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {  
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;

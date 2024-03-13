import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  

  
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;

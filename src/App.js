import Detail from "./Detail";
import EditNote from "./EditNote";
import Footer from "./Footer";
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
        <Route path="/edit/:id" element={<EditNote />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;

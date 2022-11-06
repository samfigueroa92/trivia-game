import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import About from "./About";
import NavBar from "./NavBar";
import Home from "./Home";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

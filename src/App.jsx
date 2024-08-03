import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="background-gif m-0">
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </Router>
  );
}
export default App;

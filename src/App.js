import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbarcom from "./components/Navbarcom";
import Footer from "./components/footer/Footer";
import Landing from "./components/landing/Landing";
import Skill from "./components/skills/Skill";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbarcom />
        <Landing />
        <Skill />
        <Footer />
      </div>

      {/* <Route path="/hello" component={Navbarcom} /> */}
    </Router>
  );
}

export default App;

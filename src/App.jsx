import React from "react";
import Navbar from "./components/layouts/Navbar.jsx";
import Footer from "./components/layouts/Footer.jsx";
import Container from "./components/layouts/Container.jsx";
import Home from "./components/pages/Home.jsx";
import Projects from "./components/pages/Projects.jsx";
import Project from "./components/pages/Project.jsx";
import Contact from "./components/pages/Contact.jsx";
import Company from "./components/pages/Company.jsx";
import NewProject from "./components/pages/NewProject.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Container customClass="min-height">
                <Home />
              </Container>
            }
          />
          <Route
            path="/projects"
            element={
              <Container customClass="min-height">
                <Projects />
              </Container>
            }
          />
          <Route
            path="/contact"
            element={
              <Container customClass="min-height">
                <Contact />
              </Container>
            }
          />
          <Route
            path="/company"
            element={
              <Container customClass="min-height">
                <Company />
              </Container>
            }
          />
          <Route
            path="/newproject"
            element={
              <Container customClass="min-height">
                <NewProject />
              </Container>
            }
          />
          <Route
            path="/project/:id"
            element={
              <Container customClass="min-height">
                <Project />
              </Container>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

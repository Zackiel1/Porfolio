import { Button, Container, Divider } from "@mui/material";
import LandingPage from "./Components/LandingPage/LandingPage";
import { Box } from "@mui/system";
import NavBar from "./Components/NavBar/NavBar";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import { useRef } from "react";

const App = () => {
  const landingPageRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <NavBar
        onLandingClick={() =>
          landingPageRef.current.scrollIntoView({ behavior: "smooth" })
        }
        onSkillsClick={() =>
          skillsRef.current.scrollIntoView({ behavior: "smooth" })
        }
        onProjectsClick={() =>
          projectsRef.current.scrollIntoView({ behavior: "smooth" })
        }
        onContactClick={() =>
          contactRef.current.scrollIntoView({ behavior: "smooth" })
        }
      />

      <div ref={landingPageRef}>
        <LandingPage />
      </div>
      <Divider /> 
      <div ref={skillsRef}>
        <Skills />
      </div>
      <Divider />  
      <div ref={projectsRef}>
        <Projects />
      </div>
      <Divider /> 
      <div ref={contactRef}>
        <Contact />
      </div>
      <Divider /> 
    </>
  );
};

export default App;

import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalStyles";

//Components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import ProjectPage from "./components/ProjectPage";
import MySkillsPage from "./components/MySkillsPage";
import TrainingPage from "./components/TrainingPage";
import SoundBar from "./subComponents/SoundBar";
import EducationPage from "./components/EducationPage";
import ContactPage from "./components/ContactPage";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <SoundBar />

        {/* For framer-motion animation on page change! */}
        {/* Changed prop from exitBefore to mode */}
        <AnimatePresence mode='wait'>
          {/* Changed Switch to Routes */}

          <Routes key={location.pathname} location={location} >
            {/* Changed component to element */}

            <Route path="/" element={<Main />} />

            <Route path="/about" element={<AboutPage />} />

            <Route path="/education" element={<EducationPage />} />

            <Route path="/project" element={<ProjectPage />} />

            <Route path="/skills" element={<MySkillsPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Below is to catch all the other routes and send the user to main component,
you can add custom 404 component or message instead of Main component*/}
            <Route path="*" element={<Main />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;

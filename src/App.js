import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Box, useColorModeValue } from '@chakra-ui/react';

import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  const dotsBg = useColorModeValue(
    'radial-gradient(circle,rgb(229, 231, 233) 2px, transparent 2px)', 
    'radial-gradient(circle,rgba(45, 55, 72, 0.88) 2px, transparent 2px)'   
  );
  const dotsBgSize = '34px 34px';
  

  return (
    
      <BrowserRouter>
        <ScrollToTop />
        
        <Box
          backgroundImage={dotsBg}
          backgroundSize={dotsBgSize}
          backgroundRepeat="repeat"
          backgroundAttachment="fixed"
          minH="100vh" 
        >
          
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <AboutMe/>
                <Projects />
                <Skills />
                <Contact />
              </>
            } />

            <Route path="/projects/:projectId" element={<ProjectDetail />} />
          </Routes>
          <Footer />
        </Box> 
      </BrowserRouter>
  );
}

export default App;
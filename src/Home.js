import React from 'react';
import { Box } from '@chakra-ui/react';
import NavBar from './layout/Navbar';
import Hero from './layout/Hero';
import Journey from './layout/Journey';
import Contact from './layout/Contact';
import Skills from './layout/Skill';

const Home = () => {
  return (
    <Box bg="#fbf9f4" minH="100vh" fontFamily="'Plus Jakarta Sans', sans-serif">
      <NavBar />
      <Hero />
      <Skills/>
      <Journey />
      <Contact />
    </Box>
  );
};

export default Home;

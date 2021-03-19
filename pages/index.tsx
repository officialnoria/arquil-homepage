import React from 'react';
import Head from 'next/head';
import Navbar from '../Containers/Navbar';
import Header from '../Containers/Header';
import { Box } from '@chakra-ui/react';
import Transformation from '../Containers/Transformation';
import Services from '../Containers/Services';
import Cards from '../Containers/Cards';
import Methodology from '../Containers/Methodology';
import Courses from '../Containers/Courses';
import FreeVideos from '../Containers/FreeVideos';
import Clients from '../Containers/Clients';
import About from '../Containers/About';
import Footer from '../Containers/Footer';

const Home = () => (
  <Box position="relative">
    <Navbar />
    <Header />
    <Transformation />
    <Services />
    <Cards />
    <Methodology />
    <Courses />
    <FreeVideos />
    <Clients />
    <About />
    <Footer />
  </Box>
);

export default Home;

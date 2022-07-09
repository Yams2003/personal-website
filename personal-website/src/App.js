import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FavoriteAnime from './components/FavoriteAnime';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import AnimeDetail from './components/AnimeDetail';
import PageWrapper from './components/PageWrapper';

import './App.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Home */}
        <Route
          path="/"
          element={
            <PageWrapper>
              <Hero />
              <About />
              <FavoriteAnime />
              <Projects />
            </PageWrapper>
          }
        />

        {/* Anime Details */}
        <Route
          path="/anime/:id"
          element={
            <PageWrapper>
              <AnimeDetail />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

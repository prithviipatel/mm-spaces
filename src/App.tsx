import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesComponent from './components/ServicesComponent';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import MouseFollower from './components/MouseFollower';
import './index.css';

function App() {
  return (
    <div className="min-h-screen">
      <MouseFollower />
      <Header />
      <Hero />
      <ServicesComponent />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;

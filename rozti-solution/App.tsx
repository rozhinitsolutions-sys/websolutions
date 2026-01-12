import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ProjectInquiry from './components/ProjectInquiry';

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-blue-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <SocialProof />
        <ProjectInquiry />
        <CTA />
      </main>
      <Footer />
      <elevenlabs-convai agent-id="agent_8201ket2wjqefp5treyb6gpn8c0c" />
    </div>
  );
};

export default App;
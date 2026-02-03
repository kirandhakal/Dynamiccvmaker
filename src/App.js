import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage, EditorPage } from './components/landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/editor/:professionId" element={<EditorPage />} />
        <Route path="/templates" element={<LandingPage />} />
        <Route path="/features" element={<LandingPage />} />
        <Route path="/how-it-works" element={<LandingPage />} />
        <Route path="/pricing" element={<LandingPage />} />
        <Route path="/contact" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;

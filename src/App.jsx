import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import PolicyPage from './PolicyPage';
import { privacyContent, termsContent, refundContent } from './policies';

function App() {
  // Get the base URL from Vite's env
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <Router basename={baseUrl}> {/* Add basename here */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PolicyPage title="Privacy Policy" content={privacyContent} />} />
        <Route path="/terms" element={<PolicyPage title="Terms of Service" content={termsContent} />} />
        <Route path="/refund" element={<PolicyPage title="Refund Policy" content={refundContent} />} />
      </Routes>
    </Router>
  );
}

export default App;
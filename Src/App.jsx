
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Navigation from '@/components/Navigation';
import HomePage from '@/pages/HomePage';
import PlacesPage from '@/pages/PlacesPage';
import BookingPage from '@/pages/BookingPage';
import HelplinePage from '@/pages/HelplinePage';
import AboutPage from '@/pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Helmet>
          <title>TourDoxa - Explore Trichy Like Never Before</title>
          <meta name="description" content="Discover the best places, book accommodations, and explore Trichy with real-time GPS navigation and weather updates." />
        </Helmet>
        
        <Navigation />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/places" element={<PlacesPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/helpline" element={<HelplinePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        
        <Toaster />
      </div>
    </Router>
  );
}

export default App;

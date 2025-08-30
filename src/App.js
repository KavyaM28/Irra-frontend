import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import useScriptBehavior from './hooks/useScriptBehavior';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Process from './pages/Process';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useScriptBehavior();

  // Function to send message to backend
  const sendMessage = async (message) => {
    const API_URL = process.env.REACT_APP_API_URL;

    if (!API_URL) {
      console.error("API URL is not defined. Check your .env or .env.production file.");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/send-message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
      });
      const data = await res.json();
      console.log("Message sent:", data);
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/process" element={<Process />} />
        {/* Pass sendMessage function to Contact page */}
        <Route path="/contact" element={<Contact sendMessage={sendMessage} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

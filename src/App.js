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

  // ✅ Function to send contact form to backend
  const sendMessage = async (formData) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      return data; // { success: true, message: "..."} or { success: false, error: "..." }
    } catch (err) {
      console.error("❌ Error sending message:", err);
      return { success: false, error: "Could not connect to server" };
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
        <Route path="/contact" element={<Contact sendMessage={sendMessage} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

// src/hooks/useScriptBehavior.js
import { useEffect } from 'react';

export default function useScriptBehavior() {
  useEffect(() => {
    let navLinkHandlers = [];

    // --- Navbar toggle ---
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (toggle && navLinks) {
      const handleToggleClick = () => {
        toggle.classList.toggle('active');
        navLinks.classList.toggle('show');
      };

      toggle.addEventListener('click', handleToggleClick);

      const links = navLinks.querySelectorAll('a');
      links.forEach((link) => {
        const linkHandler = () => {
          if (window.innerWidth <= 768) {
            toggle.classList.remove('active');
            navLinks.classList.remove('show');
          }
        };
        link.addEventListener('click', linkHandler);
        navLinkHandlers.push({ link, linkHandler });
      });

      // Cleanup for navbar
      const cleanupNavbar = () => {
        toggle.removeEventListener('click', handleToggleClick);
        navLinkHandlers.forEach(({ link, linkHandler }) =>
          link.removeEventListener('click', linkHandler)
        );
      };

      window.addEventListener('beforeunload', cleanupNavbar);
    }

    // --- Form validation + submit ---
    const form = document.querySelector('form');

    const handleFormSubmit = (e) => {
      e.preventDefault(); // stop page reload

      const nameInput = form.querySelector("input[name='name']");
      const emailInput = form.querySelector("input[name='email']");
      const messageInput = form.querySelector("textarea[name='message']");

      const name = nameInput?.value.trim();
      const email = emailInput?.value.trim();
      const message = messageInput?.value.trim();

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      // Send to backend
      fetch("https://irraspaces-backend.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }), // lowercase keys
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.message);
          alert("Message sent successfully!");
          form.reset();
        })
        .catch((err) => {
          console.error("Error:", err);
          alert("Something went wrong. Please try again.");
        });
    };

    if (form) {
      form.addEventListener('submit', handleFormSubmit);
    }

    // --- Scroll reveal ---
    const revealOnScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
        }
      });
    };

    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);

    // --- Cleanup ---
    return () => {
      window.removeEventListener('scroll', revealOnScroll);
      if (form) {
        form.removeEventListener('submit', handleFormSubmit);
      }
      navLinkHandlers.forEach(({ link, linkHandler }) =>
        link.removeEventListener('click', linkHandler)
      );
    };
  }, []);
}

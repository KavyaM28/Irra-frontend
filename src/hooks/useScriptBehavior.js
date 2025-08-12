// src/hooks/useScriptBehavior.js
import { useEffect } from 'react';

export default function useScriptBehavior() {
  useEffect(() => {
    // --- Navbar toggle ---
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    let navLinkHandlers = [];

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

      // Cleanup toggle + link click
      return () => {
        toggle.removeEventListener('click', handleToggleClick);
        navLinkHandlers.forEach(({ link, linkHandler }) =>
          link.removeEventListener('click', linkHandler)
        );
      };
    }

    // --- Form validation ---
    const form = document.querySelector('form');
    const handleFormSubmit = (e) => {
      const name = form.querySelector("input[name='Name']");
      const email = form.querySelector("input[name='Email']");
      const message = form.querySelector('textarea');

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        alert('Please fill in all fields.');
        e.preventDefault();
      } else if (!emailPattern.test(email.value.trim())) {
        alert('Please enter a valid email address.');
        e.preventDefault();
      }
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
    };
  }, []);
}

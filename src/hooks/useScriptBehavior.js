import { useEffect } from "react";

export default function useScriptBehavior() {
  useEffect(() => {
    // --- Scroll reveal ---
    const revealOnScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
          el.classList.add("visible");
        } else {
          el.classList.remove("visible");
        }
      });
    };

    // Run on load + on scroll
    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);

    // --- Cleanup ---
    return () => {
      window.removeEventListener("scroll", revealOnScroll);
    };
  }, []);
}

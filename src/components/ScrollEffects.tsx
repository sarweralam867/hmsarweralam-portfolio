"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section:not(.hero)"));

    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return;
    }

    sections.forEach((section) => {
      section.classList.remove("is-visible");
      section.classList.add("reveal-section");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );

    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        sections.forEach((section) => observer.observe(section));
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      observer.disconnect();
    };
  }, []);

  return null;
}

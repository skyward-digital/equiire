'use client';
import { useState, useEffect, useCallback } from 'react';

export const useCurrentSection = (nav: string[]) => {
  const [currentSection, setCurrentSection] = useState(nav[0]);

  const getHeadings = useCallback((nav: string[]) => {
    return nav.map((id: string) => {
      const el = document.getElementById(id);
      if (!el) return;

      const top = window.scrollY + el.getBoundingClientRect().top - 60;
      return { id, top };
    });
  }, []);

  useEffect(() => {
    if (nav.length === 0) return;
    const headings = getHeadings(nav);

    function onScroll() {
      if (!headings.filter(Boolean).length) return;
      if (!headings[0]) return;

      const main = document.querySelector('main'); // main scrolls, not window
      if (!main) return;

      let top = main.scrollTop;
      let current = headings[0].id;
      for (const heading of headings) {
        if (!heading) return;
        if (top >= heading.top) {
          current = heading.id;
        } else {
          break;
        }
      }

      setCurrentSection(current);
    }

    window.addEventListener('scroll', onScroll, true);

    onScroll();

    return window.removeEventListener('scroll', onScroll);
  }, []);

  return currentSection;
};

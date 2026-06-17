"use client";

import { animate } from "framer-motion";
import { useEffect } from "react";

function getTargetTop(target: HTMLElement) {
  const scrollMarginTop = Number.parseFloat(
    window.getComputedStyle(target).scrollMarginTop || "0"
  );

  return Math.max(
    0,
    target.getBoundingClientRect().top + window.scrollY - scrollMarginTop
  );
}

function FramerSmoothScroll() {
  useEffect(() => {
    let controls: ReturnType<typeof animate> | null = null;

    function scrollToHash(hash: string, replace = false) {
      const id = decodeURIComponent(hash.replace("#", ""));
      const target = document.getElementById(id);

      if (!target) return false;

      controls?.stop();
      controls = animate(window.scrollY, getTargetTop(target), {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (latest) => window.scrollTo(0, latest),
      });

      if (replace) {
        window.history.replaceState(null, "", hash);
      } else {
        window.history.pushState(null, "", hash);
      }

      return true;
    }

    function handleClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest("a[href]");

      if (!(link instanceof HTMLAnchorElement)) return;
      if (!link.hash || link.origin !== window.location.origin) return;
      if (link.pathname !== window.location.pathname) return;

      event.preventDefault();
      scrollToHash(link.hash);
    }

    document.addEventListener("click", handleClick);

    if (window.location.hash) {
      window.requestAnimationFrame(() => {
        scrollToHash(window.location.hash, true);
      });
    }

    return () => {
      controls?.stop();
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}

export default FramerSmoothScroll;

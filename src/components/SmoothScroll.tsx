"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };

    const refresh = () => {
      lenis.resize();
      ScrollTrigger.refresh();
    };

    const settleRefresh = () => {
      requestAnimationFrame(refresh);
      window.setTimeout(refresh, 250);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    window.addEventListener("load", settleRefresh);
    window.addEventListener("resize", refresh);
    settleRefresh();

    return () => {
      window.removeEventListener("load", settleRefresh);
      window.removeEventListener("resize", refresh);
      gsap.ticker.remove(tick);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
    };
  }, []);

  return null;
}

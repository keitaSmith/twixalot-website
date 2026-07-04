"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 767px)");
    let cleanup: (() => void) | undefined;

    const disableSmoothScroll = () => {
      cleanup?.();
      cleanup = undefined;
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger instanceof HTMLElement && trigger.trigger.closest("[data-mobile-disable-scrolltrigger]")) {
          trigger.kill();
        }
      });
    };

    const enableSmoothScroll = () => {
      if (cleanup || reduceMotion.matches || mobile.matches) {
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

      cleanup = () => {
        window.removeEventListener("load", settleRefresh);
        window.removeEventListener("resize", refresh);
        gsap.ticker.remove(tick);
        lenis.off("scroll", ScrollTrigger.update);
        lenis.destroy();
      };
    };

    const syncSmoothScroll = () => {
      if (reduceMotion.matches || mobile.matches) {
        disableSmoothScroll();
        return;
      }

      enableSmoothScroll();
    };

    syncSmoothScroll();
    reduceMotion.addEventListener("change", syncSmoothScroll);
    mobile.addEventListener("change", syncSmoothScroll);

    return () => {
      reduceMotion.removeEventListener("change", syncSmoothScroll);
      mobile.removeEventListener("change", syncSmoothScroll);
      disableSmoothScroll();
    };
  }, []);

  return null;
}

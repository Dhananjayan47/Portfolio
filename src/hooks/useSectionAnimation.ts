import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const getScopedTargets = (
  containerRef: RefObject<HTMLElement | null>,
  selector: string,
): HTMLElement[] => {
  if (!containerRef.current) return [];
  return Array.from(
    containerRef.current.querySelectorAll<HTMLElement>(selector),
  );
};

/**
 * Custom hook to animate text child elements within a section container.
 */
export const useSectionTextAnimation = (
  containerRef: RefObject<HTMLElement | null>,
): void => {
  useGSAP(
    () => {
      const targets = getScopedTargets(containerRef, ".animate-texts");
      if (!targets.length) return;

      const tl = gsap.timeline( {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "center 60%",
          toggleActions: 'play none none reverse', // Dictates playback behavior on entering/leaving
          // markers: true,
        },
       
      });

      tl.from(targets,{
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.2,
        ease: "sine.out",
      })
    },
    { scope: containerRef },
  );
};

/**
 * Custom hook to animate div child elements within a section container.
 */
export const useSectionDivAnimation = (
  containerRef: RefObject<HTMLElement | null>,
): void => {
  useGSAP(
    () => {
      const divTargets = getScopedTargets(containerRef, ".animate-div");
      if (!divTargets.length) return;

      const tl = gsap.timeline( {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "bottom 90%",
          toggleActions: 'play none none reverse', // Dictates playback behavior on entering/leaving
          // markers: true,
        },

        
       
      });

      tl.from(divTargets,{
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.2,
        ease: "sine.out",
      })
    },
    { scope: containerRef },
  );
};

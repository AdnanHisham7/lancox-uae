import { animate, inView, scroll, stagger } from "motion";

/**
 * Universal Framer Motion Scroll & Interaction Engine for LANCOX FZCO
 * Provides smooth, GPU-accelerated scroll-triggered reveals, staggered component
 * entrances, directional glides, numeric milestone counters, and scroll progress tracking.
 */
export function initMotionAnimations(): void {
  // 1. Accessibility Check: prefers-reduced-motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll<HTMLElement>(
      "[data-motion-fade], [data-motion-fade-left], [data-motion-fade-right], [data-motion-stagger], [data-motion-item], .motion-reveal, section, article, .card-hover-interactive"
    ).forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    return;
  }

  // 2. Smooth Scroll Progress Indicator at Top of Viewport
  const progressBar = document.getElementById("motion-scroll-progress");
  if (progressBar) {
    scroll(
      animate(progressBar, { scaleX: [0, 1] }, { ease: "linear" })
    );
  }

  // 3. Parallax Depth on Hero Imagery
  const heroBgElements = document.querySelectorAll<HTMLElement>("[data-motion-parallax]");
  heroBgElements.forEach((el) => {
    scroll(
      animate(el, { y: [0, 50], scale: [1, 1.04] }, { ease: "linear" }),
      { target: el }
    );
  });

  // 4. Above-the-fold Hero Entrance (immediate gentle reveal)
  const heroContent = document.querySelectorAll<HTMLElement>("[data-motion-hero]");
  if (heroContent.length > 0) {
    animate(
      heroContent,
      { opacity: [0, 1], y: [16, 0] },
      {
        duration: 0.8,
        delay: stagger(0.08, { startDelay: 0.1 }),
        easing: [0.16, 1, 0.3, 1],
      }
    );
  }

  // 5. Staggered Container Reveals (Card Grids, Metrics, Lists)
  const staggerContainers = document.querySelectorAll<HTMLElement>("[data-motion-stagger]");
  staggerContainers.forEach((container) => {
    // Find designated items, or fallback to direct child elements/articles
    let items = container.querySelectorAll<HTMLElement>("[data-motion-item]");
    if (items.length === 0) {
      items = container.querySelectorAll<HTMLElement>("article, .card-hover-interactive, > div, > li");
    }

    if (items.length > 0) {
      items.forEach((item) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(22px)";
      });

      inView(
        container,
        () => {
          animate(
            items,
            { opacity: [0, 1], y: [22, 0] },
            {
              duration: 0.7,
              delay: stagger(0.07, { startDelay: 0.04 }),
              easing: [0.16, 1, 0.3, 1],
            }
          );
        },
        { margin: "0px 0px -50px 0px" }
      );
    }
  });

  // 6. Universal Fade & Rise Reveal ([data-motion-fade] or .reveal-on-scroll)
  const fadeElements = document.querySelectorAll<HTMLElement>(
    "[data-motion-fade], .reveal-on-scroll, [data-motion-section]"
  );
  fadeElements.forEach((el) => {
    if (el.closest("[data-motion-stagger]")) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";

    inView(
      el,
      () => {
        animate(
          el,
          { opacity: [0, 1], y: [24, 0] },
          {
            duration: 0.8,
            easing: [0.16, 1, 0.3, 1],
          }
        );
      },
      { margin: "0px 0px -60px 0px" }
    );
  });

  // 7. Directional Glide Reveals (Left & Right for Split Columns)
  const fadeLeftElements = document.querySelectorAll<HTMLElement>("[data-motion-fade-left]");
  fadeLeftElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateX(-24px)";

    inView(
      el,
      () => {
        animate(
          el,
          { opacity: [0, 1], x: [-24, 0] },
          {
            duration: 0.8,
            easing: [0.16, 1, 0.3, 1],
          }
        );
      },
      { margin: "0px 0px -50px 0px" }
    );
  });

  const fadeRightElements = document.querySelectorAll<HTMLElement>("[data-motion-fade-right]");
  fadeRightElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateX(24px)";

    inView(
      el,
      () => {
        animate(
          el,
          { opacity: [0, 1], x: [24, 0] },
          {
            duration: 0.8,
            easing: [0.16, 1, 0.3, 1],
          }
        );
      },
      { margin: "0px 0px -50px 0px" }
    );
  });

  // 8. Animated Milestone Metric Counters
  const counterElements = document.querySelectorAll<HTMLElement>("[data-counter-target]");
  counterElements.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-counter-target") || "0", 10);
    const prefix = counter.getAttribute("data-counter-prefix") || "";
    const suffix = counter.getAttribute("data-counter-suffix") || "";

    if (isNaN(target)) return;

    inView(
      counter,
      () => {
        animate(0, target, {
          duration: 1.4,
          easing: [0.16, 1, 0.3, 1],
          onUpdate: (latest) => {
            counter.textContent = `${prefix}${Math.floor(latest)}${suffix}`;
          },
        });
      },
      { margin: "0px 0px -40px 0px" }
    );
  });
}

// Automatically bind on DOM ready
if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMotionAnimations);
  } else {
    initMotionAnimations();
  }
}

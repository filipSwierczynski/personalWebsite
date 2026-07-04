// ============================================================
// Site interactions: scroll-reveal, background particles,
// custom cursor. All injected from here — no markup needed.
// ============================================================

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ------------------------------------------------------------
// Scroll-reveal: any element with class "reveal" fades in when
// it enters the viewport. Add/remove the class in HTML freely.
// ------------------------------------------------------------
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ------------------------------------------------------------
// Background particles — faint dust drifting up and to the
// right, with a slow sine wobble. Tune the constants below.
// ------------------------------------------------------------
if (!reduceMotion) {
  const COUNT = 90;          // number of particles
  const DRIFT_X = 0.25;      // horizontal speed (px/frame, + = right)
  const DRIFT_Y = -0.12;     // vertical speed (px/frame, - = up)
  const MAX_OPACITY = 0.35;  // brightest a particle gets

  const canvas = document.createElement("canvas");
  canvas.id = "particle-canvas";
  canvas.setAttribute("aria-hidden", "true");
  document.body.prepend(canvas);
  const ctx = canvas.getContext("2d");

  let w, h;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener("resize", resize);

  const particles = Array.from({ length: COUNT }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: 0.5 + Math.random() * 1.5,                 // radius
    o: 0.08 + Math.random() * MAX_OPACITY,        // opacity
    v: 0.4 + Math.random() * 0.9,                 // speed multiplier
    phase: Math.random() * Math.PI * 2,           // wobble offset
    wobble: 0.15 + Math.random() * 0.35,          // wobble strength
  }));

  let t = 0;
  function tick() {
    t += 0.008;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#f2f2f0";

    for (const p of particles) {
      p.x += DRIFT_X * p.v + Math.sin(t + p.phase) * p.wobble * 0.3;
      p.y += DRIFT_Y * p.v + Math.cos(t * 0.7 + p.phase) * p.wobble * 0.15;

      // wrap around the edges with a small margin
      if (p.x > w + 10) p.x = -10;
      if (p.x < -10) p.x = w + 10;
      if (p.y > h + 10) p.y = -10;
      if (p.y < -10) p.y = h + 10;

      ctx.globalAlpha = p.o * (0.75 + 0.25 * Math.sin(t * 2 + p.phase));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(tick);
  }
  tick();
}

// ------------------------------------------------------------
// Custom cursor — small dot that tracks instantly plus a ring
// that eases behind it. Inverts what's underneath (blend mode)
// and expands over links. Mouse-only; touch devices keep the
// native behavior.
// ------------------------------------------------------------
if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
  document.body.classList.add("custom-cursor");

  const dot = document.createElement("div");
  dot.className = "cursor-dot";
  const ring = document.createElement("div");
  ring.className = "cursor-ring";
  document.body.append(dot, ring);

  let mx = -100, my = -100;   // mouse position
  let rx = -100, ry = -100;   // ring position (eased)

  window.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    dot.style.opacity = ring.style.opacity = "1";
  });

  document.addEventListener("mouseleave", () => {
    dot.style.opacity = ring.style.opacity = "0";
  });

  function follow() {
    rx += (mx - rx) * 0.16;
    ry += (my - ry) * 0.16;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(follow);
  }
  follow();

  // expand the ring over anything clickable
  const HOVER_TARGETS = "a, button, [role='button']";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(HOVER_TARGETS)) document.body.classList.add("cursor-hover");
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(HOVER_TARGETS)) document.body.classList.remove("cursor-hover");
  });

  // small press feedback
  window.addEventListener("mousedown", () => document.body.classList.add("cursor-down"));
  window.addEventListener("mouseup", () => document.body.classList.remove("cursor-down"));
}

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Server, Layers, Monitor, Code2, Sparkles, ExternalLink, ChevronDown } from "lucide-react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  :root {
    --navy:        #020b18;
    --navy-2:      #061525;
    --navy-3:      #0a1f35;
    --blue-mid:    #0d3b6e;
    --blue-vivid:  #1565c0;
    --blue-sky:    #2196f3;
    --blue-glow:   #42a5f5;
    --blue-bright: #4fc3f7;
    --cyan:        #00e5ff;
    --cyan-soft:   #80deea;
    --white:       #f0f6ff;
    --muted:       #7fa8cc;
    --card-bg:     rgba(6,21,37,0.7);
    --border:      rgba(33,150,243,0.18);
    --border-h:    rgba(0,229,255,0.45);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: var(--navy);
    color: var(--white);
    font-family: 'DM Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  /* ═══════════════════════════════
     BACKGROUND SYSTEM
  ═══════════════════════════════ */
  .bg-mesh {
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 55% 45% at 15% 25%, rgba(21,101,192,0.2) 0%, transparent 55%),
      radial-gradient(ellipse 45% 55% at 85% 75%, rgba(0,180,255,0.08) 0%, transparent 55%),
      radial-gradient(ellipse 65% 35% at 50% 95%, rgba(57,73,171,0.15) 0%, transparent 55%),
      #020b18;
  }
  .orb { position: fixed; border-radius: 50%; filter: blur(100px); pointer-events: none; z-index: 0; }
  .orb-1 { width: 750px; height: 750px; background: radial-gradient(circle, rgba(21,101,192,0.28) 0%, transparent 65%); top: -280px; left: -220px; animation: orbFloat1 24s ease-in-out infinite alternate; }
  .orb-2 { width: 520px; height: 520px; background: radial-gradient(circle, rgba(0,229,255,0.09) 0%, transparent 65%); bottom: -180px; right: -130px; animation: orbFloat2 30s ease-in-out infinite alternate; }
  .orb-3 { width: 380px; height: 380px; background: radial-gradient(circle, rgba(57,73,171,0.18) 0%, transparent 65%); top: 45%; left: 58%; animation: orbFloat3 20s ease-in-out infinite alternate; }
  @keyframes orbFloat1 { 0% { transform: translate(0,0) scale(1); } 40% { transform: translate(55px,-35px) scale(1.1); } 100% { transform: translate(-25px,65px) scale(0.94); } }
  @keyframes orbFloat2 { 0% { transform: translate(0,0) scale(1); } 60% { transform: translate(-45px,-55px) scale(1.13); } 100% { transform: translate(28px,38px) scale(0.91); } }
  @keyframes orbFloat3 { 0% { transform: translate(0,0); } 100% { transform: translate(-38px,-28px) scale(1.07); } }

  .dot-grid { position: fixed; inset: 0; z-index: 0; pointer-events: none; background-image: radial-gradient(rgba(33,150,243,0.055) 1px, transparent 1px); background-size: 36px 36px; }

  .bubbles-wrap { position: fixed; inset: 0; z-index: 0; pointer-events: none; overflow: hidden; }
  .bubble { position: absolute; bottom: -120px; border-radius: 50%; opacity: 0; animation: bubbleRise linear infinite; }
  .bubble.v1 { background: radial-gradient(circle at 35% 35%, rgba(79,195,247,0.55), rgba(21,101,192,0.15)); border: 1px solid rgba(79,195,247,0.35); }
  .bubble.v2 { background: radial-gradient(circle at 35% 35%, rgba(0,229,255,0.4), rgba(0,150,200,0.1)); border: 1px solid rgba(0,229,255,0.28); }
  .bubble.v3 { background: radial-gradient(circle at 35% 35%, rgba(33,150,243,0.35), rgba(13,59,110,0.1)); border: 1px solid rgba(33,150,243,0.3); }
  .bubble.v4 { background: radial-gradient(circle at 35% 35%, rgba(100,181,246,0.3), rgba(21,101,192,0.08)); border: 1px solid rgba(100,181,246,0.22); }
  @keyframes bubbleRise {
    0%   { transform: translateY(0) translateX(0) scale(0.6); opacity: 0; }
    8%   { opacity: 1; }
    85%  { opacity: 0.55; }
    100% { transform: translateY(-105vh) translateX(var(--drift)) scale(1); opacity: 0; }
  }

  /* ═══ PAGE WRAP ═══ */
  .page { position: relative; z-index: 1; }
  .container { max-width: 1440px; margin: 0 auto; padding: 0 48px; }

  /* ═══════════════════════════════
     HERO
  ═══════════════════════════════ */
  .hero {
    min-height: 100vh;
    display: flex; align-items: center; justify-content: center;
    padding: 120px 24px 80px; text-align: center; position: relative;
  }
  .hero__inner { max-width: 1440px; width: 100%; padding: 0 48px; }

  .badge {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 7px 20px;
    background: rgba(21,101,192,0.15); border: 1px solid rgba(33,150,243,0.35);
    border-radius: 100px; font-size: 13px; letter-spacing: 0.05em; color: var(--cyan-soft);
    margin-bottom: 36px; backdrop-filter: blur(12px);
  }
  .badge-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--cyan); box-shadow: 0 0 10px var(--cyan); animation: pulse 2s infinite; }
  @keyframes pulse { 0%,100% { opacity:1; box-shadow: 0 0 10px var(--cyan); } 50% { opacity:0.4; box-shadow: 0 0 4px var(--cyan); } }

  /* ── Hero title — fully responsive ── */
  .hero__title {
    font-family: 'Syne', sans-serif;
    /* scales smoothly from 2.2rem on tiny phones up to 3.8rem on desktop */
    font-size: clamp(2.2rem, 5.5vw, 3.8rem);
    line-height: 1.18; letter-spacing: -0.01em;
    margin-bottom: 32px;
    width: 100%;
    text-shadow: 0 0 80px rgba(33,150,243,0.12);
  }
  .hero__title .line-1 {
    display: block; font-weight: 400; font-style: normal;
    letter-spacing: 0.12em; text-transform: uppercase;
    /* scales relative to parent font-size */
    font-size: clamp(0.75rem, 1.8vw, 1em);
    color: var(--cyan-soft); margin-bottom: 10px;
  }
  .hero__title .line-2 {
    display: block; font-weight: 800; letter-spacing: -0.03em;
    background: linear-gradient(110deg, #4fc3f7 0%, #1976d2 30%, #00e5ff 65%, #81d4fa 100%);
    background-size: 220% auto;
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    animation: shimmerText 4.5s linear infinite;
    /* biggest line — uses the parent clamp directly */
    font-size: 1em; line-height: 1.1;
    word-break: break-word;
  }
  .hero__title .line-3 {
    display: block; font-weight: 300;
    color: rgba(240,246,255,0.7);
    letter-spacing: 0.08em; text-transform: uppercase;
    font-size: clamp(0.7rem, 1.6vw, 0.9em);
    margin-top: 12px;
  }
  @keyframes shimmerText { 0% { background-position: 0% center; } 100% { background-position: 220% center; } }

  .hero__subtitle {
    font-size: clamp(0.9rem, 1.8vw, 1.12rem);
    font-weight: 300; color: var(--muted);
    line-height: 1.85; max-width: 900px; margin: 0 auto 48px;
  }
  .hl-blue { color: var(--blue-bright); font-weight: 500; }
  .hl-cyan  { color: var(--cyan); font-weight: 500; }

  .hero__btns { display: flex; flex-wrap: wrap; gap: 16px; justify-content: center; }

  /* ══ Buttons ══ */
  .btn-primary {
    display: inline-flex; align-items: center; gap: 9px; padding: 14px 34px;
    background: linear-gradient(130deg, #0d47a1 0%, #1976d2 45%, #039be5 80%, #29b6f6 100%);
    border-radius: 10px; font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 15px;
    color: #fff; text-decoration: none;
    box-shadow: 0 4px 20px rgba(13,71,161,0.55), 0 1px 0 rgba(255,255,255,0.1) inset, 0 0 0 1px rgba(41,182,246,0.2);
    transition: transform 0.22s, box-shadow 0.22s; position: relative; overflow: hidden;
  }
  .btn-primary::before { content: ''; position: absolute; top: 0; left: -100%; width: 60%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent); transition: left 0.45s ease; }
  .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 10px 36px rgba(3,155,229,0.6), 0 0 0 1px rgba(41,182,246,0.4), inset 0 1px 0 rgba(255,255,255,0.12); }
  .btn-primary:hover::before { left: 150%; }

  .btn-ghost {
    display: inline-flex; align-items: center; gap: 9px; padding: 14px 34px;
    background: rgba(2,11,24,0.35); border: 1px solid rgba(41,182,246,0.38); border-radius: 10px;
    font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 15px;
    color: #81d4fa; text-decoration: none; backdrop-filter: blur(12px);
    transition: background 0.25s, border-color 0.25s, color 0.25s, transform 0.22s, box-shadow 0.25s;
  }
  .btn-ghost:hover { background: rgba(3,155,229,0.12); border-color: rgba(0,229,255,0.6); color: var(--cyan); transform: translateY(-3px); box-shadow: 0 0 20px rgba(0,229,255,0.12); }

  /* Scroll hint */
  .scroll-hint { position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 6px; color: var(--muted); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; animation: bounceDown 2.4s ease-in-out infinite; }
  @keyframes bounceDown { 0%,100% { transform: translateX(-50%) translateY(0); } 55% { transform: translateX(-50%) translateY(9px); } }

  /* Divider */
  .section-divider { width: 100%; height: 1px; background: linear-gradient(90deg, transparent, rgba(33,150,243,0.3), rgba(0,229,255,0.5), rgba(33,150,243,0.3), transparent); }

  /* ═══ SECTIONS ═══ */
  .section { padding: 100px 0; }
  .section__header { text-align: center; max-width: 680px; margin: 0 auto 72px; }
  .section__eyebrow { display: inline-block; font-size: 11px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: var(--cyan); margin-bottom: 14px; }
  .section__title { font-family: 'Syne', sans-serif; font-size: clamp(1.7rem, 3.5vw, 2.8rem); font-weight: 700; line-height: 1.2; letter-spacing: -0.02em; color: var(--white); margin-bottom: 16px; }
  .section__title .accent { background: linear-gradient(135deg, var(--blue-sky), var(--cyan)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .section__desc { color: var(--muted); font-size: 1rem; line-height: 1.75; font-weight: 300; }
  .section__cta { margin-top: 56px; text-align: center; }

  /* ═══ SKILL CARDS ═══ */
  .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; }
  .skill-card { background: var(--card-bg); border: 1px solid var(--border); border-radius: 18px; padding: 32px 28px; backdrop-filter: blur(16px); transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s; position: relative; overflow: hidden; }
  .skill-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, var(--blue-sky), var(--cyan), transparent); opacity: 0; transition: opacity 0.3s; }
  .skill-card:hover { transform: translateY(-6px); border-color: var(--border-h); box-shadow: 0 20px 48px rgba(0,229,255,0.08); }
  .skill-card:hover::before { opacity: 1; }
  .skill-card__icon { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
  .icon-blue { background: rgba(21,101,192,0.25); color: var(--blue-sky); }
  .icon-cyan  { background: rgba(0,229,255,0.1);  color: var(--cyan); }
  .skill-card h3 { font-family: 'Syne', sans-serif; font-size: 1.05rem; font-weight: 700; margin-bottom: 12px; color: var(--white); }
  .skill-card p  { color: var(--muted); font-size: 0.88rem; line-height: 1.65; margin-bottom: 20px; font-weight: 300; }
  .pills { display: flex; flex-wrap: wrap; gap: 8px; }
  .pill { padding: 4px 12px; background: rgba(33,150,243,0.1); border: 1px solid rgba(33,150,243,0.22); border-radius: 100px; font-size: 11.5px; color: var(--cyan-soft); font-weight: 500; letter-spacing: 0.02em; }

  .link-arrow { display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(135deg, var(--blue-sky), var(--cyan)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-weight: 600; font-size: 0.95rem; text-decoration: none; transition: gap 0.2s; }
  .link-arrow:hover { gap: 13px; }
  .link-arrow svg { color: var(--cyan); flex-shrink: 0; }

  /* ═══ PROJECT CARDS ═══ */
  .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 28px; }
  .project-card { background: var(--card-bg); border: 1px solid var(--border); border-radius: 20px; overflow: hidden; backdrop-filter: blur(16px); transition: transform 0.35s, border-color 0.35s, box-shadow 0.35s; }
  .project-card:hover { transform: translateY(-8px); border-color: rgba(0,229,255,0.4); box-shadow: 0 24px 56px rgba(0,229,255,0.07); }
  .project-card__img { width: 100%; aspect-ratio: 16/9; overflow: hidden; background: var(--navy-3); position: relative; }
  .project-card__img::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to bottom, transparent 55%, var(--navy-2) 100%); }
  .project-card__img img { width: 100%; height: 100%; object-fit: contain; transition: transform 0.45s ease; }
  .project-card:hover .project-card__img img { transform: scale(1.04); }
  .project-card__body { padding: 24px; }
  .project-card__tag { font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--cyan); margin-bottom: 10px; display: block; }
  .project-card h3 { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 700; color: var(--white); margin-bottom: 12px; line-height: 1.4; transition: color 0.2s; }
  .project-card:hover h3 { color: var(--blue-glow); }
  .project-card p { color: var(--muted); font-size: 0.87rem; line-height: 1.7; margin-bottom: 20px; font-weight: 300; }
  .project-link { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; color: var(--cyan); text-decoration: none; border: 1px solid rgba(0,229,255,0.25); padding: 6px 14px; border-radius: 8px; transition: background 0.2s, border-color 0.2s; }
  .project-link:hover { background: rgba(0,229,255,0.08); border-color: rgba(0,229,255,0.5); }

  /* ═══ CTA ═══ */
  .cta-section { padding: 100px 24px; text-align: center; position: relative; }
  .cta-section::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(21,101,192,0.18) 0%, transparent 70%); pointer-events: none; }
  .cta-card { max-width: 700px; margin: 0 auto; background: rgba(6,21,37,0.8); border: 1px solid rgba(33,150,243,0.25); border-radius: 24px; padding: 64px 48px; backdrop-filter: blur(20px); box-shadow: 0 0 80px rgba(21,101,192,0.15), inset 0 1px 0 rgba(255,255,255,0.05); position: relative; z-index: 1; }
  .cta-card h2 { font-family: 'Syne', sans-serif; font-size: clamp(1.5rem, 3.5vw, 2.4rem); font-weight: 800; line-height: 1.2; letter-spacing: -0.02em; color: var(--white); margin-bottom: 16px; }
  .cta-card p { color: var(--muted); font-size: 1rem; margin-bottom: 36px; line-height: 1.7; font-weight: 300; }

  /* ═══ SCROLL REVEAL ═══ */
  .fade-up { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
  .fade-up.visible { opacity: 1; transform: translateY(0); }
  .stagger-1 { transition-delay: 0.1s; }
  .stagger-2 { transition-delay: 0.2s; }
  .stagger-3 { transition-delay: 0.3s; }
  .stagger-4 { transition-delay: 0.4s; }

  /* ═══════════════════════════════
     RESPONSIVE BREAKPOINTS
  ═══════════════════════════════ */

  /* Tablet: 481px – 768px */
  @media (max-width: 768px) {
    .container { padding: 0 24px; }
    .hero__inner { padding: 0 20px; }

    .hero { padding: 100px 16px 80px; }
    .hero__title { font-size: clamp(2rem, 8vw, 3rem); }

    .badge { font-size: 12px; padding: 6px 16px; }

    .hero__subtitle { font-size: 0.95rem; margin-bottom: 36px; }

    .btn-primary, .btn-ghost { padding: 12px 26px; font-size: 14px; }

    .section { padding: 72px 0; }
    .section__header { margin-bottom: 48px; }
    .section__title { font-size: clamp(1.6rem, 5vw, 2.2rem); }

    .skills-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
    .skill-card { padding: 24px 18px; }

    .projects-grid { grid-template-columns: 1fr; }

    .cta-card { padding: 40px 28px; }
    .cta-section { padding: 72px 16px; }
  }

  /* Mobile: up to 480px */
  @media (max-width: 480px) {
    .container { padding: 0 16px; }
    .hero__inner { padding: 0 16px; }

    .hero { padding: 96px 12px 72px; min-height: auto; }

    /* The key fix: shrink the title enough so "Developing Beautiful" fits on one line */
    .hero__title {
      font-size: clamp(1.55rem, 7.5vw, 2.2rem);
      margin-bottom: 24px;
    }
    .hero__title .line-1 { font-size: clamp(0.6rem, 3vw, 0.75rem); margin-bottom: 8px; letter-spacing: 0.1em; }
    .hero__title .line-2 { font-size: 1em; letter-spacing: -0.02em; }
    .hero__title .line-3 { font-size: clamp(0.55rem, 2.8vw, 0.7em); margin-top: 10px; }

    .badge { font-size: 11px; padding: 5px 14px; gap: 6px; margin-bottom: 24px; }
    .badge-dot { width: 6px; height: 6px; }

    .hero__subtitle { font-size: 0.88rem; line-height: 1.75; margin-bottom: 28px; }

    .hero__btns { gap: 12px; }
    .btn-primary, .btn-ghost { padding: 11px 22px; font-size: 13.5px; width: 100%; justify-content: center; }

    .scroll-hint { display: none; }

    .section { padding: 56px 0; }
    .section__header { margin-bottom: 36px; padding: 0 4px; }
    .section__title { font-size: clamp(1.4rem, 6vw, 1.9rem); }
    .section__desc { font-size: 0.9rem; }

    /* Single column on small phones */
    .skills-grid { grid-template-columns: 1fr; gap: 14px; }
    .skill-card { padding: 22px 18px; }
    .skill-card h3 { font-size: 1rem; }
    .skill-card__icon { width: 42px; height: 42px; }

    .projects-grid { grid-template-columns: 1fr; gap: 18px; }
    .project-card__body { padding: 20px 18px; }
    .project-card h3 { font-size: 0.95rem; }

    .cta-card { padding: 36px 20px; border-radius: 18px; }
    .cta-card h2 { font-size: clamp(1.3rem, 5.5vw, 1.8rem); }
    .cta-section { padding: 56px 12px; }
  }

  /* Very small phones: 360px and below */
  @media (max-width: 360px) {
    .hero__title { font-size: clamp(1.35rem, 7vw, 1.9rem); }
    .hero__title .line-1 { letter-spacing: 0.08em; }
    .btn-primary, .btn-ghost { padding: 10px 18px; font-size: 13px; }
  }
`;

/* ─── Bubble config ─── */
const BUBBLE_CONFIG = [
  { size: 8,  left: 5,  dur: 14, delay: 0,   drift: "12px",  v: "v1" },
  { size: 14, left: 12, dur: 18, delay: 2,   drift: "-18px", v: "v2" },
  { size: 6,  left: 20, dur: 12, delay: 4,   drift: "8px",   v: "v3" },
  { size: 20, left: 28, dur: 22, delay: 1,   drift: "-22px", v: "v1" },
  { size: 10, left: 35, dur: 16, delay: 6,   drift: "14px",  v: "v4" },
  { size: 5,  left: 42, dur: 11, delay: 3,   drift: "-10px", v: "v2" },
  { size: 16, left: 50, dur: 20, delay: 8,   drift: "20px",  v: "v3" },
  { size: 9,  left: 58, dur: 15, delay: 0.5, drift: "-14px", v: "v1" },
  { size: 24, left: 65, dur: 25, delay: 5,   drift: "18px",  v: "v4" },
  { size: 7,  left: 72, dur: 13, delay: 2.5, drift: "-8px",  v: "v2" },
  { size: 12, left: 80, dur: 17, delay: 7,   drift: "16px",  v: "v3" },
  { size: 18, left: 88, dur: 21, delay: 1.5, drift: "-20px", v: "v1" },
  { size: 6,  left: 93, dur: 10, delay: 9,   drift: "10px",  v: "v4" },
  { size: 11, left: 96, dur: 19, delay: 3.5, drift: "-12px", v: "v2" },
  { size: 15, left: 8,  dur: 23, delay: 11,  drift: "-16px", v: "v3" },
  { size: 8,  left: 17, dur: 14, delay: 13,  drift: "10px",  v: "v4" },
  { size: 22, left: 32, dur: 26, delay: 10,  drift: "24px",  v: "v1" },
  { size: 6,  left: 47, dur: 12, delay: 14,  drift: "-8px",  v: "v2" },
  { size: 13, left: 63, dur: 18, delay: 12,  drift: "14px",  v: "v3" },
  { size: 19, left: 78, dur: 24, delay: 15,  drift: "-22px", v: "v4" },
];

function Bubbles() {
  return (
    <div className="bubbles-wrap">
      {BUBBLE_CONFIG.map((b, i) => (
        <div key={i} className={`bubble ${b.v}`}
          style={Object.assign({
            width: b.size, height: b.size,
            left: `${b.left}%`,
            animationDuration: `${b.dur}s`,
            animationDelay: `${b.delay}s`,
          }, { "--drift": b.drift })}
        />
      ))}
    </div>
  );
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const Home = () => {
  useReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <style>{styles}</style>

      <div className="bg-mesh" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="dot-grid" />
      <Bubbles />

      <main className="page" style={{ paddingTop: 64 }}>

        {/* ══════════ HERO ══════════ */}
        <section className="hero">
          <div className="hero__inner">

            <div className="badge fade-up visible">
              <span className="badge-dot" />
              Frontend &amp; eCommerce WordPress Developer
            </div>

            <h1 className="hero__title fade-up visible" style={{ transitionDelay: "0.1s" }}>
              <span className="line-1">Designing &amp;</span>
              <span className="line-2">Developing Beautiful</span>
              <span className="line-3">User Interfaces</span>
            </h1>

            <p className="hero__subtitle fade-up visible" style={{ transitionDelay: "0.2s" }}>
              I'm a passionate <span className="hl-blue">Frontend &amp; WordPress Developer</span> specializing in responsive, user-friendly websites and eCommerce platforms. I craft modern interfaces with <span className="hl-cyan">HTML, CSS, JavaScript</span>, and <span className="hl-cyan">React.js</span>, and build scalable WordPress solutions including <span className="hl-blue">WooCommerce</span> stores, custom themes, and performance-optimized experiences. Every pixel is intentional.
            </p>

            <div className="hero__btns fade-up visible" style={{ transitionDelay: "0.3s" }}>
              <Link to="/portfolio" className="btn-primary">
                View My Work <ArrowRight size={17} />
              </Link>
              <Link to="/contact" className="btn-ghost">
                Contact Me
              </Link>
            </div>
          </div>

          <div className="scroll-hint">
            <span>Scroll</span>
            <ChevronDown size={15} />
          </div>
        </section>

        <div className="section-divider" />

        {/* ══════════ SKILLS ══════════ */}
        <section className="section">
          <div className="container">
            <div className="section__header fade-up">
              <span className="section__eyebrow">What I do</span>
              <h2 className="section__title">My <span className="accent">Technical Expertise</span></h2>
              <p className="section__desc">I build high-performance websites and eCommerce platforms, transforming modern UI designs into scalable, responsive digital experiences.</p>
            </div>

            <div className="skills-grid">
              <div className="skill-card fade-up stagger-1">
                <div className="skill-card__icon icon-blue"><Monitor size={22} /></div>
                <h3>Frontend Development</h3>
                <p>Building modern, interactive user interfaces using React.js and scalable frontend architectures.</p>
                <div className="pills">
                  <span className="pill">React.js</span>
                  <span className="pill">JavaScript ES6+</span>
                  <span className="pill">Tailwind CSS</span>
                  <span className="pill">Responsive Design</span>
                </div>
              </div>

              <div className="skill-card fade-up stagger-2">
                <div className="skill-card__icon icon-cyan"><Server size={22} /></div>
                <h3>WordPress Development</h3>
                <p>Developing custom themes, dynamic CMS solutions, and scalable WordPress websites.</p>
                <div className="pills">
                  <span className="pill">Custom Themes</span>
                  <span className="pill">Plugin Customization</span>
                  <span className="pill">ACF</span>
                  <span className="pill">Performance Opt.</span>
                </div>
              </div>

              <div className="skill-card fade-up stagger-3">
                <div className="skill-card__icon icon-blue"><Layers size={22} /></div>
                <h3>WooCommerce Development</h3>
                <p>Creating secure, conversion-focused online stores with seamless checkout experiences.</p>
                <div className="pills">
                  <span className="pill">Store Setup</span>
                  <span className="pill">Payment Integration</span>
                  <span className="pill">Product Optimization</span>
                  <span className="pill">Speed Optimization</span>
                </div>
              </div>

              <div className="skill-card fade-up stagger-4">
                <div className="skill-card__icon icon-cyan"><Code2 size={22} /></div>
                <h3>Figma to Website</h3>
                <p>Converting Figma designs into pixel-perfect, fully responsive websites with clean code.</p>
                <div className="pills">
                  <span className="pill">Pixel Perfect</span>
                  <span className="pill">Cross-Browser</span>
                  <span className="pill">Mobile First</span>
                  <span className="pill">SEO Friendly</span>
                </div>
              </div>
            </div>

            <div className="section__cta fade-up">
              <Link to="/about" className="link-arrow">
                Learn more about my skills <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ══════════ PROJECTS ══════════ */}
        <section className="section">
          <div className="container">
            <div className="section__header fade-up">
              <span className="section__eyebrow">Selected Work</span>
              <h2 className="section__title">Featured <span className="accent">Projects</span></h2>
              <p className="section__desc">A showcase of recent work demonstrating clean UI design and deep technical expertise.</p>
            </div>

            <div className="projects-grid">
              <div className="project-card fade-up stagger-1">
                <div className="project-card__img">
                  <img src="/Home.png" alt="FYP Project Management System" />
                </div>
                <div className="project-card__body">
                  <span className="project-card__tag">React.js · Full-Stack</span>
                  <h3>Project Allocation &amp; Evaluation — NCEAC Rules</h3>
                  <p>A centralized final-year project management system with secure RBAC, automated supervisor allocation, and structured evaluation workflows.</p>
                  <a href="https://fypproject-rho.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={13} /> View Frontend Demo
                  </a>
                </div>
              </div>

              <div className="project-card fade-up stagger-2">
                <div className="project-card__img">
                  <img src="/nature-home.png" alt="Nature True Green Landscaping" />
                </div>
                <div className="project-card__body">
                  <span className="project-card__tag">WordPress · WooCommerce</span>
                  <h3>Nature True Green Landscaping — Website Development</h3>
                  <p>Fully responsive, performance-optimized business website with SEO best practices, structured service architecture, and WhatsApp API integration for lead generation.</p>
                  <a href="https://naturetruegreenlandscaping.com/" target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={13} /> View Live Site
                  </a>
                </div>
              </div>
            </div>

            <div className="section__cta fade-up">
              <Link to="/portfolio" className="btn-primary" style={{ textDecoration: "none" }}>
                View All Projects <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════ CTA ══════════ */}
        <section className="cta-section">
          <div className="cta-card fade-up">
            <Sparkles size={32} style={{ color: "var(--cyan)", margin: "0 auto 20px", display: "block" }} />
            <h2>Ready to Start Your Project?</h2>
            <p>Let's build something modern, fast, and high-performing together.</p>
            <Link to="/contact" className="btn-primary" style={{ textDecoration: "none" }}>
              Get in Touch <ArrowRight size={17} />
            </Link>
          </div>
        </section>

      </main>
    </>
  );
};

export default Home;
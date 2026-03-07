import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Server, Layers, Monitor, Cpu, Globe } from 'lucide-react';

/* ── All styles matching Home page ── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  :root {
    --navy:        #020b18;
    --navy-2:      #061525;
    --navy-3:      #0a1f35;
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

  /* ═══ BACKGROUND ═══ */
  .about-bg-mesh {
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 55% 45% at 15% 25%, rgba(21,101,192,0.2) 0%, transparent 55%),
      radial-gradient(ellipse 45% 55% at 85% 75%, rgba(0,180,255,0.08) 0%, transparent 55%),
      radial-gradient(ellipse 65% 35% at 50% 95%, rgba(57,73,171,0.15) 0%, transparent 55%),
      #020b18;
  }
  .about-orb {
    position: fixed; border-radius: 50%;
    filter: blur(100px); pointer-events: none; z-index: 0;
  }
  .about-orb-1 { width: 700px; height: 700px; background: radial-gradient(circle, rgba(21,101,192,0.26) 0%, transparent 65%); top: -250px; left: -200px; animation: aOrb1 24s ease-in-out infinite alternate; }
  .about-orb-2 { width: 500px; height: 500px; background: radial-gradient(circle, rgba(0,229,255,0.09) 0%, transparent 65%); bottom: -160px; right: -120px; animation: aOrb2 30s ease-in-out infinite alternate; }
  .about-orb-3 { width: 360px; height: 360px; background: radial-gradient(circle, rgba(57,73,171,0.17) 0%, transparent 65%); top: 45%; left: 58%; animation: aOrb3 20s ease-in-out infinite alternate; }
  @keyframes aOrb1 { 0% { transform: translate(0,0) scale(1); } 100% { transform: translate(50px,-35px) scale(1.08); } }
  @keyframes aOrb2 { 0% { transform: translate(0,0) scale(1); } 100% { transform: translate(-40px,45px) scale(0.93); } }
  @keyframes aOrb3 { 0% { transform: translate(0,0); } 100% { transform: translate(-35px,-25px) scale(1.06); } }

  .about-dot-grid {
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background-image: radial-gradient(rgba(33,150,243,0.055) 1px, transparent 1px);
    background-size: 36px 36px;
  }

  /* Bubbles */
  .about-bubbles { position: fixed; inset: 0; z-index: 0; pointer-events: none; overflow: hidden; }
  .about-bubble { position: absolute; bottom: -100px; border-radius: 50%; opacity: 0; animation: aBubbleRise linear infinite; }
  .about-bubble.v1 { background: radial-gradient(circle at 35% 35%, rgba(79,195,247,0.5), rgba(21,101,192,0.12)); border: 1px solid rgba(79,195,247,0.3); }
  .about-bubble.v2 { background: radial-gradient(circle at 35% 35%, rgba(0,229,255,0.35), rgba(0,150,200,0.08)); border: 1px solid rgba(0,229,255,0.24); }
  .about-bubble.v3 { background: radial-gradient(circle at 35% 35%, rgba(33,150,243,0.3), rgba(13,59,110,0.08)); border: 1px solid rgba(33,150,243,0.25); }
  @keyframes aBubbleRise {
    0%   { transform: translateY(0) scale(0.6); opacity: 0; }
    8%   { opacity: 0.9; }
    85%  { opacity: 0.45; }
    100% { transform: translateY(-105vh) scale(1); opacity: 0; }
  }

  /* ═══ PAGE ═══ */
  .about-page { position: relative; z-index: 1; padding-top: 68px; color: var(--white); font-family: 'DM Sans', sans-serif; -webkit-font-smoothing: antialiased; }
  .about-container { max-width: 1440px; margin: 0 auto; padding: 0 48px; }

  /* ═══ SECTION DIVIDER ═══ */
  .about-divider { width: 100%; height: 1px; background: linear-gradient(90deg, transparent, rgba(33,150,243,0.3), rgba(0,229,255,0.5), rgba(33,150,243,0.3), transparent); }

  /* ═══ HERO ═══ */
  .about-hero { min-height: 88vh; display: flex; align-items: center; justify-content: center; padding: 100px 24px 80px; text-align: center; }
  .about-hero__inner { max-width: 1100px; width: 100%; margin: 0 auto; }

  .about-eyebrow {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 7px 20px;
    background: rgba(21,101,192,0.15);
    border: 1px solid rgba(33,150,243,0.35);
    border-radius: 100px;
    font-size: 13px; letter-spacing: 0.05em; color: var(--cyan-soft);
    margin-bottom: 36px; backdrop-filter: blur(12px);
  }
  .about-eyebrow-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--cyan); box-shadow: 0 0 10px var(--cyan); animation: aPulse 2s infinite; }
  @keyframes aPulse { 0%,100% { opacity:1; } 50% { opacity:0.4; } }

  .about-hero__title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(3rem, 7vw, 5.5rem);
    font-weight: 800; line-height: 1.06; letter-spacing: -0.04em;
    margin-bottom: 32px;
  }
  .about-hero__title .solid { color: var(--white); }
  .about-hero__title .grad {
    background: linear-gradient(110deg, #4fc3f7 0%, #1976d2 30%, #00e5ff 65%, #81d4fa 100%);
    background-size: 220% auto;
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    animation: aShimmer 4.5s linear infinite;
  }
  @keyframes aShimmer { 0% { background-position: 0% center; } 100% { background-position: 220% center; } }

  .about-hero__body { max-width: 1100px; margin: 0 auto 16px; }
  .about-hero__body p { color: var(--muted); font-size: clamp(0.95rem, 1.6vw, 1.08rem); line-height: 1.85; font-weight: 300; margin-bottom: 18px; }
  .about-hero__body .hl-blue { color: var(--blue-bright); font-weight: 500; }
  .about-hero__body .hl-cyan { color: var(--cyan); font-weight: 500; }

  .about-hero__btns { display: flex; flex-wrap: wrap; gap: 16px; justify-content: center; margin-top: 40px; }

  /* ═══ BUTTONS (same as Home) ═══ */
  .btn-primary {
    display: inline-flex; align-items: center; gap: 9px; padding: 14px 34px;
    background: linear-gradient(130deg, #0d47a1 0%, #1976d2 45%, #039be5 80%, #29b6f6 100%);
    border-radius: 10px; font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 15px;
    color: #fff; text-decoration: none;
    box-shadow: 0 4px 20px rgba(13,71,161,0.55), 0 0 0 1px rgba(41,182,246,0.2);
    transition: transform 0.22s, box-shadow 0.22s; position: relative; overflow: hidden;
  }
  .btn-primary::before { content: ''; position: absolute; top: 0; left: -100%; width: 60%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent); transition: left 0.45s ease; }
  .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 10px 36px rgba(3,155,229,0.6), 0 0 0 1px rgba(41,182,246,0.4); }
  .btn-primary:hover::before { left: 150%; }

  .btn-ghost {
    display: inline-flex; align-items: center; gap: 9px; padding: 14px 34px;
    background: rgba(2,11,24,0.35); border: 1px solid rgba(41,182,246,0.38); border-radius: 10px;
    font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 15px;
    color: #81d4fa; text-decoration: none; backdrop-filter: blur(12px);
    transition: background 0.25s, border-color 0.25s, color 0.25s, transform 0.22s;
  }
  .btn-ghost:hover { background: rgba(3,155,229,0.12); border-color: rgba(0,229,255,0.6); color: var(--cyan); transform: translateY(-3px); }

  /* ═══ SECTION SHARED ═══ */
  .about-section { padding: 100px 0; }
  .about-section__eyebrow { display: inline-block; font-size: 11px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: var(--cyan); margin-bottom: 14px; }
  .about-section__title { font-family: 'Syne', sans-serif; font-size: clamp(1.8rem, 3vw, 2.5rem); font-weight: 700; line-height: 1.2; letter-spacing: -0.02em; color: var(--white); margin-bottom: 16px; }
  .about-section__title .accent { background: linear-gradient(135deg, var(--blue-sky), var(--cyan)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

  /* ═══ EXPERIENCE / EDUCATION ═══ */
  .exp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; }
  @media (max-width: 900px) { .exp-grid { grid-template-columns: 1fr; gap: 48px; } }

  .timeline { border-left: 1.5px solid rgba(33,150,243,0.3); padding-left: 28px; margin-top: 8px; position: relative; display: flex; flex-direction: column; gap: 40px; }
  .timeline::before { content: ''; position: absolute; top: 0; left: -5px; width: 9px; height: 9px; border-radius: 50%; background: var(--cyan); box-shadow: 0 0 10px var(--cyan); }

  .timeline-item { position: relative; }
  .timeline-item::before { content: ''; position: absolute; top: 6px; left: -34px; width: 7px; height: 7px; border-radius: 50%; background: rgba(33,150,243,0.5); border: 1px solid rgba(0,229,255,0.4); }

  .timeline-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; flex-wrap: wrap; margin-bottom: 6px; }
  .timeline-title { font-family: 'Syne', sans-serif; font-size: 1.05rem; font-weight: 700; color: var(--white); }
  .timeline-badge { font-size: 12px; font-weight: 600; padding: 4px 12px; background: rgba(33,150,243,0.12); border: 1px solid rgba(33,150,243,0.28); border-radius: 100px; color: var(--cyan-soft); white-space: nowrap; }
  .timeline-org { font-size: 0.88rem; color: var(--muted); margin-bottom: 8px; font-weight: 400; }
  .timeline-desc { font-size: 0.88rem; color: var(--muted); line-height: 1.7; font-weight: 300; }
  .timeline-extra { display: flex; gap: 10px; margin-top: 8px; flex-wrap: wrap; }

  /* ═══ SKILLS GRID ═══ */
  .skills-grid-about { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px; }

  .skill-card-about {
    background: var(--card-bg); border: 1px solid var(--border); border-radius: 16px;
    padding: 24px 22px; backdrop-filter: blur(16px);
    transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
    position: relative; overflow: hidden;
  }
  .skill-card-about::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, var(--blue-sky), var(--cyan), transparent); opacity: 0; transition: opacity 0.3s; }
  .skill-card-about:hover { transform: translateY(-5px); border-color: var(--border-h); box-shadow: 0 18px 44px rgba(0,229,255,0.07); }
  .skill-card-about:hover::before { opacity: 1; }

  .skill-icon { width: 42px; height: 42px; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
  .icon-blue { background: rgba(21,101,192,0.25); color: var(--blue-sky); }
  .icon-cyan  { background: rgba(0,229,255,0.1);  color: var(--cyan); }

  .skill-card-about h3 { font-family: 'Syne', sans-serif; font-size: 0.95rem; font-weight: 700; color: var(--white); margin-bottom: 8px; }
  .skill-card-about p  { font-size: 0.82rem; color: var(--muted); line-height: 1.6; font-weight: 300; }

  /* ═══ BEYOND CODING ═══ */
  .beyond-card {
    max-width: 820px; margin: 0 auto;
    background: var(--card-bg); border: 1px solid var(--border); border-radius: 20px;
    padding: 52px 48px; backdrop-filter: blur(16px);
    box-shadow: 0 0 60px rgba(21,101,192,0.1);
  }
  .beyond-card p { color: var(--muted); font-size: 1rem; line-height: 1.85; font-weight: 300; margin-bottom: 16px; }
  .beyond-card .hl-blue { color: var(--blue-bright); font-weight: 500; }

  /* ═══ FADE-UP ═══ */
  .fade-up { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
  .fade-up.visible { opacity: 1; transform: translateY(0); }
  .stagger-1 { transition-delay: 0.1s; } .stagger-2 { transition-delay: 0.2s; }
  .stagger-3 { transition-delay: 0.3s; } .stagger-4 { transition-delay: 0.4s; }

  /* ═══ RESPONSIVE ═══ */
  @media (max-width: 768px) {
    .about-container { padding: 0 20px; }
    .beyond-card { padding: 36px 24px; }
    .exp-grid { gap: 40px; }
  }
`;

/* Bubble data */
const BUBBLES = [
  { size:8,  left:5,  dur:14, delay:0,   v:"v1" }, { size:14, left:12, dur:18, delay:2,   v:"v2" },
  { size:6,  left:22, dur:12, delay:4,   v:"v3" }, { size:18, left:30, dur:22, delay:1,   v:"v1" },
  { size:10, left:40, dur:16, delay:6,   v:"v2" }, { size:16, left:52, dur:20, delay:8,   v:"v3" },
  { size:9,  left:62, dur:15, delay:0.5, v:"v1" }, { size:22, left:70, dur:25, delay:5,   v:"v2" },
  { size:7,  left:80, dur:13, delay:2.5, v:"v3" }, { size:12, left:90, dur:17, delay:7,   v:"v1" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const SKILLS = [
  { title: "HTML & CSS",                  icon: <Code size={20} />,     c: "icon-blue", desc: "Building structured web pages and styling them with modern CSS." },
  { title: "JavaScript",                   icon: <Cpu size={20} />,      c: "icon-cyan", desc: "Dynamic behavior and interactivity using vanilla JS and ES6+ features." },
  { title: "React.js",                     icon: <Monitor size={20} />,  c: "icon-blue", desc: "Component-based UIs and SPAs with React.js hooks and Vite." },
  { title: "Tailwind CSS",                 icon: <Layers size={20} />,   c: "icon-cyan", desc: "Sleek, responsive UIs using the utility-first Tailwind CSS framework." },
  { title: "WordPress Development",        icon: <Server size={20} />,   c: "icon-blue", desc: "Custom themes, plugin development, and full website builds." },
  { title: "WooCommerce",                  icon: <Layers size={20} />,   c: "icon-cyan", desc: "Secure, conversion-optimized eCommerce stores." },
  { title: "Page Builders",                icon: <Monitor size={20} />,  c: "icon-blue", desc: "Elementor, WPBakery, and Gutenberg for flexible client-friendly sites." },
  { title: "WordPress Security & Backup",  icon: <Globe size={20} />,    c: "icon-cyan", desc: "Security best practices, backups, and malware protection." },
  { title: "SEO & Performance",            icon: <Monitor size={20} />,  c: "icon-blue", desc: "Speed, SEO, and accessibility optimization for better rankings." },
  { title: "Plugin Customization",         icon: <Server size={20} />,   c: "icon-cyan", desc: "Modifying WordPress plugins to meet project-specific needs." },
  { title: "Database & CMS Basics",        icon: <Database size={20} />, c: "icon-blue", desc: "MySQL, PHP, and WordPress database integrations." },
  { title: "Responsive Web Design",        icon: <Monitor size={20} />,  c: "icon-cyan", desc: "Fully responsive layouts across all screen sizes." },
  { title: "Git & GitHub",                 icon: <Globe size={20} />,    c: "icon-blue", desc: "Version control and code management using Git and GitHub." },
  { title: "REST API Integration",         icon: <Globe size={20} />,    c: "icon-cyan", desc: "Connecting frontends with RESTful APIs using Fetch or Axios." },
  { title: "VS Code / Visual Studio",      icon: <Code size={20} />,     c: "icon-blue", desc: "Efficient coding with essential developer extensions." },
];

const About = () => {
  useReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <style>{styles}</style>

      {/* Background */}
      <div className="about-bg-mesh" />
      <div className="about-orb about-orb-1" />
      <div className="about-orb about-orb-2" />
      <div className="about-orb about-orb-3" />
      <div className="about-dot-grid" />
      <div className="about-bubbles">
        {BUBBLES.map((b, i) => (
          <div key={i} className={`about-bubble ${b.v}`}
            style={{ width: b.size, height: b.size, left: `${b.left}%`, animationDuration: `${b.dur}s`, animationDelay: `${b.delay}s` }} />
        ))}
      </div>

      <main className="about-page">

        {/* ══════════ HERO ══════════ */}
        <section className="about-hero">
          <div className="about-hero__inner">

            <div className="about-eyebrow fade-up visible">
              <span className="about-eyebrow-dot" />
              Frontend &amp; eCommerce WordPress Developer
            </div>

            <h1 className="about-hero__title fade-up visible" style={{ transitionDelay: "0.1s" }}>
              <span className="solid">About </span>
              <span className="grad">Me</span>
            </h1>

            <div className="about-hero__body fade-up visible" style={{ transitionDelay: "0.2s" }}>
              <p>
                I'm a passionate <span className="hl-blue">Frontend &amp; WordPress Developer</span> with over <span className="hl-cyan">2 years of experience</span> crafting responsive and scalable web applications for clients across various industries. I specialize in building modern UIs using <span className="hl-cyan">HTML, CSS, JavaScript, React.js</span>, and <span className="hl-cyan">Tailwind CSS</span>, while converting <span className="hl-blue">Figma designs</span> into fully responsive websites.
              </p>
              <p>
                I also provide <span className="hl-cyan">WooCommerce</span> development services as a freelancer on Fiverr, building functional, responsive eCommerce websites focused on <span className="hl-blue">performance</span>, <span className="hl-blue">SEO</span>, and <span className="hl-blue">user experience</span>.
              </p>
              <p>
                Beyond coding, I enjoy collaborating with designers and clients to transform ideas into functional digital solutions. I'm constantly refining my skills in <span className="hl-cyan">React.js</span> and <span className="hl-cyan">Tailwind CSS</span>, and exploring <span className="hl-blue">Figma</span> to improve design handoffs and workflow efficiency.
              </p>
            </div>

            <div className="about-hero__btns fade-up visible" style={{ transitionDelay: "0.3s" }}>
              <Link to="/portfolio" className="btn-primary">View My Work <ArrowRight size={17} /></Link>
              <Link to="/resume"    className="btn-ghost">My Resume</Link>
            </div>
          </div>
        </section>

        <div className="about-divider" />

        {/* ══════════ EXPERIENCE & EDUCATION ══════════ */}
        <section className="about-section">
          <div className="about-container">
            <div className="exp-grid">

              {/* Experience */}
              <div>
                <div className="fade-up">
                  <span className="about-section__eyebrow">Career</span>
                  <h2 className="about-section__title">Professional <span className="accent">Experience</span></h2>
                </div>
                <div className="timeline fade-up" style={{ transitionDelay: "0.1s" }}>

                  <div className="timeline-item">
                    <div className="timeline-header">
                      <span className="timeline-title">ReactJS Developer — Remote</span>
                      <span className="timeline-badge">Jan 2025 – May 2025</span>
                    </div>
                    <div className="timeline-org">Precise Tech, Canada</div>
                    <p className="timeline-desc">Created responsive user interfaces and implemented frontend functionality for web applications and distribution management systems.</p>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-header">
                      <span className="timeline-title">Frontend Developer Intern</span>
                      <span className="timeline-badge">Nov 2024 – Jan 2025</span>
                    </div>
                    <div className="timeline-org">DevelopersHub Corporation©, Islamabad</div>
                    <p className="timeline-desc">Developed and maintained projects, focusing on responsive design and API integrations.</p>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-header">
                      <span className="timeline-title">Frontend Developer Internship</span>
                      <span className="timeline-badge">Aug 2024 – Oct 2024</span>
                    </div>
                    <div className="timeline-org">Social Swirl, Lahore</div>
                    <p className="timeline-desc">Built a responsive e-commerce project using React and Tailwind CSS. Gained hands-on experience in JavaScript and component-based development.</p>
                  </div>

                </div>
              </div>

              {/* Education */}
              <div>
                <div className="fade-up">
                  <span className="about-section__eyebrow">Academic</span>
                  <h2 className="about-section__title">Education <span className="accent">&amp; Qualifications</span></h2>
                </div>
                <div className="timeline fade-up" style={{ transitionDelay: "0.1s" }}>

                  <div className="timeline-item">
                    <div className="timeline-header">
                      <span className="timeline-title">BS Computer Science</span>
                      <span className="timeline-badge">2021 – 2025</span>
                    </div>
                    <div className="timeline-org">COMSATS University Islamabad</div>
                    <div className="timeline-extra">
                      <span className="timeline-badge">Grade: A</span>
                      <span className="timeline-badge">GPA: 3.64</span>
                    </div>
                    <p className="timeline-desc" style={{ marginTop: 10 }}>Major in Computer Science with focus on web technologies and web application development.</p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        <div className="about-divider" />

        {/* ══════════ SKILLS ══════════ */}
        <section className="about-section">
          <div className="about-container">

            <div className="fade-up" style={{ textAlign: "center", marginBottom: 64 }}>
              <span className="about-section__eyebrow">What I know</span>
              <h2 className="about-section__title">Technical <span className="accent">Skills</span></h2>
              <p style={{ color: "var(--muted)", fontSize: "1.05rem", fontWeight: 300, maxWidth: 560, margin: "0 auto" }}>
                A comprehensive overview of my technical expertise and specialized skill set.
              </p>
            </div>

            <div className="skills-grid-about">
              {SKILLS.map((s, i) => (
                <div key={i} className={`skill-card-about fade-up stagger-${(i % 4) + 1}`}>
                  <div className={`skill-icon ${s.c}`}>{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        <div className="about-divider" />

        {/* ══════════ BEYOND CODING ══════════ */}
        <section className="about-section">
          <div className="about-container">

            <div className="fade-up" style={{ textAlign: "center", marginBottom: 48 }}>
              <span className="about-section__eyebrow">Personal</span>
              <h2 className="about-section__title">Beyond <span className="accent">Coding</span></h2>
            </div>

            <div className="beyond-card fade-up">
              <p>
                When I'm not immersed in code, I enjoy exploring new technologies through personal projects and contributing to open-source communities. Outside the tech world, I'm passionate about <span className="hl-blue">cooking</span> and <span className="hl-blue">walking</span>.
              </p>
              <p>
                I'm passionate about staying updated with the latest industry trends and sharing knowledge through mentorship and tech meetups. I believe in continuous learning and regularly participate in hackathons and coding challenges to push my boundaries.
              </p>
              <div style={{ textAlign: "center", marginTop: 36 }}>
                <Link to="/contact" className="btn-primary">Let's Connect <ArrowRight size={17} /></Link>
              </div>
            </div>

          </div>
        </section>

      </main>
    </>
  );
};

export default About;
import { useEffect } from 'react';
import { Download, MapPin, FileText, Briefcase, Award, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  .rv-bg-mesh {
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 55% 45% at 15% 25%, rgba(21,101,192,0.2) 0%, transparent 55%),
      radial-gradient(ellipse 45% 55% at 85% 75%, rgba(0,180,255,0.08) 0%, transparent 55%),
      radial-gradient(ellipse 65% 35% at 50% 95%, rgba(57,73,171,0.15) 0%, transparent 55%),
      #020b18;
  }
  .rv-orb { position: fixed; border-radius: 50%; filter: blur(100px); pointer-events: none; z-index: 0; }
  .rv-orb-1 { width: 700px; height: 700px; background: radial-gradient(circle, rgba(21,101,192,0.26) 0%, transparent 65%); top: -250px; left: -200px; animation: rvOrb1 24s ease-in-out infinite alternate; }
  .rv-orb-2 { width: 500px; height: 500px; background: radial-gradient(circle, rgba(0,229,255,0.09) 0%, transparent 65%); bottom: -160px; right: -120px; animation: rvOrb2 30s ease-in-out infinite alternate; }
  .rv-orb-3 { width: 360px; height: 360px; background: radial-gradient(circle, rgba(57,73,171,0.17) 0%, transparent 65%); top: 45%; left: 58%; animation: rvOrb3 20s ease-in-out infinite alternate; }
  @keyframes rvOrb1 { 0% { transform: translate(0,0) scale(1); } 100% { transform: translate(50px,-35px) scale(1.08); } }
  @keyframes rvOrb2 { 0% { transform: translate(0,0) scale(1); } 100% { transform: translate(-40px,45px) scale(0.93); } }
  @keyframes rvOrb3 { 0% { transform: translate(0,0); } 100% { transform: translate(-35px,-25px) scale(1.06); } }

  .rv-dot-grid {
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background-image: radial-gradient(rgba(33,150,243,0.055) 1px, transparent 1px);
    background-size: 36px 36px;
  }

  /* Bubbles */
  .rv-bubbles { position: fixed; inset: 0; z-index: 0; pointer-events: none; overflow: hidden; }
  .rv-bubble { position: absolute; bottom: -100px; border-radius: 50%; opacity: 0; animation: rvBubble linear infinite; }
  .rv-bubble.v1 { background: radial-gradient(circle at 35% 35%, rgba(79,195,247,0.5), rgba(21,101,192,0.12)); border: 1px solid rgba(79,195,247,0.3); }
  .rv-bubble.v2 { background: radial-gradient(circle at 35% 35%, rgba(0,229,255,0.35), rgba(0,150,200,0.08)); border: 1px solid rgba(0,229,255,0.24); }
  .rv-bubble.v3 { background: radial-gradient(circle at 35% 35%, rgba(33,150,243,0.3), rgba(13,59,110,0.08)); border: 1px solid rgba(33,150,243,0.25); }
  @keyframes rvBubble {
    0%   { transform: translateY(0) scale(0.6); opacity: 0; }
    8%   { opacity: 0.9; }
    85%  { opacity: 0.45; }
    100% { transform: translateY(-105vh) scale(1); opacity: 0; }
  }

  /* ═══ PAGE ═══ */
  .rv-page { position: relative; z-index: 1; padding-top: 68px; color: var(--white); font-family: 'DM Sans', sans-serif; -webkit-font-smoothing: antialiased; }
  .rv-container { max-width: 1440px; margin: 0 auto; padding: 0 48px; }
  .rv-divider { width: 100%; height: 1px; background: linear-gradient(90deg, transparent, rgba(33,150,243,0.3), rgba(0,229,255,0.5), rgba(33,150,243,0.3), transparent); }

  /* ═══ HERO ═══ */
  .rv-hero { padding: 100px 24px 80px; text-align: center; }
  .rv-hero__inner { max-width: 860px; margin: 0 auto; }

  .rv-badge {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 7px 20px; background: rgba(21,101,192,0.15);
    border: 1px solid rgba(33,150,243,0.35); border-radius: 100px;
    font-size: 13px; letter-spacing: 0.05em; color: var(--cyan-soft);
    margin-bottom: 36px; backdrop-filter: blur(12px);
  }
  .rv-badge-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--cyan); box-shadow: 0 0 10px var(--cyan); animation: rvPulse 2s infinite; }
  @keyframes rvPulse { 0%,100% { opacity:1; } 50% { opacity: 0.4; } }

  .rv-hero__title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(3rem, 7vw, 5.5rem);
    font-weight: 800; line-height: 1.06; letter-spacing: -0.04em; margin-bottom: 24px;
  }
  .rv-hero__title .solid { color: var(--white); }
  .rv-hero__title .grad {
    background: linear-gradient(110deg, #4fc3f7 0%, #1976d2 30%, #00e5ff 65%, #81d4fa 100%);
    background-size: 220% auto;
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    animation: rvShimmer 4.5s linear infinite;
  }
  @keyframes rvShimmer { 0% { background-position: 0% center; } 100% { background-position: 220% center; } }

  .rv-hero__desc { color: var(--muted); font-size: clamp(1rem, 1.6vw, 1.1rem); font-weight: 300; line-height: 1.8; max-width: 620px; margin: 0 auto 40px; }

  /* ═══ BUTTONS ═══ */
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

  /* ═══ RESUME BODY ═══ */
  .rv-body { padding: 60px 0 100px; }

  /* Profile card */
  .rv-profile {
    background: var(--card-bg); border: 1px solid var(--border); border-radius: 20px;
    padding: 40px 44px; backdrop-filter: blur(16px); margin-bottom: 36px;
    position: relative; overflow: hidden;
  }
  .rv-profile::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, var(--blue-sky), var(--cyan), transparent); }

  .rv-profile__name {
    font-family: 'Syne', sans-serif; font-size: clamp(1.8rem, 3vw, 2.4rem);
    font-weight: 800; letter-spacing: -0.02em; color: var(--white); margin-bottom: 8px;
  }
  .rv-profile__role {
    background: linear-gradient(110deg, #4fc3f7, #00e5ff); -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; background-clip: text;
    font-size: 1.05rem; font-weight: 500; margin-bottom: 18px;
  }
  .rv-profile__meta { display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 20px; }
  .rv-profile__meta-item { display: flex; align-items: center; gap: 7px; color: var(--muted); font-size: 0.9rem; }
  .rv-profile__meta-item svg { color: var(--cyan); flex-shrink: 0; }
  .rv-profile__bio { color: var(--muted); font-size: 0.95rem; line-height: 1.78; font-weight: 300; max-width: 1100px; }

  /* Two-col layout */
  .rv-cols { display: grid; grid-template-columns: 300px 1fr; gap: 28px; }
  @media (max-width: 960px) { .rv-cols { grid-template-columns: 1fr; } }

  /* Shared card */
  .rv-card {
    background: var(--card-bg); border: 1px solid var(--border); border-radius: 20px;
    padding: 32px 28px; backdrop-filter: blur(16px); position: relative; overflow: hidden;
  }
  .rv-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, var(--blue-sky), var(--cyan), transparent); opacity: 0.6; }

  .rv-card__heading {
    font-family: 'Syne', sans-serif; font-size: 1.05rem; font-weight: 700;
    color: var(--white); margin-bottom: 24px;
    display: flex; align-items: center; gap: 9px;
  }
  .rv-card__heading svg { color: var(--cyan); }

  /* Skill groups */
  .rv-skill-group { margin-bottom: 24px; }
  .rv-skill-group:last-child { margin-bottom: 0; }
  .rv-skill-group h4 { font-size: 0.8rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--cyan-soft); margin-bottom: 10px; }
  .rv-pills { display: flex; flex-wrap: wrap; gap: 7px; }
  .rv-pill { padding: 4px 12px; background: rgba(33,150,243,0.1); border: 1px solid rgba(33,150,243,0.22); border-radius: 100px; font-size: 11.5px; color: var(--cyan-soft); font-weight: 500; }

  /* Timeline */
  .rv-timeline { display: flex; flex-direction: column; gap: 36px; }

  .rv-entry { border-left: 1.5px solid rgba(33,150,243,0.25); padding-left: 24px; position: relative; }
  .rv-entry::before { content: ''; position: absolute; top: 6px; left: -5px; width: 8px; height: 8px; border-radius: 50%; background: var(--cyan); box-shadow: 0 0 8px var(--cyan); }

  .rv-entry__header { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; flex-wrap: wrap; margin-bottom: 4px; }
  .rv-entry__title { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 700; color: var(--white); }
  .rv-entry__badge { display: inline-flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 600; padding: 4px 12px; background: rgba(33,150,243,0.12); border: 1px solid rgba(33,150,243,0.28); border-radius: 100px; color: var(--cyan-soft); white-space: nowrap; }
  .rv-entry__org { font-size: 0.85rem; color: var(--muted); margin-bottom: 12px; }
  .rv-entry__list { padding-left: 18px; display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; }
  .rv-entry__list li { font-size: 0.87rem; color: var(--muted); line-height: 1.65; font-weight: 300; }

  /* ═══ FADE UP ═══ */
  .fade-up { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
  .fade-up.visible { opacity: 1; transform: translateY(0); }
  .stagger-1 { transition-delay: 0.08s; } .stagger-2 { transition-delay: 0.16s; }
  .stagger-3 { transition-delay: 0.24s; } .stagger-4 { transition-delay: 0.32s; }

  /* ═══ RESPONSIVE ═══ */
  @media (max-width: 768px) {
    .rv-container { padding: 0 20px; }
    .rv-profile { padding: 28px 22px; }
    .rv-card { padding: 24px 20px; }
    .rv-hero { padding: 80px 20px 60px; }
  }
`;

const BUBBLES = [
  { size: 8,  left: 5,  dur: 14, delay: 0,   v: "v1" },
  { size: 14, left: 15, dur: 18, delay: 2,   v: "v2" },
  { size: 6,  left: 27, dur: 12, delay: 4,   v: "v3" },
  { size: 18, left: 40, dur: 22, delay: 1,   v: "v1" },
  { size: 10, left: 55, dur: 16, delay: 6,   v: "v2" },
  { size: 16, left: 67, dur: 20, delay: 8,   v: "v3" },
  { size: 9,  left: 78, dur: 15, delay: 0.5, v: "v1" },
  { size: 20, left: 88, dur: 25, delay: 5,   v: "v2" },
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

const Resume = () => {
  useReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <style>{styles}</style>

      {/* Background */}
      <div className="rv-bg-mesh" />
      <div className="rv-orb rv-orb-1" />
      <div className="rv-orb rv-orb-2" />
      <div className="rv-orb rv-orb-3" />
      <div className="rv-dot-grid" />
      <div className="rv-bubbles">
        {BUBBLES.map((b, i) => (
          <div key={i} className={`rv-bubble ${b.v}`}
            style={{ width: b.size, height: b.size, left: `${b.left}%`, animationDuration: `${b.dur}s`, animationDelay: `${b.delay}s` }} />
        ))}
      </div>

      <main className="rv-page">

        {/* ══════════ HERO ══════════ */}
        <section className="rv-hero">
          <div className="rv-hero__inner">

            <div className="rv-badge fade-up visible">
              <span className="rv-badge-dot" />
              Professional Profile
            </div>

            <h1 className="rv-hero__title fade-up visible" style={{ transitionDelay: "0.1s" }}>
              <span className="solid">My </span>
              <span className="grad">Resume</span>
            </h1>

            <p className="rv-hero__desc fade-up visible" style={{ transitionDelay: "0.2s" }}>
              A detailed overview of my professional experience, education, and technical skills.
            </p>

            <div className="fade-up visible" style={{ transitionDelay: "0.3s", display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/RESUME_Saira_Atta.pdf" download="Resume_Saira_Atta.pdf" className="btn-primary">
                Download Resume <Download size={17} />
              </a>
              <Link to="/contact" className="btn-ghost">Contact Me</Link>
            </div>

          </div>
        </section>

        <div className="rv-divider" />

        {/* ══════════ RESUME BODY ══════════ */}
        <section className="rv-body">
          <div className="rv-container">

            {/* Profile card */}
            <div className="rv-profile fade-up">
              <div className="rv-profile__name">Saira Atta</div>
              <div className="rv-profile__role">Frontend &amp; WordPress WooCommerce Developer</div>
              <div className="rv-profile__meta">
                <span className="rv-profile__meta-item"><MapPin size={15} /> Pakistan</span>
                <span className="rv-profile__meta-item"><FileText size={15} /> sairaatta098@gmail.com</span>
              </div>
              <p className="rv-profile__bio">
                Frontend and WordPress WooCommerce Developer with 2 years of experience building responsive, performance-optimized, and conversion-focused websites. I specialize in creating modern user interfaces, developing custom WordPress solutions, and building eCommerce stores that enhance user experience and drive business growth.
              </p>
            </div>

            {/* Two columns */}
            <div className="rv-cols">

              {/* LEFT — Skills */}
              <div className="rv-card fade-up stagger-1" style={{ alignSelf: "start" }}>
                <div className="rv-card__heading"><Award size={18} /> Technical Skills</div>

                <div className="rv-skill-group">
                  <h4>Frontend Development</h4>
                  <div className="rv-pills">
                    {["HTML5","CSS3","JavaScript","React.js","Tailwind CSS","Bootstrap","Responsive Design"].map(s => (
                      <span key={s} className="rv-pill">{s}</span>
                    ))}
                  </div>
                </div>

                <div className="rv-skill-group">
                  <h4>WordPress &amp; WooCommerce</h4>
                  <div className="rv-pills">
                    {["WordPress","WooCommerce","Elementor Pro","Theme Customization","Plugin Integration","Payment Gateway Setup","Performance Optimization","On-Page SEO"].map(s => (
                      <span key={s} className="rv-pill">{s}</span>
                    ))}
                  </div>
                </div>

                <div className="rv-skill-group">
                  <h4>Tools &amp; Technologies</h4>
                  <div className="rv-pills">
                    {["Git","GitHub","Figma","Vite","VS Code","cPanel"].map(s => (
                      <span key={s} className="rv-pill">{s}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT — Experience */}
              <div className="rv-card fade-up stagger-2">
                <div className="rv-card__heading"><Briefcase size={18} /> Professional Experience</div>

                <div className="rv-timeline">

                  <div className="rv-entry">
                    <div className="rv-entry__header">
                      <span className="rv-entry__title">Freelance WordPress Developer</span>
                      <span className="rv-entry__badge"><Calendar size={11} /> Apr 2025 – Present</span>
                    </div>
                    <div className="rv-entry__org">Fiverr</div>
                    <ul className="rv-entry__list">
                      <li>Designed and developed custom WordPress websites for clients across eCommerce and service-based industries.</li>
                      <li>Built and managed WooCommerce stores including product setup, payment gateway integration, and shipping configuration.</li>
                      <li>Customized themes and plugins to meet client-specific requirements and branding guidelines.</li>
                      <li>Optimized website performance, security, and SEO to improve search visibility and engagement.</li>
                      <li>Converted Figma mockups into fully functional, responsive WordPress websites.</li>
                    </ul>
                    <div className="rv-pills">
                      {["WordPress","WooCommerce","Elementor Pro","Theme Customization","SEO","cPanel"].map(t => (
                        <span key={t} className="rv-pill">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="rv-entry">
                    <div className="rv-entry__header">
                      <span className="rv-entry__title">React.js Developer</span>
                      <span className="rv-entry__badge"><Calendar size={11} /> Jan 2025 – May 2025</span>
                    </div>
                    <div className="rv-entry__org">Precise Tech, Canada</div>
                    <ul className="rv-entry__list">
                      <li>Developed key features for a Distribution Management System, including inventory tracking and reporting modules.</li>
                      <li>Built dynamic and responsive UI components using React.js and Tailwind CSS.</li>
                      <li>Integrated REST APIs for real-time data updates on product stock and order status.</li>
                      <li>Optimized state management using Redux and React hooks.</li>
                    </ul>
                    <div className="rv-pills">
                      {["React.js","JavaScript","Tailwind CSS","Redux","REST APIs"].map(t => (
                        <span key={t} className="rv-pill">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="rv-entry">
                    <div className="rv-entry__header">
                      <span className="rv-entry__title">Frontend Developer</span>
                      <span className="rv-entry__badge"><Calendar size={11} /> Nov 2024 – Jan 2025</span>
                    </div>
                    <div className="rv-entry__org">DevelopersHub Corporation©, Islamabad</div>
                    <ul className="rv-entry__list">
                      <li>Developed responsive web interfaces using React.js and Tailwind CSS for multiple client projects.</li>
                      <li>Integrated RESTful APIs and handled dynamic data rendering.</li>
                      <li>Created modular UI components and performed cross-browser testing.</li>
                    </ul>
                    <div className="rv-pills">
                      {["React.js","JavaScript","Tailwind CSS","REST API"].map(t => (
                        <span key={t} className="rv-pill">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="rv-entry">
                    <div className="rv-entry__header">
                      <span className="rv-entry__title">Frontend Developer Intern</span>
                      <span className="rv-entry__badge"><Calendar size={11} /> Aug 2024 – Oct 2024</span>
                    </div>
                    <div className="rv-entry__org">Social Swirl, Lahore</div>
                    <ul className="rv-entry__list">
                      <li>Implemented responsive user interfaces using React and Tailwind CSS.</li>
                      <li>Integrated frontend components with backend APIs for dynamic content rendering.</li>
                      <li>Participated in daily stand-ups, sprint planning, and code reviews.</li>
                    </ul>
                    <div className="rv-pills">
                      {["React.js","JavaScript","HTML","CSS"].map(t => (
                        <span key={t} className="rv-pill">{t}</span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default Resume;
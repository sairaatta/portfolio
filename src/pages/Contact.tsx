import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Send, Sparkles } from 'lucide-react';
import emailjs from '@emailjs/browser';

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
  .ct-bg-mesh {
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 55% 45% at 15% 25%, rgba(21,101,192,0.2) 0%, transparent 55%),
      radial-gradient(ellipse 45% 55% at 85% 75%, rgba(0,180,255,0.08) 0%, transparent 55%),
      radial-gradient(ellipse 65% 35% at 50% 95%, rgba(57,73,171,0.15) 0%, transparent 55%),
      #020b18;
  }
  .ct-orb { position: fixed; border-radius: 50%; filter: blur(100px); pointer-events: none; z-index: 0; }
  .ct-orb-1 { width: 700px; height: 700px; background: radial-gradient(circle, rgba(21,101,192,0.26) 0%, transparent 65%); top: -250px; left: -200px; animation: ctOrb1 24s ease-in-out infinite alternate; }
  .ct-orb-2 { width: 500px; height: 500px; background: radial-gradient(circle, rgba(0,229,255,0.09) 0%, transparent 65%); bottom: -160px; right: -120px; animation: ctOrb2 30s ease-in-out infinite alternate; }
  .ct-orb-3 { width: 360px; height: 360px; background: radial-gradient(circle, rgba(57,73,171,0.17) 0%, transparent 65%); top: 45%; left: 58%; animation: ctOrb3 20s ease-in-out infinite alternate; }
  @keyframes ctOrb1 { 0% { transform: translate(0,0) scale(1); } 100% { transform: translate(50px,-35px) scale(1.08); } }
  @keyframes ctOrb2 { 0% { transform: translate(0,0) scale(1); } 100% { transform: translate(-40px,45px) scale(0.93); } }
  @keyframes ctOrb3 { 0% { transform: translate(0,0); } 100% { transform: translate(-35px,-25px) scale(1.06); } }

  .ct-dot-grid {
    position: fixed; inset: 0; z-index: 0; pointer-events: none;
    background-image: radial-gradient(rgba(33,150,243,0.055) 1px, transparent 1px);
    background-size: 36px 36px;
  }

  /* Bubbles */
  .ct-bubbles { position: fixed; inset: 0; z-index: 0; pointer-events: none; overflow: hidden; }
  .ct-bubble { position: absolute; bottom: -100px; border-radius: 50%; opacity: 0; animation: ctBubble linear infinite; }
  .ct-bubble.v1 { background: radial-gradient(circle at 35% 35%, rgba(79,195,247,0.5), rgba(21,101,192,0.12)); border: 1px solid rgba(79,195,247,0.3); }
  .ct-bubble.v2 { background: radial-gradient(circle at 35% 35%, rgba(0,229,255,0.35), rgba(0,150,200,0.08)); border: 1px solid rgba(0,229,255,0.24); }
  .ct-bubble.v3 { background: radial-gradient(circle at 35% 35%, rgba(33,150,243,0.3), rgba(13,59,110,0.08)); border: 1px solid rgba(33,150,243,0.25); }
  @keyframes ctBubble {
    0%   { transform: translateY(0) scale(0.6); opacity: 0; }
    8%   { opacity: 0.9; }
    85%  { opacity: 0.45; }
    100% { transform: translateY(-105vh) scale(1); opacity: 0; }
  }

  /* ═══ PAGE ═══ */
  .ct-page { position: relative; z-index: 1; padding-top: 68px; color: var(--white); font-family: 'DM Sans', sans-serif; -webkit-font-smoothing: antialiased; }
  .ct-container { max-width: 1440px; margin: 0 auto; padding: 0 48px; }
  .ct-divider { width: 100%; height: 1px; background: linear-gradient(90deg, transparent, rgba(33,150,243,0.3), rgba(0,229,255,0.5), rgba(33,150,243,0.3), transparent); }

  /* ═══ HERO ═══ */
  .ct-hero { padding: 100px 24px 80px; text-align: center; }
  .ct-hero__inner { max-width: 760px; margin: 0 auto; }

  .ct-badge {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 7px 20px; background: rgba(21,101,192,0.15);
    border: 1px solid rgba(33,150,243,0.35); border-radius: 100px;
    font-size: 13px; letter-spacing: 0.05em; color: var(--cyan-soft);
    margin-bottom: 36px; backdrop-filter: blur(12px);
  }
  .ct-badge-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--cyan); box-shadow: 0 0 10px var(--cyan); animation: ctPulse 2s infinite; }
  @keyframes ctPulse { 0%,100% { opacity:1; } 50% { opacity:0.4; } }

  .ct-hero__title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(3rem, 7vw, 5.5rem);
    font-weight: 800; line-height: 1.06; letter-spacing: -0.04em; margin-bottom: 24px;
    white-space: nowrap;
  }
  .ct-hero__title .solid { color: var(--white); }
  .ct-hero__title .grad {
    background: linear-gradient(110deg, #4fc3f7 0%, #1976d2 30%, #00e5ff 65%, #81d4fa 100%);
    background-size: 220% auto;
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    animation: ctShimmer 4.5s linear infinite;
  }
  @keyframes ctShimmer { 0% { background-position: 0% center; } 100% { background-position: 220% center; } }
  .ct-hero__desc { color: var(--muted); font-size: clamp(1rem, 1.6vw, 1.1rem); font-weight: 300; line-height: 1.8; max-width: 580px; margin: 0 auto; }

  /* ═══ CONTACT BODY ═══ */
  .ct-body { padding: 60px 0 100px; }
  .ct-grid { display: grid; grid-template-columns: 1fr 1.7fr; gap: 32px; align-items: start; }
  @media (max-width: 960px) { .ct-grid { grid-template-columns: 1fr; } }

  /* ── Shared card ── */
  .ct-card {
    background: var(--card-bg); border: 1px solid var(--border); border-radius: 20px;
    padding: 36px 32px; backdrop-filter: blur(16px); position: relative; overflow: hidden;
  }
  .ct-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, transparent, var(--blue-sky), var(--cyan), transparent);
    opacity: 0.7;
  }

  .ct-card__heading {
    font-family: 'Syne', sans-serif; font-size: 1.2rem; font-weight: 700;
    color: var(--white); margin-bottom: 28px;
  }

  /* ── Info items ── */
  .ct-info-list { display: flex; flex-direction: column; gap: 22px; margin-bottom: 36px; }
  .ct-info-item { display: flex; align-items: flex-start; gap: 14px; }
  .ct-info-icon {
    width: 42px; height: 42px; border-radius: 12px; flex-shrink: 0;
    background: rgba(21,101,192,0.22); border: 1px solid rgba(33,150,243,0.25);
    display: flex; align-items: center; justify-content: center; color: var(--cyan);
  }
  .ct-info-item h3 { font-family: 'Syne', sans-serif; font-size: 0.9rem; font-weight: 700; color: var(--white); margin-bottom: 3px; }
  .ct-info-item p  { font-size: 0.88rem; color: var(--muted); font-weight: 300; }

  /* ── Social icons ── */
  .ct-socials-label { font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--cyan); margin-bottom: 14px; }
  .ct-socials { display: flex; gap: 12px; }
  .ct-social {
    width: 42px; height: 42px; border-radius: 12px;
    background: rgba(13,59,110,0.3); border: 1px solid rgba(41,182,246,0.25);
    display: flex; align-items: center; justify-content: center;
    color: var(--blue-bright); text-decoration: none;
    transition: background 0.22s, border-color 0.22s, color 0.22s, transform 0.22s;
  }
  .ct-social:hover { background: rgba(33,150,243,0.18); border-color: rgba(0,229,255,0.5); color: var(--cyan); transform: translateY(-3px); }

  /* ── Form ── */
  .ct-form { display: flex; flex-direction: column; gap: 20px; }

  .ct-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  @media (max-width: 600px) { .ct-row { grid-template-columns: 1fr; } }

  .ct-field { display: flex; flex-direction: column; gap: 7px; }
  .ct-label { font-size: 12.5px; font-weight: 600; letter-spacing: 0.04em; color: var(--cyan-soft); }
  .ct-label span { color: var(--cyan); }

  .ct-input, .ct-textarea {
    width: 100%; padding: 12px 16px;
    background: rgba(6,21,37,0.6); border: 1px solid rgba(33,150,243,0.22);
    border-radius: 10px; color: var(--white);
    font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 300;
    outline: none; transition: border-color 0.22s, box-shadow 0.22s;
    -webkit-font-smoothing: antialiased;
  }
  .ct-input::placeholder, .ct-textarea::placeholder { color: rgba(127,168,204,0.45); }
  .ct-input:focus, .ct-textarea:focus {
    border-color: rgba(0,229,255,0.45);
    box-shadow: 0 0 0 3px rgba(0,229,255,0.07);
  }
  .ct-textarea { min-height: 148px; resize: vertical; }

  /* Submit button */
  .ct-submit {
    display: inline-flex; align-items: center; justify-content: center; gap: 9px;
    padding: 14px 34px; width: 100%;
    background: linear-gradient(130deg, #0d47a1 0%, #1976d2 45%, #039be5 80%, #29b6f6 100%);
    border: none; border-radius: 10px; cursor: pointer;
    font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 15px;
    color: #fff;
    box-shadow: 0 4px 20px rgba(13,71,161,0.55), 0 0 0 1px rgba(41,182,246,0.2);
    transition: transform 0.22s, box-shadow 0.22s, opacity 0.2s;
    position: relative; overflow: hidden;
  }
  .ct-submit::before { content: ''; position: absolute; top: 0; left: -100%; width: 60%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent); transition: left 0.45s ease; }
  .ct-submit:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 36px rgba(3,155,229,0.6), 0 0 0 1px rgba(41,182,246,0.4); }
  .ct-submit:hover:not(:disabled)::before { left: 150%; }
  .ct-submit:disabled { opacity: 0.65; cursor: not-allowed; }

  /* Error */
  .ct-error { font-size: 13px; color: #f87171; background: rgba(248,113,113,0.08); border: 1px solid rgba(248,113,113,0.2); border-radius: 8px; padding: 10px 14px; }

  /* Success state */
  .ct-success {
    text-align: center; padding: 48px 24px; display: flex; flex-direction: column;
    align-items: center; gap: 16px;
  }
  .ct-success__icon {
    width: 64px; height: 64px; border-radius: 50%;
    background: rgba(0,229,255,0.1); border: 1px solid rgba(0,229,255,0.3);
    display: flex; align-items: center; justify-content: center; color: var(--cyan);
    box-shadow: 0 0 24px rgba(0,229,255,0.15);
  }
  .ct-success h3 { font-family: 'Syne', sans-serif; font-size: 1.3rem; font-weight: 700; color: var(--white); }
  .ct-success p  { color: var(--muted); font-size: 0.95rem; font-weight: 300; line-height: 1.7; max-width: 340px; }
  .ct-success-btn {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 10px 26px; margin-top: 8px;
    background: rgba(2,11,24,0.4); border: 1px solid rgba(41,182,246,0.38);
    border-radius: 10px; font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 14px;
    color: #81d4fa; cursor: pointer; transition: background 0.22s, border-color 0.22s, color 0.22s;
  }
  .ct-success-btn:hover { background: rgba(3,155,229,0.12); border-color: rgba(0,229,255,0.55); color: var(--cyan); }

  /* ═══ FADE UP ═══ */
  .fade-up { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
  .fade-up.visible { opacity: 1; transform: translateY(0); }
  .stagger-1 { transition-delay: 0.1s; } .stagger-2 { transition-delay: 0.2s; }

  /* ═══ RESPONSIVE ═══ */
  @media (max-width: 768px) {
    .ct-container { padding: 0 20px; }
    .ct-card { padding: 26px 20px; }
    .ct-hero { padding: 80px 20px 60px; }
  }
`;

const BUBBLES = [
  { size: 8,  left: 5,  dur: 14, delay: 0,   v: "v1" },
  { size: 14, left: 15, dur: 18, delay: 2,   v: "v2" },
  { size: 6,  left: 27, dur: 12, delay: 4,   v: "v3" },
  { size: 18, left: 40, dur: 22, delay: 1,   v: "v1" },
  { size: 10, left: 55, dur: 16, delay: 6,   v: "v2" },
  { size: 16, left: 68, dur: 20, delay: 8,   v: "v3" },
  { size: 9,  left: 79, dur: 15, delay: 0.5, v: "v1" },
  { size: 20, left: 90, dur: 25, delay: 5,   v: "v2" },
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

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting]     = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError]   = useState('');

  useReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');
    emailjs
      .send("service_cx2fcar", "template_mgas6v8",
        { name: formData.name, email: formData.email, subject: formData.subject, message: formData.message },
        "-v2t4_qnCyEGQDC2V"
      )
      .then(() => {
        setSubmitSuccess(true);
        setSubmitting(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      },
      (error) => {
        setSubmitError("Failed to send message. Please try again.");
        setSubmitting(false);
        console.error(error);
      });
  };

  return (
    <>
      <style>{styles}</style>

      {/* Background */}
      <div className="ct-bg-mesh" />
      <div className="ct-orb ct-orb-1" />
      <div className="ct-orb ct-orb-2" />
      <div className="ct-orb ct-orb-3" />
      <div className="ct-dot-grid" />
      <div className="ct-bubbles">
        {BUBBLES.map((b, i) => (
          <div key={i} className={`ct-bubble ${b.v}`}
            style={{ width: b.size, height: b.size, left: `${b.left}%`, animationDuration: `${b.dur}s`, animationDelay: `${b.delay}s` }} />
        ))}
      </div>

      <main className="ct-page">

        {/* ══════════ HERO ══════════ */}
        <section className="ct-hero">
          <div className="ct-hero__inner">
            <div className="ct-badge fade-up visible">
              <span className="ct-badge-dot" />
              Let's Work Together
            </div>

            <h1 className="ct-hero__title fade-up visible" style={{ transitionDelay: "0.1s" }}>
              <span className="solid">Get In </span>
              <span className="grad">Touch</span>
            </h1>

            <p className="ct-hero__desc fade-up visible" style={{ transitionDelay: "0.2s" }}>
              Have a project in mind or want to discuss a potential collaboration? I'm just a message away.
            </p>
          </div>
        </section>

        <div className="ct-divider" />

        {/* ══════════ BODY ══════════ */}
        <section className="ct-body">
          <div className="ct-container">
            <div className="ct-grid">

              {/* ── Left: Info ── */}
              <div className="ct-card fade-up stagger-1" style={{ alignSelf: "start" }}>
                <div className="ct-card__heading">Contact Information</div>

                <div className="ct-info-list">
                  <div className="ct-info-item">
                    <div className="ct-info-icon"><MapPin size={18} /></div>
                    <div>
                      <h3>Location</h3>
                      <p>Pakistan</p>
                    </div>
                  </div>
                  <div className="ct-info-item">
                    <div className="ct-info-icon"><Mail size={18} /></div>
                    <div>
                      <h3>Email</h3>
                      <p>sairaatta.tech@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="ct-socials-label">Connect with me</div>
                <div className="ct-socials">
                  <a href="https://github.com/sairaatta" target="_blank" rel="noopener noreferrer" className="ct-social" aria-label="GitHub">
                    <Github size={18} />
                  </a>
                  <a href="https://www.linkedin.com/in/sairaatta/" target="_blank" rel="noopener noreferrer" className="ct-social" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href="mailto:sairaatta.tech@gmail.com" className="ct-social" aria-label="Email">
                    <Mail size={18} />
                  </a>
                </div>
              </div>

              {/* ── Right: Form ── */}
              <div className="ct-card fade-up stagger-2">
                <div className="ct-card__heading">Send Me a Message</div>

                {submitSuccess ? (
                  <div className="ct-success">
                    <div className="ct-success__icon"><Sparkles size={28} /></div>
                    <h3>Message Sent Successfully!</h3>
                    <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                    <button className="ct-success-btn" onClick={() => setSubmitSuccess(false)}>
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="ct-form">

                    <div className="ct-row">
                      <div className="ct-field">
                        <label htmlFor="name" className="ct-label">Your Name <span>*</span></label>
                        <input id="name" name="name" type="text" required placeholder="Your name"
                          value={formData.name} onChange={handleChange} className="ct-input" />
                      </div>
                      <div className="ct-field">
                        <label htmlFor="email" className="ct-label">Your Email <span>*</span></label>
                        <input id="email" name="email" type="email" required placeholder="your@email.com"
                          value={formData.email} onChange={handleChange} className="ct-input" />
                      </div>
                    </div>

                    <div className="ct-field">
                      <label htmlFor="subject" className="ct-label">Subject <span>*</span></label>
                      <input id="subject" name="subject" type="text" required placeholder="Project Inquiry"
                        value={formData.subject} onChange={handleChange} className="ct-input" />
                    </div>

                    <div className="ct-field">
                      <label htmlFor="message" className="ct-label">Message <span>*</span></label>
                      <textarea id="message" name="message" required placeholder="Tell me about your project or inquiry..."
                        value={formData.message} onChange={handleChange} className="ct-textarea" />
                    </div>

                    {submitError && <div className="ct-error">{submitError}</div>}

                    <button type="submit" disabled={submitting} className="ct-submit">
                      {submitting ? 'Sending…' : 'Send Message'} <Send size={17} />
                    </button>

                  </form>
                )}
              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default Contact;
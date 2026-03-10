import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const footerStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

  .ft-footer {
    position: relative; z-index: 1; overflow: hidden;
    background: linear-gradient(to bottom, transparent, rgba(2,11,24,0.95) 18%, #020b18 100%);
    border-top: 1px solid rgba(33,150,243,0.18);
    font-family: 'DM Sans', sans-serif; color: #f0f6ff;
    -webkit-font-smoothing: antialiased;
  }

  /* top shimmer line */
  .ft-footer::before {
    content: ''; display: block; width: 100%; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(33,150,243,0.4), rgba(0,229,255,0.7), rgba(33,150,243,0.4), transparent);
    position: absolute; top: 0; left: 0;
  }

  .ft-inner {
    max-width: 1440px; margin: 0 auto; padding: 72px 48px 36px;
  }

  /* ── Grid ── */
  .ft-grid {
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr;
    gap: 48px;
    margin-bottom: 56px;
  }
  @media (max-width: 900px) { .ft-grid { grid-template-columns: 1fr 1fr; } }
  @media (max-width: 580px) { .ft-grid { grid-template-columns: 1fr; } .ft-inner { padding: 56px 22px 32px; } }

  /* ── Logo ── */
  .ft-logo {
    font-family: 'Syne', sans-serif; font-size: 1.5rem; font-weight: 800;
    letter-spacing: -0.01em; text-decoration: none;
    display: inline-flex; align-items: center; gap: 3px;
    margin-bottom: 16px; position: relative;
  }
  .ft-logo .lg-first {
    background: linear-gradient(110deg, #4fc3f7 0%, #1976d2 40%, #00e5ff 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .ft-logo .lg-last { color: rgba(240,246,255,0.9); }

  .ft-desc {
    color: #7fa8cc; font-size: 0.9rem; line-height: 1.78; font-weight: 300;
    max-width: 300px; margin-bottom: 24px;
  }

  /* small social icons below description */
  .ft-socials { display: flex; gap: 10px; }
  .ft-social {
    width: 38px; height: 38px; border-radius: 10px;
    background: rgba(13,59,110,0.3); border: 1px solid rgba(41,182,246,0.22);
    display: flex; align-items: center; justify-content: center;
    color: #4fc3f7; text-decoration: none;
    transition: background 0.22s, border-color 0.22s, color 0.22s, transform 0.22s;
  }
  .ft-social:hover { background: rgba(33,150,243,0.18); border-color: rgba(0,229,255,0.5); color: #00e5ff; transform: translateY(-3px); }

  /* ── Column headings ── */
  .ft-col-heading {
    font-family: 'Syne', sans-serif; font-size: 0.82rem; font-weight: 700;
    letter-spacing: 0.13em; text-transform: uppercase; color: #4fc3f7;
    margin-bottom: 20px; position: relative; padding-bottom: 10px;
  }
  .ft-col-heading::after {
    content: ''; position: absolute; bottom: 0; left: 0;
    width: 28px; height: 1.5px;
    background: linear-gradient(90deg, #4fc3f7, #00e5ff);
  }

  /* ── Nav links ── */
  .ft-nav { display: flex; flex-direction: column; gap: 10px; }
  .ft-nav-link {
    font-size: 0.9rem; font-weight: 400; color: #7fa8cc; text-decoration: none;
    display: inline-flex; align-items: center; gap: 6px;
    transition: color 0.2s, gap 0.2s; width: fit-content;
  }
  .ft-nav-link .arrow { opacity: 0; transform: translateX(-4px); transition: opacity 0.2s, transform 0.2s; color: #00e5ff; }
  .ft-nav-link:hover { color: #e0f4ff; gap: 8px; }
  .ft-nav-link:hover .arrow { opacity: 1; transform: translateX(0); }

  /* ── Connect column ── */
  .ft-connect-email {
    display: inline-flex; align-items: center; gap: 7px;
    font-size: 0.88rem; color: #7fa8cc; font-weight: 300;
    text-decoration: none; margin-bottom: 20px;
    transition: color 0.2s;
  }
  .ft-connect-email:hover { color: #80deea; }
  .ft-connect-email svg { color: #4fc3f7; flex-shrink: 0; }

  /* ── Divider ── */
  .ft-divider {
    width: 100%; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(33,150,243,0.25), rgba(0,229,255,0.4), rgba(33,150,243,0.25), transparent);
    margin-bottom: 28px;
  }

  /* ── Bottom bar ── */
  .ft-bottom {
    display: flex; align-items: center; justify-content: center;
    flex-wrap: wrap; gap: 8px;
  }
  .ft-copy {
    font-size: 0.82rem; color: rgba(127,168,204,0.6); font-weight: 300;
    letter-spacing: 0.02em; text-align: center;
  }
  .ft-copy .hl { color: rgba(79,195,247,0.7); }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{footerStyles}</style>

      <footer className="ft-footer">
        <div className="ft-inner">

          {/* ── Main grid ── */}
          <div className="ft-grid">

            {/* Col 1 — Brand */}
            <div>
              <Link to="/" className="ft-logo">
                <span className="lg-first">SAIRA&nbsp;</span>
                <span className="lg-last">ATTA</span>
              </Link>

              <p className="ft-desc">
                Frontend Developer skilled in React.js, Tailwind CSS, and WordPress WooCommerce.
                Passionate about building modern, responsive, and user-friendly web experiences.
              </p>

              {/* <div className="ft-socials">
                <a href="https://github.com/sairaatta" target="_blank" rel="noopener noreferrer" className="ft-social" aria-label="GitHub">
                  <Github size={16} />
                </a>
                <a href="https://www.linkedin.com/in/sairaatta/" target="_blank" rel="noopener noreferrer" className="ft-social" aria-label="LinkedIn">
                  <Linkedin size={16} />
                </a>
                <a href="mailto:sairaatta098@gmail.com" className="ft-social" aria-label="Email">
                  <Mail size={16} />
                </a>
              </div> */}
            </div>

            {/* Col 2 — Quick Links */}
            <div>
              <div className="ft-col-heading">Quick Links</div>
              <nav className="ft-nav">
                {[
                  { label: 'Home',      path: '/' },
                  { label: 'About',     path: '/about' },
                  { label: 'Portfolio', path: '/portfolio' },
                  { label: 'Resume',    path: '/resume' },
                  { label: 'Contact',   path: '/contact' },
                ].map(item => (
                  <Link key={item.path} to={item.path} className="ft-nav-link">
                    <ArrowRight size={12} className="arrow" />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Col 3 — Connect */}
            <div>
              <div className="ft-col-heading">Connect</div>

              <a href="mailto:sairaatta098@gmail.com" className="ft-connect-email" style={{ display: 'flex' }}>
                <Mail size={15} /> sairaatta.tech@gmail.com
              </a>

              <div className="ft-socials">
                <a href="https://github.com/sairaatta" target="_blank" rel="noopener noreferrer" className="ft-social" aria-label="GitHub">
                  <Github size={16} />
                </a>
                <a href="https://www.linkedin.com/in/sairaatta/" target="_blank" rel="noopener noreferrer" className="ft-social" aria-label="LinkedIn">
                  <Linkedin size={16} />
                </a>
                <a href="mailto:sairaatta.tech@gmail.com" className="ft-social" aria-label="Email">
                  <Mail size={16} />
                </a>
              </div>
            </div>

          </div>

          {/* ── Bottom bar ── */}
          <div className="ft-divider" />
          <div className="ft-bottom">
            <p className="ft-copy">
              © {currentYear} <span className="hl">Saira Atta</span>. All rights reserved.
            </p>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
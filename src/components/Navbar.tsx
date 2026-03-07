import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Copy, Check, MessageCircle } from 'lucide-react';

const NAV_ITEMS = [
  { title: 'Home',      path: '/' },
  { title: 'About',     path: '/about' },
  { title: 'Portfolio', path: '/portfolio' },
  { title: 'Resume',    path: '/resume' },
  { title: 'Contact',   path: '/contact' },
];

const PHONE_NUMBER   = '+92 349 7222506'; 
const PHONE_DIALABLE = '+923497222506';   
const WHATSAPP_URL   = `https://wa.me/923497222506`; 

const navStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

  .nav-header {
    position: fixed; top: 0; left: 0; width: 100%; z-index: 50;
    transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }
  .nav-header.top { background: transparent; border-bottom: 1px solid transparent; box-shadow: none; }
  .nav-header.scrolled {
    background: rgba(2,11,24,0.82); border-bottom: 1px solid rgba(33,150,243,0.18);
    box-shadow: 0 4px 32px rgba(0,0,0,0.35), 0 1px 0 rgba(0,229,255,0.06) inset;
    backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
  }

  .nav-inner {
    max-width: 1440px; margin: 0 auto; padding: 0 48px;
    display: flex; align-items: center; justify-content: space-between; height: 68px;
  }

  .nav-logo {
    font-family: 'Syne', sans-serif; font-size: 1.35rem; font-weight: 800;
    text-decoration: none; letter-spacing: -0.01em;
    display: inline-flex; align-items: center; gap: 2px; position: relative;
  }
  .nav-logo .logo-first {
    background: linear-gradient(110deg, #4fc3f7 0%, #1976d2 40%, #00e5ff 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .nav-logo .logo-last { color: rgba(240,246,255,0.9); }
  .nav-logo::after {
    content: ''; position: absolute; bottom: -3px; left: 0; width: 100%; height: 1.5px;
    background: linear-gradient(90deg, #4fc3f7, #00e5ff, transparent);
    opacity: 0; transform: scaleX(0); transform-origin: left; transition: opacity 0.3s, transform 0.3s;
  }
  .nav-logo:hover::after { opacity: 1; transform: scaleX(1); }

  .nav-links { display: flex; align-items: center; gap: 36px; list-style: none; }
  .nav-link {
    font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500;
    color: rgba(176,210,240,0.8); text-decoration: none; letter-spacing: 0.03em;
    position: relative; padding: 6px 0; transition: color 0.2s;
  }
  .nav-link::after {
    content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 1.5px;
    background: linear-gradient(90deg, #4fc3f7, #00e5ff);
    transform: scaleX(0); transform-origin: right; transition: transform 0.28s ease;
  }
  .nav-link:hover { color: #e0f4ff; }
  .nav-link:hover::after { transform: scaleX(1); transform-origin: left; }
  .nav-link.active { color: #4fc3f7; }
  .nav-link.active::after { transform: scaleX(1); background: linear-gradient(90deg, #1976d2, #00e5ff); }

  /* ── Hire Me CTA + dropdown ── */
  .nav-cta-wrap { position: relative; }

  .nav-cta {
    display: inline-flex; align-items: center; gap: 7px; padding: 9px 22px;
    background: linear-gradient(130deg, #0d47a1 0%, #1976d2 50%, #039be5 85%, #29b6f6 100%);
    border-radius: 8px; font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 13.5px;
    color: #fff; cursor: pointer; border: none;
    box-shadow: 0 3px 14px rgba(13,71,161,0.5), 0 0 0 1px rgba(41,182,246,0.18);
    transition: transform 0.2s, box-shadow 0.2s; position: relative; overflow: hidden;
  }
  .nav-cta::before {
    content: ''; position: absolute; top: 0; left: -100%; width: 55%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
    transition: left 0.4s ease;
  }
  .nav-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(3,155,229,0.55), 0 0 0 1px rgba(41,182,246,0.35); }
  .nav-cta:hover::before { left: 150%; }

  /* Dropdown */
  .hire-dropdown {
    position: absolute; top: calc(100% + 12px); right: 0; min-width: 268px;
    background: rgba(4,14,28,0.97); border: 1px solid rgba(33,150,243,0.28);
    border-radius: 16px; padding: 20px; backdrop-filter: blur(24px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(0,229,255,0.05) inset;
    animation: dropIn 0.2s ease; z-index: 100;
  }
  @keyframes dropIn { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:translateY(0); } }

  .hire-dropdown__label {
    font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 600;
    letter-spacing: 0.12em; text-transform: uppercase; color: #4fc3f7; margin-bottom: 10px;
  }
  .hire-dropdown__number {
    font-family: 'Syne', sans-serif; font-size: 1.15rem; font-weight: 700;
    color: #f0f6ff; margin-bottom: 16px; letter-spacing: 0.02em;
  }
  .hire-dropdown__divider { height: 1px; background: rgba(33,150,243,0.15); margin-bottom: 14px; }
  .hire-dropdown__actions { display: flex; flex-direction: column; gap: 8px; }

  .hire-action {
    display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 9px;
    text-decoration: none; font-family: 'DM Sans', sans-serif; font-size: 13.5px; font-weight: 500;
    cursor: pointer; border: none; width: 100%; text-align: left;
    transition: all 0.18s; box-sizing: border-box;
  }
  .hire-action-call {
    background: linear-gradient(130deg, #0d47a1 0%, #1976d2 50%, #039be5 85%, #29b6f6 100%);
    color: #fff; box-shadow: 0 3px 12px rgba(13,71,161,0.4);
  }
  .hire-action-call:hover { box-shadow: 0 6px 20px rgba(3,155,229,0.5); transform: translateY(-1px); }
  .hire-action-wa { background: rgba(37,211,102,0.1); border: 1px solid rgba(37,211,102,0.25); color: #6ee7a0; }
  .hire-action-wa:hover { background: rgba(37,211,102,0.18); border-color: rgba(37,211,102,0.45); }
  .hire-action-copy { background: rgba(33,150,243,0.08); border: 1px solid rgba(33,150,243,0.2); color: #7fa8cc; }
  .hire-action-copy:hover { background: rgba(33,150,243,0.15); border-color: rgba(0,229,255,0.35); color: #80deea; }

  /* ── Mobile toggle ── */
  .nav-toggle {
    display: none; background: rgba(13,59,110,0.3); border: 1px solid rgba(41,182,246,0.3);
    border-radius: 8px; padding: 7px; color: #81d4fa; cursor: pointer;
    transition: background 0.2s, border-color 0.2s;
  }
  .nav-toggle:hover { background: rgba(33,150,243,0.15); border-color: rgba(0,229,255,0.5); }

  /* ── Mobile drawer ── */
  .nav-mobile {
    overflow: hidden; transition: max-height 0.32s ease, opacity 0.28s ease;
    background: rgba(2,11,24,0.96); border-bottom: 1px solid rgba(33,150,243,0.18);
    backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  }
  .nav-mobile.open  { max-height: 540px; opacity: 1; }
  .nav-mobile.closed { max-height: 0; opacity: 0; }

  .nav-mobile-inner {
    max-width: 1440px; margin: 0 auto;
    padding: 20px 28px 28px; display: flex; flex-direction: column; gap: 4px;
  }
  .nav-mobile-link {
    font-family: 'DM Sans', sans-serif; font-size: 1rem; font-weight: 500;
    color: rgba(176,210,240,0.8); text-decoration: none; padding: 12px 16px;
    border-radius: 10px; border: 1px solid transparent;
    transition: background 0.2s, color 0.2s, border-color 0.2s;
    display: flex; align-items: center; justify-content: space-between;
  }
  .nav-mobile-link:hover { background: rgba(33,150,243,0.1); border-color: rgba(33,150,243,0.2); color: #e0f4ff; }
  .nav-mobile-link.active { background: rgba(21,101,192,0.15); border-color: rgba(0,229,255,0.25); color: #4fc3f7; }
  .nav-mobile-dot { width: 5px; height: 5px; border-radius: 50%; background: #00e5ff; box-shadow: 0 0 6px #00e5ff; opacity: 0; transition: opacity 0.2s; }
  .nav-mobile-link.active .nav-mobile-dot { opacity: 1; }

  /* Mobile Hire Me card */
  .nav-mobile-hire {
    margin-top: 10px; padding: 18px 16px;
    background: rgba(13,59,110,0.2); border: 1px solid rgba(33,150,243,0.2);
    border-radius: 12px;
  }
  .nav-mobile-hire__label {
    font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
    color: #4fc3f7; margin-bottom: 6px;
  }
  .nav-mobile-hire__number {
    font-family: 'Syne', sans-serif; font-size: 1.05rem; font-weight: 700;
    color: #f0f6ff; margin-bottom: 12px;
  }
  .nav-mobile-hire__actions { display: flex; gap: 8px; }
  .nav-mobile-hire-btn {
    flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 7px;
    padding: 10px 14px; border-radius: 8px; font-family: 'DM Sans', sans-serif;
    font-size: 13px; font-weight: 600; text-decoration: none; border: none; cursor: pointer;
    transition: all 0.2s;
  }
  .nav-mobile-hire-btn.call {
    background: linear-gradient(130deg, #0d47a1, #1976d2 50%, #039be5 85%, #29b6f6);
    color: #fff; box-shadow: 0 3px 12px rgba(13,71,161,0.4);
  }
  .nav-mobile-hire-btn.wa {
    background: rgba(37,211,102,0.12); border: 1px solid rgba(37,211,102,0.28); color: #6ee7a0;
  }

  @media (max-width: 768px) {
    .nav-links, .nav-cta-wrap { display: none; }
    .nav-toggle { display: flex; }
    .nav-inner { padding: 0 20px; height: 60px; }
  }
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled]         = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen]     = useState(false);
  const [copied, setCopied]                 = useState(false);
  const dropdownRef                         = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileMenuOpen(false); setDropdownOpen(false); }, [location]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(PHONE_NUMBER);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <style>{navStyles}</style>

      <header className={`nav-header ${isScrolled ? 'scrolled' : 'top'}`}>

        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            <span className="logo-first">SAIRA&nbsp;</span>
            <span className="logo-last">ATTA</span>
          </Link>

          <nav>
            <ul className="nav-links">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>

            {/* Desktop Hire Me + dropdown */}
            <div className="nav-cta-wrap" ref={dropdownRef}>
              <button className="nav-cta" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <Phone size={14} /> Hire Me
              </button>

              {dropdownOpen && (
                <div className="hire-dropdown">
                  <div className="hire-dropdown__label">Get in touch</div>
                  <div className="hire-dropdown__number">{PHONE_NUMBER}</div>
                  <div className="hire-dropdown__divider" />
                  <div className="hire-dropdown__actions">
                    <a href={`tel:${PHONE_DIALABLE}`} className="hire-action hire-action-call">
                      <Phone size={15} /> Call Now
                    </a>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hire-action hire-action-wa">
                      <MessageCircle size={15} /> WhatsApp
                    </a>
                    <button className="hire-action hire-action-copy" onClick={handleCopy}>
                      {copied ? <Check size={15} /> : <Copy size={15} />}
                      {copied ? 'Copied!' : 'Copy Number'}
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button className="nav-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}>
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div className={`nav-mobile ${mobileMenuOpen ? 'open' : 'closed'}`}>
          <div className="nav-mobile-inner">
            {NAV_ITEMS.map((item) => (
              <Link key={item.path} to={item.path}
                className={`nav-mobile-link ${location.pathname === item.path ? 'active' : ''}`}>
                {item.title}
                <span className="nav-mobile-dot" />
              </Link>
            ))}

            {/* Mobile Hire Me card */}
            <div className="nav-mobile-hire">
              <div className="nav-mobile-hire__label">Hire Me</div>
              <div className="nav-mobile-hire__number">{PHONE_NUMBER}</div>
              <div className="nav-mobile-hire__actions">
                <a href={`tel:${PHONE_DIALABLE}`} className="nav-mobile-hire-btn call">
                  <Phone size={14} /> Call
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="nav-mobile-hire-btn wa">
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>

      </header>
    </>
  );
};

export default Navbar;
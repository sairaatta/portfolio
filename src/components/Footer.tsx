
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-white py-12">
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-heading font-bold">
              <span className="text-brand-red">SAIRA </span>ATTA
            </h2>
            <p className="text-gray-400 max-w-md">
              Frontend Developer skilled in React.js, Tailwind CSS, HTML, CSS, and JavaScript. Passionate about clean UI, responsive design, and building user-focused web interfaces.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-400 hover:text-brand-red transition-standard">Home</Link>
              <Link to="/about" className="text-gray-400 hover:text-brand-red transition-standard">About</Link>
              <Link to="/portfolio" className="text-gray-400 hover:text-brand-red transition-standard">Portfolio</Link>
              <Link to="/resume" className="text-gray-400 hover:text-brand-red transition-standard">Resume</Link>
              <Link to="/contact" className="text-gray-400 hover:text-brand-red transition-standard">Contact</Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/sairaatta"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-brand-red transition-standard"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/sairaatta/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-brand-red transition-standard"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="sairaatta098@gmail.com"
                className="bg-white/10 p-2 rounded-full hover:bg-brand-red transition-standard"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400">sairaatta098@gmail.com</p>
          </div>
        </div>

        {/* <div className="border-t border-white/10 mt-8 pt-8 text-center md:text-left">
          <p className="text-gray-400">
            © {currentYear} <span className="text-brand-red">DEV</span>FOLIO. All rights reserved.
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;

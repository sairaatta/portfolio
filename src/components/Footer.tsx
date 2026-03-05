import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#0f0f0f] via-[#111111] to-black text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Logo & Description */}
          <div className="space-y-5">
            <h2 className="text-3xl font-bold tracking-wide">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                SAIRA
              </span>{" "}
              ATTA
            </h2>

            <p className="text-gray-400 leading-relaxed max-w-sm">
              Frontend Developer skilled in React.js, Tailwind CSS, HTML, CSS,
              JavaScript, and WordPress WooCommerce. Passionate about building
              modern, responsive, and user-friendly web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold">Quick Links</h3>

            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-400 hover:text-red-400 transition duration-300">Home</Link>
              <Link to="/about" className="text-gray-400 hover:text-red-400 transition duration-300">About</Link>
              <Link to="/portfolio" className="text-gray-400 hover:text-red-400 transition duration-300">Portfolio</Link>
              <Link to="/resume" className="text-gray-400 hover:text-red-400 transition duration-300">Resume</Link>
              <Link to="/contact" className="text-gray-400 hover:text-red-400 transition duration-300">Contact</Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold">Connect</h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/sairaatta"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 backdrop-blur-md p-3 rounded-full border border-white/10 hover:bg-red-500 hover:scale-110 transition duration-300"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/sairaatta/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 backdrop-blur-md p-3 rounded-full border border-white/10 hover:bg-red-500 hover:scale-110 transition duration-300"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:sairaatta098@gmail.com"
                className="bg-white/5 backdrop-blur-md p-3 rounded-full border border-white/10 hover:bg-red-500 hover:scale-110 transition duration-300"
              >
                <Mail size={20} />
              </a>

            </div>

            <p className="text-gray-400 text-sm">
              sairatta098@gmail.com
            </p>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-6 flex justify-center items-center">

          <p className="text-gray-400 text-sm text-center">
            © {currentYear} Saira Atta. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
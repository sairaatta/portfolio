import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Server, Layers, Monitor } from "lucide-react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative pt-16 text-white overflow-hidden">

      {/* GLOBAL BACKGROUND (ONLY ONE SYSTEM) */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-400/20" />
      <div className="fixed -top-40 -left-40 w-[600px] h-[600px] bg-blue-500/20 blur-[180px] rounded-full -z-10" />
      <div className="fixed -bottom-40 -right-40 w-[600px] h-[600px] bg-cyan-400/20 blur-[180px] rounded-full -z-10" />
      <div className="fixed inset-0 -z-10 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:40px_40px]" />

      {/* ================= HERO ================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-24">
        <div className="page-container text-center space-y-8 max-w-5xl mx-auto">

          <span className="inline-block px-5 py-2 bg-white/5 border border-white/10 rounded-full text-sm backdrop-blur-md">
            Frontend & eCommerce WordPress Developer
          </span>

          <h1 className="heading-xl font-serif leading-tight">
            Designing &
            <span className="bg-gradient-to-r from-brand-purple to-brand-red bg-clip-text text-transparent">
              {" "}Developing Beautiful
            </span>{" "}
            User Interfaces
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I'm a passionate <span className="font-semibold text-white">Frontend & WordPress Developer</span> specializing in building responsive, user-friendly websites and eCommerce platforms.

            I develop modern web interfaces using <span className="text-brand-purple">HTML</span>,
            <span className="text-brand-purple"> CSS</span>,
            <span className="text-brand-purple"> JavaScript</span>, and frameworks like
            <span className="text-brand-purple"> React.js</span>.

            I also build dynamic and scalable websites using
            <span className="text-brand-red"> WordPress</span>, including custom theme development,
            <span className="text-brand-red"> WooCommerce</span> store setup, plugin customization, and performance optimization.

            My focus is on <span className="text-brand-purple">clean code</span>,
            <span className="text-brand-purple">accessibility</span>,
            <span className="text-brand-purple">SEO optimization</span>, and
            <span className="text-brand-purple">performance-driven design</span>.

            I convert <span className="text-brand-red">Figma</span> designs into fully functional, responsive websites with pixel-perfect accuracy.
          </p>

          <div className="flex flex-wrap justify-center gap-5 pt-6">
            <Link
              to="/portfolio"
              className="px-7 py-3 bg-gradient-to-r from-brand-purple to-brand-red rounded-lg font-medium inline-flex items-center gap-2 hover:opacity-90 transition duration-300 shadow-lg"
            >
              View My Work <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="px-7 py-3 bg-white/5 border border-white/10 rounded-lg font-medium inline-flex items-center gap-2 hover:bg-white/10 transition duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="relative py-24">
        <div className="page-container">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <h2 className="heading-lg">
              My <span className="bg-gradient-to-r from-brand-purple to-brand-red bg-clip-text text-transparent">Technical Expertise</span>
            </h2>
            <p className="text-gray-400 text-lg">
              I build high-performance websites and eCommerce platforms, transforming modern UI designs into scalable, responsive digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Frontend Development */}
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-brand-purple/40 transition duration-300 hover:-translate-y-2">
              <div className="text-brand-purple mb-4">
                <Monitor size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Frontend Development</h3>
              <p className="text-gray-400 mb-4">
                Building modern, interactive user interfaces using React.js and scalable frontend architectures.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="skill-pill">React.js</span>
                <span className="skill-pill">JavaScript (ES6+)</span>
                <span className="skill-pill">Tailwind CSS</span>
                <span className="skill-pill">Responsive Design</span>
              </div>
            </div>

            {/* WordPress Development */}
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-brand-purple/40 transition duration-300 hover:-translate-y-2">
              <div className="text-brand-red mb-4">
                <Server size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">WordPress Development</h3>
              <p className="text-gray-400 mb-4">
                Developing custom themes, dynamic CMS solutions, and scalable WordPress websites.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="skill-pill">Custom Themes</span>
                <span className="skill-pill">Plugin Customization</span>
                <span className="skill-pill">ACF</span>
                <span className="skill-pill">Performance Optimization</span>
              </div>
            </div>

            {/* WooCommerce Development */}
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-brand-red/40 transition duration-300 hover:-translate-y-2">
              <div className="text-brand-purple mb-4">
                <Layers size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">WooCommerce Development</h3>
              <p className="text-gray-400 mb-4">
                Creating secure, conversion-focused online stores with seamless checkout experiences.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="skill-pill">Store Setup</span>
                <span className="skill-pill">Payment Integration</span>
                <span className="skill-pill">Product Optimization</span>
                <span className="skill-pill">Speed Optimization</span>
              </div>
            </div>

            {/* Figma to Website */}
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-brand-red/40 transition duration-300 hover:-translate-y-2">
              <div className="text-brand-red mb-4">
                <Monitor size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Figma to Website</h3>
              <p className="text-gray-400 mb-4">
                Converting Figma designs into pixel-perfect, fully responsive websites with clean code.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="skill-pill">Pixel Perfect</span>
                <span className="skill-pill">Cross-Browser</span>
                <span className="skill-pill">Mobile First</span>
                <span className="skill-pill">SEO Friendly</span>
              </div>
            </div>

          </div>

          <div className="mt-14 text-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-purple to-brand-red bg-clip-text text-transparent font-semibold hover:opacity-80 transition"
            >
              Learn more about my skills <ArrowRight size={16} />
            </Link>
          </div>



        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="relative py-24">
        <div className="page-container">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">

            <h2 className="heading-lg">
              Featured <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg">
              A showcase of my recent work demonstrating clean UI and technical expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            <div className="group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400/40 transition duration-300 hover:-translate-y-2">
              <img
                src="/Home.png"
                alt="Industrial Project"
                className="w-full aspect-video object-contain bg-black transition group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition">
                  Project Allocation & Evaluation According to NCEAC Rules
                </h3>
                <p className="text-gray-400 mb-4">
                  A centralized final-year project management system with secure RBAC, automated supervisor allocation, and structured evaluation workflows.
                  Designed to improve transparency, efficiency, and compliance with accreditation standards.<br />
                  (Frontend prototype deployed & Backend architecture implemented locally.)          </p>
                <a
                  href="https://fypproject-rho.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 font-medium hover:underline"
                >
                  🔗 View Frontend Demo
                </a>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400/40 transition duration-300 hover:-translate-y-2">
              <img
                src="/nature-home.png"
                alt="Industrial Project"
                className="w-full aspect-video object-contain bg-black transition group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition">

                  Nature True Green Landscaping – Website Development Project                </h3>
                <p className="text-gray-400 mb-4">
                  Built a fully responsive, performance-optimized business website using modern frontend technologies, implementing SEO best practices, structured service architecture, and WhatsApp API integration to drive lead generation and user engagement.                         </p>
                <a
                  href="https://naturetruegreenlandscaping.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 font-medium hover:underline"
                >
                  🔗 View Live Demo
                </a>
              </div>
            </div>

          </div>

          <div className="mt-14 text-center">
            <Link
              to="/portfolio"
              className="px-7 py-3 bg-gradient-to-r from-brand-purple to-brand-red rounded-lg font-medium inline-flex items-center gap-2 hover:opacity-90 transition duration-300 shadow-lg"
            >
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-400 text-lg">
            Let’s build something modern and high-performing together.
          </p>
          <Link
            to="/contact"
            className="px-7 py-3 bg-gradient-to-r from-brand-purple to-brand-red rounded-lg font-medium inline-flex items-center gap-2 hover:opacity-90 transition duration-300 shadow-lg"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  );
};

export default Home;
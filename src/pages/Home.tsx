
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Server, Layers, Monitor } from 'lucide-react';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-16 page-transition">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-brand-black to-brand-gray text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]" />
        </div>

        <div className="page-container py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 md:space-y-8 max-w-2xl animate-fade-in">
              <span className="inline-block px-4 py-2 bg-brand-red rounded-full text-sm font-medium tracking-wide">
                Frontend Developer
              </span>
              <h1 className="heading-xl">
                Designing & <span className="text-brand-red"> Developing Beautiful</span> User Interfaces
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                I'm a passionate <span className="font-semibold text-white">Frontend Developer</span> who specializes in building responsive, user-friendly web interfaces using <span className="text-brand-red">HTML</span>, <span className="text-brand-red">CSS</span>, <span className="text-brand-red">JavaScript</span>, and modern frameworks like <span className="text-brand-red">React.js</span>. I focus on <span className="text-brand-red">clean code</span>, <span className="text-brand-red">accessibility</span>, and <span className="text-brand-red">performance-driven design</span>. I also create intuitive UI mockups and prototypes using <span className="text-brand-red">Figma</span> to bring web designs to life.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/portfolio"
                  className="px-6 py-3 bg-brand-red rounded-lg font-medium inline-flex items-center gap-2 hover:bg-red-700 transition-standard"
                >
                  View My Work <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-muted text-white rounded-lg font-medium inline-flex items-center gap-2 hover:bg-secondary transition-standard"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            <div className="hidden md:block relative animate-fade-in-right">
              <div className="relative bg-gradient-to-tr from-brand-red/20 to-brand-red/10 rounded-2xl overflow-hidden aspect-square max-w-md mx-auto shadow-2xl">
                <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-40 mix-blend-overlay" />
                <div className="absolute inset-0 backdrop-blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-foreground/80">&lt;/&gt;</span>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-brand-red/20 rounded-2xl backdrop-blur-md -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview Section */}
      <section className="page-section bg-brand-charcoal/30">
        <div className="page-container">
          <div className="space-y-6 text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg">Technical Expertise</h2>
            <p className="text-muted-foreground text-lg">
              I specialize in crafting modern, responsive, and accessible web interfaces using <span className="text-brand-red">HTML</span>, <span className="text-brand-red">CSS</span>, <span className="text-brand-red">JavaScript</span>, <span className="text-brand-red">React.js</span>, and <span className="text-brand-red">Tailwind CSS</span>. I also design intuitive UI mockups in <span className="text-brand-red">Figma</span>, ensuring seamless user experiences across devices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-md border border-border hover:shadow-lg transition-standard">
              <div className="text-brand-red mb-4">
                <Monitor size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <p className="text-muted-foreground mb-4">
                Creating responsive, dynamic user interfaces with <span className="text-brand-red">JavaScript</span>, React, and modern CSS frameworks.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brand-red/20 text-brand-red text-xs font-medium rounded-full">JavaScript</span>
                <span className="px-3 py-1 bg-brand-red/20 text-brand-red text-xs font-medium rounded-full">React</span>
                <span className="px-3 py-1 bg-brand-red/20 text-brand-red text-xs font-medium rounded-full">Redux</span>
                <span className="px-3 py-1 bg-brand-red/20 text-brand-red text-xs font-medium rounded-full">TailwindCSS</span>
              </div>
            </div>


            <div className="bg-card p-6 rounded-xl shadow-md border border-border hover:shadow-lg transition-standard">
              <div className="text-brand-red mb-4">
                <Server size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-muted-foreground mb-4">
                Designing clean, user-friendly interfaces and interactive mockups using Figma and design systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brand-red/20 text-brand-red text-xs font-medium rounded-full">Figma</span>
                <span className="px-3 py-1 bg-brand-red/20 text-brand-red text-xs font-medium rounded-full">Wireframing</span>
                <span className="px-3 py-1 bg-brand-red/20 text-brand-red text-xs font-medium rounded-full">Prototyping</span>
              </div>
            </div>


            <div className="bg-card p-6 rounded-xl shadow-md border border-border hover:shadow-lg transition-standard">
              <div className="text-brand-red mb-4">
                <Monitor size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance & Accessibility</h3>
              <p className="text-muted-foreground mb-4">
                Optimizing web applications for fast loading times, accessibility standards, and seamless experiences on all devices.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brand-red/20 text-brand-red text-xs font-medium rounded-full">Lighthouse</span>
                <span className="px-3 py-1 bg-brand-red/20 text-brand-red text-xs font-medium rounded-full">ARIA</span>
                <span className="px-3 py-1 bg-brand-red/20 text-brand-red text-xs font-medium rounded-full">Web Vitals</span>
              </div>
            </div>


            <div className="bg-card p-6 rounded-xl shadow-md border border-border hover:shadow-lg transition-standard">
              <div className="text-brand-red mb-4">
                <Layers size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Testing & Version Control</h3>
              <p className="text-muted-foreground mb-4">
                Ensuring code quality and stability with modern testing practices and collaborative workflows using Git.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brand-red/20 text-brand-red text-xs font-medium rounded-full">Git</span>
                <span className="px-3 py-1 bg-brand-red/20 text-brand-red text-xs font-medium rounded-full">Jest</span>
                <span className="px-3 py-1 bg-brand-red/20 text-brand-red text-xs font-medium rounded-full">GitHub</span>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-brand-purple font-medium hover:underline"
            >
              Learn more about my skills <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="page-section bg-gradient-to-b from-background to-muted">
        <div className="page-container">
          <div className="space-y-6 text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg">Featured Projects</h2>
            <p className="text-muted-foreground text-lg">
              A showcase of my most recent work, demonstrating my technical expertise and problem-solving abilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-standard border border-border">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src="/e-com-project.png"
                  alt="E-Commerce Website"
                  className="w-full h-full object-cover object-center transition-standard group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-standard flex items-end">
                  <div className="p-6">
                    <div className="flex gap-3">
                      <span className="px-3 py-1 bg-muted/40 text-foreground text-xs font-medium rounded-full">React.js</span>
                      <span className="px-3 py-1 bg-muted/40 text-foreground text-xs font-medium rounded-full">Tailwind CSS</span>
                      <span className="px-3 py-1 bg-muted/40 text-foreground text-xs font-medium rounded-full">Responsive Design</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-card">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-red transition-standard">
                  Responsive E-Commerce Website
                </h3>
                <p className="text-muted-foreground mb-4">
                  A modern e-commerce frontend built with React.js and Tailwind CSS. Features product listings, a shopping cart, and a fully responsive design for seamless user experience across all devices.
                </p>
                <a
                  href="https://e-commerce-website-phi-neon.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm font-medium text-brand-red hover:underline"
                >

                  🔗 View Live Demo
                  <br />
                  https://e-commerce-website-phi-neon.vercel.app/
                </a>
              </div>


            </div>

            <div className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-standard border border-border">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src="/fidelity-clone.png"
                  alt="Fidelity Clone Project"
                  className="w-full h-full object-cover object-center transition-standard group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-standard flex items-end">
                  <div className="p-6">
                    <div className="flex gap-3">
                      <span className="px-3 py-1 bg-muted/40 text-foreground text-xs font-medium rounded-full">React.js</span>
                      <span className="px-3 py-1 bg-muted/40 text-foreground text-xs font-medium rounded-full">Tailwind CSS</span>
                      <span className="px-3 py-1 bg-muted/40 text-foreground text-xs font-medium rounded-full">UI Clone</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-card">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-red transition-standard">Fidelity.com Clone</h3>
                <p className="text-muted-foreground mb-4">
                  A responsive clone of Fidelity.com built using React.js and Tailwind CSS, showcasing precision in layout, design, and UI responsiveness.
                </p>
                <a
                  href="https://your-live-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm font-medium text-brand-red hover:underline"
                >
                  🔗 View Live Demo
                  <br />
                  https://fidelity-clone-react-project-n8yn.vercel.app/
                </a>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <Link
              to="/portfolio"
              className="px-6 py-3 bg-brand-red text-white rounded-lg font-medium inline-flex items-center gap-2 hover:bg-red-700 transition-standard"
            >
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-black text-white">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="heading-lg">Ready to Start Your Project?</h2>
            <p className="text-gray-300 text-lg">
              Let's collaborate to bring your ideas to life with modern technologies and best practices.
            </p>
            <div className="pt-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-brand-red rounded-lg font-medium inline-flex items-center gap-2 hover:bg-red-700 transition-standard"
              >
                Get in Touch <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

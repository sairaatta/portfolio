
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Server, Layers, Monitor, Cpu, Globe, Lock } from 'lucide-react';
import SkillCard from '@/components/SkillCard';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-16 page-transition">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-400/20" />
      <div className="fixed -top-40 -left-40 w-[600px] h-[600px] bg-blue-500/20 blur-[180px] rounded-full -z-10" />
      <div className="fixed -bottom-40 -right-40 w-[600px] h-[600px] bg-cyan-400/20 blur-[180px] rounded-full -z-10" />
      <div className="fixed inset-0 -z-10 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:40px_40px]" />
      {/* Hero Section */}

      <section className="relative min-h-[90vh] flex items-center justify-center py-24">
        <div className="page-container text-center space-y-6 max-w-xl mx-auto">



          <h1 className="heading-xl font-serif leading-tight">
            About
            <span className="bg-gradient-to-r from-brand-purple to-brand-red bg-clip-text text-transparent">
              {" "} Me
            </span>{" "}
          </h1>

          <p className="text-lg text-white mb-6">
            I'm a passionate <span className="text-red-500 font-semibold">Frontend</span> and <span className="text-red-500 font-semibold">WordPress Developer</span> with over <span className="text-red-500 font-semibold">2 years of experience</span> crafting responsive and scalable web applications and intuitive digital interfaces for clients across various industries. I specialize in building modern UIs using <span className="text-red-500 font-semibold">HTML</span>, <span className="text-red-500 font-semibold">CSS</span>, <span className="text-red-500 font-semibold">JavaScript</span>, <span className="text-red-500 font-semibold">React.js</span>, and <span className="text-red-500 font-semibold">Tailwind CSS</span>, while converting <span className="text-red-500 font-semibold">Figma designs</span> into fully responsive websites. I also provide <span className="text-red-500 font-semibold">WooCommerce</span> development services as a freelancer on Fiverr, building functional, responsive eCommerce websites focused on <span className="text-red-500 font-semibold">performance</span>, <span className="text-red-500 font-semibold">SEO</span>, and <span className="text-red-500 font-semibold">user experience</span>.
          </p>

          <p className="text-lg text-white mb-6">
            Beyond coding, I enjoy collaborating with designers and clients to transform ideas into functional digital solutions. I’m constantly refining my skills in <span className="text-red-500 font-semibold">React.js</span>, <span className="text-red-500 font-semibold">Tailwind CSS</span>, and exploring modern tools like <span className="text-red-500 font-semibold">Figma</span> to improve design handoffs and workflow efficiency.
          </p>

          <p className="text-lg text-white mb-6">
            I am passionate about creating beautiful, intuitive, and interactive interfaces that not only look great but also solve real problems for users. Every project I work on is an opportunity to combine <span className="text-red-500 font-semibold">creativity</span>, <span className="text-red-500 font-semibold">performance</span>, and <span className="text-red-500 font-semibold">usability</span> in perfect harmony.
          </p>



          <div className="flex flex-wrap justify-center gap-5 pt-6">
            <Link
              to="/portfolio"
              className="px-7 py-3 bg-gradient-to-r from-brand-purple to-brand-red rounded-lg font-medium inline-flex items-center gap-2 hover:opacity-90 transition duration-300 shadow-lg"
            >
              View My Work <ArrowRight size={18} />
            </Link>

            <Link
              to="/resume"
              className="px-7 py-3 bg-white/5 border border-white/10 rounded-lg font-medium inline-flex items-center gap-2 hover:bg-white/10 transition duration-300"
            >
              My Resume
            </Link>
          </div>
        </div>
      </section>



      {/* Experience & Education */}
      <section className="page-section ">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="heading-md">Professional Experience</h2>

              <div className="border-l-2 border-brand-red pl-6 space-y-12 relative">
                <div className="absolute w-3 h-3 bg-brand-red rounded-full -left-[7px] top-0" />

                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold">ReactJS Developer Remote </h3>
                    <span className="text-sm font-medium px-3 py-1 bg-brand-red/20 text-brand-red rounded-full">Jan 2025 - May 2025</span>
                  </div>
                  <h4 className="text-muted-foreground">Precise Tech, Canada</h4>
                  <p className="text-muted-foreground">
                    Created responsive user interfaces and implemented frontend functionality for web applications and worked on distribution management systems.
                  </p>
                </div>



                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold">Frontend Developer Intern</h3>
                    <span className="text-sm font-medium px-3 py-1 bg-brand-red/20 text-brand-red rounded-full">Nov 2024 - Jan 2025</span>
                  </div>
                  <h4 className="text-muted-foreground">DevelopersHub Corporation©, Islamabad</h4>
                  <p className="text-muted-foreground">
                    Developed and maintained projects, focusing on responsive design and API integrations.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold">Frontend Developer Internship</h3>
                    <span className="text-sm font-medium px-3 py-1 bg-brand-red/20 text-brand-red rounded-full">Aug 2024 - Oct 2024</span>
                  </div>
                  <h4 className="text-muted-foreground">Social Swirl, Lahore</h4>
                  <p className="text-muted-foreground">
                    Gained hands-on experience in JavaScript and React.js fundamentals. Built a responsive e-commerce project using React and Tailwind CSS, enhancing skills in component-based development and frontend design.
                  </p>

                </div>

              </div>
            </div>

            <div className="space-y-8">
              <h2 className="heading-md">Education </h2>

              <div className="border-l-2 border-brand-red pl-6 space-y-12 relative">
                <div className="absolute w-3 h-3 bg-brand-red rounded-full -left-[7px] top-0" />


                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold">BS Computer Science</h3>
                    <span className="text-sm font-medium px-3 py-1 bg-brand-red/20 text-brand-red rounded-full">2021 -2025</span>
                  </div>
                  <h4 className="text-muted-foreground">COMSATS University Islamabad</h4>
                  <div className="flex justify-start items-start ">
                    <h3 className="text-muted-foreground mr-4"> Grade: A</h3>
                    <span className="text-sm font-medium px-3 py-1 bg-brand-red/20 text-brand-red rounded-full">GPA: 3.64</span>
                  </div>


                  <p className="text-muted-foreground">
                    Major in Computer Science with focus on web technologies and Web application development.
                  </p>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="page-section">
        <div className="page-container">
          <div className="space-y-6 text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg">Technical Skills</h2>
            <p className="text-muted-foreground text-lg">
              A comprehensive overview of my technical expertise and specialized skill set.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <SkillCard
              title="HTML & CSS"
              icon={<Code size={24} />}
              description="Building structured web pages with HTML and styling them effectively using modern CSS."
            />

            <SkillCard
              title="JavaScript"
              icon={<Cpu size={24} />}
              description="Adding interactivity and dynamic behavior using vanilla JavaScript and ES6+ features."
            />

            <SkillCard
              title="React.js"
              icon={<Monitor size={24} />}
              description="Developing component-based user interfaces and SPAs with React.js using hooks and Vite."
            />

            <SkillCard
              title="Tailwind CSS"
              icon={<Layers size={24} />}
              description="Creating sleek and responsive UIs using utility-first Tailwind CSS framework."
            />

            <SkillCard
              title="WordPress Development"
              icon={<Server size={24} />}
              description="Custom WordPress themes, plugin development, and full website development tailored to client requirements."
            />

            <SkillCard
              title="WooCommerce"
              icon={<Layers size={24} />}
              description="Building secure, responsive, and conversion-optimized eCommerce stores using WooCommerce."
            />

            <SkillCard
              title="Page Builders & Customization"
              icon={<Monitor size={24} />}
              description="Working with Elementor, WPBakery, and Gutenberg to create flexible, client-friendly websites."
            />

            <SkillCard
              title="WordPress Security & Backup"
              icon={<Globe size={24} />}
              description="Implementing security best practices, regular backups, and malware protection for WordPress sites."
            />

            <SkillCard
              title="SEO & Performance Optimization"
              icon={<Monitor size={24} />}
              description="Enhancing website speed, SEO, and accessibility for better user experience and search ranking."
            />

            <SkillCard
              title="Plugin Customization"
              icon={<Server size={24} />}
              description="Modifying and extending existing WordPress plugins to meet project-specific requirements."
            />

            <SkillCard
              title="Database & CMS Basics"
              icon={<Database size={24} />}
              description="Managing website content and data using MySQL, PHP, and WordPress database integrations."
            />

            <SkillCard
              title="Responsive Web Design"
              icon={<Monitor size={24} />}
              description="Implementing fully responsive designs across mobile, tablet, and desktop using CSS, Tailwind, and Bootstrap."
            />

            <SkillCard
              title="Git & GitHub"
              icon={<Globe size={24} />}
              description="Version control, collaboration, and code management using Git and GitHub."
            />

            <SkillCard
              title="VS Code / Visual Studio"
              icon={<Code size={24} />}
              description="Coding efficiently in Visual Studio Code and Visual Studio with essential developer extensions."
            />

            <SkillCard
              title="REST API Integration"
              icon={<Globe size={24} />}
              description="Integrating frontend apps with RESTful APIs for dynamic data using Fetch or Axios."
            />

          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="page-section">
        <div className="page-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-md mb-8 text-center">Beyond Coding</h2>

            <div className="space-y-8">
              <p className="text-lg">
                When I'm not immersed in code, I enjoy exploring new technologies through personal projects and contributing to open-source communities.
                Outside the tech world, I'm passionate about <span className="font-semibold">cooking</span> and <span className="font-semibold">walking</span>.
              </p>

              <p className="text-lg">
                I'm passionate about staying updated with the latest industry trends and sharing knowledge through mentorship and tech meetups.
                I believe in continuous learning and regularly participate in hackathons and coding challenges to push my boundaries.
              </p>

              <div className="mt-10 text-center">
                <Link
                  to="/contact"
                  className="px-7 py-3 bg-gradient-to-r from-brand-purple to-brand-red rounded-lg font-medium inline-flex items-center gap-2 hover:opacity-90 transition duration-300 shadow-lg"
                >
                  Let's Connect <ArrowRight size={18} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

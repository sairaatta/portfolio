
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
      {/* Hero Section */}
      <section className="bg-brand-gray text-white py-24">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-fade-in">
              <h1 className="heading-lg mb-6">About Me</h1>
              <p className="text-lg text-gray-300 mb-6">
                I'm a passionate Frontend Developer with over 1.5 years of experience crafting responsive, scalable web applications and intuitive digital interfaces for clients across various industries.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                My journey in web development began with a fascination for interactive design and user experience. Today, I specialize in building modern UIs using HTML, CSS, JavaScript, React.js, and Tailwind CSS, while continuously exploring new technologies and tools like Figma to enhance usability and visual appeal.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/portfolio"
                  className="px-6 py-3 bg-brand-red rounded-lg font-medium inline-flex items-center gap-2 hover:bg-red-700 transition-standard"
                >
                  View My Work <ArrowRight size={18} />
                </Link>
                <Link
                  to="/resume"
                  className="px-6 py-3 bg-muted text-white rounded-lg font-medium inline-flex items-center gap-2 hover:bg-secondary transition-standard"
                >
                  My Resume
                </Link>
              </div>
            </div>

            <div className="order-1 md:order-2 relative animate-fade-in-right">
              <div className="relative rounded-2xl overflow-hidden aspect-square max-w-md mx-auto">
                {/* Glowing effect container */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/30 to-brand-red/20 rounded-2xl blur-xl"></div>

                {/* Main image container with gradient overlay */}
                <div className="relative bg-gradient-to-tr from-brand-purple/30 to-brand-red/20 rounded-2xl overflow-hidden aspect-square max-w-md mx-auto shadow-2xl border border-brand-purple/20 backdrop-blur-sm">
                  <img
                    src="/placeholder.svg"
                    alt="Developer"
                    className="w-full h-full object-cover object-center mix-blend-overlay opacity-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-black/70" />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-purple/20 rounded-full blur-xl" />
                <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-brand-red/20 rounded-2xl -z-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-brand-purple/10 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="page-section bg-gradient-to-b from-background to-muted">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="heading-md">Professional Experience</h2>

              <div className="border-l-2 border-brand-red pl-6 space-y-12 relative">
                <div className="absolute w-3 h-3 bg-brand-red rounded-full -left-[7px] top-0" />

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

                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold">Frontend Developer</h3>
                    <span className="text-sm font-medium px-3 py-1 bg-brand-red/20 text-brand-red rounded-full">Nov 2024 - Jan 2025</span>
                  </div>
                  <h4 className="text-muted-foreground">DevelopersHub Corporation©, Islamabad</h4>
                  <p className="text-muted-foreground">
                    Developed and maintained projects, focusing on responsive design and API integrations.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold">ReactJS Developer Remote Intern</h3>
                    <span className="text-sm font-medium px-3 py-1 bg-brand-red/20 text-brand-red rounded-full">Jan 2025 - May 2025</span>
                  </div>
                  <h4 className="text-muted-foreground">Precise Tech, Canada</h4>
                  <p className="text-muted-foreground">
                    Created responsive user interfaces and implemented frontend functionality for web applications and worked on distribution management systems.
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
                  <p className="text-muted-foreground">
                    Major in Computer Science with focus on web technologies and application development.
                  </p>
                </div>

                {/* <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold">AWS Certified Developer</h3>
                    <span className="text-sm font-medium px-3 py-1 bg-brand-red/20 text-brand-red rounded-full">2022</span>
                  </div>
                  <h4 className="text-muted-foreground">Amazon Web Services</h4>
                  <p className="text-muted-foreground">
                    Professional certification for developing, deploying, and debugging cloud-based applications.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold">MongoDB Certified Developer</h3>
                    <span className="text-sm font-medium px-3 py-1 bg-brand-red/20 text-brand-red rounded-full">2020</span>
                  </div>
                  <h4 className="text-muted-foreground">MongoDB University</h4>
                  <p className="text-muted-foreground">
                    Certification in database design, operations, and application development with MongoDB.
                  </p>
                </div> */}


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="page-section bg-brand-charcoal/30">
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
              title="Bootstrap"
              icon={<Server size={24} />}
              description="Leveraging Bootstrap's grid and components to build responsive layouts quickly."
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
              title="Responsive Web Design"
              icon={<Monitor size={24} />}
              description="Implementing fully responsive designs across mobile, tablet, and desktop using CSS, Tailwind, and Bootstrap."
            />

            <SkillCard
              title="REST API Integration"
              icon={<Globe size={24} />}
              description="Integrating frontend apps with RESTful APIs for dynamic data using Fetch or Axios."
            />

            <SkillCard
              title="C++ & Python"
              icon={<Cpu size={24} />}
              description="Strong understanding of programming fundamentals and logic building using C++ and Python."
            />

            <SkillCard
              title="SQL & Database Basics"
              icon={<Database size={24} />}
              description="Basic data management and querying experience using SQL and MongoDB."
            />

            <SkillCard
              title="Machine Learning (Intro)"
              icon={<Cpu size={24} />}
              description="Studied core ML principles as part of academic curriculum; familiar with basic models and applications."
            />

          </div>


        </div>
      </section>

      {/* Personal Interests */}
      <section className="page-section bg-gradient-to-b from-muted to-background">
        <div className="page-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-md mb-8 text-center">Beyond Coding</h2>

            <div className="space-y-8">
              <p className="text-lg">
                When I'm not immersed in code, I enjoy exploring new technologies through personal projects and contributing to open-source communities.
                Outside the tech world, I'm passionate about listening to Music and baking.
              </p>

              <p className="text-lg">
                I'm passionate about staying updated with the latest industry trends and sharing knowledge through mentorship and tech meetups.
                I believe in continuous learning and regularly participate in hackathons and coding challenges to push my boundaries.
              </p>

              <div className="mt-10 text-center">
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-brand-red text-white rounded-lg font-medium inline-flex items-center gap-2 hover:bg-red-700 transition-standard"
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

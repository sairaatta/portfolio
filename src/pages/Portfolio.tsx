
import { useEffect, useState } from 'react';
import ProjectCard from '@/components/ProjectCard';

const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with product management, cart functionality, and secure payment processing using Stripe integration.",
    image: "/e-com-project.png",
    tags: ["React", "Tailwindcss", "JavaScript"],
    category: "frontend",
    githubUrl: "https://github.com/sairaatta/E-commerce-website",
    liveUrl: "https://e-commerce-website-phi-neon.vercel.app",
  },
  {
    id: 2,
    title: "Project Allocation & Evaluation according to NCEAC Rules",
    description: "Final year project management system that allows students to allocate projects, submit proposals, and receive evaluations based on NCEAC guidelines.",
    image: "/nceac.png",
    tags: ["React", "Redux", "Tailwindcss", "Django", "SQLite"],
    category: "fullstack",
    githubUrl: "https://github.com/sairaatta/frontend",
    liveUrl: "https://fypproject-rho.vercel.app/",
  },
  {
    id: 3,
    title: "Fidelity Website Clone",
    description: "Build clone of the (US Company) Fidelity Investments website, showcasing financial services and investment solutions with a responsive design.",
    image: "/fidelity-clone.png",
    tags: ["React", "TailwindCSS", "JavaScript"],
    category: "frontend",
    githubUrl: "https://github.com/sairaatta/fidelity-clone-react-project",
    liveUrl: "https://fidelity-clone-react-project-n8yn.vercel.app/",
  },
  {
    id: 4,
    title: "Random Password Generator",
    description: "A simple web application that generates secure random passwords with customizable options for length and character types",
    image: "/pg.png",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    githubUrl: "https://github.com/sairaatta/random-password",
  },
  {
    id: 5,
    title: "Tic Tak Toe",
    description: " A simple project using Javascript concepts for tik tak toe",
    image: "/ttt.png",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    githubUrl: "https://github.com/sairaatta/tic-tak-toe",
  },
  {
    id: 6,
    title: "Quiz Web App for JavaScript Language",
    description: "A quiz application that tests knowledge of JavaScript concepts, featuring multiple-choice questions and real-time feedback.",
    image: "/quiz.png",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    githubUrl: "https://github.com/sairaatta/quiz",
  },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(PROJECTS);
    } else {
      setFilteredProjects(PROJECTS.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <main className="pt-16 page-transition">
      {/* Hero Section */}
      <section className="bg-brand-gray text-white py-24">
        <div className="page-container text-center">
          <h1 className="heading-lg mb-6 animate-fade-in">My Portfolio</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto animate-fade-in">
            A showcase of my projects and applications, demonstrating my expertise in Frontend development and problem-solving abilities.
          </p>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-12 border-b border-border bg-background">
        <div className="page-container">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-standard ${
                activeFilter === "all"
                  ? "bg-brand-purple text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveFilter("frontend")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-standard ${
                activeFilter === "frontend"
                  ? "bg-brand-purple text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveFilter("fullstack")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-standard ${
                activeFilter === "backend"
                  ? "bg-brand-purple text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              FullStack
            </button>
            {/* <button
              onClick={() => setActiveFilter("fullstack")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-standard ${
                activeFilter === "fullstack"
                  ? "bg-brand-purple text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Full Stack
            </button> */}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="page-section bg-background">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                className="animate-fade-in"
              />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-muted-foreground">No projects found in this category.</h3>
              <button
                onClick={() => setActiveFilter("all")}
                className="mt-4 px-6 py-2 bg-brand-purple text-white rounded-lg font-medium hover:bg-purple-700 transition-standard"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="py-20 bg-brand-black text-white">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="heading-lg">Let's Build Something Amazing Together</h2>
            <p className="text-gray-300 text-lg">
              Have a project in mind? I'm always interested in collaborating on innovative ideas.
            </p>
            <div className="pt-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-brand-purple rounded-lg font-medium inline-flex items-center gap-2 hover:bg-purple-700 transition-standard"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;

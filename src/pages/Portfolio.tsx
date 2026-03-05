
import { useEffect, useState } from 'react';
import ProjectCard from '@/components/ProjectCard';

const PROJECTS = [
  {
    id: 7,
    title: "Nature True Green Landscaping – Website Development Project",
    description:
      "Built a fully responsive, performance-optimized business website using modern frontend technologies, implementing SEO best practices, structured service architecture, and WhatsApp API integration to drive lead generation and user engagement.",
    image: "/nature-home.png",
    tags: ["WordPress", "Elementor Pro", "SEO", "WhatsApp API", "Responsive Design"],
    category: "wordpress",
    liveUrl: "https://naturetruegreenlandscaping.com/",
    githubUrl: null,

  },
  {
    id: 8,
    title: "UrbanNest – Modern Furniture Store",
    description:
      "A fully responsive WooCommerce furniture store with category filtering, wishlist functionality, product variations, and optimized checkout experience. Designed with a clean and premium UI for high-end home decor brands.",
    image: "/urban.png",
    tags: ["WordPress", "Elementor Pro", "WooCommerce", "SEO", "Responsive Design"],
    category: "wordpress",
    liveUrl: "https://urbannest-furniture.vercel.app",
    githubUrl: null,

  },
  {
    id: 10,
    title: "Project Allocation & Evaluation According to NCEAC Rules",
    description:
      "A centralized final-year project management system with secure RBAC, automated supervisor allocation, and structured evaluation workflows.",
    image: "/Home.png",
    tags: ["React.js", "TailwindCSS", "JavaScript", "Project Management", "NCEAC Compliance", "RBAC", "Django", "SQLite", "Python"],
    category: "frontend",
    pdfUrl: "/ProjectDocumentation.pdf",
    githubUrl: null,

  },
  {
    id: 11,
    title: "Big Jigs Toys – E-commerce Toy Store Overview",
    description: "A detailed PDF case study of the Big Jigs Toys e-commerce website, showcasing the product catalog, responsive design, user-friendly navigation, and seamless online shopping experience for children’s toys.",
    image: "/toy.png",
    tags: ["Elementor Pro", "WooCommerce", "WordPress", "Responsive Design", "SEO"],
    category: "wordpress",
    pdfUrl: "/toy-shop.pdf",
  },
  {
    id: 12,
    title: "Cult Beauty – E-commerce Skincare & Beauty Store Overview",
    description: "A detailed PDF case study of the Cult Beauty e-commerce website, highlighting its product catalog, user-friendly navigation, responsive design, and modern UI/UX for online beauty shoppers.",
    image: "/beauty.png",
    tags: ["WooCommerce", "Frontend", "Elementor Pro", "Responsive Design", "SEO", "WordPress"],
    category: "WordPress",
    pdfUrl: "/beauty-shop.pdf",
    githubUrl: null,
  }
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
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-400/20" />
      <div className="fixed -top-40 -left-40 w-[600px] h-[600px] bg-blue-500/20 blur-[180px] rounded-full -z-10" />
      <div className="fixed -bottom-40 -right-40 w-[600px] h-[600px] bg-cyan-400/20 blur-[180px] rounded-full -z-10" />
      <div className="fixed inset-0 -z-10 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:40px_40px]" />
      {/* Hero Section */}
      <section className=" text-white py-24">
        <div className="page-container text-center">
          <h1 className="heading-xl font-serif leading-tight">
            My
            <span className="bg-gradient-to-r from-brand-purple to-brand-red bg-clip-text text-transparent">
              {" "}Portfolio
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto animate-fade-in">
            A showcase of my projects and applications, demonstrating my expertise in Frontend development and problem-solving abilities.
          </p>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-12 border-b border-border ">

        <div className="page-container">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-standard ${activeFilter === "all"
                ? "bg-brand-purple text-white"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveFilter("frontend")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-standard ${activeFilter === "frontend"
                ? "bg-brand-purple text-white"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
            >
              Frontend
            </button>


            <button
              onClick={() => setActiveFilter("wordpress")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-standard ${activeFilter === "wordpress"
                ? "bg-brand-purple text-white"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
            >
              WordPress
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="page-section">

        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                liveUrl={project.liveUrl}
                pdfUrl={project.pdfUrl}
                githubUrl={project.githubUrl ?? undefined}  // ensures undefined if missing
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
      <section className="py-20 text-white">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="heading-lg">Let's Build Something Amazing Together</h2>
            <p className="text-gray-300 text-lg">
              Have a project in mind? I'm always interested in collaborating on innovative ideas.
            </p>
            <div className="pt-4">
              <a
                href="/contact"
            className="px-7 py-3 bg-gradient-to-r from-brand-purple to-brand-red rounded-lg font-medium inline-flex items-center gap-2 hover:opacity-90 transition duration-300 shadow-lg"
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

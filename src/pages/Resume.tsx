
import { useEffect } from 'react';
import { ArrowDown, Award, BookOpen, Briefcase, Calendar, Download, FileText, GraduationCap, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-16 page-transition">
      {/* Hero Section */}
      <section className="bg-brand-gray text-white py-24">
        <div className="page-container text-center">
          <h1 className="heading-lg mb-6 animate-fade-in">My Resume</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in">
            A detailed overview of my professional experience, education, and technical skills.
          </p>
          <a
            href="/RESUME-SAIRA ATTA.pdf"
            className="px-6 py-3 bg-brand-purple rounded-lg font-medium inline-flex items-center gap-2 hover:bg-purple-700 transition-standard animate-fade-in"
            download="SAIRA_Resume.pdf"
          >
            Download Resume <Download size={18} />
          </a>
        </div>
      </section>

      {/* Resume Content */}
      <section className="page-section bg-background">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            {/* Personal Information */}
            <div className="mb-12 p-8 border rounded-xl shadow-sm border-border bg-card">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* <div className="col-span-1">
                  <div className="aspect-square w-full max-w-[200px] mx-auto md:mx-0 rounded-xl overflow-hidden bg-muted border border-border relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/30 to-transparent mix-blend-overlay"></div>
                    <img
                      src="/placeholder.svg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div> */}

                <div className="col-span-2 space-y-4 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold">Saira Atta</h2>
                  <p className="text-xl text-brand-purple font-medium">Frontend Developer</p>

                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>Pakistan</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText size={16} />
                      <span>sairaatta098@gmail.com</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground ">
                    I’m a frontend developer with 1.5 years of experience building responsive and user-friendly websites.
                  </p>

                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Skills & Education */}
              <div className="space-y-8">
                {/* Technical Skills */}
                <div className="space-y-6 bg-card p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Award size={20} className="text-brand-purple" /> Technical Skills
                  </h3>

                  <div className="space-y-4">
                    {/* Frontend */}
                    <div>
                      <h4 className="font-medium mb-2">Frontend</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-brand-purple/10 text-brand-purple text-xs font-medium rounded-full">HTML5</span>
                        <span className="px-3 py-1 bg-brand-purple/10 text-brand-purple text-xs font-medium rounded-full">CSS3</span>
                        <span className="px-3 py-1 bg-brand-purple/10 text-brand-purple text-xs font-medium rounded-full">JavaScript</span>
                        <span className="px-3 py-1 bg-brand-purple/10 text-brand-purple text-xs font-medium rounded-full">React.js</span>
                        <span className="px-3 py-1 bg-brand-purple/10 text-brand-purple text-xs font-medium rounded-full">Tailwind CSS</span>
                        <span className="px-3 py-1 bg-brand-purple/10 text-brand-purple text-xs font-medium rounded-full">Bootstrap</span>
                        <span className="px-3 py-1 bg-brand-purple/10 text-brand-purple text-xs font-medium rounded-full">Responsive Design</span>
                      </div>
                    </div>

                    {/* Tools */}
                    <div>
                      <h4 className="font-medium mb-2">Tools & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-brand-purple/10 text-brand-purple text-xs font-medium rounded-full">Git</span>
                        <span className="px-3 py-1 bg-brand-purple/10 text-brand-purple text-xs font-medium rounded-full">GitHub</span>
                        <span className="px-3 py-1 bg-brand-purple/10 text-brand-purple text-xs font-medium rounded-full">Figma</span>
                        <span className="px-3 py-1 bg-brand-purple/10 text-brand-purple text-xs font-medium rounded-full">Vite</span>
                        <span className="px-3 py-1 bg-brand-purple/10 text-brand-purple text-xs font-medium rounded-full">VS Code</span>
                      </div>
                    </div>

                    {/* Others */}
                    <div>
                      <h4 className="font-medium mb-2">Others</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-brand-purple/10 text-brand-purple text-xs font-medium rounded-full">API Integration</span>
                        <span className="px-3 py-1 bg-brand-purple/10 text-brand-purple text-xs font-medium rounded-full">Debugging</span>
                        <span className="px-3 py-1 bg-brand-purple/10 text-brand-purple text-xs font-medium rounded-full">Browser DevTools</span>
                        <span className="px-3 py-1 bg-brand-purple/10 text-brand-purple text-xs font-medium rounded-full">SEO Basics</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Education */}
                <div className="space-y-6 bg-card p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <GraduationCap size={20} className="text-brand-purple" /> Education
                  </h3>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">BSc Computer Science</h4>
                        <span className="text-xs font-medium px-2 py-1 bg-brand-purple/10 text-brand-purple rounded-full flex items-center gap-1">
                          <Calendar size={12} />
                          2021 - 2025
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">COMSATS University Islamabad </p>
                      <p className="text-sm text-muted-foreground">
                        Major in Computer Science with focus on web technologies and development along with Web design .
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">Intermediate in Computer Science (ICS) </h4>
                        <span className="text-xs font-medium px-2 py-1 bg-brand-purple/10 text-brand-purple rounded-full flex items-center gap-1">
                          <Calendar size={12} />
                          2019 - 2021
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">Army Public College (APSACS) </p>
                      <p className="text-sm text-muted-foreground">
                        Intensive program focusing on core concepts of computer.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                {/* <div className="space-y-6 bg-card p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Award size={20} className="text-brand-purple" /> Certifications
                  </h3>

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">AWS Certified Developer</h4>
                        <span className="text-xs font-medium px-2 py-1 bg-brand-purple/10 text-brand-purple rounded-full flex items-center gap-1">
                          <Calendar size={12} />
                          2022
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">Amazon Web Services</p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">MongoDB Certified Developer</h4>
                        <span className="text-xs font-medium px-2 py-1 bg-brand-purple/10 text-brand-purple rounded-full flex items-center gap-1">
                          <Calendar size={12} />
                          2020
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">MongoDB University</p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">React Developer Certification</h4>
                        <span className="text-xs font-medium px-2 py-1 bg-brand-purple/10 text-brand-purple rounded-full flex items-center gap-1">
                          <Calendar size={12} />
                          2019
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">Frontend Masters</p>
                    </div>
                  </div>
                </div> */}

                {/* Languages */}
                <div className="space-y-6 bg-card p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <BookOpen size={20} className="text-brand-purple" /> Languages
                  </h3>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Urdu</span>
                        <span className="text-muted-foreground">Native</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full">
                        <div className="h-full bg-brand-purple rounded-full w-full"></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">English</span>
                        <span className="text-muted-foreground">Professional</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full">
                        <div className="h-full bg-brand-purple rounded-full w-4/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Experience */}
              <div className="lg:col-span-2">
                <div className="space-y-6 bg-card p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Briefcase size={20} className="text-brand-purple" /> Professional Experience
                  </h3>

                  <div className="space-y-8">
                    <div className="border-l-2 border-brand-purple pl-6 py-2 space-y-4 relative">
                      <div className="absolute w-3 h-3 bg-brand-purple rounded-full -left-[7px] top-0" />

                      <div className="space-y-2">
                        <div className="flex justify-between items-start">
                          <h4 className="text-lg font-semibold">Frontend Developer Intern</h4>
                          <span className="text-xs font-medium px-2 py-1 bg-brand-purple/10 text-brand-purple rounded-full flex items-center gap-1">
                            <Calendar size={12} />
                            Aug 2024 - Oct 2024
                          </span>
                        </div>
                        <p className="text-muted-foreground">Social Swirl, Lahore</p>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>Collaborated with senior developers to implement responsive user interfaces using React and Tailwind CSS.</li>
                          <li>Worked on improving the UI/UX of existing features to enhance user experience and accessibility.</li>
                          <li>Integrated frontend components with backend APIs to enable dynamic content rendering.</li>
                          <li>Optimized page load performance by refactoring reusable components and minimizing render cycles.</li>
                          <li>Participated in daily stand-up meetings and contributed to sprint planning and code reviews.</li>
                        </ul>
                        <div className="flex flex-wrap gap-2 pt-2">
                          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">HTML</span>
                          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">CSS</span>
                          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">JavaScript</span>
                          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">React.js</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-2 border-brand-purple pl-6 py-2 space-y-4 relative">
                      <div className="absolute w-3 h-3 bg-brand-purple rounded-full -left-[7px] top-0" />

                      <div className="space-y-2">
                        <div className="flex justify-between items-start">
                          <h4 className="text-lg font-semibold">Frontend Developer</h4>
                          <span className="text-xs font-medium px-2 py-1 bg-brand-purple/10 text-brand-purple rounded-full flex items-center gap-1">
                            <Calendar size={12} />
                            Nov 2024 - Jan 2025
                          </span>
                        </div>
                        <p className="text-muted-foreground">DevelopersHub Corporation©, Islamabad</p>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>Designed and developed responsive web interfaces using React.js and Tailwind CSS for multiple client projects.</li>
                          <li>Integrated RESTful APIs and handled dynamic data rendering across pages and components.</li>
                          <li>Collaborated with backend engineers to ensure seamless data flow and consistent API contract implementation.</li>
                          <li>Enhanced code reusability by creating modular UI components and layout structures.</li>
                          <li>Performed cross-browser testing and implemented accessibility improvements across major views.</li>
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-2">
                          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">HTML</span>
                          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">CSS</span>
                          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">JavaScript</span>
                          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">React.js</span>
                          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">Tailwindcss</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-2 border-brand-purple pl-6 py-2 space-y-4 relative">
                      <div className="absolute w-3 h-3 bg-brand-purple rounded-full -left-[7px] top-0" />

                      <div className="space-y-2">
                        <div className="flex justify-between items-start">
                          <h4 className="text-lg font-semibold">React.js Developer</h4>
                          <span className="text-xs font-medium px-2 py-1 bg-brand-purple/10 text-brand-purple rounded-full flex items-center gap-1">
                            <Calendar size={12} />
                            Jan 2025 - May 2025
                          </span>
                        </div>
                        <p className="text-muted-foreground">Precise Tech, Canada</p>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>Developed key features for a Distribution Management System, including a robust inventory tracking and reporting module.</li>
                          <li>Built dynamic and responsive UI components using React.js and Tailwind CSS to streamline user interactions.</li>
                          <li>Integrated REST APIs for real-time data updates on product stock, warehouse levels, and order status.</li>
                          <li>Worked closely with UX/UI designers to implement intuitive workflows and improve user experience across dashboards.</li>
                          <li>Improved performance and scalability by optimizing state management with Redux and React hooks.</li>
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-2">
                          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">JavaScript</span>
                          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">HTML5</span>
                          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">CSS3</span>
                          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">jQuery</span>
                          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">Bootstrap</span>
                          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">Tailwindcss</span>
                          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">React.js</span>


                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Resume CTA */}
      <section className="py-16 bg-background">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="heading-md">Want to learn more about me?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="RESUME-SAIRAA ATTA.pdf"
                className="px-6 py-3 bg-brand-purple text-white rounded-lg font-medium inline-flex items-center gap-2 hover:bg-purple-700 transition-standard"
                download="SAIRA_Resume.pdf"
              >
                Download Resume <ArrowDown size={18} />
              </a>
              <Link
                to="/contact"
                className="px-6 py-3 bg-brand-black text-white rounded-lg font-medium inline-flex items-center gap-2 hover:bg-black transition-standard"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resume;

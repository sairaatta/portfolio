
import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setSubmitting(true);
  setSubmitError('');

  emailjs
    .send(
      "service_cx2fcar",
      "template_mgas6v8",
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      "-v2t4_qnCyEGQDC2V"
    )
    .then(
      () => {
        setSubmitSuccess(true);
        setSubmitting(false);

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      },
      (error) => {
        setSubmitError("Failed to send message. Please try again.");
        setSubmitting(false);
        console.error(error);
      }
    );
};

  return (
    <main className="pt-16 page-transition">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-400/20" />
      <div className="fixed -top-40 -left-40 w-[600px] h-[600px] bg-blue-500/20 blur-[180px] rounded-full -z-10" />
      <div className="fixed -bottom-40 -right-40 w-[600px] h-[600px] bg-cyan-400/20 blur-[180px] rounded-full -z-10" />
      <div className="fixed inset-0 -z-10 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:40px_40px]" />s
      {/* Hero Section */}
      <section className=" text-white py-24">
        <div className="page-container text-center">
          <h1 className="heading-xl font-serif leading-tight">
            Get
            <span className="bg-gradient-to-r from-brand-purple to-brand-red bg-clip-text text-transparent">
              {" "}In Touch
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto animate-fade-in">
            Have a project in mind or want to discuss a potential collaboration? I'm just a message away.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="page-section ">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <h2 className="heading-md mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-brand-purple/10 p-3 rounded-full text-brand-purple">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Location</h3>
                    {/* <p className="text-muted-foreground">San Francisco, CA</p> */}
                    <p className="text-muted-foreground">Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-brand-purple/10 p-3 rounded-full text-brand-purple">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    {/* <p className="text-muted-foreground">contact@example.com</p> */}
                    <p className="text-muted-foreground">sairaatta098@gmail.com</p>
                  </div>
                </div>

                {/* <div className="flex items-start gap-4">
                  <div className="mt-1 bg-brand-purple/10 p-3 rounded-full text-brand-purple">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground">Mon-Fri, 9am-5pm PST</p>
                  </div>
                </div> */}
              </div>

              <div className="pt-8">
                <h3 className="text-lg font-medium mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/sairaatta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-muted p-3 rounded-full hover:bg-brand-purple hover:text-white transition-standard"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sairaatta/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-muted p-3 rounded-full hover:bg-brand-purple hover:text-white transition-standard"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  {/* <a 
                    href="https://twitter.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-muted p-3 rounded-full hover:bg-brand-purple hover:text-white transition-standard"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a> */}
                  <a
                    href="mailto:sairaatta098@gmail.com"
                    className="bg-muted p-3 rounded-full hover:bg-brand-purple hover:text-white transition-standard"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-xl shadow-md p-8 border border-border">
                <h2 className="heading-md mb-6">Send Me a Message</h2>

                {submitSuccess ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                      <Send size={28} />
                    </div>
                    <h3 className="text-xl font-semibold">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-4 px-6 py-2 bg-brand-purple text-white rounded-lg font-medium hover:bg-purple-700 transition-standard"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Your Name <span className="text-brand-purple">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                          placeholder="name"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Your Email <span className="text-brand-purple">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                          placeholder="email"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject <span className="text-brand-purple">*</span>
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                        placeholder="Project Inquiry"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message <span className="text-brand-purple">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent min-h-[150px]"
                        placeholder="Tell me about your project or inquiry..."
                      />
                    </div>

                    {submitError && (
                      <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                        {submitError}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full px-6 py-3 bg-brand-purple text-white rounded-lg font-medium inline-flex items-center justify-center gap-2 hover:bg-purple-700 transition-standard disabled:opacity-70"
                    >
                      {submitting ? 'Sending...' : 'Send Message'} <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      {/* <section className="py-16 bg-background">
        <div className="page-container">
          <div className="bg-card w-full h-96 rounded-xl overflow-hidden border border-border">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <p className="text-center">
                [Map Integration Would Go Here]<br />
                <span className="text-sm">
                  Interactive map showing office location in San Francisco
                </span>
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
};

export default Contact;

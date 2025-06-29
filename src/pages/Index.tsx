
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, Menu, X, Sun, Moon, ArrowUp, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentSection, setCurrentSection] = useState('home');
  const { toast } = useToast();

  const fullText = "Crafting Responsive Interfaces with Code & Creativity";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
      
      // Update current section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  const skills = {
    languages: ['HTML', 'CSS', 'JavaScript', 'Java'],
    frameworks: ['Tailwind CSS', 'Bootstrap', 'AngularJS'],
    tools: ['Git', 'Docker', 'Jenkins', 'FastAPI'],
    ai: ['LangChain', 'Generative AI', 'MCP Servers', 'RAG with n8n', 'AI Agents', 'Lovable']
  };

  const projects = [
    {
      title: "University Syllabus QA",
      description: "AI-powered Q&A system for university syllabi using advanced vector search and language models.",
      tech: "LangChain, Cohere, Qdrant, Streamlit",
      github: "https://github.com/Ayyappan006/UniversitySyllabusQA"
    },
    {
      title: "Fake News Detection",
      description: "Machine learning model to identify and classify fake news articles with high accuracy.",
      tech: "TF-IDF, Scikit-learn",
      github: "https://github.com/Ayyappan006/Fake-News-Detection-on-E-News"
    },
    {
      title: "Blockchain Bank Storage",
      description: "Secure blockchain-based banking system with Direct Benefit Transfer capabilities.",
      tech: "Java, MySQL, Tomcat",
      github: "https://github.com/Ayyappan006/Blockchain---Based-Bank-Record-Storage-with-Direct-Benefit-Transfer"
    },
    {
      title: "Academic Paper Generator",
      description: "AI-powered research paper generation using multiple language models and intelligent agents.",
      tech: "GPT, Gemini, Cohere, YAML Agents",
      github: "https://github.com/Ayyappan006/AI-Research-Paper-Generator"
    },
    {
      title: "Image Steganography",
      description: "Secure data hiding technique using LSB method for covert communication.",
      tech: "Python, OpenCV, LSB",
      github: "#"
    },
    {
      title: "Certificate Verification with Blockchain",
      description: "Decentralized certificate verification system ensuring authenticity and preventing fraud.",
      tech: "Solidity, Ethereum, Truffle",
      github: "https://github.com/Ayyappan006/E-Certify-Project-Team4"
    }
  ];

  const certifications = [
    "AngularJS – Coursera",
    "AZ-900 Azure Fundamentals – Udemy",
    "Azure AI Essentials – Microsoft + LinkedIn",
    "GitHub Career Essentials – LinkedIn"
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-900 dark:text-white">
            J V Ayyappan
          </div>
          
          <div className="hidden md:flex space-x-6">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                  currentSection === item.id 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="hidden md:flex"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="px-4 py-2 space-y-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="w-full justify-start"
              >
                {isDarkMode ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              J V Ayyappan
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
              Frontend Developer
            </h2>
            <div className="h-16 mb-8">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium">
                {typedText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://linkedin.com/in/j-v-ayyappan" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com/Ayyappan006" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>

            {/* Floating Social Icons */}
            <div className="flex justify-center space-x-6">
              <a href="https://linkedin.com/in/j-v-ayyappan" target="_blank" rel="noopener noreferrer" 
                 className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </a>
              <a href="https://github.com/Ayyappan006" target="_blank" rel="noopener noreferrer"
                 className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                <Github className="h-6 w-6 text-gray-900 dark:text-white" />
              </a>
              <a href="mailto:ayyappanjv6000@gmail.com"
                 className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                <Mail className="h-6 w-6 text-red-500" />
              </a>
              <a href="tel:+918610576251"
                 className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                <Phone className="h-6 w-6 text-green-500" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                  Frontend developer with practical knowledge in building responsive and user-friendly web applications using HTML, CSS, JavaScript, AngularJS, and Tailwind CSS. Contributed to real-world projects, including an AI-powered Q&A system and a blockchain-based DBT platform. Familiar with automation and AI tools like n8n, MCP Servers, AI Agents, LangChain, and Lovable. Now seeking a Frontend Developer role to apply my skills in creating modern, fast, and accessible web solutions as part of a collaborative team.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Languages</h3>
                <div className="space-y-2">
                  {skills.languages.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="mr-2 mb-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Frameworks</h3>
                <div className="space-y-2">
                  {skills.frameworks.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="mr-2 mb-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Tools & Platforms</h3>
                <div className="space-y-2">
                  {skills.tools.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="mr-2 mb-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">AI Tools</h3>
                <div className="space-y-2">
                  {skills.ai.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="mr-2 mb-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600"></div>
              
              <Card className="ml-16 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="absolute -left-12 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Software Development Instructor Trainee</h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">NxtWave Disruptive Technologies, Hyderabad</p>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0">
                      April 2025 – Present
                    </Badge>
                  </div>
                  
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Built responsive UIs with HTML, CSS, JS, Tailwind
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Mentored students with real-time frontend guidance
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Developed GenAI tools using n8n, LangChain, Eleven Labs
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Resolved frontend issues for 10+ students per batch
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <Badge variant="outline" className="text-xs">
                      {project.tech}
                    </Badge>
                  </div>
                  {project.github !== "#" && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600"></div>
              
              <div className="space-y-8">
                <Card className="ml-16 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="absolute -left-12 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">M.Tech Integrated CSE</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">Vellore Institute of Technology</p>
                    <p className="text-gray-600 dark:text-gray-300">2019–2024 | CGPA: 7.85</p>
                  </CardContent>
                </Card>

                <Card className="ml-16 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="absolute -left-12 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">12th Grade (Computer Science)</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">Sunbeam MHSS</p>
                    <p className="text-gray-600 dark:text-gray-300">72.17%</p>
                  </CardContent>
                </Card>

                <Card className="ml-16 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="absolute -left-12 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">10th Grade</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">Sunbeam CBSE</p>
                    <p className="text-gray-600 dark:text-gray-300">CGPA: 9.0</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-0 text-center">
                  <Badge variant="outline" className="mb-2">
                    Certificate
                  </Badge>
                  <p className="font-semibold text-gray-900 dark:text-white">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-4" />
                  <span className="text-gray-700 dark:text-gray-300">ayyappanjv6000@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-4" />
                  <span className="text-gray-700 dark:text-gray-300">+91 8610576251</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 text-blue-600 mr-4" />
                  <a href="https://linkedin.com/in/j-v-ayyappan" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                    linkedin.com/in/j-v-ayyappan
                  </a>
                </div>
                <div className="flex items-center">
                  <Github className="h-5 w-5 text-blue-600 mr-4" />
                  <a href="https://github.com/Ayyappan006" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                    github.com/Ayyappan006
                  </a>
                </div>
              </div>
            </div>

            <div>
              <Card className="p-6 shadow-lg">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Send a Message</h3>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>&copy; 2024 J V Ayyappan. All rights reserved.</p>
              <p className="text-sm text-gray-400">Last updated: June 2025</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/j-v-ayyappan" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/Ayyappan006" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:ayyappanjv6000@gmail.com"
                 className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg"
          size="sm"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default Index;

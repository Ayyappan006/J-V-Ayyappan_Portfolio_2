import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, Menu, X, Sun, Moon, ArrowUp, Send, Code, Database, Cpu, Zap } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentSection, setCurrentSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  const fullText = "Crafting Responsive Interfaces with Code & Creativity";

  useEffect(() => {
    setIsVisible(true);
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

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
    languages: [
      { name: 'HTML', icon: Code, color: 'text-orange-500' },
      { name: 'CSS', icon: Code, color: 'text-blue-500' },
      { name: 'JavaScript', icon: Code, color: 'text-yellow-500' },
      { name: 'Java', icon: Code, color: 'text-red-500' }
    ],
    frameworks: [
      { name: 'Tailwind CSS', icon: Zap, color: 'text-cyan-500' },
      { name: 'Bootstrap', icon: Zap, color: 'text-purple-500' },
      { name: 'AngularJS', icon: Zap, color: 'text-red-600' }
    ],
    tools: [
      { name: 'Git', icon: Database, color: 'text-orange-600' },
      { name: 'Docker', icon: Database, color: 'text-blue-600' },
      { name: 'Jenkins', icon: Database, color: 'text-gray-600' },
      { name: 'FastAPI', icon: Database, color: 'text-green-600' }
    ],
    ai: [
      { name: 'LangChain', icon: Cpu, color: 'text-indigo-500' },
      { name: 'Generative AI', icon: Cpu, color: 'text-pink-500' },
      { name: 'MCP Servers', icon: Cpu, color: 'text-teal-500' },
      { name: 'RAG with n8n', icon: Cpu, color: 'text-emerald-500' },
      { name: 'AI Agents', icon: Cpu, color: 'text-violet-500' },
      { name: 'Lovable', icon: Cpu, color: 'text-rose-500' }
    ]
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
      description: "Machine learning model to identify and classify fake news articles with high accuracy using TF-IDF and Passive Aggressive Classifier.",
      tech: "TF-IDF, Passive Aggressive Classifier, Scikit-learn",
      github: "https://github.com/Ayyappan006/Fake-News-Detection-on-E-News"
    },
    {
      title: "Blockchain Bank Storage",
      description: "Secure blockchain-based banking system with Direct Benefit Transfer capabilities using SHA-256 encryption.",
      tech: "Java, MySQL, Tomcat, SHA-256",
      github: "https://github.com/Ayyappan006/Blockchain---Based-Bank-Record-Storage-with-Direct-Benefit-Transfer"
    },
    {
      title: "AI Academic Paper Generator",
      description: "AI-powered research paper generation using multiple language models and intelligent YAML agents.",
      tech: "GPT, Gemini, Cohere, YAML Agents",
      github: "https://github.com/Ayyappan006/AI-Research-Paper-Generator"
    },
    {
      title: "Image Steganography",
      description: "Secure data hiding technique using LSB method for covert communication with cryptography.",
      tech: "Python, OpenCV, PIL, Cryptography",
      github: "#"
    },
    {
      title: "Certificate Verification with Blockchain",
      description: "Decentralized certificate verification system ensuring authenticity and preventing fraud using Ethereum.",
      tech: "Solidity, Ethereum, Node.js, Truffle",
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
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg z-50 border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            J V Ayyappan
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  currentSection === item.id 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full ${
                  currentSection === item.id ? 'w-full' : ''
                }`}></span>
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="hidden md:flex transition-transform duration-300 hover:scale-110"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden transition-transform duration-300 hover:scale-110"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700`}>
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-all duration-300 hover:pl-2"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="w-full justify-start mt-4 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDarkMode ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </Button>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 relative overflow-hidden">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-96 h-96 bg-gradient-to-r from-pink-400 to-red-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000"></div>
          
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-6 transition-all duration-1000 hover:scale-105">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                J V Ayyappan
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-8">
              Frontend Developer | Blockchain & GenAI Innovator
            </h2>
            <div className="h-20 mb-12">
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                {typedText}
                <span className="animate-pulse text-blue-600">|</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" asChild className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transform transition-all duration-300 hover:scale-105">
                <a href="https://linkedin.com/in/j-v-ayyappan" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Connect on LinkedIn
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="group border-2 border-gray-700 text-gray-700 dark:text-white hover:bg-gray-700 hover:text-white transform transition-all duration-300 hover:scale-105">
                <a href="https://github.com/Ayyappan006" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  GitHub
                </a>
              </Button>
            </div>

            {/* Enhanced Floating Social Icons */}
            <div className="flex justify-center space-x-8">
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/j-v-ayyappan", color: "text-blue-600", delay: "0s" },
                { icon: Github, href: "https://github.com/Ayyappan006", color: "text-gray-900 dark:text-white", delay: "0.1s" },
                { icon: Mail, href: "mailto:ayyappanjv6000@gmail.com", color: "text-red-500", delay: "0.2s" },
                { icon: Phone, href: "tel:+918610576251", color: "text-green-500", delay: "0.3s" }
              ].map(({ icon: Icon, href, color, delay }, index) => (
                <a key={index} href={href} target="_blank" rel="noopener noreferrer" 
                   className={`p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:scale-125 hover:-translate-y-2 ${color}`}
                   style={{ animationDelay: delay }}>
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">About Me</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Card className="p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 rounded-3xl">
              <CardContent className="p-0">
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-justify animate-fade-in">
                  Frontend developer with practical knowledge in building responsive and user-friendly web applications using HTML, CSS, JavaScript, AngularJS, and Tailwind CSS. Contributed to real-world projects, including an AI-powered Q&A system and a blockchain-based DBT platform. Familiar with automation and AI tools like n8n, MCP Servers, AI Agents, LangChain, and Lovable. Now seeking a Frontend Developer role to apply my skills in creating modern, fast, and accessible web solutions as part of a collaborative team.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50 dark:from-blue-900/10 dark:to-purple-900/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Technical Skills</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <Card key={category} className="group p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 rounded-2xl">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 capitalize">
                    {category === 'ai' ? 'AI Tools' : category}
                  </h3>
                  <div className="space-y-4">
                    {skillList.map((skill, index) => (
                      <div key={index} className="flex items-center group hover:transform hover:scale-105 transition-all duration-300">
                        <skill.icon className={`h-5 w-5 mr-3 ${skill.color} group-hover:animate-pulse`} />
                        <Badge variant="secondary" className="text-sm font-medium bg-gray-100 dark:bg-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300">
                          {skill.name}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-pink-50/50 dark:from-purple-900/10 dark:to-pink-900/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Experience</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
              
              <Card className="ml-24 p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 rounded-3xl">
                <div className="absolute -left-16 top-12 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Software Development Instructor Trainee</h3>
                      <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">NxtWave Disruptive Technologies, Hyderabad</p>
                    </div>
                    <Badge variant="outline" className="mt-4 lg:mt-0 border-2 border-blue-600 text-blue-600 font-semibold px-4 py-2">
                      April 2025 – Present
                    </Badge>
                  </div>
                  
                  <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                    {[
                      "Built responsive UIs with HTML, CSS, JS, Tailwind",
                      "Mentored students in real-time projects",
                      "Developed GenAI tools using n8n, Eleven Labs, LangChain, Lovable",
                      "Helped 10+ students per batch with code and layout issues"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start group hover:transform hover:scale-105 transition-all duration-300">
                        <span className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:animate-pulse"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-green-100/50 to-blue-100/50 dark:from-green-900/10 dark:to-blue-900/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Projects</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <Card key={index} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                  <div className="mb-6">
                    <Badge variant="outline" className="text-xs font-medium border-blue-600 text-blue-600 px-3 py-1">
                      {project.tech}
                    </Badge>
                  </div>
                  {project.github !== "#" && (
                    <Button variant="ghost" size="sm" asChild className="group/btn p-0 h-auto font-semibold text-blue-600 hover:text-purple-600 transition-colors duration-300">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Github className="h-4 w-4 mr-2 group-hover/btn:animate-bounce" />
                        View Code
                        <ExternalLink className="h-3 w-3 ml-2 group-hover/btn:animate-pulse" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Education Section */}
      <section id="education" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-50/50 to-orange-50/50 dark:from-yellow-900/10 dark:to-orange-900/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Education</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
              
              <div className="space-y-12">
                {[
                  {
                    degree: "M.Tech Integrated CSE",
                    institution: "Vellore Institute of Technology",
                    duration: "2019–2024",
                    grade: "CGPA: 7.85"
                  },
                  {
                    degree: "12th Grade (Computer Science)",
                    institution: "Sunbeam MHSS",
                    duration: "2018–2019",
                    grade: "72.17%"
                  },
                  {
                    degree: "10th Grade",
                    institution: "Sunbeam CBSE",
                    duration: "2016–2017",
                    grade: "CGPA: 9.0"
                  }
                ].map((edu, index) => (
                  <Card key={index} className="ml-24 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 rounded-2xl">
                    <div className="absolute -left-16 top-8 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                    <CardContent className="p-0">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-1">{edu.institution}</p>
                      <p className="text-gray-600 dark:text-gray-300">{edu.duration} | {edu.grade}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Certifications Section */}
      <section id="certifications" className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100/50 to-purple-100/50 dark:from-indigo-900/10 dark:to-purple-900/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Certifications</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="group p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 rounded-2xl">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                    <span className="text-white font-bold text-lg">🏅</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-50/50 to-purple-50/50 dark:from-pink-900/10 dark:to-purple-900/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, text: "ayyappanjv6000@gmail.com", href: "mailto:ayyappanjv6000@gmail.com", color: "text-red-500" },
                  { icon: Phone, text: "+91 8610576251", href: "tel:+918610576251", color: "text-green-500" },
                  { icon: Linkedin, text: "linkedin.com/in/j-v-ayyappan", href: "https://linkedin.com/in/j-v-ayyappan", color: "text-blue-600" },
                  { icon: Github, text: "github.com/Ayyappan006", href: "https://github.com/Ayyappan006", color: "text-gray-700 dark:text-gray-300" }
                ].map(({ icon: Icon, text, href, color }, index) => (
                  <div key={index} className="flex items-center group hover:transform hover:scale-105 transition-all duration-300">
                    <div className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 mr-4 group-hover:shadow-lg transition-shadow duration-300 ${color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <a href={href} target="_blank" rel="noopener noreferrer" className={`text-lg hover:underline transition-colors duration-300 ${color}`}>
                      {text}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Card className="p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 rounded-3xl">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="relative group">
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300 peer placeholder-transparent"
                        placeholder="Name"
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-4 -top-2.5 bg-white dark:bg-gray-800 px-2 text-sm font-medium text-gray-600 dark:text-gray-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                      >
                        Name
                      </label>
                    </div>
                    <div className="relative group">
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300 peer placeholder-transparent"
                        placeholder="Email"
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-4 -top-2.5 bg-white dark:bg-gray-800 px-2 text-sm font-medium text-gray-600 dark:text-gray-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                      >
                        Email
                      </label>
                    </div>
                    <div className="relative group">
                      <textarea
                        id="message"
                        rows={4}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300 peer placeholder-transparent resize-none"
                        placeholder="Message"
                      ></textarea>
                      <label
                        htmlFor="message"
                        className="absolute left-4 -top-2.5 bg-white dark:bg-gray-800 px-2 text-sm font-medium text-gray-600 dark:text-gray-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                      >
                        Message
                      </label>
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-xl">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <p className="text-lg font-semibold">&copy; 2024 J V Ayyappan. All rights reserved.</p>
              <p className="text-sm text-gray-400 mt-2">Last updated: June 2025</p>
            </div>
            <div className="flex space-x-6">
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/j-v-ayyappan", color: "hover:text-blue-400" },
                { icon: Github, href: "https://github.com/Ayyappan006", color: "hover:text-gray-300" },
                { icon: Mail, href: "mailto:ayyappanjv6000@gmail.com", color: "hover:text-red-400" }
              ].map(({ icon: Icon, href, color }, index) => (
                <a key={index} href={href} target="_blank" rel="noopener noreferrer"
                   className={`text-gray-400 ${color} transition-all duration-300 transform hover:scale-125 hover:-translate-y-1`}>
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          size="sm"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default Index;

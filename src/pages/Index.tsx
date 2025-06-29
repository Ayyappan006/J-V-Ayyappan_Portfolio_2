
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, Menu, X, Sun, Moon, ArrowUp, Send, Code, Database, Cpu, Zap, Award, MapPin, Calendar } from 'lucide-react';
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
      title: "Message Sent! 🎉",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
  };

  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/J_V_Ayyappan_Resume.pdf'; // This will need to be uploaded to public folder
    link.download = 'J_V_Ayyappan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Resume Downloaded! 📄",
      description: "Thank you for your interest!",
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
      { name: 'HTML', icon: Code, color: 'from-orange-500 to-red-500', level: 90 },
      { name: 'CSS', icon: Code, color: 'from-blue-500 to-cyan-500', level: 85 },
      { name: 'JavaScript', icon: Code, color: 'from-yellow-500 to-amber-500', level: 80 },
      { name: 'Java', icon: Code, color: 'from-red-500 to-pink-500', level: 75 }
    ],
    frameworks: [
      { name: 'Tailwind CSS', icon: Zap, color: 'from-cyan-500 to-teal-500', level: 90 },
      { name: 'Bootstrap', icon: Zap, color: 'from-purple-500 to-violet-500', level: 85 },
      { name: 'AngularJS', icon: Zap, color: 'from-red-600 to-rose-600', level: 80 }
    ],
    tools: [
      { name: 'Git', icon: Database, color: 'from-orange-600 to-red-600', level: 85 },
      { name: 'Docker', icon: Database, color: 'from-blue-600 to-indigo-600', level: 70 },
      { name: 'Jenkins', icon: Database, color: 'from-gray-600 to-slate-600', level: 65 },
      { name: 'FastAPI', icon: Database, color: 'from-green-600 to-emerald-600', level: 75 }
    ],
    ai: [
      { name: 'LangChain', icon: Cpu, color: 'from-indigo-500 to-purple-500', level: 80 },
      { name: 'Generative AI', icon: Cpu, color: 'from-pink-500 to-rose-500', level: 85 },
      { name: 'MCP Servers', icon: Cpu, color: 'from-teal-500 to-cyan-500', level: 75 },
      { name: 'RAG with n8n', icon: Cpu, color: 'from-emerald-500 to-green-500', level: 80 },
      { name: 'AI Agents', icon: Cpu, color: 'from-violet-500 to-purple-500', level: 85 },
      { name: 'Lovable', icon: Cpu, color: 'from-rose-500 to-pink-500', level: 90 }
    ]
  };

  const projects = [
    {
      title: "University Syllabus QA",
      description: "AI-powered Q&A system for university syllabi using advanced vector search and language models for accurate academic information retrieval.",
      tech: "LangChain, Cohere, Qdrant, Streamlit",
      github: "https://github.com/Ayyappan006/UniversitySyllabusQA",
      features: ["Vector Search", "AI-Powered", "Real-time Q&A"]
    },
    {
      title: "Fake News Detection",
      description: "Machine learning model to identify and classify fake news articles with high accuracy using TF-IDF vectorization and Passive Aggressive Classifier.",
      tech: "TF-IDF, Passive Aggressive Classifier, Scikit-learn",
      github: "https://github.com/Ayyappan006/Fake-News-Detection-on-E-News",
      features: ["ML Classification", "High Accuracy", "News Analysis"]
    },
    {
      title: "Blockchain Bank Storage",
      description: "Secure blockchain-based banking system with Direct Benefit Transfer capabilities using SHA-256 encryption for enhanced security.",
      tech: "Java, MySQL, Tomcat, SHA-256",
      github: "https://github.com/Ayyappan006/Blockchain---Based-Bank-Record-Storage-with-Direct-Benefit-Transfer",
      features: ["Blockchain Security", "DBT Integration", "Encrypted Storage"]
    },
    {
      title: "AI Academic Paper Generator",
      description: "AI-powered research paper generation using multiple language models and intelligent YAML agents for academic content creation.",
      tech: "GPT, Gemini, Cohere, YAML Agents",
      github: "https://github.com/Ayyappan006/AI-Research-Paper-Generator",
      features: ["Multi-LLM", "YAML Agents", "Academic Focus"]
    },
    {
      title: "Image Steganography",
      description: "Secure data hiding technique using LSB method for covert communication with advanced cryptography for data protection.",
      tech: "Python, OpenCV, PIL, Cryptography",
      github: "#",
      features: ["LSB Method", "Cryptography", "Data Hiding"]
    },
    {
      title: "Certificate Verification",
      description: "Decentralized certificate verification system ensuring authenticity and preventing fraud using Ethereum blockchain technology.",
      tech: "Solidity, Ethereum, Node.js, Truffle",
      github: "https://github.com/Ayyappan006/E-Certify-Project-Team4",
      features: ["Blockchain Verify", "Anti-Fraud", "Decentralized"]
    }
  ];

  const certifications = [
    {
      name: "AngularJS",
      issuer: "Coursera",
      link: "https://coursera.org/share/7f657dfb65364212005e3da1ee7051c2",
      icon: "🅰️"
    },
    {
      name: "AZ-900 Azure Fundamentals",
      issuer: "Udemy",
      link: "http://ude.my/UC-601c8ac5-7f94-470c-905c-49d44c8f25f7",
      icon: "☁️"
    },
    {
      name: "Azure AI Essentials",
      issuer: "Microsoft + LinkedIn",
      link: "https://www.linkedin.com/learning/certificates/8a65b31d67b82c09aba781b5b9975aa1059aa9c856c38f917e91c735451018dc",
      icon: "🤖"
    },
    {
      name: "GitHub Career Essentials",
      issuer: "LinkedIn",
      link: "https://www.linkedin.com/learning/certificates/ce3262ee0fee9862cff2f21f568558696f44f1abe95b413e95e3f07f46f10c80",
      icon: "🐙"
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      {/* Modern Floating Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-full px-6 py-3 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex items-center space-x-8">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            JVA
          </div>
          
          <div className="hidden md:flex space-x-6">
            {navItems.slice(0, 4).map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 relative group px-3 py-2 rounded-full ${
                  currentSection === item.id 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden rounded-full p-2"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-4">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with New Design */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-80 h-80 bg-gradient-to-r from-pink-400/30 to-red-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-4000"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
            {/* Profile Image Placeholder */}
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-1 animate-scale-in">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                JVA
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-slide-up stagger-1">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                J V Ayyappan
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-8 animate-slide-left stagger-2">
              Frontend Developer
            </h2>
            
            <div className="h-16 mb-12 animate-fade-in stagger-3">
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium">
                {typedText}
                <span className="inline-block w-0.5 h-6 bg-blue-600 ml-1 animate-pulse"></span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up stagger-4">
              <Button 
                size="lg" 
                onClick={handleResumeDownload}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-full px-8 py-4 text-lg font-semibold ripple"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transform transition-all duration-300 hover:scale-105 rounded-full px-8 py-4 text-lg font-semibold"
              >
                <a href="https://linkedin.com/in/j-v-ayyappan" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  LinkedIn
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="group border-2 border-gray-700 text-gray-700 dark:text-white hover:bg-gray-700 hover:text-white transform transition-all duration-300 hover:scale-105 rounded-full px-8 py-4 text-lg font-semibold"
              >
                <a href="https://github.com/Ayyappan006" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  GitHub
                </a>
              </Button>
            </div>

            {/* Floating Social Icons */}
            <div className="flex justify-center space-x-6 animate-fade-in stagger-5">
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/j-v-ayyappan", color: "hover:text-blue-600", bg: "hover:bg-blue-50 dark:hover:bg-blue-900/20" },
                { icon: Github, href: "https://github.com/Ayyappan006", color: "hover:text-gray-900 dark:hover:text-white", bg: "hover:bg-gray-50 dark:hover:bg-gray-800/20" },
                { icon: Mail, href: "mailto:ayyappanjv6000@gmail.com", color: "hover:text-red-500", bg: "hover:bg-red-50 dark:hover:bg-red-900/20" },
                { icon: Phone, href: "tel:+918610576251", color: "hover:text-green-500", bg: "hover:bg-green-50 dark:hover:bg-green-900/20" }
              ].map(({ icon: Icon, href, color, bg }, index) => (
                <a key={index} href={href} target="_blank" rel="noopener noreferrer" 
                   className={`p-4 rounded-full border-2 border-gray-200 dark:border-gray-700 ${bg} ${color} transition-all duration-500 hover:scale-125 hover:-translate-y-2 hover:shadow-xl`}>
                  <Icon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section with New Layout */}
      <section id="about" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 rounded-3xl">
              <CardContent className="p-0">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 mb-4">
                    <MapPin className="h-5 w-5" />
                    <span className="font-medium">Hyderabad, India</span>
                  </div>
                </div>
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
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <Card key={category} className="group p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 rounded-2xl">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 capitalize text-center">
                    {category === 'ai' ? 'AI Tools' : category}
                  </h3>
                  <div className="space-y-6">
                    {skillList.map((skill, index) => (
                      <div key={index} className="group/skill">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <skill.icon className={`h-5 w-5 mr-3 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`} />
                            <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                          </div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 delay-${index * 100}`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
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
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Software Development Instructor Trainee</h3>
                    <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2 flex items-center">
                      <span>NxtWave Disruptive Technologies</span>
                      <MapPin className="h-4 w-4 ml-2 mr-1" />
                      <span className="text-sm">Hyderabad</span>
                    </p>
                  </div>
                  <Badge variant="outline" className="mt-4 lg:mt-0 border-2 border-blue-600 text-blue-600 font-semibold px-4 py-2 flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    April 2025 – Present
                  </Badge>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { text: "Built responsive UIs with HTML, CSS, JS, Tailwind", icon: Code },
                    { text: "Mentored students in real-time projects", icon: Award },
                    { text: "Developed GenAI tools using n8n, Eleven Labs, LangChain, Lovable", icon: Cpu },
                    { text: "Helped 10+ students per batch with code and layout issues", icon: Zap }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start group hover:transform hover:scale-105 transition-all duration-300 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:animate-pulse">
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 rounded-2xl card-interactive">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                      {project.title}
                    </h3>
                    {project.github !== "#" && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-110"
                      >
                        <Github className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-blue-600" />
                      </a>
                    )}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((feature, fIndex) => (
                      <Badge key={fIndex} variant="secondary" className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs font-medium border-purple-600 text-purple-600 px-3 py-1">
                      {project.tech.split(',')[0]}
                    </Badge>
                    {project.github !== "#" && (
                      <Button variant="ghost" size="sm" asChild className="group/btn p-2 h-auto font-semibold text-blue-600 hover:text-purple-600 transition-colors duration-300">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <span className="text-xs mr-1">View</span>
                          <ExternalLink className="h-3 w-3 group-hover/btn:animate-pulse" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  degree: "M.Tech Integrated CSE",
                  institution: "Vellore Institute of Technology",
                  duration: "2019–2024",
                  grade: "CGPA: 7.85",
                  icon: "🎓"
                },
                {
                  degree: "12th Grade (Computer Science)",
                  institution: "Sunbeam MHSS",
                  duration: "2018–2019",
                  grade: "72.17%",
                  icon: "📚"
                },
                {
                  degree: "10th Grade",
                  institution: "Sunbeam CBSE",
                  duration: "2016–2017",
                  grade: "CGPA: 9.0",
                  icon: "🏫"
                }
              ].map((edu, index) => (
                <Card key={index} className="p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 rounded-2xl">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">{edu.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">{edu.institution}</p>
                        <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {edu.duration}
                          </span>
                          <span className="flex items-center">
                            <Award className="h-4 w-4 mr-1" />
                            {edu.grade}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Certifications Section */}
      <section id="certifications" className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Certifications</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="group p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 rounded-2xl text-center">
                <CardContent className="p-0">
                  <div className="text-6xl mb-4 group-hover:animate-bounce">{cert.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{cert.issuer}</p>
                  <Button variant="outline" size="sm" asChild className="w-full hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300">
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Certificate
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-6 text-lg">Let's create something amazing together!</p>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, text: "ayyappanjv6000@gmail.com", href: "mailto:ayyappanjv6000@gmail.com", color: "text-red-500", bg: "bg-red-50 dark:bg-red-900/20" },
                  { icon: Phone, text: "+91 8610576251", href: "tel:+918610576251", color: "text-green-500", bg: "bg-green-50 dark:bg-green-900/20" },
                  { icon: Linkedin, text: "linkedin.com/in/j-v-ayyappan", href: "https://linkedin.com/in/j-v-ayyappan", color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-900/20" },
                  { icon: Github, text: "github.com/Ayyappan006", href: "https://github.com/Ayyappan006", color: "text-gray-700 dark:text-gray-300", bg: "bg-gray-50 dark:bg-gray-800/20" }
                ].map(({ icon: Icon, text, href, color, bg }, index) => (
                  <div key={index} className="flex items-center group hover:transform hover:scale-105 transition-all duration-300">
                    <div className={`p-4 rounded-2xl ${bg} mr-6 group-hover:shadow-lg transition-shadow duration-300 ${color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <a href={href} target="_blank" rel="noopener noreferrer" className={`text-lg hover:underline transition-colors duration-300 ${color} font-medium`}>
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
                    <div className="floating-label">
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300 peer placeholder-transparent"
                        placeholder="Your Name"
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-4 -top-2.5 bg-white dark:bg-gray-800 px-2 text-sm font-medium text-gray-600 dark:text-gray-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                      >
                        Your Name
                      </label>
                    </div>
                    
                    <div className="floating-label">
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300 peer placeholder-transparent"
                        placeholder="Your Email"
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-4 -top-2.5 bg-white dark:bg-gray-800 px-2 text-sm font-medium text-gray-600 dark:text-gray-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                      >
                        Your Email
                      </label>
                    </div>
                    
                    <div className="floating-label">
                      <textarea
                        id="message"
                        rows={4}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300 peer placeholder-transparent resize-none"
                        placeholder="Your Message"
                      ></textarea>
                      <label
                        htmlFor="message"
                        className="absolute left-4 -top-2.5 bg-white dark:bg-gray-800 px-2 text-sm font-medium text-gray-600 dark:text-gray-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                      >
                        Your Message
                      </label>
                    </div>
                    
                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-2xl ripple">
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
              <p className="text-sm text-gray-400 mt-2">Last updated: December 2024</p>
            </div>
            <div className="flex space-x-6">
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/j-v-ayyappan", color: "hover:text-blue-400" },
                { icon: Github, href: "https://github.com/Ayyappan006", color: "hover:text-gray-300" },
                { icon: Mail, href: "mailto:ayyappanjv6000@gmail.com", color: "hover:text-red-400" }
              ].map(({ icon: Icon, href, color }, index) => (
                <a key={index} href={href} target="_blank" rel="noopener noreferrer"
                   className={`text-gray-400 ${color} transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 p-2 rounded-full hover:bg-white/10`}>
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

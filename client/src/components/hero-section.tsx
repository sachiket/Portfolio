import { Download, Mail, Phone, Github, Linkedin, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleDownloadResume = () => {
    // Create a simple resume download - in a real app, this would download an actual PDF
    const resumeContent = `
SACHIKET BEHERA
Senior Software Engineer

Email: sachiketbehera@gmail.com
Phone: (+91) 79910-94573
GitHub: github.com/sachiket
LinkedIn: linkedin.com/in/sachiket

PROFESSIONAL SUMMARY
Senior Software Engineer with 5+ years of experience building scalable, Java-based microservices and cloud-native systems using Java, Spring Boot, Docker, and Kubernetes. Delivered AI-driven platforms that accelerated campaign workflows by 50% for clients such as Coke and Kellanova, with expertise in AI technologies like LangChain and LangGraph.

SKILLS
Programming Languages: Java, JavaScript, TypeScript, Python
Frameworks & Technologies: Spring Boot, Camunda, GraphQL, Nest.js, Node.js, REST API, Microservices
Cloud & DevOps Tools: AWS, Docker, Kubernetes, RabbitMQ, Kafka, Redis, Git
Databases: MongoDB, Oracle
AI & Agentic Tech: LangChain, LangGraph, MCP servers

For detailed work experience and education, please visit my portfolio website.
    `;
    
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Sachiket_Behera_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          {/* Professional headshot placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-green-500 p-1">
            <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
              <User className="w-16 h-16 text-gray-400" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: 'var(--portfolio-secondary)' }}>
            Sachiket Behera
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            Senior Software Engineer
          </p>
          
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            5+ years of experience building scalable Java-based microservices and AI-driven cloud-native systems
          </p>
          
          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a 
              href="mailto:sachiketbehera@gmail.com" 
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">sachiketbehera@gmail.com</span>
            </a>
            <a 
              href="tel:+917991094573" 
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">(+91) 79910-94573</span>
            </a>
            <a 
              href="https://github.com/sachiket" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">github.com/sachiket</span>
            </a>
            <a 
              href="https://linkedin.com/in/sachiket" 
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Linkedin className="w-4 h-4" />
              <span className="hidden sm:inline">linkedin.com/in/sachiket</span>
            </a>
          </div>
          
          <Button 
            onClick={handleDownloadResume}
            style={{ backgroundColor: 'var(--portfolio-primary)' }}
            className="text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity duration-200 shadow-lg font-semibold"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}

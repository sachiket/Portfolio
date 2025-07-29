import { Download, Mail, Phone, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@assets/1718277438477_1753779382746.jpeg";

export default function HeroSection() {
  const handleDownloadResume = () => {
    // Open the direct download link for the PDF resume hosted on Google Drive
    window.open(
      "https://drive.google.com/uc?export=download&id=1rZZruGDDjaef0vaD4ng2dL_DXCvoCPNc",
      "_blank"
    );
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          {/* Professional headshot */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-green-500 p-1">
            <img 
              src={profileImage} 
              alt="Sachiket Behera - Senior Software Engineer"
              className="w-full h-full rounded-full object-cover"
            />
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
          
          <Button 
            onClick={handleDownloadResume}
            style={{ backgroundColor: 'var(--portfolio-primary)' }}
            className="text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity duration-200 shadow-lg font-semibold mb-8"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
          
          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-4">
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
        </div>
      </div>
    </section>
  );
}

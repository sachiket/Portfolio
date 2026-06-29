import { Download, Mail, Phone, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, profile } from "@/content";
import profileImage from "@assets/1718277438477_1753779382746.jpeg";

export default function HeroSection() {
  const handleDownloadResume = () => {
    window.open(profile.resumeUrl, "_blank");
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-green-500 p-1">
            <img
              src={profileImage}
              alt={`${profile.name} - ${profile.title}`}
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: "var(--portfolio-secondary)" }}>
            {profile.name}
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-6">{profile.title}</p>

          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">{profile.tagline}</p>

          <Button
            onClick={handleDownloadResume}
            style={{ backgroundColor: "var(--portfolio-primary)" }}
            className="text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity duration-200 shadow-lg font-semibold mb-8"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">{contact.email}</span>
            </a>
            <a
              href={contact.phoneHref}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">{contact.phone}</span>
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">{contact.githubDisplay}</span>
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Linkedin className="w-4 h-4" />
              <span className="hidden sm:inline">{contact.linkedinDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

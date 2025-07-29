import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import EducationSection from "@/components/education-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    animateElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      animateElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      
      {/* Professional Summary */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: 'var(--portfolio-secondary)' }}>
              Professional Summary
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                <p className="text-lg leading-relaxed text-gray-700">
                  Senior Software Engineer with{" "}
                  <strong style={{ color: 'var(--portfolio-primary)' }}>5+ years of experience</strong>{" "}
                  building scalable, Java-based microservices and cloud-native systems using Java, Spring Boot, 
                  Docker, and Kubernetes. Delivered AI-driven platforms that accelerated campaign workflows by{" "}
                  <strong style={{ color: 'var(--portfolio-accent)' }}>50%</strong>{" "}
                  for clients such as Coke and Kellanova, with expertise in AI technologies like LangChain and LangGraph.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8" style={{ backgroundColor: 'var(--portfolio-secondary)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-300">© 2025 Sachiket Behera. All rights reserved.</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a 
                href="https://github.com/sachiket" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a 
                href="https://linkedin.com/in/sachiket" 
                target="_blank"
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a 
                href="mailto:sachiketbehera@gmail.com" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import SummarySection from "@/components/summary-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import EducationSection from "@/components/education-section";
import ContactSection from "@/components/contact-section";
import { contact, profile } from "@/content";

export default function Home() {
  useEffect(() => {
    const animateElements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

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
      <SummarySection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />

      <footer className="py-8" style={{ backgroundColor: "var(--portfolio-secondary)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-300">© 2025 {profile.name}. All rights reserved.</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href={`mailto:${contact.email}`}
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

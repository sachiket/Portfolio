import { GraduationCap } from "lucide-react";
import { education } from "@/content";

export default function EducationSection() {
  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: "var(--portfolio-secondary)" }}>
            Education
          </h2>

          <div className="max-w-2xl mx-auto space-y-6">
            {education.entries.map((entry) => (
              <div key={entry.institution} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: "hsl(217, 91%, 60%, 0.1)" }}
                  >
                    <GraduationCap className="w-6 h-6" style={{ color: "var(--portfolio-primary)" }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: "var(--portfolio-secondary)" }}>
                      {entry.degree}
                    </h3>
                    <p className="text-gray-600">{entry.field}</p>
                  </div>
                </div>
                <div className="border-l-4 pl-4" style={{ borderColor: "hsl(217, 91%, 60%, 0.2)" }}>
                  <p className="font-semibold" style={{ color: "var(--portfolio-secondary)" }}>
                    {entry.institution}
                  </p>
                  <p className="text-gray-500">{entry.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

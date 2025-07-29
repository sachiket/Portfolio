import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: 'var(--portfolio-secondary)' }}>
            Education
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: 'hsl(217, 91%, 60%, 0.1)' }}>
                  <GraduationCap className="w-6 h-6" style={{ color: 'var(--portfolio-primary)' }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: 'var(--portfolio-secondary)' }}>Bachelor of Technology (B.Tech)</h3>
                  <p className="text-gray-600">Computer Science and Engineering</p>
                </div>
              </div>
              <div className="border-l-4 pl-4" style={{ borderColor: 'hsl(217, 91%, 60%, 0.2)' }}>
                <p className="font-semibold" style={{ color: 'var(--portfolio-secondary)' }}>Institute of Technical Education and Research, Bhubaneswar</p>
                <p className="text-gray-500">August 2016 - August 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

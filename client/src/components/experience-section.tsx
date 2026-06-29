import { CheckCircle } from "lucide-react";
import { experience } from "@/content";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: "var(--portfolio-secondary)" }}>
            Work Experience
          </h2>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-200"></div>

            {experience.jobs.map((job, jobIndex) => (
              <div key={job.company} className="relative mb-12">
                <div className="flex items-center mb-4">
                  <div
                    className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full border-4 border-white shadow-sm"
                    style={{ backgroundColor: `var(--portfolio-${job.accentColor})` }}
                  ></div>
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      jobIndex % 2 === 0 ? "md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                      <div className="flex justify-between items-start mb-2 flex-wrap">
                        <h3 className="text-xl font-bold" style={{ color: "var(--portfolio-secondary)" }}>
                          {job.company}
                        </h3>
                        <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">{job.duration}</span>
                      </div>
                      <p className="font-semibold mb-3" style={{ color: `var(--portfolio-${job.accentColor})` }}>
                        {job.position}
                      </p>

                      <div className={job.projects.length > 1 && job.projects[0].description ? "mb-4" : "space-y-3"}>
                        {job.projects.map((project, projectIndex) => (
                          <div key={project.name} className={projectIndex > 0 ? "mt-3" : undefined}>
                            <h4
                              className={project.description ? "font-bold mb-2" : "font-semibold"}
                              style={{ color: "var(--portfolio-secondary)" }}
                            >
                              {project.name}
                            </h4>
                            {project.description && (
                              <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                            )}
                            <ul className="text-sm space-y-1 text-gray-700 mt-1">
                              {project.achievements.map((achievement) => (
                                <li key={achievement} className="flex items-start">
                                  <CheckCircle
                                    className="w-3 h-3 mr-2 mt-1 flex-shrink-0"
                                    style={{ color: "var(--portfolio-accent)" }}
                                  />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

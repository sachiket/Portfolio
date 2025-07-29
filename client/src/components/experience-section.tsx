import { CheckCircle } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: 'var(--portfolio-secondary)' }}>
            Work Experience
          </h2>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-200"></div>
            
            {/* Publicis Sapient */}
            <div className="relative mb-12">
              <div className="flex items-center mb-4">
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full border-4 border-white shadow-sm" style={{ backgroundColor: 'var(--portfolio-primary)' }}></div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                  <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                    <div className="flex justify-between items-start mb-2 flex-wrap">
                      <h3 className="text-xl font-bold" style={{ color: 'var(--portfolio-secondary)' }}>Publicis Sapient</h3>
                      <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">April 2022 - Present</span>
                    </div>
                    <p className="font-semibold mb-3" style={{ color: 'var(--portfolio-primary)' }}>Senior Associate Technology L1</p>
                    
                    {/* Bodhi Project */}
                    <div className="mb-4">
                      <h4 className="font-bold mb-2" style={{ color: 'var(--portfolio-secondary)' }}>Bodhi (Core AI Platform)</h4>
                      <p className="text-gray-600 text-sm mb-3">Publicis Groupe's enterprise scale AI platform for developing, deploying, and scaling AI solutions</p>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 mr-2 mt-1 flex-shrink-0" style={{ color: 'var(--portfolio-accent)' }} />
                          Developed production grade AI agents with LangChain/LangGraph for campaign workflows
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 mr-2 mt-1 flex-shrink-0" style={{ color: 'var(--portfolio-accent)' }} />
                          Engineered Audience MCP Server middleware platform for AI agent orchestration
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 mr-2 mt-1 flex-shrink-0" style={{ color: 'var(--portfolio-accent)' }} />
                          Reduced campaign planning time by 50% for clients like Kellanova and Coke
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 mr-2 mt-1 flex-shrink-0" style={{ color: 'var(--portfolio-accent)' }} />
                          Built AI-driven microservices for clustering 1M+ records from Epsilon data centers
                        </li>
                      </ul>
                    </div>
                    
                    {/* Other Projects */}
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold" style={{ color: 'var(--portfolio-secondary)' }}>ADEO / Abu Dhabi Housing Authority</h4>
                        <ul className="text-sm space-y-1 text-gray-700 mt-1">
                          <li className="flex items-start">
                            <CheckCircle className="w-3 h-3 mr-2 mt-1 flex-shrink-0" style={{ color: 'var(--portfolio-accent)' }} />
                            Managed 2M+ government records, improved data retrieval by 30%
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-3 h-3 mr-2 mt-1 flex-shrink-0" style={{ color: 'var(--portfolio-accent)' }} />
                            Enhanced FAB banking integration for 41,000+ records, 50% performance boost
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-3 h-3 mr-2 mt-1 flex-shrink-0" style={{ color: 'var(--portfolio-accent)' }} />
                            Automated 20+ business processes using Camunda workflow management
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold" style={{ color: 'var(--portfolio-secondary)' }}>BJs Restaurant</h4>
                        <ul className="text-sm space-y-1 text-gray-700 mt-1">
                          <li className="flex items-start">
                            <CheckCircle className="w-3 h-3 mr-2 mt-1 flex-shrink-0" style={{ color: 'var(--portfolio-accent)' }} />
                            Developed Order, Cart, and Auth microservices
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-3 h-3 mr-2 mt-1 flex-shrink-0" style={{ color: 'var(--portfolio-accent)' }} />
                            Built GraphQL APIs using Nest.js for improved scalability
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-3 h-3 mr-2 mt-1 flex-shrink-0" style={{ color: 'var(--portfolio-accent)' }} />
                            Improved system performance by 40% with Redis, MongoDB, and Oracle
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Capgemini */}
            <div className="relative mb-12">
              <div className="flex items-center mb-4">
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full border-4 border-white shadow-sm" style={{ backgroundColor: 'var(--portfolio-accent)' }}></div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:ml-auto md:pl-8">
                  <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                    <div className="flex justify-between items-start mb-2 flex-wrap">
                      <h3 className="text-xl font-bold" style={{ color: 'var(--portfolio-secondary)' }}>Capgemini</h3>
                      <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">Aug 2020 - Apr 2022</span>
                    </div>
                    <p className="font-semibold mb-3" style={{ color: 'var(--portfolio-accent)' }}>Sr Software Developer</p>
                    
                    {/* Boeing Project */}
                    <div>
                      <h4 className="font-bold mb-2" style={{ color: 'var(--portfolio-secondary)' }}>Boeing OnePDL</h4>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 mr-2 mt-1 flex-shrink-0" style={{ color: 'var(--portfolio-accent)' }} />
                          Enhanced scalability to handle 5TB+ daily data ingestion
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 mr-2 mt-1 flex-shrink-0" style={{ color: 'var(--portfolio-accent)' }} />
                          Improved forecasting model accuracy by 15% for U.S. defense programs
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 mr-2 mt-1 flex-shrink-0" style={{ color: 'var(--portfolio-accent)' }} />
                          Developed OnePDL ETL tool reducing operational delays by 20%
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-3 h-3 mr-2 mt-1 flex-shrink-0" style={{ color: 'var(--portfolio-accent)' }} />
                          Reduced server downtime by 40% and increased user satisfaction by 25%
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

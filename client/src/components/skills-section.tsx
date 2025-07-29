import { Code, Settings, Cloud, Bot } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "blue",
      skills: ["Java", "JavaScript", "TypeScript", "Python"]
    },
    {
      title: "Frameworks & Tech",
      icon: <Settings className="w-6 h-6" />,
      color: "green",
      skills: ["Spring Boot", "Camunda", "GraphQL", "Nest.js", "Node.js", "REST API", "Microservices"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      color: "blue",
      skills: ["AWS", "Docker", "Kubernetes", "RabbitMQ", "Kafka", "Redis", "Git"]
    },
    {
      title: "AI & Databases",
      icon: <Bot className="w-6 h-6" />,
      color: "purple",
      skills: ["LangChain", "LangGraph", "MCP Servers", "MongoDB", "Oracle"]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          icon: "text-blue-500",
          iconBg: "bg-blue-50",
          badge: "bg-blue-50 text-blue-600"
        };
      case "green":
        return {
          icon: "text-green-500",
          iconBg: "bg-green-50",
          badge: "bg-green-50 text-green-600"
        };
      case "purple":
        return {
          icon: "text-purple-500",
          iconBg: "bg-purple-50",
          badge: "bg-purple-50 text-purple-600"
        };
      default:
        return {
          icon: "text-gray-500",
          iconBg: "bg-gray-50",
          badge: "bg-gray-50 text-gray-600"
        };
    }
  };

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: 'var(--portfolio-secondary)' }}>
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => {
              const colorClasses = getColorClasses(category.color);
              
              return (
                <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 ${colorClasses.iconBg} rounded-full flex items-center justify-center mb-4`}>
                      <span className={colorClasses.icon}>
                        {category.icon}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--portfolio-secondary)' }}>
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary"
                          className={`${colorClasses.badge} font-medium`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

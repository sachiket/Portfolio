import { Code, Settings, Cloud, Bot } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { skills } from "@/content";
import type { SkillCategory } from "@shared/schema";

const iconMap = {
  code: Code,
  settings: Settings,
  cloud: Cloud,
  bot: Bot,
};

const getColorClasses = (color: SkillCategory["color"]) => {
  switch (color) {
    case "blue":
      return {
        icon: "text-blue-500",
        iconBg: "bg-blue-50",
        badge: "bg-blue-50 text-blue-600",
      };
    case "green":
      return {
        icon: "text-green-500",
        iconBg: "bg-green-50",
        badge: "bg-green-50 text-green-600",
      };
    case "purple":
      return {
        icon: "text-purple-500",
        iconBg: "bg-purple-50",
        badge: "bg-purple-50 text-purple-600",
      };
  }
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: "var(--portfolio-secondary)" }}>
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.categories.map((category) => {
              const colorClasses = getColorClasses(category.color);
              const Icon = iconMap[category.icon];

              return (
                <Card key={category.title} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 ${colorClasses.iconBg} rounded-full flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 ${colorClasses.icon}`} />
                    </div>
                    <h3 className="text-lg font-bold mb-4" style={{ color: "var(--portfolio-secondary)" }}>
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className={`${colorClasses.badge} font-medium`}>
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

import { useState } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "sachiketbehera@gmail.com",
      href: "mailto:sachiketbehera@gmail.com",
      color: "blue"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "(+91) 79910-94573",
      href: "tel:+917991094573",
      color: "green"
    },
    {
      icon: <Github className="w-5 h-5" />,
      title: "GitHub",
      value: "github.com/sachiket",
      href: "https://github.com/sachiket",
      color: "gray"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      title: "LinkedIn",
      value: "linkedin.com/in/sachiket",
      href: "https://linkedin.com/in/sachiket",
      color: "blue"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-50 text-blue-600";
      case "green":
        return "bg-green-50 text-green-600";
      case "gray":
        return "bg-gray-800/10 text-gray-800";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: 'var(--portfolio-secondary)' }}>
            Let's Connect
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getColorClasses(info.color)}`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--portfolio-secondary)' }}>{info.title}</p>
                      <a 
                        href={info.href}
                        target={info.href.startsWith('http') ? "_blank" : undefined}
                        rel={info.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Contact Form */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--portfolio-secondary)' }}>Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">Name</Label>
                    <Input 
                      id="name"
                      name="name"
                      type="text" 
                      placeholder="Your name"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email" 
                      placeholder="your@email.com"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">Message</Label>
                    <Textarea 
                      id="message"
                      name="message"
                      rows={4} 
                      placeholder="Your message..."
                      required
                      className="mt-1"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full font-semibold"
                    style={{ backgroundColor: 'var(--portfolio-primary)' }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

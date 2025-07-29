import { useState } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
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
              <div className="space-y-6 flex flex-col justify-between">
                <div>
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4 mb-4">
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
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full font-semibold mt-8" style={{ backgroundColor: 'var(--portfolio-primary)' }}>
                      Send a Message
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--portfolio-secondary)' }}>Send a Message</h3>
                    </DialogHeader>
                    <div style={{ width: '100%', minHeight: '500px' }}>
                      <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLScIYcnrPDHx9SYS6FhkFJsMpDa6qXM5bXTDRLwq38xpB4Pldg/viewform?embedded=true"
                        width="900"
                        height="650"
                        frameBorder="0"
                        marginHeight={0}
                        marginWidth={0}
                        title="Contact Form"
                        style={{ borderRadius: '8px', maxWidth: '100%' }}
                      >
                        Loading…
                      </iframe>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              {/* Empty right side for layout balance on desktop, or you can add an illustration here if you want */}
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

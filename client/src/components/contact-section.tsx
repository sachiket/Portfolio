import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <div className="w-full flex justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <span
                  className="text-2xl md:text-3xl font-bold text-center cursor-pointer transition-transform duration-300 hover:scale-110 inline-block animate-bounce bg-gradient-to-r from-blue-500 via-green-400 to-blue-600 bg-clip-text text-transparent hover:text-white hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-600 hover:shadow-lg px-3 py-1 rounded-lg"
                  style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  Let's Connect
                </span>
              </DialogTrigger>
              <DialogContent style={{ width: "95vw", maxWidth: "700px", padding: 0 }}>
                <div style={{ width: "100%", minHeight: "500px", display: "flex", justifyContent: "center" }}>
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLScIYcnrPDHx9SYS6FhkFJsMpDa6qXM5bXTDRLwq38xpB4Pldg/viewform?embedded=true"
                    width="100%"
                    height="650"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="Contact Form"
                    style={{ borderRadius: "8px", width: "100%", maxWidth: "700px" }}
                  >
                    Loading…
                  </iframe>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}

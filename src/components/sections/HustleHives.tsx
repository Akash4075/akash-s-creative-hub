import { Code2, Cpu, Printer, Wrench, Bot, Server, ExternalLink, Phone, Mail } from "lucide-react";

const services = [
  { icon: Code2, title: "Software & Full Stack", desc: "Modern websites, full-stack apps, dashboards, scalable digital platforms.", tags: ["Web", "Apps", "UI/UX"] },
  { icon: Bot, title: "AI Implementations", desc: "Smart assistants, computer vision, automation, and ML-powered systems.", tags: ["AI", "ML", "Automation"] },
  { icon: Cpu, title: "Hardware & Embedded", desc: "Circuit design, Arduino/ESP32/RPi based intelligent embedded systems.", tags: ["Arduino", "ESP32", "Embedded"] },
  { icon: Server, title: "IoT Solutions", desc: "IoT for automation, monitoring, smart agriculture, healthcare & cities.", tags: ["IoT", "Sensors", "Cloud"] },
  { icon: Printer, title: "Printing Services", desc: "T-shirt printing, banners, ID cards — fast turnaround, quality finish.", tags: ["T-Shirts", "Banners", "ID Cards"] },
  { icon: Wrench, title: "Laptop Services", desc: "Repairs, maintenance, software installation, and hardware upgrades.", tags: ["Repair", "Install", "Upgrades"] },
];

export function HustleHives() {
  return (
    <section id="hustle-hives" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <span className="chip">Hustle Hives</span>
        <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold max-w-3xl">
          Innovative <span className="text-gradient">tech services & solutions</span>
        </h2>
        <p className="mt-6 text-muted-foreground max-w-3xl">
          Hustle Hives is my futuristic startup delivering smart software, AI, embedded
          systems, IoT, printing, and laptop services for real-world applications.
          <span className="text-primary font-semibold"> 3+ client projects delivered.</span>
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl card-glow p-6 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary mb-4 group-hover:scale-110 transition-transform">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display font-bold text-lg">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {s.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-secondary border border-border text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="https://hustle-hives.akashapuser.workers.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold glow hover:scale-105 transition-transform"
          >
            Visit Hustle Hives <ExternalLink className="h-4 w-4" />
          </a>
          <a href="tel:7795428138" className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary">
            <Phone className="h-4 w-4" /> 7795428138
          </a>
          <a href="mailto:hustlehivesofficial@gmail.com" className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary">
            <Mail className="h-4 w-4" /> hustlehivesofficial@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

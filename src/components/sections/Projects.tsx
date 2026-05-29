import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Smart AI Receptionist",
    desc: "An AI-powered intelligent receptionist that automates hospital interaction, voice assistance, navigation, and patient management.",
    tags: ["AI", "Flask", "OpenCV", "Voice AI"],
  },
  {
    title: "Silkworm Farm Automation",
    desc: "Smart automation for silkworm farming using IoT, sensors, and embedded systems for environmental monitoring.",
    tags: ["IoT", "ESP32", "Automation", "Sensors"],
  },
  {
    title: "Smart Waste Management",
    desc: "Futuristic smart city waste monitoring using IoT for real-time garbage tracking and city management.",
    tags: ["Smart City", "IoT", "Cloud", "Automation"],
  },
  {
    title: "Medicinal Plants Detection",
    desc: "AI-powered plant detection using computer vision to identify medicinal plants and surface plant info.",
    tags: ["AI", "TensorFlow", "OpenCV", "ML"],
  },
  {
    title: "Daily Expenses Tracker",
    desc: "Smart expense management app for tracking spending, budget planning, analytics, and financial management.",
    tags: ["JavaScript", "Dashboard", "UI/UX", "Finance"],
  },
  {
    title: "Hustle Hives Platform",
    desc: "Full-stack platform for my tech startup — services, client reviews, and contact management.",
    tags: ["React", "Full Stack", "Workers"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <span className="chip">My Projects</span>
        <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold max-w-3xl">
          Futuristic <span className="text-gradient">projects showcase</span>
        </h2>
        <p className="mt-6 text-muted-foreground max-w-3xl">
          A collection of innovative AI, IoT, embedded systems, automation, and software
          projects focused on solving real-world problems.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {projects.map((p) => (
            <article key={p.title} className="rounded-2xl card-glow p-6 flex flex-col">
              <h3 className="font-display font-bold text-lg text-primary">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 flex-1 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-secondary border border-border text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-5 pt-4 border-t border-border">
                <a href="https://github.com/Akash4075" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline">
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
                <a href="#contact" className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline">
                  <ExternalLink className="h-3.5 w-3.5" /> Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

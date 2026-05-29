import portrait from "@/assets/akash-portrait.jpg";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 flex items-center grid-bg overflow-hidden"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-6">
          <span className="chip">Welcome to my futuristic world</span>
          <h1 className="font-display text-5xl md:text-7xl font-black leading-[1.05]">
            <span className="text-gradient">AKASH AP</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-semibold">
            Tech Innovator • Startup Founder • Digital Creator
          </p>
          <p className="text-base text-foreground/80 max-w-xl leading-relaxed">
            I design intelligent software and hardware solutions that solve real-world
            problems. Focused on AI, automation, embedded systems, and futuristic digital
            experiences.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold glow hover:scale-105 transition-transform"
            >
              Let's Connect <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 text-primary px-6 py-3 font-semibold hover:bg-primary/10 transition-colors"
            >
              <Download className="h-4 w-4" /> View Work
            </a>
          </div>
        </div>
        <div className="relative flex justify-center animate-float">
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />
          <img
            src={portrait}
            alt="Akash AP — Tech Innovator"
            width={896}
            height={1152}
            className="relative w-72 md:w-96 rounded-3xl border-2 border-primary/40 glow"
          />
        </div>
      </div>
    </section>
  );
}

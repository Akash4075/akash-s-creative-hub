const highlights = [
  { title: "ECE Final Year", sub: "BGS Institute of Technology" },
  { title: "IEEE Chair", sub: "Student Branch Chair at BGSIT" },
  { title: "Startup Founder", sub: "Founder of Hustle Hives" },
  { title: "Digital Creator", sub: "Educational Tech Content Creator" },
];

const domains = ["AI", "IoT", "Robotics", "Embedded", "Automation", "Cybersecurity", "Cloud", "Web Dev"];

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <span className="chip">About Me</span>
        <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold max-w-3xl">
          Innovating the future with <span className="text-gradient">AI & technology</span>
        </h2>
        <p className="mt-6 text-muted-foreground max-w-3xl leading-relaxed">
          Final Year Electronics & Communication Engineering student at BGSIT, passionate
          about building futuristic AI-powered systems and innovative digital solutions.
          Interests span Artificial Intelligence, Robotics, Embedded Systems, IoT,
          Automation, Web Development, and futuristic technologies that solve real-world
          problems.
        </p>

        <div className="grid md:grid-cols-4 gap-5 mt-12">
          {highlights.map((h) => (
            <div key={h.title} className="rounded-2xl card-glow p-5">
              <h3 className="font-display font-bold text-primary">{h.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{h.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Tech Domains
          </p>
          <div className="flex flex-wrap gap-2">
            {domains.map((d) => (
              <span key={d} className="chip">
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

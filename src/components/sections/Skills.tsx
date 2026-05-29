const software = ["HTML", "CSS", "JavaScript", "React JS", "Python", "Flask", "AI / ML", "OpenCV", "Cloud", "Cybersecurity", "GitHub", "Tableau"];
const hardware = ["Arduino", "Raspberry Pi", "IoT", "Robotics", "Embedded", "ESP32", "Automation", "VLSI", "Verilog", "Sensors", "Communication", "Microcontrollers"];

function SkillBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl card-glow p-6">
      <h3 className="font-display font-bold text-xl text-primary mb-5">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {items.map((s) => (
          <div
            key={s}
            className="text-center text-sm font-semibold rounded-lg border border-border bg-secondary/40 py-2 hover:border-primary/50 hover:text-primary transition-colors"
          >
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <span className="chip">My Skills</span>
        <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold max-w-3xl">
          Tech Stack & <span className="text-gradient">Engineering Skills</span>
        </h2>
        <p className="mt-6 text-muted-foreground max-w-3xl">
          A combination of futuristic software development and hardware engineering skills
          focused on AI, automation, robotics, embedded systems, and modern digital
          technologies.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <SkillBlock title="Software Skills" items={software} />
          <SkillBlock title="Hardware Skills" items={hardware} />
        </div>
      </div>
    </section>
  );
}

import { Trophy, Award, Rocket, Users } from "lucide-react";

const stats = [
  { icon: Trophy, value: "10+", label: "Hackathons" },
  { icon: Award, value: "6", label: "Prize Wins" },
  { icon: Rocket, value: "15+", label: "Projects Built" },
  { icon: Users, value: "IEEE", label: "Leadership" },
];

const wins = [
  "🥇 1st Place — 36 Hour Hackathon, Malnad College of Engineering, Hassan",
  "🥈 2nd Place — Ideathon at Adichunchanagiri Institute of Technology",
  "🥈 2nd Place — Project Expo at PES College of Engineering, Mandya",
  "🥈 2nd Place — Project Exhibition at MIT Mysore",
  "🏅 4th Place — State Level Jnana Vignana Tantragyana Mela",
  "🚀 Participated in 10+ Hackathons across Karnataka",
];

const certs = [
  { t: "AWS Certification", s: "Cloud Computing & AWS Technologies" },
  { t: "Tata Certification", s: "Technology & Industry Learning Program" },
  { t: "Web Development", s: "Frontend & Full Stack Development" },
  { t: "AI / ML", s: "Artificial Intelligence & Machine Learning" },
  { t: "Cybersecurity", s: "Security Fundamentals & Digital Protection" },
  { t: "IoT & Embedded", s: "Embedded Systems & IoT Technologies" },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <span className="chip">Achievements</span>
        <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold max-w-3xl">
          Awards, leadership & <span className="text-gradient">certifications</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl card-glow p-6 text-center">
              <s.icon className="h-7 w-7 mx-auto text-primary" />
              <p className="font-display text-3xl font-black mt-3 text-gradient">{s.value}</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-10">
          <div className="rounded-2xl card-glow p-6">
            <h3 className="font-display font-bold text-xl text-primary">Hackathon Highlights</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-foreground/85">
              {wins.map((w) => (
                <li key={w} className="flex gap-2">
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl card-glow p-6">
            <h3 className="font-display font-bold text-xl text-primary">Professional Certifications</h3>
            <div className="grid sm:grid-cols-2 gap-3 mt-4">
              {certs.map((c) => (
                <div key={c.t} className="rounded-lg border border-border bg-secondary/40 p-3">
                  <p className="font-semibold text-sm">{c.t}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{c.s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

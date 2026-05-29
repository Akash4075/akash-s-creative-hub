import { Mail, Github, Linkedin, Instagram, Youtube, Phone, ExternalLink } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", value: "akashapuser@gmail.com", href: "mailto:akashapuser@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/akash-ap", href: "https://www.linkedin.com/in/akash-ap-1262b235a" },
  { icon: Github, label: "GitHub", value: "github.com/Akash4075", href: "https://github.com/Akash4075" },
  { icon: Instagram, label: "Instagram", value: "@akashh__ap • 1k family", href: "https://www.instagram.com/akashh__ap" },
  { icon: Youtube, label: "YouTube", value: "Smartify Official • 1.2k family", href: "https://youtube.com/@smartifyofficial" },
  { icon: Phone, label: "Hustle Hives", value: "7795428138", href: "tel:7795428138" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <span className="chip">Contact</span>
        <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
          Let's build the <span className="text-gradient">future together</span>
        </h2>
        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
          Open for collaborations, internships, startup opportunities, freelance projects,
          and futuristic technology innovations.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 text-left">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="rounded-2xl card-glow p-5 flex items-center gap-4 group"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary group-hover:scale-110 transition-transform">
                <l.icon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{l.label}</p>
                <p className="font-semibold truncate">{l.value}</p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
            </a>
          ))}
        </div>

        <p className="mt-16 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Akash AP • Built with futuristic vibes ⚡
        </p>
      </div>
    </section>
  );
}

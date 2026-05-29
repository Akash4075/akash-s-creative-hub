import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { HustleHives } from "@/components/sections/HustleHives";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Chatbot } from "@/components/Chatbot";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akash AP — Tech Innovator, Startup Founder & Digital Creator" },
      {
        name: "description",
        content:
          "Portfolio of Akash AP — ECE student, IEEE Chair at BGSIT, founder of Hustle Hives. AI, IoT, embedded systems, robotics, web dev & freelance tech services.",
      },
      { property: "og:title", content: "Akash AP — Futuristic Tech Portfolio" },
      {
        property: "og:description",
        content: "AI, embedded systems, IoT, freelance software & hardware services by Akash AP.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <HustleHives />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Chatbot />
    </div>
  );
}

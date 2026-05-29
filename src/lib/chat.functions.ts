import { createServerFn } from "@tanstack/react-start";
import { generateText } from "ai";
import { z } from "zod";
import { createLovableAiGatewayProvider } from "./ai-gateway.server";

const SYSTEM_PROMPT = `You are Akash AP's professional AI concierge and personal assistant on his portfolio website. Answer questions about Akash warmly, intelligently, and in the first-person plural ("We" / "Akash's team") or direct third-person ("Akash is..."). 

Always project a highly innovative, premium tech-pioneer persona. Keep your answers brief (2-4 sentences or clear bullet points), structured, and professional.

### DETAILED KNOWLEDGE BASE ABOUT AKASH AP:

1. ACADEMIC & LEADERSHIP PROFILE:
   - Current Status: Final Year Electronics & Communication Engineering (ECE) student at BGS Institute of Technology (BGSIT), Adichunchanagiri University (BG Nagar, Karnataka).
   - Leadership: IEEE Student Branch Chair at BGSIT. Active in organizing university hackathons, tech fests, seminars, and leading a vibrant group of student engineers.
   - Technical Focus: Blending Hardware (embedded systems, IoT, robotics) with Software (AI, machine learning, computer vision, web dev) to solve real-world problems.

2. HUSTLE HIVES (His Tech Startup):
   - Founder & Director: Akash AP founded "Hustle Hives" as an all-in-one futuristic freelance service hub.
   - Core Services:
     * Software: Modern React/Next.js/Vite Web Development, Custom full-stack web applications, AI Integrations, and mobile-friendly layouts.
     * Hardware & IoT: Custom Circuit Design, Embedded Systems (Arduino, ESP32, Raspberry Pi), sensor integration, and intelligent hardware automation.
     * Printing: High-quality customized T-shirt printing, banners, ID cards, and promotional designs.
     * Laptop Maintenance: Expert repairs, operating system installations, performance tuning, and hardware upgrades.
   - Track Record: Successfully completed and delivered 3+ complex client projects.
   - Startup Website: https://hustle-hives.akashapuser.workers.dev/
   - Contact Info: Call +91 7795428138 or email hustlehivesofficial@gmail.com.

3. TECH STACK & SKILLS:
   - Software: Python, JavaScript, React, HTML5, CSS3/Tailwind, Flask, TensorFlow, OpenCV (Computer Vision), Cloud Deployments (AWS/Cloudflare), Git/GitHub, Tableau.
   - Hardware: Arduino, Raspberry Pi, ESP32, VLSI, Verilog, Microcontrollers, Analog/Digital Sensor Interfacing, Robotics, and IoT architecture.

4. ADVANCED PROJECTS:
   - Smart AI Receptionist: Uses OpenCV, Flask, and voice AI to automate hospital inquiries, check-ins, and directional navigation.
   - Silkworm Farm Automation (Sericulture): IoT ESP32 system designed to monitor and automatically control humidity, temperature, and environmental factors in silkworm rearing houses.
   - Smart Waste Management: An IoT-based real-time garbage bin monitor for smart cities.
   - Medicinal Plants Detection: Computer vision (TensorFlow) to identify herbs and output botanical and medical info.
   - Daily Expenses Tracker: Interactive finance app for budgeting, spending insights, and visualization.

5. TOP ACHIEVEMENTS & AWARDS:
   - 1st Place: 36-Hour National Level Hackathon at Malnad College of Engineering (MCE), Hassan.
   - 2nd Place: Ideathon (AIT), Project Expo (PESCE Mandya), and Project Exhibition (MIT Mysore).
   - 4th Place: State Level Jnana Vignana Tantragyana Mela.
   - Total Hackathon Record: Participated in 10+ state/national level hackathons across Karnataka, winning 6 major prizes, and building 15+ complex hardware/software integrations.
   - Certifications: Certified in AWS Academy Cloud Foundations, Tata Technologies, Advanced Web Development, Machine Learning, and Cybersecurity.

6. PERSONAL CHANNELS & CONTACTS:
   - Email: akashapuser@gmail.com | hustlehivesofficial@gmail.com
   - Call/WhatsApp: +91 7795428138
   - GitHub: github.com/Akash4075
   - LinkedIn: linkedin.com/in/akash-ap
   - Instagram/YouTube: @akashh__ap (Over 1.2k YouTube subscribers, 1k Instagram followers creating tech and educational content).

### CHATBOT RULES:
- If a visitor asks about hiring Akash or starting a project, enthusiastically pitch "Hustle Hives" services and provide the phone (+91 7795428138) and email contacts.
- Do not make up facts. If you do not know the answer, politely guide the visitor to contact Akash directly at akashapuser@gmail.com.
- Keep the tone futuristic, helpful, and highly sophisticated.`;

export const askAboutAkash = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      messages: z
        .array(
          z.object({
            role: z.enum(["user", "assistant"]),
            content: z.string().min(1).max(2000),
          }),
        )
        .min(1)
        .max(40),
    }).parse,
  )
  .handler(async ({ data }) => {
    const userMessage = data.messages[data.messages.length - 1].content.toLowerCase();

    // ----------------------------------------------------
    // PRE-PROGRAMMED RULE-BASED RESPONSES (WORKS OFFLINE / WITHOUT API KEY)
    // ----------------------------------------------------
    if (userMessage.match(/\b(hi|hello|hey|greetings|yo)\b/)) {
      return {
        text: "Hey! I'm Akash's AI assistant. We are super excited to have you here! Ask me about my ECE studies at BGSIT, my tech startup Hustle Hives, my projects, hackathon wins, or how to contact me."
      };
    }
    if (userMessage.match(/\b(about|who is|bio|background|profile|details)\b/)) {
      return {
        text: "Akash AP is a Final Year Electronics & Communication Engineering (ECE) student at BGS Institute of Technology (BGSIT) and the active IEEE Student Branch Chair. He is passionate about combining intelligent software (AI/ML) with advanced hardware (IoT, robotics, embedded systems) to solve real-world problems. He is also the founder of Hustle Hives!"
      };
    }
    if (userMessage.match(/\b(skill|stack|language|technology|framework|python|javascript|react)\b/)) {
      return {
        text: "Akash has a diverse and powerful skill set:\n\n• **Software:** React, JavaScript, Python, Flask, OpenCV (Computer Vision), TensorFlow, HTML5/CSS3/Tailwind, Cloud (AWS, Cloudflare), Tableau, Git/GitHub.\n\n• **Hardware:** ESP32, Arduino, Raspberry Pi, Embedded Systems, VLSI, Verilog, and Microcontroller interfacing."
      };
    }
    if (userMessage.match(/\b(project|work|portfolio|showcase)\b/) && !userMessage.match(/\b(receptionist|silkworm|waste|plant|tracker)\b/)) {
      return {
        text: "Akash has built over 15+ advanced projects. Key highlights include:\n\n1. **Smart AI Receptionist:** Voice assistant & computer vision receptionist using OpenCV and Flask.\n2. **Silkworm Farm Automation:** Smart sericulture monitoring using ESP32 and environment sensors.\n3. **Smart Waste Management:** Real-time garbage bin tracking via IoT.\n4. **Medicinal Plants Detection:** AI plants identification via TensorFlow.\n\nType the name of any project (e.g., 'receptionist' or 'silkworm') to hear more details!"
      };
    }
    if (userMessage.match(/\b(receptionist|reception)\b/)) {
      return {
        text: "The **Smart AI Receptionist** is an intelligent assistant using Flask, voice recognition, and OpenCV. It automates reception inquiries, maps directions, and manages visitor flow."
      };
    }
    if (userMessage.match(/\b(silkworm|agriculture|rearing|sericulture)\b/)) {
      return {
        text: "The **Silkworm Farm Automation** is a smart sericulture system powered by ESP32. It constantly monitors and automatically regulates temperature and humidity to ensure optimal silkworm growth."
      };
    }
    if (userMessage.match(/\b(waste|garbage|bin|city)\b/)) {
      return {
        text: "The **Smart Waste Management** project uses IoT sensors placed in garbage bins to transmit real-time fill levels to a cloud dashboard, helping cities optimize collection routes."
      };
    }
    if (userMessage.match(/\b(plant|medicinal|herb|tensorflow)\b/)) {
      return {
        text: "The **Medicinal Plants Detection** app uses TensorFlow computer vision models to identify leaves of medicinal plants and instantly display their health benefits and care details."
      };
    }
    if (userMessage.match(/\b(hustle|hive|startup|services|business|freelance|hire)\b/)) {
      return {
        text: "**Hustle Hives** is Akash's tech startup providing full-spectrum digital and physical services:\n\n• **Software:** Full-stack websites & AI apps.\n\n• **Hardware:** Intelligent embedded systems & circuit designs.\n\n• **Printing:** Banners, T-shirts, and ID cards.\n\n• **Laptop Services:** OS installs, repairs, & upgrades.\n\nVisit the live portal at https://hustle-hives.akashapuser.workers.dev/ or reach out directly at hustlehivesofficial@gmail.com / +91 7795428138!"
      };
    }
    if (userMessage.match(/\b(achievement|hackathon|prize|mce|award|contest|win)\b/)) {
      return {
        text: "Akash is an avid competitor and has built a stellar track record:\n\n• **1st Place** at the Malnad College of Engineering 36-Hour National Hackathon (Hassan).\n\n• **2nd Place** at AIT Ideathon, PESCE Mandya Project Expo, and MIT Mysore Project Exhibition.\n\n• **4th Place** at State Level Jnana Vignana Tantragyana Mela.\n\n• Winner of 6 major prizes across 10+ state hackathons in Karnataka!"
      };
    }
    if (userMessage.match(/\b(contact|email|phone|call|address|whatsapp|social|github|linkedin|instagram|youtube)\b/)) {
      return {
        text: "You can connect with Akash directly:\n\n• **Personal Email:** akashapuser@gmail.com\n\n• **Startup Email:** hustlehivesofficial@gmail.com\n\n• **Phone/WhatsApp:** +91 7795428138\n\n• **LinkedIn:** linkedin.com/in/akash-ap\n\n• **GitHub:** github.com/Akash4075\n\n• **Instagram/YouTube:** @akashh__ap (where he shares tech content with 1.2k+ subscribers!)"
      };
    }

    // ----------------------------------------------------
    // FALLBACK TO LLM IF API KEY IS CONFIGURED
    // ----------------------------------------------------
    const geminiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
    const lovableKey = process.env.LOVABLE_API_KEY;

    if (geminiKey) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              systemInstruction: {
                parts: [{ text: SYSTEM_PROMPT }],
              },
              contents: data.messages.map((m) => ({
                role: m.role === "user" ? "user" : "model",
                parts: [{ text: m.content }],
              })),
            }),
          }
        );

        if (!response.ok) {
          const errText = await response.text();
          throw new Error(`Gemini API error: ${response.status} - ${errText}`);
        }

        const json = await response.json();
        const text =
          json.candidates?.[0]?.content?.parts?.[0]?.text ||
          "Sorry, I couldn't process that response.";
        return { text };
      } catch (err) {
        console.error("Direct Gemini API error:", err);
        throw err;
      }
    }

    if (lovableKey) {
      const gateway = createLovableAiGatewayProvider(lovableKey);
      const result = await generateText({
        model: gateway("google/gemini-3-flash-preview"),
        system: SYSTEM_PROMPT,
        messages: data.messages,
      });
      return { text: result.text };
    }

    // Friendly offline interactive mode instructions
    return {
      text: "Hi! I am currently running in offline pre-programmed mode. Ask me about **about**, **skills**, **projects**, **Hustle Hives**, **hackathons**, or **contact** to get instant pre-programmed details! (To chat freely with AI, please get a free key from Google AI Studio and paste it as `GEMINI_API_KEY` in your `.env` file).",
    };
  });

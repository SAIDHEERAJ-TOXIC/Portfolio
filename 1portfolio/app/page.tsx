import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, GraduationCap, Award } from "lucide-react"
import Link from "next/link"
import HeroBG from "@/components/hero-bg"
import Section from "@/components/section"

// Content — replace here if anything changes
const NAME = "R SAI DHEERAJ"
const LOCATION = "Kurnool, Andhra Pradesh"
const EMAIL = "16saidheeraj@gmail.com"
const PHONE = "+91-9908918853"
const LINKEDIN = "https://www.linkedin.com/in/sai-dheeraj-a1145830b/"
const GITHUB = "https://github.com/SAIDHEERAJ-TOXIC"

const SUMMARY =
  "Full-Stack Developer in training (B.Tech CSE @ GPCET). Certified in JavaScript & Full Stack Development. Built responsive web and mobile apps. Passionate about impactful products and eager to contribute to innovative software while quickly learning modern frameworks."

const TECH_SKILLS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "shadcn/ui",
  "Flutter",
  "Dart",
  "HTML",
  "Prompt Design in Vertex AI",
  "AI",
  "Machine Learning",
  "Deep Learning",
  "Cloud",
]

const SOFT_SKILLS = ["Communication", "Leadership", "Problem-Solving"]

const EDUCATION = [
  {
    title: "B.Tech in Computer Science Engineering",
    org: "G. Pullaiah College of Engineering and Technology (GPCET)",
    period: "2024 – 2028",
  },
]

const PROJECTS = [
  {
    title: "GPCET ATTENDANCE SYSTEM",
    description:
      "Automates student attendance using geolocation and face recognition. Built with TypeScript, Next.js, React, Tailwind CSS, and shadcn/ui.",
    link: "https://github.com/SAIDHEERAJ-TOXIC/GPCET-SMART-ATTENDANCE",
  },
  {
    title: "SILENT-GUARDIAN — AI-Powered Safety App",
    description:
      "Flutter mobile app using AI (OpenAI) sensor analysis to detect falls and unusual patterns. Sends real-time SMS + location alerts; 24/7 background monitoring for faster emergency response.",
    link: "https://github.com/SAIDHEERAJ-TOXIC/Silent-Guardian.git",
  },
]

const CERTS = [
  "Full Stack Certification – OneRoadMap (2025)",
  "React Certification – OneRoadMap (2025)",
  "Java Certification – OneRoadMap (2025)",
  "JavaScript Certification – OneRoadMap (2025)",
  "Python – OneRoadMap (2025)",
]

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="#" className="font-semibold tracking-tight text-zinc-100">
          {NAME}
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>
          <a href="#education" className="hover:text-white transition">
            Education
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#certifications" className="hover:text-white transition">
            Certifications
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Link href={LINKEDIN} target="_blank" aria-label="LinkedIn">
            <Button variant="secondary" className="bg-white/10 text-white hover:bg-white/15">
              <Linkedin className="h-4 w-4" />
            </Button>
          </Link>
          <Link href={GITHUB} target="_blank" aria-label="GitHub">
            <Button variant="secondary" className="bg-white/10 text-white hover:bg-white/15">
              <Github className="h-4 w-4" />
            </Button>
          </Link>
          <a href="#contact" aria-label="Contact">
            <Button className="bg-indigo-600 hover:bg-indigo-500 text-white">Contact</Button>
          </a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <HeroBG />
      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 text-cyan-400" />
            {LOCATION}
          </span>
          <span className="opacity-50">•</span>
          <span className="inline-flex items-center gap-1">
            <Mail className="h-3.5 w-3.5 text-cyan-400" />
            {EMAIL}
          </span>
          <span className="opacity-50">•</span>
          <span className="inline-flex items-center gap-1">
            <Phone className="h-3.5 w-3.5 text-cyan-400" />
            {PHONE}
          </span>
        </div>

        <h1 className="mt-6 text-balance bg-gradient-to-r from-indigo-400 via-indigo-300 to-cyan-300 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-6xl">
          Hi, There I'm Sai Dheeraj
        </h1>

        <p className="mt-5 max-w-2xl text-pretty text-zinc-300 leading-relaxed">
          Full-Stack Developer | Web & App Designer | AI Explorer
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href={LINKEDIN} target="_blank">
            <Button className="bg-indigo-600 hover:bg-indigo-500 text-white">
              <Linkedin className="mr-2 h-4 w-4" />
              Connect on LinkedIn
            </Button>
          </Link>
          <Link href={GITHUB} target="_blank">
            <Button variant="secondary" className="bg-white/10 text-white hover:bg-white/15">
              <Github className="mr-2 h-4 w-4" />
              View GitHub
            </Button>
          </Link>
          <a href="#projects" className="text-zinc-300 hover:text-white inline-flex items-center gap-1 text-sm">
            Explore Projects <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

function SkillBadges({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((s) => (
        <Badge
          key={s}
          variant="secondary"
          className="bg-white/5 text-zinc-200 border border-white/10 hover:bg-white/10"
        >
          {s}
        </Badge>
      ))}
    </div>
  )
}

function Education() {
  return (
    <div className="grid gap-4">
      {EDUCATION.map((ed) => (
        <Card key={ed.title} className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-zinc-100 text-lg flex items-start gap-2">
              <GraduationCap className="h-5 w-5 text-indigo-400" />
              {ed.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-zinc-300">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <span className="text-zinc-200">{ed.org}</span>
              <span className="text-zinc-400">{ed.period}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function ProjectGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {PROJECTS.map((p) => (
        <Card key={p.title} className="group bg-white/5 border-white/10 hover:border-white/20 transition">
          <CardHeader>
            <CardTitle className="text-zinc-100">
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
                {p.title}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-zinc-300">
            <p className="leading-relaxed">{p.description}</p>
            <div className="mt-4">
              <Link href={p.link} target="_blank">
                <Button variant="secondary" className="bg-white/10 text-white hover:bg-white/15">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View on GitHub
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function Certifications() {
  return (
    <div className="grid gap-3">
      {CERTS.map((c) => (
        <div key={c} className="flex items-center gap-3 text-zinc-200">
          <div className="rounded-full bg-indigo-600/20 p-1.5 border border-indigo-500/30">
            <Award className="h-4 w-4 text-indigo-300" />
          </div>
          <span>{c}</span>
        </div>
      ))}
      <div className="mt-4">
        <Link href={LINKEDIN} target="_blank">
          <Button variant="secondary" className="bg-white/10 text-white hover:bg-white/15">
            View all on LinkedIn
          </Button>
        </Link>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-zinc-400 text-sm">
          © {new Date().getFullYear()} {NAME}. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <Link href={LINKEDIN} target="_blank" className="text-zinc-300 hover:text-white">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href={GITHUB} target="_blank" className="text-zinc-300 hover:text-white">
            <Github className="h-5 w-5" />
          </Link>
          <a
            href={`mailto:${EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-white"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          {/* Phone icon link stays to LinkedIn per your requirement */}
          <Link
            href={LINKEDIN}
            target="_blank"
            className="text-zinc-300 hover:text-white"
            aria-label="LinkedIn (via Phone)"
          >
            <Phone className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default function Page() {
  return (
    <main className="min-h-dvh bg-black text-white">
      <Nav />
      <Hero />

      {/* About */}
      <Section id="about" title="About" subtitle="Who I am and what I do">
        <Card className="bg-white/5 border-white/10">
          <CardContent className="pt-6 text-zinc-300 leading-relaxed">{SUMMARY}</CardContent>
        </Card>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills" subtitle="Technologies and strengths">
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-zinc-100">Technical</CardTitle>
            </CardHeader>
            <CardContent>
              <SkillBadges items={TECH_SKILLS} />
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-zinc-100">Soft Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <SkillBadges items={SOFT_SKILLS} />
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education" subtitle="Academic background">
        <Education />
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" subtitle="Selected work">
        <ProjectGrid />
      </Section>

      {/* Certifications */}
      <Section id="certifications" title="Certifications" subtitle="Verified achievements">
        <Certifications />
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" subtitle="Let’s build something great">
        <Card className="bg-white/5 border-white/10">
          <CardContent className="pt-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3 text-zinc-300">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-cyan-400" />
                  <a href={`mailto:${EMAIL}`} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    {EMAIL}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Link href={LINKEDIN} target="_blank" aria-label="LinkedIn (via Phone)">
                    <Phone className="h-4 w-4 text-cyan-400" />
                  </Link>
                  <a href={`tel:${PHONE}`} className="hover:text-white">
                    {PHONE}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4 text-cyan-400" />
                  <Link href={LINKEDIN} target="_blank" className="hover:text-white">
                    LinkedIn Profile
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-4 w-4 text-cyan-400" />
                  <Link href={GITHUB} target="_blank" className="hover:text-white">
                    GitHub Profile
                  </Link>
                </div>
              </div>
              <div className="flex items-center md:justify-end gap-3">
                <Link href={LINKEDIN} target="_blank">
                  <Button className="bg-indigo-600 hover:bg-indigo-500">Message on LinkedIn</Button>
                </Link>
                <Button asChild variant="secondary" className="bg-white/10 text-white hover:bg-white/15">
                  <a href={`mailto:${EMAIL}`} target="_blank" rel="noopener noreferrer">
                    Email Me
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      <Footer />
    </main>
  )
}

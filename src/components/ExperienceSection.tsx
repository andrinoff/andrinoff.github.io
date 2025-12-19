import { Briefcase } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

const experiences: Experience[] = [
  {
    company: "Software Developing Studio",
    role: "Lead Fullstack Developer",
    period: "Apr 2025 - Aug 2025",
    description:
      "In addition to architecting and building core features for client projects, I led a team of junior developers in a fast-paced studio environment. I served as the technical anchor for the team, ensuring code quality and timely delivery.",
    technologies: ["React", "Javascript", "CSS", "Python"],
  },
  {
    company: "freemoviesfull.cc",
    role: "Backend Engineer",
    period: "Dec 2024 - Apr 2025",
    description:
      "Worked on the core backend services for a distributed media streaming application. I was responsible for the architecture supporting video content delivery.",
    technologies: ["Go", "Python", "Javascript"],
  },
  {
    company: "Software Developing Studio",
    role: "Fullstack Developer",
    period: "Jun 2023 - Aug 2024",
    description:
      "Specialised in building robust, high-performance applications in a fast-paced studio environment. I focused on writing clean, maintainable code and architecting scalable backend systems that integrate seamlessly with dynamic frontends.",
    technologies: ["React", "Javascript", "CSS", "Node.js"],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot bg-destructive" />
            <div className="terminal-dot bg-terminal-amber" />
            <div className="terminal-dot bg-terminal-green" />
            <span className="ml-4 text-sm text-muted-foreground">
              ~/experience
            </span>
          </div>

          <div className="p-8">
            <div className="space-y-2 mb-8">
              <p className="terminal-prompt">$ cat experience.log</p>
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Briefcase className="w-6 h-6" />
                Work Experience
              </h2>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="border-l-2 border-border pl-6 relative hover:border-foreground transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-background border-2 border-foreground rounded-full" />

                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h3 className="text-lg font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <span className="text-terminal-amber text-sm">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-secondary">
                      <span className="text-muted-foreground">@</span>{" "}
                      {exp.company}
                    </p>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-muted text-secondary border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="terminal-prompt mt-8">
              $ <span className="cursor-blink">_</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

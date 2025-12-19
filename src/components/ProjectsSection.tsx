import { ExternalLink, Folder, GitBranch } from "lucide-react";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    name: "plazen",
    description:
      "Plazen is a modern calendar application that takes the hassle out of scheduling. It automatically organizes your tasks and events to optimize your productivity.",
    technologies: ["React", "TailwindCSS", "Prisma"],
    github: "https://github.com/plazen/plazen",
    link: "https://plazen.org",
  },
  {
    name: "floatpane",
    description:
      "A beautiful and minimal wallpaper engine designed for both MacOS and Windows. Floatpane brings life to your desktop with dynamic, interactive wallpapers while maintaining a low system footprint. Built with Electron and React for cross-platform compatibility.",
    technologies: ["Javascript", "React", "Electron"],
    link: "https://floatpane.com",
    github: "https://github.com/floatpane/floatpane",
  },
  {
    name: "matcha",
    description:
      "A beautiful email client that runs entirely in your terminal. Matcha brings a modern, intuitive interface to managing your emails from the command line, with a clean aesthetic.",
    technologies: ["Go", "TUI", "SMTP/IMAP"],
    github: "https://github.com/floatpane/matcha",
    link: "https://matcha.floatpane.com",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot bg-destructive" />
            <div className="terminal-dot bg-terminal-amber" />
            <div className="terminal-dot bg-terminal-green" />
            <span className="ml-4 text-sm text-muted-foreground">
              ~/projects
            </span>
          </div>

          <div className="p-8">
            <div className="space-y-2 mb-8">
              <p className="terminal-prompt">$ ls -la featured/</p>
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Folder className="w-6 h-6" />
                Featured Projects
              </h2>
            </div>

            <div className="grid gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="border border-border p-6 hover:border-foreground transition-all group hover:bg-muted/30"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center gap-3">
                        <GitBranch className="w-5 h-5 text-secondary" />
                        <h3 className="text-lg font-bold text-foreground transition-all">
                          {project.name}
                        </h3>
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 border border-secondary text-secondary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 sm:flex-col sm:items-end">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1"
                        >
                          <span>source</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:text-foreground transition-colors text-sm flex items-center gap-1"
                        >
                          <span>website</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-muted-foreground text-sm">
              <p className="terminal-prompt">more projects on github...</p>
              <a
                href="https://github.com/andrinoff"
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-link"
              >
                → github.com/andrinoff
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

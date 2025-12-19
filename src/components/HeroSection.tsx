import { Github, Linkedin, Mail, Terminal } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dot bg-destructive" />
            <div className="terminal-dot bg-terminal-amber" />
            <div className="terminal-dot bg-terminal-green" />
            <span className="ml-4 text-sm text-muted-foreground">
              ~/andrinoff
            </span>
          </div>

          <div className="p-8 space-y-6">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="text-terminal-dim text-xs leading-none hidden md:block">
                <img
                  src="/avatar.png"
                  alt="Drew Smirnoff"
                  className="w-32 h-32 rounded-full border border-border"
                />
              </div>

              <div className="flex-1 space-y-4">
                <div className="space-y-2">
                  <p className="terminal-prompt">$ whoami</p>
                  <h1 className="text-2xl md:text-4xl font-bold">
                    Drew Smirnoff
                  </h1>
                  <p className="text-secondary text-lg">@andrinoff</p>
                </div>

                <div className="space-y-2">
                  <p className="terminal-prompt">$ cat about.txt</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Hey there! 👋 I am a software engineer, based in Tbilisi,
                    Georgia, building scalable web apps and delightful user
                    experiences. Focused on full-stack development, performance
                    and architecture.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="terminal-prompt">$ ls skills/</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "TypeScript",
                      "React",
                      "Node.js",
                      "Python",
                      "Go",
                      "PostgreSQL",
                      "Next.js",
                      "Git",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 border border-border text-sm text-secondary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-4">
                  <p className="terminal-prompt">$ cat contact.json</p>
                  <div className="flex gap-6">
                    <a
                      href="https://github.com/andrinoff"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <Github className="w-5 h-5" />
                      <span className="hidden sm:inline">github</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/andrinoff"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="hidden sm:inline">linkedin</span>
                    </a>
                    <a
                      href="mailto:business@andrinoff.com"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      <span className="hidden sm:inline">email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-2 text-muted-foreground">
              <Terminal className="w-4 h-4" />
              <span className="text-sm">scroll down for more</span>
              <span className="animate-bounce">↓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

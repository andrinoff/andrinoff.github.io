import { Terminal } from "lucide-react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Terminal className="w-4 h-4" />
          <span className="text-sm">$ echo "Thanks for visiting!"</span>
        </div>

        <p className="text-terminal-dim text-xs">
          © {currentYear} andrinoff. All rights reserved.
        </p>

        <div className="pt-4">
          <p className="text-terminal-dim text-xs font-mono">EOF</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

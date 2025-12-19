import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory">
      <div className="snap-start min-h-screen">
        <HeroSection />
      </div>
      <div className="snap-start min-h-screen">
        <ExperienceSection />
      </div>
      <div className="snap-start min-h-screen">
        <ProjectsSection />
      </div>
      <div className="snap-start">
        <FooterSection />
      </div>
    </main>
  );
};

export default Index;

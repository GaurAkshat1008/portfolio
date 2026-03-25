import { Box } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/HeroNew";
import { AboutSection } from "../components/AboutSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { FooterNew } from "../components/FooterNew";

const Index: React.FC = () => {
  return (
    <Box bg="surface.0" minH="100vh">
      <Navbar />
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <FooterNew />
    </Box>
  );
};

export default Index;

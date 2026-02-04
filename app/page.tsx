import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Footer from "@/components/footer";
import CareerSummary from "@/components/career_summary";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section - Full Width */}
      <Intro />
      <CareerSummary />
      {/* Main Content Sections - Centered */}
      <div className="flex flex-col items-center px-4 w-full">
        
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
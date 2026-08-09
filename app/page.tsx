import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PointOfView from "@/components/PointOfView";
import ProjectsSection from "@/components/ProjectsSection";
import AboutPreview from "@/components/AboutPreview";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <PointOfView />
        <ProjectsSection />
        <AboutPreview />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
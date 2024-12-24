import Hero from "@/components/Hero";
import { RecentProjects } from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import { Footer } from "@/components/Footer";
import '../style.css';
export default function Home() {
  return (
    <main className="main-container">
      <div className="max-width-container">
        <FloatingNav navItems={navItems} />
      <Hero />
      <RecentProjects />
      <Footer />
      </div>
    </main>
  );
}

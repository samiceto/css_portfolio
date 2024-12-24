import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import { Clients } from '@/components/Clients'
import { Footer } from "@/components/Footer";
import '../style.css';
export default function Home() {
  return (
    <main className="main-container">
      <div className="max-width-container">
        <FloatingNav navItems={navItems} />
      <Hero />
      <Clients />
      <Footer />
      </div>
    </main>
  );
}

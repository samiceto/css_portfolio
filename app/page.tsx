"use client"
import { Grid } from "@/components/Grid";
import Hero from "@/components/Hero";
import { RecentProjects } from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import { Clients } from '@/components/Clients'
import { Experience } from "@/components/Experience";
import  Aproach  from "@/components/Aproach";
import { Footer } from "@/components/Footer";
import './style.css';
export default function Home() {
  return (
    <main className="main-container">
      <div className="max-width-container">
        <FloatingNav navItems={navItems} />
      <Hero />
      <Grid />
      <RecentProjects />
      <Clients />
      <Experience />
      <Aproach />
      <Footer />
      </div>
    </main>
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import SDKs from "@/components/SDKs";
import Agent from "@/components/Agent";
import Skills from "@/components/Skills";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Vision />
        <SDKs />
        <Agent />
        <Skills />
        <CTA />
      </main>
    </>
  );
}

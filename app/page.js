import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <>
      <header className="bg-primary pt-14">
        <Header />
        <Hero />
      </header>
      <ServicesSection />
    </>
  );
}

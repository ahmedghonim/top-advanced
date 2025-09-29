import Advantages from "@/components/Advantages";
import Contact from "@/components/Contact";
import CoreValues from "@/components/CoreValues";
import Footer from "@/components/Footer";
import Growth from "@/components/Growth";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manufacturing from "@/components/Manufacturing";
import Partnerships from "@/components/Partnerships";
import Products from "@/components/Products";
import Quality from "@/components/Quality";
import Services from "@/components/Services";
import VisionMission from "@/components/VisionMission";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <VisionMission />
      <CoreValues />
      <Services />
      <Products />
      <Manufacturing />
      <Quality />
      <Partnerships />
      <Advantages />
      <Growth />
      <Contact />
      <Footer />
    </main>
  );
}

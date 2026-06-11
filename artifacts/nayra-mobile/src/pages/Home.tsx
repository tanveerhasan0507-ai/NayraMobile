import { Navbar, Footer, FloatingWhatsApp } from "@/components/Layout";
import { Hero, Categories, WhyChooseUs } from "@/components/Sections";
import { Products } from "@/components/Products";
import { Catalog } from "@/components/Catalog";
import { Reviews } from "@/components/Reviews";
import { TradeIn } from "@/components/TradeIn";
import { DealOfDay } from "@/components/DealOfDay";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background font-sans text-foreground selection:bg-primary/30 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <Categories />
        <Products />
        <Catalog />
        <Reviews />
        <TradeIn />
        <DealOfDay />
        <WhyChooseUs />
        <Contact />
      </main>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

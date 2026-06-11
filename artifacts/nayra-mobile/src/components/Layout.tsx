import { useState, useEffect } from "react";
import { Menu, X, MapPin, Clock, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiInstagram, SiFacebook, SiYoutube, SiX, SiWhatsapp } from "react-icons/si";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Apple", id: "collection" },
    { name: "Samsung", id: "collection" },
    { name: "Vivo", id: "collection" },
    { name: "Accessories", id: "deals" },
    { name: "Trade-In Calculator", id: "trade-in" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-white/5 py-3 shadow-lg" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className="text-xl md:text-2xl font-bold tracking-tighter text-white neon-text-glow">
            NAYRA <span className="text-primary">MOBILE</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button key={link.name} onClick={() => scrollTo(link.id)} className="text-sm font-medium text-white/70 hover:text-primary transition-colors">
              {link.name}
            </button>
          ))}
          <Button onClick={() => scrollTo("contact")} className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow rounded-full px-6">
            Contact Us
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-white/10 p-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <button key={link.name} onClick={() => scrollTo(link.id)} className="text-left text-lg font-medium text-white/80 hover:text-primary py-2 border-b border-white/5">
              {link.name}
            </button>
          ))}
          <Button onClick={() => scrollTo("contact")} className="bg-primary text-primary-foreground mt-4 w-full">
            Contact Us
          </Button>
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-center">
          
          <div className="space-y-4">
            <span className="text-2xl font-bold tracking-tighter text-white neon-text-glow">
              NAYRA <span className="text-primary">MOBILE</span>
            </span>
            <p className="text-white/60 text-sm">
              Upgrade Your Vibe. Get the Latest Smartphones Today. 100% Genuine Products, Easy EMIs, and Instant Trade-In.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-primary hover:text-primary-foreground transition-all"><SiInstagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-primary hover:text-primary-foreground transition-all"><SiFacebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-primary hover:text-primary-foreground transition-all"><SiYoutube size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-primary hover:text-primary-foreground transition-all"><SiX size={18} /></a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollTo("collection")} className="text-sm text-white/60 hover:text-primary transition-colors">Trending Smartphones</button></li>
              <li><button onClick={() => scrollTo("trade-in")} className="text-sm text-white/60 hover:text-primary transition-colors">Trade-In Calculator</button></li>
              <li><button onClick={() => scrollTo("deals")} className="text-sm text-white/60 hover:text-primary transition-colors">Deal of the Day</button></li>
              <li><button onClick={() => scrollTo("contact")} className="text-sm text-white/60 hover:text-primary transition-colors">Contact Us</button></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Visit Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>Farid Market, Baliyapur Road<br/>Near Moti Masjid, Govindpur<br/>Dhanbad, Jharkhand</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Clock size={18} className="text-primary shrink-0" />
                <span>Mon–Sun: 10:00 AM – 9:00 PM</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+91 96311 83078</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Location</h4>
            <div className="w-full h-36 rounded-xl overflow-hidden border border-white/10">
              <iframe
                title="Nayra Mobile Shop Location"
                src="https://www.google.com/maps?q=Farid+Market,+Baliyapur+Road,+Near+Moti+Masjid,+Govindpur,+Dhanbad,+Jharkhand&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} NAYRA MOBILE SHOP. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-white/40 text-sm hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="text-white/40 text-sm hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919631183078"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50 group"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
      <SiWhatsapp size={28} className="relative z-10" />
      
      <div className="absolute right-full mr-4 bg-card border border-white/10 text-white text-sm py-2 px-4 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Chat with us on WhatsApp
      </div>
    </a>
  );
}

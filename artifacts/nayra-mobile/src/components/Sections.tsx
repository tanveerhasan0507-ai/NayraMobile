import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, CreditCard, RefreshCw, Zap, Award } from "lucide-react";
import { SiApple, SiSamsung, SiOneplus } from "react-icons/si";

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-background"></div>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Premium Mobile Boutique
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-tight">
              Upgrade Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 neon-text-glow">Vibe.</span><br/>
              Get the Latest Smartphones.
            </h1>
            
            <p className="text-lg md:text-xl text-white/60 max-w-lg">
              100% Genuine Products | Easy EMIs | Instant Trade-In
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button onClick={() => scrollTo("collection")} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow h-14 px-8 text-base rounded-full">
                Browse Collection
              </Button>
              <Button onClick={() => scrollTo("trade-in")} variant="outline" size="lg" className="h-14 px-8 text-base rounded-full border-white/20 text-white hover:bg-white/5">
                Check Exchange Value
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl"></div>
            <img 
              src="/hero-phone.png" 
              alt="Premium Smartphone" 
              className="relative z-10 w-full max-w-[600px] mx-auto drop-shadow-2xl drop-shadow-primary/50 object-contain"
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

export function Categories() {
  const categories = [
    { name: "Apple", icon: SiApple, color: "hover:text-white hover:border-white" },
    { name: "Samsung", icon: SiSamsung, color: "hover:text-[#1428A0] hover:border-[#1428A0]" },
    { name: "OnePlus", icon: SiOneplus, color: "hover:text-[#F5010C] hover:border-[#F5010C]" },
    { name: "Accessories", icon: Zap, color: "hover:text-primary hover:border-primary" },
  ];

  return (
    <section className="py-20 bg-background border-y border-white/5 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group flex flex-col items-center justify-center gap-4 p-8 rounded-2xl bg-card border border-white/5 transition-all duration-300 cursor-pointer ${cat.color} hover:bg-white/[0.02]`}
            >
              <cat.icon className="w-12 h-12 text-white/40 transition-colors group-hover:inherit" />
              <h3 className="font-semibold tracking-wide text-white/80 group-hover:text-white transition-colors">{cat.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const features = [
    { title: "100% Genuine", desc: "Sourced directly from authorized distributors. Warranty guaranteed.", icon: ShieldCheck },
    { title: "Easy EMIs", desc: "Flexible payment plans from leading banks with 0% interest options.", icon: CreditCard },
    { title: "Instant Trade-In", desc: "Get the best market value for your old device instantly.", icon: RefreshCw },
    { title: "Expert Advice", desc: "Unbiased recommendations to help you find the perfect device.", icon: Award },
  ];

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Nayra</h2>
          <p className="text-white/60">Experience the difference of buying from a premium boutique that puts quality and customer satisfaction first.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-background border border-white/5 hover:border-primary/30 transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:neon-glow transition-all">
                <feat.icon className="text-primary w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feat.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

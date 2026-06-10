import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCw, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type Brand = "Apple" | "Samsung" | "Vivo" | "Xiaomi" | "Realme";
type Condition = "Excellent" | "Good" | "Fair" | "Broken";

const modelsData: Record<Brand, string[]> = {
  Apple: ["iPhone 14 Series", "iPhone 13 Series", "iPhone 12 Series", "iPhone 11 Series"],
  Samsung: ["Galaxy S23 Series", "Galaxy S22 Series", "Galaxy A Series", "Galaxy Z Fold/Flip"],
  Vivo: ["Vivo X300 Pro", "Vivo V40 Pro", "Vivo X90 Series", "Vivo V30 Series"],
  Xiaomi: ["Xiaomi 13 Series", "Redmi Note 12 Series", "Poco Series"],
  Realme: ["Realme 11 Series", "Realme 10 Series", "Realme GT Series"],
};

export function TradeIn() {
  const [brand, setBrand] = useState<Brand | "">("");
  const [model, setModel] = useState<string>("");
  const [condition, setCondition] = useState<Condition | "">("");

  const calculatedValue = useMemo(() => {
    if (!brand || !model || !condition) return null;

    let baseValue = 0;
    
    // Rough estimation logic based on requirements
    if (brand === "Apple") {
      baseValue = model.includes("14") || model.includes("13") ? 40000 : 20000;
    } else if (brand === "Samsung") {
      baseValue = model.includes("S23") || model.includes("Z") ? 35000 : 15000;
    } else if (brand === "Vivo") {
      baseValue = model.includes("X300") ? 22000 : 14000;
    } else if (brand === "Xiaomi") {
      baseValue = 8000;
    } else if (brand === "Realme") {
      baseValue = 6000;
    }

    const multipliers = {
      Excellent: 1.0,
      Good: 0.8,
      Fair: 0.55,
      Broken: 0.3,
    };

    return Math.round(baseValue * multipliers[condition]);
  }, [brand, model, condition]);

  const scrollToContact = () => {
    const msgInput = document.getElementById("message") as HTMLTextAreaElement;
    if (msgInput && calculatedValue) {
      msgInput.value = `Hi! I want to trade in my ${brand} ${model} (${condition} condition) for an estimated ₹${calculatedValue.toLocaleString('en-IN')}.`;
    }
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="trade-in" className="py-24 bg-card border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <RefreshCw className="text-primary w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Check Your Phone's Exchange Value</h2>
            <p className="text-white/60">Get an instant estimate for your old device and put it towards your new smartphone.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-background p-6 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
            <div className="space-y-6">
              <div className="space-y-3">
                <Label className="text-white/80">Select Brand</Label>
                <Select value={brand} onValueChange={(val: Brand) => { setBrand(val); setModel(""); }}>
                  <SelectTrigger className="w-full bg-white/5 border-white/10 text-white h-12 rounded-xl focus:ring-primary focus:border-primary">
                    <SelectValue placeholder="Select Brand" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-white/10 text-white">
                    {Object.keys(modelsData).map((b) => (
                      <SelectItem key={b} value={b} className="focus:bg-primary/20 focus:text-white cursor-pointer">{b}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label className="text-white/80">Select Model</Label>
                <Select disabled={!brand} value={model} onValueChange={setModel}>
                  <SelectTrigger className="w-full bg-white/5 border-white/10 text-white h-12 rounded-xl focus:ring-primary focus:border-primary">
                    <SelectValue placeholder="Select Model" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-white/10 text-white">
                    {brand && modelsData[brand as Brand].map((m) => (
                      <SelectItem key={m} value={m} className="focus:bg-primary/20 focus:text-white cursor-pointer">{m}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label className="text-white/80">Condition</Label>
                <Select value={condition} onValueChange={(val: Condition) => setCondition(val)}>
                  <SelectTrigger className="w-full bg-white/5 border-white/10 text-white h-12 rounded-xl focus:ring-primary focus:border-primary">
                    <SelectValue placeholder="Select Condition" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-white/10 text-white">
                    <SelectItem value="Excellent" className="focus:bg-primary/20 focus:text-white cursor-pointer">Excellent (Like new, no scratches)</SelectItem>
                    <SelectItem value="Good" className="focus:bg-primary/20 focus:text-white cursor-pointer">Good (Minor wear and tear)</SelectItem>
                    <SelectItem value="Fair" className="focus:bg-primary/20 focus:text-white cursor-pointer">Fair (Heavy scratches, fully working)</SelectItem>
                    <SelectItem value="Broken" className="focus:bg-primary/20 focus:text-white cursor-pointer">Broken (Cracked screen/back)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-white/5 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
              
              {calculatedValue !== null ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center w-full z-10"
                >
                  <p className="text-white/60 mb-2 font-medium">Estimated Value</p>
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-6 neon-text-glow font-mono">
                    ₹{calculatedValue.toLocaleString('en-IN')}
                  </div>
                  
                  <div className="space-y-3 mb-8 text-left max-w-[250px] mx-auto">
                    <div className="flex items-center gap-2 text-sm text-white/70">
                      <CheckCircle2 size={16} className="text-primary" /> Valid for 7 days
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/70">
                      <CheckCircle2 size={16} className="text-primary" /> Instant store credit
                    </div>
                  </div>

                  <Button 
                    onClick={scrollToContact}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 rounded-xl font-bold text-base neon-glow"
                  >
                    Claim This Value
                  </Button>
                </motion.div>
              ) : (
                <div className="text-center z-10 text-white/40 flex flex-col items-center">
                  <RefreshCw size={48} className="mb-4 opacity-20" />
                  <p>Select your device details<br/>to see estimated value</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

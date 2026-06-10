import { useState, useEffect } from "react";
import { Timer, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const accessories = [
  { id: 1, name: "JBL Wireless Earbuds", regularPrice: 4999, offerPrice: 2499, discount: "50% OFF" },
  { id: 2, name: "Premium Tempered Glass Pack", regularPrice: 599, offerPrice: 299, discount: "50% OFF" },
  { id: 3, name: "Fast Charge Adapter 65W", regularPrice: 1799, offerPrice: 899, discount: "50% OFF" },
];

export function DealOfDay() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    // A simple countdown logic that resets to 24h on page load
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 }; // reset
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
  };

  const handleClaim = (name: string) => {
    const msg = encodeURIComponent(`Hi! I'd like to claim the deal of the day for: ${name}`);
    window.open(`https://wa.me/919631183078?text=${msg}`, "_blank");
  };

  return (
    <section id="deals" className="py-24 bg-background relative border-y border-white/5">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 bg-card/50 p-6 md:p-8 rounded-3xl border border-red-500/20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center shrink-0">
              <Zap className="text-red-500" size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">Deal of the Day</h2>
              <p className="text-red-400 font-medium">Hurry! Offers end soon.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Timer className="text-white/60" size={20} />
            <div className="flex items-center gap-2">
              <div className="bg-background border border-white/10 rounded-lg px-4 py-2 min-w-[60px] text-center">
                <span className="text-2xl font-mono font-bold text-white">{formatNumber(timeLeft.hours)}</span>
                <div className="text-[10px] text-white/40 uppercase tracking-wider mt-1">Hours</div>
              </div>
              <span className="text-xl font-bold text-white/40">:</span>
              <div className="bg-background border border-white/10 rounded-lg px-4 py-2 min-w-[60px] text-center">
                <span className="text-2xl font-mono font-bold text-white">{formatNumber(timeLeft.minutes)}</span>
                <div className="text-[10px] text-white/40 uppercase tracking-wider mt-1">Mins</div>
              </div>
              <span className="text-xl font-bold text-white/40">:</span>
              <div className="bg-background border border-white/10 rounded-lg px-4 py-2 min-w-[60px] text-center">
                <span className="text-2xl font-mono font-bold text-red-500 neon-text-glow">{formatNumber(timeLeft.seconds)}</span>
                <div className="text-[10px] text-white/40 uppercase tracking-wider mt-1">Secs</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {accessories.map((item) => (
            <div key={item.id} className="bg-card border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-red-500/30 transition-all">
              <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                {item.discount}
              </div>
              
              <div className="h-40 bg-background/50 rounded-xl mb-6 flex items-center justify-center border border-white/5 group-hover:bg-background transition-colors">
                <Zap className="text-white/10 w-16 h-16 group-hover:scale-110 transition-transform duration-500" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
              <div className="flex items-end gap-3 mb-6">
                <span className="text-2xl font-bold text-white">{formatPrice(item.offerPrice)}</span>
                <span className="text-sm text-white/40 line-through mb-1">{formatPrice(item.regularPrice)}</span>
              </div>
              
              <Button 
                onClick={() => handleClaim(item.name)}
                className="w-full bg-white/5 hover:bg-red-500 text-white transition-colors"
              >
                Claim Deal
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

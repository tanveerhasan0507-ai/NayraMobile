import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Brand = "All" | "Apple" | "Samsung" | "Vivo" | "OPPO" | "OnePlus";

interface PhoneModel {
  id: number;
  name: string;
  brand: Brand;
  price: string;
  tag?: string;
  specs: string;
}

const allModels: PhoneModel[] = [
  // Apple iPhone 17 series
  { id: 1, brand: "Apple", name: "iPhone 17 Pro Max", price: "₹1,64,900", tag: "New", specs: "A19 Pro · 48MP · 4685mAh" },
  { id: 2, brand: "Apple", name: "iPhone 17 Pro", price: "₹1,34,900", tag: "New", specs: "A19 Pro · 48MP · 3850mAh" },
  { id: 3, brand: "Apple", name: "iPhone 17", price: "₹89,900", tag: "New", specs: "A18 · 48MP · 3600mAh" },
  { id: 4, brand: "Apple", name: "iPhone 17 Plus", price: "₹99,900", tag: "New", specs: "A18 · 48MP · 4200mAh" },
  // Apple iPhone 16 series
  { id: 5, brand: "Apple", name: "iPhone 16 Pro Max", price: "₹1,44,900", tag: "Hot", specs: "A18 Pro · 48MP · 4685mAh" },
  { id: 6, brand: "Apple", name: "iPhone 16 Pro", price: "₹1,19,900", specs: "A18 Pro · 48MP · 3582mAh" },
  { id: 7, brand: "Apple", name: "iPhone 16 Plus", price: "₹89,900", specs: "A18 · 48MP · 4325mAh" },
  { id: 8, brand: "Apple", name: "iPhone 16", price: "₹79,900", specs: "A18 · 48MP · 3561mAh" },
  // Apple iPhone 15 series
  { id: 9, brand: "Apple", name: "iPhone 15 Pro Max", price: "₹1,59,900", specs: "A17 Pro · 48MP · 4422mAh" },
  { id: 10, brand: "Apple", name: "iPhone 15 Pro", price: "₹1,25,900", specs: "A17 Pro · 48MP · 3274mAh" },
  { id: 11, brand: "Apple", name: "iPhone 15 Plus", price: "₹79,900", specs: "A16 · 48MP · 4383mAh" },
  { id: 12, brand: "Apple", name: "iPhone 15", price: "₹69,900", specs: "A16 · 48MP · 3349mAh" },
  // Apple iPhone 14 series
  { id: 13, brand: "Apple", name: "iPhone 14 Pro Max", price: "₹1,09,900", specs: "A15 · 48MP · 4323mAh" },
  { id: 14, brand: "Apple", name: "iPhone 14 Pro", price: "₹89,900", specs: "A15 · 48MP · 3200mAh" },
  { id: 15, brand: "Apple", name: "iPhone 14 Plus", price: "₹69,900", specs: "A15 · 12MP · 4325mAh" },
  { id: 16, brand: "Apple", name: "iPhone 14", price: "₹59,900", specs: "A15 · 12MP · 3279mAh" },
  // Apple iPhone 13 series
  { id: 17, brand: "Apple", name: "iPhone 13 Pro Max", price: "₹89,900", specs: "A15 · 12MP · 4352mAh" },
  { id: 18, brand: "Apple", name: "iPhone 13 Pro", price: "₹74,900", specs: "A15 · 12MP · 3095mAh" },
  { id: 19, brand: "Apple", name: "iPhone 13", price: "₹54,900", specs: "A15 · 12MP · 3227mAh" },
  { id: 20, brand: "Apple", name: "iPhone 13 Mini", price: "₹44,900", specs: "A15 · 12MP · 2438mAh" },

  // Samsung Ultra series
  { id: 21, brand: "Samsung", name: "Galaxy S25 Ultra", price: "₹1,29,999", tag: "New", specs: "Snapdragon 8 Elite · 200MP · 5000mAh" },
  { id: 22, brand: "Samsung", name: "Galaxy S25+", price: "₹89,999", tag: "New", specs: "Snapdragon 8 Elite · 50MP · 4900mAh" },
  { id: 23, brand: "Samsung", name: "Galaxy S25", price: "₹74,999", tag: "New", specs: "Snapdragon 8 Elite · 50MP · 4000mAh" },
  { id: 24, brand: "Samsung", name: "Galaxy S24 Ultra", price: "₹1,09,999", tag: "Hot", specs: "Snapdragon 8 Gen 3 · 200MP · 5000mAh" },
  { id: 25, brand: "Samsung", name: "Galaxy S24+", price: "₹79,999", specs: "Snapdragon 8 Gen 3 · 50MP · 4900mAh" },
  { id: 26, brand: "Samsung", name: "Galaxy S24", price: "₹64,999", specs: "Snapdragon 8 Gen 3 · 50MP · 4000mAh" },
  { id: 27, brand: "Samsung", name: "Galaxy S23 Ultra", price: "₹84,999", specs: "Snapdragon 8 Gen 2 · 200MP · 5000mAh" },
  { id: 28, brand: "Samsung", name: "Galaxy S23+", price: "₹64,999", specs: "Snapdragon 8 Gen 2 · 50MP · 4700mAh" },
  { id: 29, brand: "Samsung", name: "Galaxy S23", price: "₹54,999", specs: "Snapdragon 8 Gen 2 · 50MP · 3900mAh" },
  { id: 30, brand: "Samsung", name: "Galaxy S22 Ultra", price: "₹59,999", specs: "Snapdragon 8 Gen 1 · 108MP · 5000mAh" },
  { id: 31, brand: "Samsung", name: "Galaxy S21 Ultra", price: "₹44,999", specs: "Exynos 2100 · 108MP · 5000mAh" },
  { id: 32, brand: "Samsung", name: "Galaxy Z Fold 6", price: "₹1,64,999", specs: "Snapdragon 8 Gen 3 · 50MP · 4400mAh" },
  { id: 33, brand: "Samsung", name: "Galaxy Z Flip 6", price: "₹99,999", specs: "Snapdragon 8 Gen 3 · 50MP · 4000mAh" },
  { id: 34, brand: "Samsung", name: "Galaxy A55 5G", price: "₹34,999", specs: "Exynos 1480 · 50MP · 5000mAh" },
  { id: 35, brand: "Samsung", name: "Galaxy A35 5G", price: "₹24,999", specs: "Exynos 1380 · 50MP · 5000mAh" },

  // Vivo V series & X series
  { id: 36, brand: "Vivo", name: "Vivo X300 Pro", price: "₹74,999", tag: "New", specs: "Dimensity 9400 · 50MP ZEISS · 6000mAh" },
  { id: 37, brand: "Vivo", name: "Vivo X200 Pro", price: "₹64,999", tag: "Hot", specs: "Dimensity 9400 · 50MP ZEISS · 5800mAh" },
  { id: 38, brand: "Vivo", name: "Vivo X200", price: "₹44,999", specs: "Dimensity 9300+ · 50MP · 5500mAh" },
  { id: 39, brand: "Vivo", name: "Vivo V40 Pro", price: "₹46,999", tag: "New", specs: "SD 7 Gen 3 · 50MP ZEISS · 5500mAh" },
  { id: 40, brand: "Vivo", name: "Vivo V40", price: "₹34,999", tag: "New", specs: "SD 7 Gen 3 · 50MP · 5500mAh" },
  { id: 41, brand: "Vivo", name: "Vivo V40 Lite", price: "₹24,999", specs: "Dimensity 6300 · 50MP · 5000mAh" },
  { id: 42, brand: "Vivo", name: "Vivo V30 Pro", price: "₹39,999", specs: "SD 7 Gen 3 · 50MP ZEISS · 5000mAh" },
  { id: 43, brand: "Vivo", name: "Vivo V30", price: "₹29,999", specs: "SD 695 · 50MP · 5000mAh" },
  { id: 44, brand: "Vivo", name: "Vivo V29 Pro", price: "₹35,999", specs: "SD 778G · 50MP · 4600mAh" },
  { id: 45, brand: "Vivo", name: "Vivo V29", price: "₹26,999", specs: "SD 778G · 50MP · 4600mAh" },
  { id: 46, brand: "Vivo", name: "Vivo V27 Pro", price: "₹29,999", specs: "Dimensity 8200 · 50MP · 4600mAh" },
  { id: 47, brand: "Vivo", name: "Vivo T3 Ultra", price: "₹27,999", specs: "SD 7s Gen 3 · 50MP · 5500mAh" },
  { id: 48, brand: "Vivo", name: "Vivo Y300 Pro+", price: "₹22,999", specs: "SD 695 · 50MP · 6500mAh" },

  // OPPO
  { id: 49, brand: "OPPO", name: "OPPO Find X8 Pro", price: "₹84,999", tag: "New", specs: "Dimensity 9400 · 50MP HASSELBLAD · 5910mAh" },
  { id: 50, brand: "OPPO", name: "OPPO Find X8", price: "₹64,999", tag: "New", specs: "Dimensity 9400 · 50MP · 5630mAh" },
  { id: 51, brand: "OPPO", name: "OPPO Find X7 Ultra", price: "₹74,999", specs: "Snapdragon 8 Gen 3 · 50MP · 5000mAh" },
  { id: 52, brand: "OPPO", name: "OPPO Reno 13 Pro", price: "₹44,999", tag: "Hot", specs: "Dimensity 8350 · 50MP · 5600mAh" },
  { id: 53, brand: "OPPO", name: "OPPO Reno 13", price: "₹34,999", specs: "Dimensity 8350 · 50MP · 5600mAh" },
  { id: 54, brand: "OPPO", name: "OPPO Reno 12 Pro", price: "₹35,999", specs: "Dimensity 7300 · 50MP · 5000mAh" },
  { id: 55, brand: "OPPO", name: "OPPO Reno 12", price: "₹26,999", specs: "Dimensity 7300 · 50MP · 5000mAh" },
  { id: 56, brand: "OPPO", name: "OPPO Reno 11 Pro", price: "₹29,999", specs: "Dimensity 8200 · 50MP · 4600mAh" },
  { id: 57, brand: "OPPO", name: "OPPO A3 Pro 5G", price: "₹19,999", specs: "SD 695 · 50MP · 5100mAh" },
  { id: 58, brand: "OPPO", name: "OPPO A60 5G", price: "₹16,999", specs: "SD 695 · 50MP · 5000mAh" },

  // OnePlus
  { id: 59, brand: "OnePlus", name: "OnePlus 13", price: "₹69,999", tag: "Hot", specs: "SD 8 Elite · 50MP Hasselblad · 6000mAh" },
  { id: 60, brand: "OnePlus", name: "OnePlus 13R", price: "₹39,999", specs: "SD 8 Gen 2 · 50MP · 5500mAh" },
  { id: 61, brand: "OnePlus", name: "OnePlus 12", price: "₹54,999", specs: "SD 8 Gen 3 · 50MP Hasselblad · 5400mAh" },
  { id: 62, brand: "OnePlus", name: "OnePlus 12R", price: "₹29,999", specs: "SD 8 Gen 1 · 50MP · 5500mAh" },
  { id: 63, brand: "OnePlus", name: "OnePlus Open", price: "₹1,29,999", specs: "SD 8 Gen 2 · 48MP Hasselblad · 4805mAh" },
  { id: 64, brand: "OnePlus", name: "OnePlus Nord 4", price: "₹27,999", specs: "SD 7+ Gen 3 · 50MP · 5500mAh" },
  { id: 65, brand: "OnePlus", name: "OnePlus Nord CE4", price: "₹24,999", specs: "SD 7s Gen 2 · 50MP · 5500mAh" },
  { id: 66, brand: "OnePlus", name: "OnePlus Nord CE4 Lite", price: "₹17,999", specs: "SD 695 · 50MP · 5110mAh" },
  { id: 67, brand: "OnePlus", name: "OnePlus Nord 3", price: "₹24,999", specs: "Dimensity 9000 · 50MP · 5000mAh" },
];

const brandColors: Record<string, { bg: string; text: string; border: string; tag: string }> = {
  All:     { bg: "bg-white/5",         text: "text-white",       border: "border-white/10",   tag: "bg-white/10 text-white" },
  Apple:   { bg: "bg-white/5",         text: "text-white",       border: "border-white/10",   tag: "bg-white/20 text-white" },
  Samsung: { bg: "bg-blue-950/40",     text: "text-blue-300",    border: "border-blue-800/30", tag: "bg-blue-700/30 text-blue-300" },
  Vivo:    { bg: "bg-indigo-950/40",   text: "text-indigo-300",  border: "border-indigo-700/30", tag: "bg-indigo-700/30 text-indigo-300" },
  OPPO:    { bg: "bg-teal-950/40",     text: "text-teal-300",    border: "border-teal-700/30", tag: "bg-teal-700/30 text-teal-300" },
  OnePlus: { bg: "bg-red-950/40",      text: "text-red-400",     border: "border-red-800/30",  tag: "bg-red-700/30 text-red-400" },
};

const tabs: Brand[] = ["All", "Apple", "Samsung", "Vivo", "OPPO", "OnePlus"];

const tabAccent: Record<Brand, string> = {
  All:     "bg-white text-black",
  Apple:   "bg-white text-black",
  Samsung: "bg-[#1428A0] text-white",
  Vivo:    "bg-[#415FFF] text-white",
  OPPO:    "bg-[#1F6B4E] text-white",
  OnePlus: "bg-[#F5010C] text-white",
};

export function Catalog() {
  const [activeTab, setActiveTab] = useState<Brand>("All");

  const filtered = activeTab === "All" ? allModels : allModels.filter(m => m.brand === activeTab);

  const handleInquire = (name: string, price: string) => {
    const msg = encodeURIComponent(`Hi Nayra Mobile Shop! I'm interested in the ${name} (${price}). Is it available? Please share details.`);
    window.open(`https://wa.me/919631183078?text=${msg}`, "_blank");
  };

  return (
    <section id="catalog" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">Full Collection</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Browse All Models</h2>
          <p className="text-white/50 text-sm">Latest trending phones across all top brands. Tap any model to inquire instantly.</p>
        </div>

        {/* Brand Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {tabs.map(tab => (
            <button
              key={tab}
              data-testid={`tab-brand-${tab}`}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                activeTab === tab
                  ? `${tabAccent[tab]} border-transparent shadow-lg scale-105`
                  : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {tab}
              {tab !== "All" && (
                <span className="ml-1.5 text-xs opacity-60">
                  ({allModels.filter(m => m.brand === tab).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Model count */}
        <p className="text-center text-white/30 text-xs mb-8">
          Showing {filtered.length} models
        </p>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
          >
            {filtered.map((phone, i) => {
              const colors = brandColors[phone.brand];
              return (
                <motion.div
                  key={phone.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.015, duration: 0.2 }}
                  data-testid={`card-catalog-${phone.id}`}
                  className={`group relative flex flex-col justify-between p-3 rounded-xl border ${colors.bg} ${colors.border} hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 cursor-pointer`}
                  onClick={() => handleInquire(phone.name, phone.price)}
                >
                  {phone.tag && (
                    <span className={`absolute top-2 right-2 text-[9px] font-bold px-1.5 py-0.5 rounded-full ${colors.tag}`}>
                      {phone.tag}
                    </span>
                  )}

                  <div className="mb-2">
                    <span className={`text-[10px] font-semibold uppercase tracking-wider opacity-50 ${colors.text}`}>
                      {phone.brand}
                    </span>
                    <h3 className="text-white text-xs font-semibold leading-snug mt-0.5 pr-6">
                      {phone.name}
                    </h3>
                    <p className="text-white/40 text-[10px] mt-1 leading-tight">{phone.specs}</p>
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
                    <span className={`text-xs font-bold ${colors.text}`}>{phone.price}</span>
                    <MessageCircle className="w-3.5 h-3.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-white/40 text-sm mb-4">Don't see your model? We stock many more.</p>
          <Button
            data-testid="button-catalog-whatsapp"
            onClick={() => {
              const msg = encodeURIComponent("Hi Nayra Mobile Shop! I'm looking for a specific phone model. Can you help?");
              window.open(`https://wa.me/919631183078?text=${msg}`, "_blank");
            }}
            className="gap-2 bg-[#25D366] hover:bg-[#20bc5a] text-white border-0"
          >
            <MessageCircle className="w-4 h-4" />
            Ask About Any Model
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

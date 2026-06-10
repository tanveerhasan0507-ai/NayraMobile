import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Battery, Cpu, X, Smartphone } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const products = [
  { 
    id: 1, 
    name: "iPhone 17 Pro Max", 
    brand: "Apple",
    regularPrice: 179900, 
    offerPrice: 164900, 
    camera: "48MP ProVision", 
    battery: "4685mAh", 
    chip: "A19 Pro", 
    image: "/iphone-17-pro-max.png",
    desc: "The ultimate iPhone. Forged in Desert Titanium with the revolutionary A19 Pro chip, ProVision camera system, and all-day battery."
  },
  { 
    id: 2, 
    name: "iPhone 17 Pro", 
    brand: "Apple",
    regularPrice: 149900, 
    offerPrice: 134900, 
    camera: "48MP Triple Pro", 
    battery: "3850mAh", 
    chip: "A19 Pro", 
    image: "/iphone-17-pro.png",
    desc: "Pro. Beyond. The A19 Pro chip powers the most advanced iPhone camera system ever. Black Titanium. Built to last."
  },
  { 
    id: 3, 
    name: "Samsung Galaxy S25 Ultra", 
    brand: "Samsung",
    regularPrice: 144999, 
    offerPrice: 129999, 
    camera: "200MP Quad", 
    battery: "5000mAh", 
    chip: "Snapdragon 8 Elite", 
    image: "/s25-ultra.png",
    desc: "Galaxy AI meets ultimate hardware. 200MP quad camera, built-in S Pen, and Snapdragon 8 Elite — the most powerful Galaxy ever."
  },
  { 
    id: 4, 
    name: "Samsung Galaxy S25+", 
    brand: "Samsung",
    regularPrice: 99999, 
    offerPrice: 89999, 
    camera: "50MP Triple", 
    battery: "4900mAh", 
    chip: "Snapdragon 8 Elite", 
    image: "/s25-plus.png",
    desc: "Galaxy AI for everyone. Slim, powerful and packed with intelligence. The perfect balance of size and performance."
  },
  { 
    id: 5, 
    name: "Vivo X300 Pro", 
    brand: "Vivo",
    regularPrice: 84999, 
    offerPrice: 74999, 
    camera: "50MP ZEISS", 
    battery: "6000mAh", 
    chip: "Dimensity 9400", 
    image: "/vivo-x300-pro.png",
    desc: "ZEISS professional optics meet blazing Dimensity 9400 performance. 6000mAh battery with 100W FlashCharge. Photography redefined."
  },
  { 
    id: 6, 
    name: "OnePlus 13", 
    brand: "OnePlus",
    regularPrice: 79999, 
    offerPrice: 69999, 
    camera: "50MP Hasselblad", 
    battery: "6000mAh", 
    chip: "Snapdragon 8 Elite", 
    image: "/oneplus-13.png",
    desc: "Hasselblad cameras. Snapdragon 8 Elite. 100W SUPERVOOC charging. Flagship performance at an incredible price."
  },
];

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
  };

  const handleInquire = (productName: string) => {
    const msg = encodeURIComponent(`Hi Nayra Mobile Shop! I'm interested in the ${productName}. Can you share more details and availability?`);
    window.open(`https://wa.me/919999999999?text=${msg}`, "_blank");
  };

  return (
    <section id="collection" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Trending Smartphones</h2>
            <p className="text-white/60">Our most requested devices this week.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-white/5 rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-15px_rgba(0,210,255,0.2)]"
            >
              <div className="aspect-[4/3] bg-background/50 relative p-8 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain relative z-0 transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              
              <div className="p-6 relative z-20 bg-card">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-white/70">{product.brand}</span>
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-white/40 line-through">{formatPrice(product.regularPrice)}</span>
                    <span className="text-lg font-bold text-primary">{formatPrice(product.offerPrice)}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 line-clamp-1">{product.name}</h3>
                
                <div className="grid grid-cols-3 gap-2 mb-6">
                  <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-background border border-white/5 text-white/60 gap-1">
                    <Camera size={16} className="text-primary/70" />
                    <span className="text-[10px] text-center font-medium line-clamp-1">{product.camera}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-background border border-white/5 text-white/60 gap-1">
                    <Battery size={16} className="text-primary/70" />
                    <span className="text-[10px] text-center font-medium line-clamp-1">{product.battery}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-background border border-white/5 text-white/60 gap-1">
                    <Cpu size={16} className="text-primary/70" />
                    <span className="text-[10px] text-center font-medium line-clamp-1">{product.chip}</span>
                  </div>
                </div>

                <Button 
                  onClick={() => setSelectedProduct(product)}
                  className="w-full bg-white/5 text-white hover:bg-primary hover:text-primary-foreground transition-colors rounded-xl h-12"
                >
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl bg-card border-white/10 text-foreground overflow-hidden p-0 rounded-3xl">
          <DialogTitle className="sr-only">Product Details</DialogTitle>
          {selectedProduct && (
            <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
              <div className="w-full md:w-1/2 bg-background p-8 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full max-w-[250px] object-contain relative z-10" />
              </div>
              
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                <div className="mb-2">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-white/70">{selectedProduct.brand}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedProduct.name}</h2>
                <p className="text-white/60 text-sm mb-6">{selectedProduct.desc}</p>
                
                <div className="mb-6 bg-background rounded-xl p-4 border border-white/5">
                  <div className="text-sm text-white/40 mb-1">Special Offer Price</div>
                  <div className="flex items-end gap-3">
                    <span className="text-3xl font-bold text-primary">{formatPrice(selectedProduct.offerPrice)}</span>
                    <span className="text-sm text-white/40 line-through mb-1.5">{formatPrice(selectedProduct.regularPrice)}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"><Camera size={14} className="text-primary" /></div>
                    <span className="text-white/80">{selectedProduct.camera}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"><Battery size={14} className="text-primary" /></div>
                    <span className="text-white/80">{selectedProduct.battery}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"><Cpu size={14} className="text-primary" /></div>
                    <span className="text-white/80">{selectedProduct.chip}</span>
                  </div>
                </div>

                <div className="mt-auto">
                  <Button 
                    onClick={() => handleInquire(selectedProduct.name)}
                    className="w-full bg-[#25D366] hover:bg-[#20b858] text-white rounded-xl h-14 text-base font-semibold shadow-[0_0_20px_rgba(37,211,102,0.3)]"
                  >
                    Inquire on WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          )}
          <DialogClose className="absolute right-4 top-4 rounded-full p-2 bg-black/50 text-white hover:bg-black/70 transition-colors z-50">
            <X size={20} />
          </DialogClose>
        </DialogContent>
      </Dialog>
    </section>
  );
}

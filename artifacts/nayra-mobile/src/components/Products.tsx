import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Battery, Cpu, X, Smartphone } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const products = [
  { 
    id: 1, 
    name: "iPhone 15 Pro", 
    brand: "Apple",
    regularPrice: 145000, 
    offerPrice: 125900, 
    camera: "48MP Pro", 
    battery: "3274mAh", 
    chip: "A17 Pro", 
    image: "/iphone-15-pro.png",
    desc: "Forged in titanium. Featuring the groundbreaking A17 Pro chip and a customizable Action button."
  },
  { 
    id: 2, 
    name: "Samsung Galaxy S24 Ultra", 
    brand: "Samsung",
    regularPrice: 134999, 
    offerPrice: 119999, 
    camera: "200MP", 
    battery: "5000mAh", 
    chip: "Snapdragon 8 Gen 3", 
    image: "/s24-ultra.png",
    desc: "Galaxy AI is here. Welcome to the era of mobile AI. Empower yourself with new levels of creativity."
  },
  { 
    id: 3, 
    name: "OnePlus 12", 
    brand: "OnePlus",
    regularPrice: 74999, 
    offerPrice: 64999, 
    camera: "50MP Hasselblad", 
    battery: "5400mAh", 
    chip: "Snapdragon 8 Gen 3", 
    image: "/oneplus-12.png",
    desc: "Smooth beyond belief. Experience the ultimate performance with the latest Snapdragon processor and Hasselblad Camera."
  },
  { 
    id: 4, 
    name: "iPhone 14", 
    brand: "Apple",
    regularPrice: 79900, 
    offerPrice: 69900, 
    camera: "12MP Dual", 
    battery: "3279mAh", 
    chip: "A15 Bionic", 
    image: "/iphone-14.png",
    desc: "A total powerhouse. Advanced camera system for better photos in any light."
  },
  { 
    id: 5, 
    name: "iPhone 14 Pro", 
    brand: "Apple",
    regularPrice: 44999, 
    offerPrice: 38999, 
    camera: "50MP OIS", 
    battery: "5000mAh", 
    chip: "Exynos 1480", 
    image: "/galaxy-a55.png",
    desc: "Awesome design, awesome camera, awesome battery. Built for the everyday."
  },
  { 
    id: 6, 
    name: "OnePlus Nord CE4", 
    brand: "OnePlus",
    regularPrice: 29999, 
    offerPrice: 24999, 
    camera: "50MP Sony", 
    battery: "5500mAh", 
    chip: "Snapdragon 7s Gen 2", 
    image: "/nord-ce4.png",
    desc: "Fast and Smooth experience at an unbelievable price point. 100W SUPERVOOC charging."
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

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const hours = [
  { day: "Monday – Friday", time: "10:00 AM – 9:00 PM", open: true },
  { day: "Saturday", time: "10:00 AM – 9:00 PM", open: true },
  { day: "Sunday", time: "11:00 AM – 8:00 PM", open: true },
];

export function StoreLocation() {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Farid+Market+Baliyapur+Road+Near+Moti+Masjid+Govindpur+Dhanbad+Jharkhand";
  const embedUrl = "https://www.google.com/maps?q=Farid+Market,+Baliyapur+Road,+Near+Moti+Masjid,+Govindpur,+Dhanbad,+Jharkhand&output=embed";

  return (
    <section id="location" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            Find Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Visit Our Store
          </h2>
          <p className="text-white/50 text-sm">
            Come in, touch the phones, and walk out with your dream device. We're open every day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">

          {/* Map — takes 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-80 lg:h-auto min-h-[320px]"
          >
            <iframe
              title="Nayra Mobile Shop"
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)", minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Info panel — takes 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Address card */}
            <div className="bg-background border border-white/8 rounded-2xl p-5 space-y-2">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-primary/15 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-primary" />
                </div>
                <span className="text-white font-semibold text-sm">Store Address</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed font-medium">
                Farid Market, Baliyapur Road<br />
                Near Moti Masjid, Govindpur<br />
                <span className="text-primary">Dhanbad, Jharkhand</span>
              </p>
              <Button
                onClick={() => window.open(mapsUrl, "_blank")}
                size="sm"
                className="mt-3 w-full gap-2 bg-primary/10 hover:bg-primary text-primary hover:text-black border border-primary/20 hover:border-primary transition-all"
              >
                <Navigation size={14} />
                Get Directions
              </Button>
            </div>

            {/* Phone card */}
            <div className="bg-background border border-white/8 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-primary/15 rounded-lg flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-primary" />
                </div>
                <span className="text-white font-semibold text-sm">Contact</span>
              </div>
              <a href="tel:+919631183078" className="text-white/70 hover:text-white text-sm transition-colors block mb-3">
                +91 96311 83078
              </a>
              <Button
                onClick={() => window.open("https://wa.me/919631183078?text=Hi!%20I%20want%20to%20visit%20your%20store.%20Can%20you%20confirm%20the%20address%3F", "_blank")}
                size="sm"
                className="w-full gap-2 bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/20 hover:border-transparent transition-all"
              >
                <MessageCircle size={14} />
                Chat on WhatsApp
              </Button>
            </div>

            {/* Hours card */}
            <div className="bg-background border border-white/8 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary/15 rounded-lg flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-primary" />
                </div>
                <span className="text-white font-semibold text-sm">Store Hours</span>
              </div>
              <div className="space-y-2.5">
                {hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between">
                    <span className="text-white/50 text-xs">{h.day}</span>
                    <span className={`text-xs font-medium ${h.open ? "text-green-400" : "text-red-400"}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

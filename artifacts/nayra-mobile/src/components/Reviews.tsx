import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Delhi",
    rating: 5,
    date: "2 days ago",
    product: "iPhone 16 Pro Max",
    text: "Absolutely love my new iPhone! Got it at the best price in the market. Staff was super helpful and explained every detail. Zero hassle, quick delivery too.",
    avatar: "RS",
    color: "bg-blue-600",
  },
  {
    id: 2,
    name: "Priya Mehta",
    location: "Noida",
    rating: 5,
    date: "1 week ago",
    product: "Vivo X300 Pro",
    text: "The ZEISS camera is insane! Nayra Mobile gave me the best deal compared to 3 other shops. Genuine product with full warranty. Highly recommended!",
    avatar: "PM",
    color: "bg-indigo-600",
  },
  {
    id: 3,
    name: "Arjun Patel",
    location: "Gurgaon",
    rating: 5,
    date: "2 weeks ago",
    product: "Samsung Galaxy S25 Ultra",
    text: "Traded in my old S23 and got an amazing exchange price. The whole process took less than 30 minutes. Very transparent and no hidden charges at all.",
    avatar: "AP",
    color: "bg-blue-800",
  },
  {
    id: 4,
    name: "Sneha Verma",
    location: "Faridabad",
    rating: 5,
    date: "3 weeks ago",
    product: "iPhone 15 Pro",
    text: "Came in just to check and walked out with my dream phone on easy EMI! The trade-in calculator on their website is accurate — no surprises at the counter.",
    avatar: "SV",
    color: "bg-rose-600",
  },
  {
    id: 5,
    name: "Vikram Singh",
    location: "Delhi",
    rating: 5,
    date: "1 month ago",
    product: "OnePlus 13",
    text: "Best mobile shop in the area, period. Got the OnePlus 13 with a free case and screen protector. Prices are genuinely competitive and staff knows their stuff.",
    avatar: "VS",
    color: "bg-red-700",
  },
  {
    id: 6,
    name: "Anjali Gupta",
    location: "Rohini",
    rating: 5,
    date: "1 month ago",
    product: "Vivo V40 Pro",
    text: "I was confused between 3 phones and the team here patiently walked me through every option. No pressure, just honest advice. Bought the V40 Pro — zero regrets!",
    avatar: "AG",
    color: "bg-teal-600",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "text-amber-400 fill-amber-400" : "text-white/20"}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  const totalReviews = 148;
  const avgRating = 4.9;

  return (
    <section id="reviews" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            Customer Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>

          {/* Summary bar */}
          <div className="inline-flex items-center gap-5 bg-card border border-white/10 rounded-2xl px-8 py-4 mt-2">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">{avgRating}</div>
              <StarRating rating={5} />
              <div className="text-xs text-white/40 mt-1">{totalReviews} reviews</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="space-y-1.5 text-left">
              {[5, 4, 3].map((star) => (
                <div key={star} className="flex items-center gap-2">
                  <span className="text-xs text-white/40 w-2">{star}</span>
                  <Star size={10} className="text-amber-400 fill-amber-400" />
                  <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full"
                      style={{ width: star === 5 ? "92%" : star === 4 ? "6%" : "2%" }}
                    />
                  </div>
                  <span className="text-xs text-white/30">
                    {star === 5 ? "92%" : star === 4 ? "6%" : "2%"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Review grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="bg-card border border-white/5 rounded-2xl p-6 relative hover:border-primary/20 transition-colors group"
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="absolute top-5 right-5 text-primary/10 group-hover:text-primary/20 transition-colors"
              />

              {/* Stars + date */}
              <div className="flex items-center justify-between mb-3">
                <StarRating rating={review.rating} />
                <span className="text-xs text-white/30">{review.date}</span>
              </div>

              {/* Review text */}
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                "{review.text}"
              </p>

              {/* Product tag */}
              <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full mb-4">
                {review.product}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div
                  className={`w-9 h-9 ${review.color} rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0`}
                >
                  {review.avatar}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{review.name}</div>
                  <div className="text-white/40 text-xs">{review.location}</div>
                </div>
                <div className="ml-auto">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#25D366]" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12.004 2C6.483 2 2 6.483 2 12.004c0 1.853.508 3.659 1.471 5.232L2 22l4.89-1.437A9.96 9.96 0 0012.004 22C17.525 22 22 17.517 22 12.004 22 6.483 17.525 2 12.004 2zm0 18.196a8.165 8.165 0 01-4.218-1.17l-.302-.18-3.13.921.925-3.06-.197-.313a8.196 8.196 0 01-1.274-4.39c0-4.53 3.687-8.217 8.196-8.217s8.197 3.687 8.197 8.217c0 4.529-3.688 8.192-8.197 8.192z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/40 text-sm mb-1">
            Join <span className="text-white/70 font-semibold">148+ happy customers</span> who upgraded with us
          </p>
          <p className="text-white/25 text-xs">Reviews verified via WhatsApp & Google</p>
        </motion.div>
      </div>
    </section>
  );
}

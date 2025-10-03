import { motion } from "framer-motion";
import Link from "next/link";

const testimonials = [
  {
    name: "Riya S.",
    location: "Mumbai",
    text: "Kayafit made it easy to stick to my routine. I've lost 8kg and feel more energetic than ever!",
  },
  {
    name: "Aditya M.",
    location: "Bangalore",
    text: "The online workouts are super convenient. I can work out anytime—even during a busy day!",
  },
  {
    name: "Neha K.",
    location: "Delhi",
    text: "I finally found a plan that works for me. My nutrition is on point, and I feel amazing.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black text-white px-6 py-20 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our <span className="text-[#00E6A0]">Members</span> Are Saying
        </motion.h2>

        <motion.p
          className="mb-12 text-gray-400 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Real people. Real results. Discover how Kayafit is helping members achieve lasting fitness transformations through expert coaching, personalized nutrition, and online training.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#1f1f29]/40 to-[#101014]/50 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-left shadow-[0_4px_20px_rgba(0,230,160,0.15)] hover:shadow-[0_6px_30px_rgba(0,230,160,0.25)] transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <p className="text-white/90 italic mb-4 leading-relaxed">"{t.text}"</p>
              <h4 className="text-white font-semibold text-sm">
                — {t.name} <span className="text-[#00E6A0]/80">({t.location})</span>
              </h4>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/success-stories"
            className="inline-block mt-5 px-6 py-3 rounded-full bg-[#00E6A0]/10 border border-[#00E6A0]/30 text-[#00E6A0] font-semibold backdrop-blur-md hover:bg-[#00E6A0]/20 transition duration-300 shadow-[0_4px_20px_rgba(0,230,160,0.15)] hover:shadow-[0_6px_30px_rgba(0,230,160,0.3)]">
        🌟 Explore Success Stories
        </Link>

        </motion.div>
      </div>
    </section>
  );
}
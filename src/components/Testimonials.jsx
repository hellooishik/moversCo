import React from "react";
import { motion } from "framer-motion";

function Testimonials() {
  const t = [
    { quote: "Excellent service — everything arrived intact!", author: "Priya" },
    { quote: "Fast, professional, and friendly team.", author: "Mohammed" },
    { quote: "Truly stress-free moving experience!", author: "Sophia" },
    { quote: "Packed and delivered on time, hassle-free.", author: "Rohan" },
    { quote: "They treated my things like their own.", author: "Ananya" },
  ];

  return (
    <section className="relative bg-black overflow-hidden py-32">
      {/* Animated glowing orbs in background */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-3xl top-[-200px] left-[-200px] animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl bottom-[-200px] right-[-200px] animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-16 text-center"
        >
          What Our Customers Says
        </motion.h2>

        {/* Floating testimonials */}
        <div className="relative w-full h-[60vh]">
          {t.map((item, i) => (
            <motion.div
              key={i}
              className="absolute max-w-xs"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: [0, 1, 1, 0],
                y: [50, 0, 0, -50],
                x: [Math.random() * 200 - 100, 0, 0, Math.random() * 200 - 100],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                delay: i * 2,
              }}
              style={{
                top: `${20 + i * 10}%`,
                left: `${15 + (i % 3) * 30}%`,
              }}
            >
              {/* Cloud bubble */}
              <div className="bg-white/90 rounded-3xl px-6 py-4 shadow-lg backdrop-blur-sm relative">
                <p className="text-lg md:text-xl italic text-gray-800">“{item.quote}”</p>
                <span className="mt-3 block text-yellow-600 font-semibold">— {item.author}</span>

                {/* Cloud puffs (decorative) */}
                <span className="absolute w-6 h-6 bg-white/90 rounded-full top-[-10px] left-6"></span>
                <span className="absolute w-8 h-8 bg-white/90 rounded-full bottom-[-12px] right-10"></span>
                <span className="absolute w-5 h-5 bg-white/90 rounded-full bottom-[-8px] left-8"></span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import Lottie from "lottie-react";
import truckAnim from "../assets/truck.json";

function Services() {
  const sectionRef = useRef(null);

  // Track scroll for this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Animate line faster: complete at 60% of scroll
  const rawLine = useTransform(scrollYProgress, [0, 0.6], [0, 100]);
  const line = useSpring(rawLine, { stiffness: 80, damping: 20, mass: 0.6 });

  // CSS % strings
  const lineWidthPercent = useTransform(line, (v) => `${v}%`);
  const truckX = useTransform(line, (v) => `${v}%`);

  // Track numeric progress for stops
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const unsub = line.on("change", (v) => setProgress(v));
    return () => unsub();
  }, [line]);

  const services = [
    { title: "Home Relocation", desc: "Local & long-distance moves with safe packing." },
    { title: "Office Relocation", desc: "Seamless, stress-free business moves." },
    { title: "International Shipping", desc: "Worldwide door-to-door solutions." },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.1.0')",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 text-white flex flex-col items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center drop-shadow-2xl mb-16"
        >
          Moving Services Across the Globe
        </motion.h2>

        {/* Timeline centered */}
        <div className="relative h-72 w-full max-w-5xl px-12 flex items-center justify-center">
          {/* Base line */}
          <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-gray-700/70 rounded-full" />

          {/* Progress line */}
          <motion.div
            style={{ width: lineWidthPercent }}
            className="absolute top-1/2 left-0 h-[3px] rounded-full shadow-lg bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500"
          />

          {/* Truck */}
          <motion.div
            style={{ x: truckX }}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-24 md:w-32"
            aria-hidden
          >
            <Lottie animationData={truckAnim} loop />
          </motion.div>

          {/* Stops */}
          {services.map((s, i) => {
            const stopPercent = (i / (services.length - 1)) * 100;
            const active = progress >= stopPercent - 0.5;

            return (
              <div
                key={s.title}
                className="absolute flex flex-col items-center"
                style={{ left: `${stopPercent}%`, transform: "translateX(-50%)" }}
              >
                <motion.div
                  className="w-8 h-8 rounded-full border-4 bg-black flex items-center justify-center"
                  animate={{
                    borderColor: active ? "#facc15" : "#4b5563",
                    scale: active ? 1.05 : 1,
                    boxShadow: active
                      ? "0 0 16px rgba(250, 204, 21, 0.6)"
                      : "0 0 0 rgba(0,0,0,0)",
                  }}
                  transition={{ duration: 0.35 }}
                >
                  <motion.div
                    className="w-3 h-3 rounded-full"
                    animate={{
                      backgroundColor: active ? "#facc15" : "#6b7280",
                      scale: active ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.35 }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 w-44 text-center"
                >
                  <h3 className="text-base md:text-lg font-semibold">{s.title}</h3>
                  <p className="text-sm text-gray-300">{s.desc}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;

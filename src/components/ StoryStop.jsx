// StoryStop.js
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TypingText from "./TypingText";

export default function StoryStop({ stop, isLast, onQuote }) {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % stop.titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stop.titles.length]);

  return (
    <section className="h-screen flex items-center justify-center relative">
      {/* Background */}
      {stop.bg === "black" ? (
        <div className="absolute inset-0 w-full h-full bg-black" />
      ) : stop.bg.endsWith(".mp4") ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={stop.bg}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <motion.img
          src={stop.bg}
          alt={stop.titles[0]}
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      <div className="absolute inset-0 bg-black/60" />

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-3xl"
      >
        <motion.h2
          key={wordIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold mb-4 
                     bg-gradient-to-r from-yellow-400 to-orange-500 
                     bg-clip-text text-transparent drop-shadow-lg"
        >
          {stop.titles[wordIndex]}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-base md:text-lg text-gray-200 leading-relaxed"
        >
          <TypingText text={stop.desc} speed={40} />
        </motion.p>

        {isLast && (
          <motion.button
            onClick={onQuote}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r 
                       from-yellow-400 to-orange-500 text-black font-semibold 
                       shadow-md hover:shadow-lg transition-all"
          >
            Get a Quote
          </motion.button>
        )}
      </motion.div>
    </section>
  );
}

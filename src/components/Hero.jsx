import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import truckAnim from "../assets/truck.json";
import QuoteForm from "./QuoteForm";
import { X } from "lucide-react";
import videoOne from "../assets/one.mp4";
import videoTwo from "../assets/two.mp4";
import videoFour from "../assets/four.mp4";
import ScrollIndicator from "./ScrollIndicator"; // NEW

// Typing effect component
function TypingText({ text, speed = 60 }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayed}</span>;
}

// Story Stop Component
function StoryStop({ stop, isLast, onQuote, nextRef }) {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % stop.titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stop.titles.length]);

  // Scroll handler
  const handleScrollNext = () => {
    if (nextRef && nextRef.current) {
      nextRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-screen flex items-center justify-center relative">
      {/* Background */}
      {stop.bg === "black" ? (
        <div className="absolute inset-0 w-full h-full bg-black" />
      ) : stop.bg.includes(".mp4") ? (
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

      {/* Scroll Indicator (only if not last) */}
      {!isLast && <ScrollIndicator onClick={handleScrollNext} />}
    </section>
  );
}

export default function Hero() {
  const [showQuote, setShowQuote] = useState(false);

  const storyStops = [
    {
      titles: ["We Pack with Care", "Handled with Love", "Safe & Sound"],
      desc: "Your memories are wrapped, sealed, and protected by experts.",
      bg: videoOne,
    },
    {
      titles: ["We Move with Precision", "Across Borders", "On Every Mile"],
      desc: "From highways to borders, your shipment is tracked every mile.",
      bg: videoTwo,
    },
    {
      titles: ["We Deliver with Trust", "On Time", "Your New Start"],
      desc: "On-time, safe, and seamless – your new beginning awaits.",
      bg: videoFour,
    },
  ];

  // Refs for smooth scroll
  const sectionRefs = storyStops.map(() => useRef(null));

  return (
    <section
      id="journey"
      className="relative w-full overflow-x-hidden bg-black text-white"
    >
      {/* Hero Intro Section */}
      <section className="h-screen flex flex-col items-center justify-center relative bg-black">
        <div className="absolute inset-0 flex items-center justify-center">
          <Lottie animationData={truckAnim} loop className="w-40 md:w-56" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-6 max-w-2xl"
        >
          <h1
            className="text-4xl md:text-6xl font-extrabold mb-6 
                       bg-gradient-to-r from-yellow-400 to-orange-500 
                       bg-clip-text text-transparent drop-shadow-lg"
          >
            <TypingText text="Relocating Made Easy" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 mb-6"
          >
            We ensure a smooth, safe, and stress-free moving experience from
            packing to delivery.
          </motion.p>

          {/* Wanna Explore Button (fixed) */}
          <motion.button
            onClick={() => setShowQuote(true)}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 25px rgba(251,191,36,0.6)",
            }}
            whileTap={{
              scale: 0.95,
              boxShadow: "0px 0px 10px rgba(251,191,36,0.3) inset",
            }}
            className="relative px-8 py-4 rounded-xl font-bold text-black
                       bg-gradient-to-r from-yellow-400 to-orange-500 
                       overflow-hidden tracking-wide"
          >
            {/* Shimmer effect */}
            <span className="relative z-10">Wanna Explore?</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
              }}
            />
          </motion.button>
        </motion.div>

        {/* Scroll Indicator to first story */}
        <ScrollIndicator
          onClick={() =>
            sectionRefs[0].current.scrollIntoView({ behavior: "smooth" })
          }
        />
      </section>

      {/* Storytelling stops */}
      <div className="relative z-10">
        {storyStops.map((stop, i) => (
          <div ref={sectionRefs[i]} key={i}>
            <StoryStop
              stop={stop}
              isLast={i === storyStops.length - 1}
              onQuote={() => setShowQuote(true)}
              nextRef={sectionRefs[i + 1]}
            />
          </div>
        ))}
      </div>

      {/* Modal Quote Form */}
      {showQuote && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setShowQuote(false)}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 sm:p-10"
          >
            <button
              onClick={() => setShowQuote(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Get Your Instant Quote
            </h3>
            <QuoteForm />
          </motion.div>
        </div>
      )}
    </section>
  );
}

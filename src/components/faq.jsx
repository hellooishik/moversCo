import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

function FAQ() {
  const faqs = [
    {
      q: "How do you calculate moving costs?",
      a: "Costs depend on distance, property size, number of items, and helpers. Our form instantly estimates your price.",
    },
    {
      q: "Do you provide packing materials?",
      a: "Yes! We offer high-quality boxes, bubble wrap, and packing tape, included in most plans.",
    },
    {
      q: "Can I track my move in real time?",
      a: "Absolutely. You’ll get live tracking updates and an estimated arrival window.",
    },
    {
      q: "Do you handle international moves?",
      a: "Yes, we provide customs clearance support and door-to-door shipping worldwide.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white/5 border border-yellow-400/20 rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-lg"
              >
                <span>{faq.q}</span>
                {openIndex === i ? (
                  <Minus className="w-6 h-6 text-yellow-400" />
                ) : (
                  <Plus className="w-6 h-6 text-yellow-400" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-5 text-gray-300"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-xl font-semibold">Still have questions?</h3>
          <p className="mt-2 text-gray-300">
            Our team is here to help. Reach out for a personalized plan in minutes.
          </p>
          <a
            href="#contact"
            className="inline-block mt-4 px-6 py-3 rounded-xl bg-yellow-500 text-black font-semibold shadow hover:bg-yellow-600 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default FAQ;

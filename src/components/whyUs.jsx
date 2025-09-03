import React from "react";
import { motion } from "framer-motion";
import { Home, Truck, Package } from "lucide-react";

function WhyUs() {
  const features = [
    {
      icon: <Home size={36} />,
      title: "Complete Home Setup",
      desc: "From furniture to fragile items, we handle it all with care.",
    },
    {
      icon: <Truck size={36} />,
      title: "On-Time Delivery",
      desc: "Our smart tracking ensures timely pickups and drop-offs.",
    },
    {
      icon: <Package size={36} />,
      title: "Safe & Secure",
      desc: "Every package insured, every item packed with precision.",
    },
  ];

  return (
    <section
      id="why-us"
      className="relative min-h-screen bg-black text-white py-24"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1586206670130-4c6d8e646c9a?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Relocation Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/80 via-purple-900/60 to-black/90" />
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-4xl md:text-5xl font-extrabold text-center mb-20"
      >
        Why Choose Us?
      </motion.h2>

      {/* Timeline */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="relative border-l-4 border-yellow-400/50 ml-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, delay: i * 0.2 }}
              className="mb-20 ml-6"
            >
              {/* Icon bubble */}
              <div className="absolute -left-10 flex items-center justify-center w-14 h-14 rounded-full bg-yellow-500 text-black shadow-lg ring-4 ring-yellow-400/40">
                {f.icon}
              </div>

              {/* Text */}
              <h3 className="text-2xl md:text-3xl font-bold">
                {f.title}
              </h3>
              <p className="text-lg text-gray-200 mt-3 leading-relaxed max-w-xl">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;

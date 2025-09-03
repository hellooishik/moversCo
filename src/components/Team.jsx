import React from "react";
import { motion } from "framer-motion";

function Team() {
  const members = [
    { name: "Ravi Kumar", role: "Operations Lead", about: "Ensures smooth moves across cities." },
    { name: "Anita Singh", role: "Customer Success", about: "Keeps customers stress-free and happy." },
    { name: "James O.", role: "Logistics Manager", about: "Manages global shipments with precision." },
  ];

  return (
    <section id="team" className="relative py-32 bg-black overflow-hidden">
      {/* Glowing background */}
      <div className="absolute inset-0">
        <div className="absolute w-[700px] h-[700px] bg-yellow-500/10 rounded-full blur-3xl top-[-200px] left-[-200px]" />
        <div className="absolute w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl bottom-[-200px] right-[-200px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-4"
        >
          Meet Our Awesome Team
        </motion.h2>
        <p className="text-lg text-gray-400 mb-20">
          The people who make every move stress-free
        </p>

        {/* Floating Orbs */}
        <div className="relative flex justify-center gap-20 flex-wrap">
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.3 }}
              whileHover={{ scale: 1.15 }}
              className="relative group flex flex-col items-center"
            >
              {/* Orb Avatar */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                className="w-28 h-28 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 flex items-center justify-center text-3xl font-bold text-black shadow-lg group-hover:shadow-yellow-400/50 transition-all"
              >
                {m.name.split(" ")[0][0]}
              </motion.div>

              {/* Info shows on hover */}
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-white">{m.name}</h3>
                <p className="text-yellow-400">{m.role}</p>
                <p className="mt-2 text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {m.about}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;

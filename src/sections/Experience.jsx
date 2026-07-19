import React from "react";
import { experience } from "../data/content";
import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <div>
      <section id="experience" className="px-6 pt-24 border-t border-line">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[auto-1fr] gap-10">
          <p className="font-mono text-sm text-accent tracking-wide">
            03 / EXPERINCE
          </p>
          <div className="grid gap-5">
            {experience.map((elem, index) => (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                key={{ index }}
                className="border border-line rounded-lg p-6"
              >
                
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

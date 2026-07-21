import React from "react";
import { motion } from "framer-motion";
import { profile } from "../data/content";
import { TypingHero } from "./TypingHero";

export const Hero = () => {
  return (
    <div>
      <section id="top" className="relative pt-40 pb-24 px-6 overflow-hidden h-screen">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-status" />
              </span>
              <span className="font-mono text-[11px] tracking-wide text-status">
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-semibold text-4xl md:text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-5"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display font-medium text-xl sm:text-2xl text-accent mb-6"
            >
              {profile.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted text-base sm:text-lg max-w-md leading-relaxed mb-10"
            >
              {profile.tagline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#work"
                className="font-mono text-xs font-medium bg-accent text-bg px-6 py-3 rounded hover:bg-accent-dim transition-colors"
              >
                View work
              </a>
              <a
                href="#contact"
                className="font-mono text-xs text-text border border-line px-6 py-3 rounded hover:border-accent hover:text-accent transition-colors"
              >
                Get in touch
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className=" hidden lg:block w-10/12 ">
            <TypingHero />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

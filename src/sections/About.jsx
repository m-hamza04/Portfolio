import { motion } from "framer-motion";
import { profile, education } from "../data/content";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 border-t border-line">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[auto_1fr] gap-10">
        <motion.p
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-accent tracking-wide"
        >
          01 / ABOUT
        </motion.p>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl leading-relaxed max-w-2xl mb-10"
          >
            {profile.aspiration}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-surface border border-line rounded-lg p-5 max-w-lg"
          >
            <p className="font-mono text-[11px] text-muted tracking-wide mb-1">EDUCATION</p>
            <p className="font-display font-medium text-base mb-1">{education.school}</p>
            <p className="text-muted text-sm mb-3">
              {education.degree} · {education.duration}
            </p>
            <p className="font-mono text-[11px] text-status">{education.honor}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

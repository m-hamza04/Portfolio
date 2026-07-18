import { motion } from "framer-motion";
import { skills } from "../data/content";

export default function SkillSection() {
  return (
    <section id="skills" className="px-6 py-24 border-t border-line">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[auto_1fr] gap-10">
        <p className="font-mono text-xs text-accent tracking-wide">
          02 / SKILLS
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="border border-line rounded-lg p-5 hover:border-accent/40 transition-colors"
            >
              <p className="font-mono text-[11px] text-muted tracking-wide mb-3">
                {group.category.toUpperCase()}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[11px] text-text bg-bg border border-line rounded px-2.5 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

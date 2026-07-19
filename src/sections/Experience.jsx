import { motion } from "framer-motion";
import { experience, activities } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 border-t border-line">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[auto_1fr] gap-10">
        <p className="font-mono text-xs text-accent tracking-wide">04 / EXPERIENCE</p>

        <div className="grid gap-5">
          {experience.map((e, i) => (
            <motion.div
              key={e.role + e.org}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="border border-line rounded-lg p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-display font-semibold text-base">{e.role}</h3>
                {e.duration && (
                  <span className="font-mono text-[11px] text-muted">{e.duration}</span>
                )}
              </div>
              <p className="text-accent text-sm mb-3">{e.org}</p>

              {e.points.length > 0 ? (
                <ul className="grid gap-1.5">
                  {e.points.map((pt) => (
                    <li key={pt} className="text-[13px] text-muted flex gap-2">
                      <span className="text-accent">–</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-[13px] text-muted italic">Details coming soon.</p>
              )}
            </motion.div>
          ))}

          {activities.map((a) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border border-line/60 rounded-lg p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <h3 className="font-display font-medium text-sm">{a.name}</h3>
                <span className="font-mono text-[11px] text-muted">{a.role}</span>
              </div>
              <ul className="grid gap-1.5">
                {a.points.map((pt) => (
                  <li key={pt} className="text-[13px] text-muted flex gap-2">
                    <span className="text-accent">–</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

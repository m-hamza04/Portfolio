import { motion } from "framer-motion";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="work" className="px-6 py-24 border-t border-line">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[auto_1fr] gap-10">
        <p className="font-mono text-xs text-accent tracking-wide">03 / WORK</p>

        <div className="grid gap-5">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.github}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group block bg-surface border border-line rounded-lg p-6 hover:border-accent/50 transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="font-display font-semibold text-lg group-hover:text-accent transition-colors">
                  {p.name}
                </h3>
                <span className="font-mono text-[10px] text-accent bg-accent/10 px-2 py-0.5 rounded">
                  {p.tag.toUpperCase()}
                </span>
              </div>

              <p className="text-muted text-sm leading-relaxed mb-4 max-w-2xl">{p.description}</p>

              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1 mb-4">
                {p.highlights.map((h) => (
                  <li key={h} className="text-[13px] text-muted flex gap-2">
                    <span className="text-accent">–</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[10px] text-muted border-t border-line pt-3">
                <span>
                  <span className="text-text">{p.stat.value}</span> {p.stat.label.toUpperCase()}
                </span>
                {p.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

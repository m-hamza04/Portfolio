import { motion } from "framer-motion";
import { profile } from "../data/content";

export default function Contact() {
    return (
        <section id="contact" className="px-6 py-28 border-t border-line">
            <div className="max-w-6xl mx-auto text-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="font-mono text-xs text-accent tracking-wide mb-4"
                >
                    05 / CONTACT
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    className="font-display font-semibold text-4xl sm:text-5xl mb-6"
                >
                    Let's build something.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-muted max-w-md mx-auto mb-10"
                >
                    Open to backend and full-stack roles. Reach out and I'll get back to you.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="flex flex-wrap justify-center gap-3 mb-16"
                >
                    <a
                        href={`mailto:${profile.email}`}
                        className="font-mono text-xs font-medium bg-accent text-bg px-6 py-3 rounded hover:bg-accent-dim transition-colors"
                    >
                        {profile.email}
                    </a>
                    <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-xs text-text border border-line px-6 py-3 rounded hover:border-accent hover:text-accent transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href={profile.github}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-xs text-text border border-line px-6 py-3 rounded hover:border-accent hover:text-accent transition-colors"
                    >
                        GitHub
                    </a>
                </motion.div>

                <p className="font-mono text-[11px] text-muted">
                    {profile.name} — {profile.location}
                </p>
            </div>
        </section>
    );
}

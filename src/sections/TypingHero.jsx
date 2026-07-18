import { useEffect, useState } from "react";

const phrases = [
  "Backend-Focused Developer ",
  "Node.js + Prisma + Supabase",
  "CS Student, Systems-Minded",
  "Fixing Privilege Escalation Bugs",
  "Building cosmet-backend",
];

export const TypingHero = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timeout;
    if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1400);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      timeout = setTimeout(
        () => setCharIndex((prev) => prev + (deleting ? -1 : 1)),
        deleting ? 40 : 70,
      );
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex]);
  const text = phrases[phraseIndex].slice(0, charIndex);
  return (
    <div>
      <div className="text-3xl font-medium text-slate-100 min-h-11">
        {text}
        <span className="inline-block w-0.75 h-8 bg-cyan-400 ml-1 align-middle animate-pulse" />
      </div>
    </div>
  );
};

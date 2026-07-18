import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const phrases = [
  `int binarySearch(vector<int>& arr, int target) {
  int left = 0, right = arr.size() - 1;

  while (left <= right) {
    int mid = left + (right - left) / 2;

    if (arr[mid] == target)
      return mid;

    if (arr[mid] < target)
      left = mid + 1;
    else
      right = mid - 1;
  }

  return -1;
}`,
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
        deleting ? 10 : 20,
      );
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex]);

  const text = phrases[phraseIndex].slice(0, charIndex);

  return (
    <div className="pl-10 pt-12 text-sm">
      <SyntaxHighlighter
        language="cpp"
        style={vscDarkPlus}
        PreTag={({ children, ...props }) => (
          <pre
            {...props}
            style={{ background: "transparent", margin: 0, padding: 0 }}
          >
            {children}
          </pre>
        )}
        CodeTag={({ children, ...props }) => (
          <code {...props} style={{ background: "transparent" }}>
            {children}
          </code>
        )}
      >
        {text}
      </SyntaxHighlighter>
    </div>
  );
};

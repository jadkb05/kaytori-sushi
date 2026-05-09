import { useEffect, useRef, useState } from "react";

type TypewriterTaglineProps = {
  text: string;
  /** ms entre deux caractères */
  speedMs?: number;
};

/**
 * Machine à écrire : le texte apparaît progressivement, caractère par caractère.
 * Démarre après DOMContentLoaded si le document est encore en chargement.
 */
export function TypewriterTagline({ text, speedMs = 42 }: TypewriterTaglineProps) {
  const [shown, setShown] = useState("");
  const intervalRef = useRef(0);

  useEffect(() => {
    setShown("");
    let cancelled = false;

    const tick = () => {
      let i = 0;
      intervalRef.current = window.setInterval(() => {
        if (cancelled) return;
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) {
          window.clearInterval(intervalRef.current);
        }
      }, speedMs);
    };

    const onDomReady = () => {
      if (!cancelled) tick();
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", onDomReady, { once: true });
    } else {
      onDomReady();
    }

    return () => {
      cancelled = true;
      window.clearInterval(intervalRef.current);
      document.removeEventListener("DOMContentLoaded", onDomReady);
    };
  }, [text, speedMs]);

  const typing = shown.length < text.length;

  return (
    <p
      className="tagline-typewriter mb-2 min-h-[2.25rem] font-display text-base italic text-kaytori-gold md:min-h-[2rem] md:text-lg whitespace-normal md:whitespace-nowrap"
      aria-live="polite"
    >
      {shown}
      {typing ? (
        <span
          className="ml-0.5 inline-block min-h-[1em] w-0.5 translate-y-px animate-pulse bg-kaytori-gold align-middle"
          aria-hidden
        />
      ) : null}
    </p>
  );
}

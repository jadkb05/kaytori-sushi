import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
};

/** Révélation au scroll — seuils assouplis pour éviter les blocs restés invisibles. */
export function Reveal({ children, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const markVisible = () => setVisible(true);

    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    if (rect.top < vh + 120 && rect.bottom > -80) {
      markVisible();
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            markVisible();
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.03, rootMargin: "0px 0px 12% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-anim${visible ? " is-visible" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}

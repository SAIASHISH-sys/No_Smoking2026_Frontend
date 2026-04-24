import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(
          600px circle at ${e.clientX}px ${e.clientY}px,
          rgba(249, 115, 22, 0.13) 0%,
          rgba(251, 146, 60, 0.06) 35%,
          transparent 65%
        )`;
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-30"
      style={{ background: 'transparent' }}
    />
  );
}

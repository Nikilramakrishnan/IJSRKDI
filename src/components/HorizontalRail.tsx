import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  label?: string;
  /** Auto-advance interval in ms */
  intervalMs?: number;
};

export function HorizontalRail({
  children,
  label,
  intervalMs = 2800,
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const resumeTimer = useRef<number | null>(null);

  const clearResumeTimer = () => {
    if (resumeTimer.current !== null) {
      window.clearTimeout(resumeTimer.current);
      resumeTimer.current = null;
    }
  };

  const pause = () => {
    pausedRef.current = true;
    clearResumeTimer();
  };

  const scheduleResume = (delay = 2200) => {
    clearResumeTimer();
    resumeTimer.current = window.setTimeout(() => {
      pausedRef.current = false;
      resumeTimer.current = null;
    }, delay);
  };

  const getStep = () => {
    const track = trackRef.current;
    if (!track) return 320;
    const card = track.querySelector<HTMLElement>(":scope > *");
    if (!card) return Math.min(340, track.clientWidth * 0.75);
    const style = window.getComputedStyle(track);
    const gap = Number.parseFloat(style.columnGap || style.gap || "16") || 16;
    return card.offsetWidth + gap;
  };

  const scrollByDir = (dir: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * getStep(), behavior: "smooth" });
  };

  const advance = () => {
    const track = trackRef.current;
    if (!track || pausedRef.current) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 4) return;

    const step = getStep();
    const nearEnd = track.scrollLeft >= maxScroll - 8;

    if (nearEnd) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      track.scrollBy({ left: step, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const id = window.setInterval(advance, intervalMs);

    const onEnter = () => pause();
    const onLeave = () => scheduleResume();
    const onFocusIn = () => pause();
    const onFocusOut = () => scheduleResume();
    const onPointerDown = () => pause();
    const onWheel = () => {
      pause();
      scheduleResume(3000);
    };
    const onScroll = () => {
      // User drag / touch scroll — pause briefly, then resume
      if (!pausedRef.current) return;
    };

    track.addEventListener("mouseenter", onEnter);
    track.addEventListener("mouseleave", onLeave);
    track.addEventListener("focusin", onFocusIn);
    track.addEventListener("focusout", onFocusOut);
    track.addEventListener("pointerdown", onPointerDown);
    track.addEventListener("wheel", onWheel, { passive: true });
    track.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearInterval(id);
      clearResumeTimer();
      track.removeEventListener("mouseenter", onEnter);
      track.removeEventListener("mouseleave", onLeave);
      track.removeEventListener("focusin", onFocusIn);
      track.removeEventListener("focusout", onFocusOut);
      track.removeEventListener("pointerdown", onPointerDown);
      track.removeEventListener("wheel", onWheel);
      track.removeEventListener("scroll", onScroll);
    };
  }, [intervalMs]);

  const onArrow = (dir: -1 | 1) => {
    pause();
    scrollByDir(dir);
    scheduleResume(3000);
  };

  return (
    <div
      className="h-rail"
      onMouseEnter={pause}
      onMouseLeave={() => scheduleResume()}
    >
      <div className="h-rail-controls">
        <span className="h-rail-hint">{label ?? "Auto-scrolls · hold to pause"}</span>
        <div className="h-rail-arrows">
          <button
            type="button"
            className="h-rail-arrow"
            aria-label="Scroll left"
            onClick={() => onArrow(-1)}
          >
            ←
          </button>
          <button
            type="button"
            className="h-rail-arrow"
            aria-label="Scroll right"
            onClick={() => onArrow(1)}
          >
            →
          </button>
        </div>
      </div>
      <div className="h-rail-track" ref={trackRef} tabIndex={0}>
        {children}
      </div>
    </div>
  );
}

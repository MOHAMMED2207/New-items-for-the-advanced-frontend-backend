"use client";

import {
  motion,
  AnimatePresence,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { useRef, useState } from "react";
import { Spinner } from "@/components/ItemsWaiting/spinner";
import { useFloatingAnimation } from "./useFloatingAnimation";

export function IconItem({
  icon: Icon,
  label,
  href,
  mouseX, // توقع أن parent يمرّر useMotionValue
  onClick,
  isLoading,
}: {
  icon: any;
  label: string;
  href: string;
  mouseX?: MotionValue<number>; // optional but recommended
  onClick?: () => void;
  isLoading: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Pass ref and mouseX to hook — hook سيعالج fallback إن لم يُمرَّر mouseX
  const { smoothSize, smoothIcon, smoothRadius } = useFloatingAnimation(
    ref,
    mouseX
  );

  const iconBody = (
    <motion.div
      ref={ref}
      style={{
        width: smoothSize,
        height: smoothSize,
        borderRadius: smoothRadius,
      }}
      className="bg-[#1a1a1a] border border-[#2b2b2b] flex items-center justify-center relative cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: -10 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute -top-7  -translate-x-1/2 bg-[#3b3b3b] px-2 py-[0.15rem] text-xs text-[#f0f0f0] rounded-md whitespace-nowrap pointer-events-none z-50"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>

      {/* 🔥 لو Logout بيحصل → أظهر Loader */}
      {isLoading ? (
        <Spinner />
      ) : (
        <motion.div style={{ fontSize: smoothIcon }} className="text-[#bfbfbf]">
          <Icon />
        </motion.div>
      )}
    </motion.div>
  );

  // if onClick passed -> use button/div to allow click
  if (onClick) {
    return (
      // use button for accessibility, but style reset to avoid default button styles
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation(); // prevent parent handlers if any
          if (!isLoading) onClick();
        }}
        className="p-0 m-0 bg-transparent border-0"
        aria-label={label}
      >
        {iconBody}
      </button>
    );
  }

  // fallback: link behavior
  return (
    <a href={href} onClick={(e) => e.preventDefault()}>
      {iconBody}
    </a>
  );
}

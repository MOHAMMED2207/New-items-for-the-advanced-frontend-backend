"use client";

import { motion, AnimatePresence, MotionValue } from "framer-motion";
import { useRef, useState } from "react";
import { Spinner } from "@/components/ItemsWaiting/spinner";
import { useFloatingAnimation } from "./useFloatingAnimation";
import Link from "next/link";
import { usePathname } from "next/navigation";

type IconItemProps = {
  icon: any;
  label: string;
  href?: string;
  type: "link" | "action";
  mouseX?: MotionValue<number>;
  onClick?: () => void;
  isLoading: boolean;
};

export function IconItem({
  icon: Icon,
  label,
  href,
  type,
  mouseX,
  onClick,
  isLoading,
}: IconItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const { smoothSize, smoothIcon, smoothRadius } = useFloatingAnimation(
    ref,
    mouseX
  );

  const pathname = usePathname();
  const isActive = href === pathname;

  const iconBody = (
    <motion.div
      ref={ref}
      style={{
        width: smoothSize,
        height: smoothSize,
        borderRadius: smoothRadius,
      }}
      className={`${
        isActive ? "bg-[#4d4d4d]" : "bg-[#1a1a1a]"
      }   border border-[#2b2b2b] flex items-center justify-center relative cursor-pointer`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: -10 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute -top-7 -translate-x-1/2 bg-[#3b3b3b] px-2 py-[0.15rem] text-xs text-[#f0f0f0] rounded-md whitespace-nowrap pointer-events-none z-50"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>

      {isLoading ? (
        <Spinner />
      ) : (
        <motion.div style={{ fontSize: smoothIcon }} className="text-[#bfbfbf]">
          <Icon />
          {isActive && (
            <h1 className="w-full flex justify-center relative">
              <p className="w-3 h-1 top-3 absolute bg-white rounded-full"></p>
            </h1>
          )}
        </motion.div>
      )}
    </motion.div>
  );

  if (type === "action") {
    return (
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          if (!isLoading && onClick) onClick();
          console.log(isActive);
        }}
        className="p-0 m-0 bg-transparent border-0"
        aria-label={label}
      >
        {iconBody}
      </button>
    );
  }

  if (type === "link" && href) {
    return (
      <Link href={href} aria-label={label}>
        {iconBody}
      </Link>
    );
  }

  return null;
}

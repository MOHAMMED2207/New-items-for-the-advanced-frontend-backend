import { useSpring, useTransform } from "framer-motion";

export function useFloatingAnimation(
  ref: React.RefObject<HTMLElement>,
  mouseX: any
) {
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return 0;
    return Number(val) - (bounds.left + bounds.width / 2);
  });

  const size = useTransform(distance, [-150, 0, 150], [40, 54, 40]);
  const iconSize = useTransform(distance, [-150, 0, 150], [22, 32, 22]);
  const borderRadius = useTransform(distance, [-150, 0, 150], [40, 13, 40]);

  const smoothSize = useSpring(size, { stiffness: 150, damping: 12 });
  const smoothIcon = useSpring(iconSize, { stiffness: 150, damping: 12 });
  const smoothRadius = useSpring(borderRadius, { stiffness: 150, damping: 12 });

  return {
    smoothSize,
    smoothIcon,
    smoothRadius,
  };
}

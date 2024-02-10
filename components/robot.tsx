import { motion } from "framer-motion";
import { Point } from "../lib/types";

export const Robot = ({ position }: { position: Point }) => {
  return (
    <motion.div
      data-testid="robot"
      className="w-1/5 scale-50 aspect-square rounded-full bg-blue-800 absolute pointer-events-none flex justify-center items-center text-white"
      initial={false}
      animate={{
        left: (position.x - 1) * 100,
        bottom: (position.y - 1) * 100,
      }}
    />
  );
};

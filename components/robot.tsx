import { motion } from "framer-motion";
import { RobotIcon } from "@/components/icons";
import { Point } from "../lib/types";

export const Robot = ({ position }: { position: Point }) => {
  return (
    <motion.div
      data-testid="robot"
      className="w-1/5 aspect-square absolute pointer-events-none flex justify-center items-center scale-50"
      initial={false}
      animate={{
        left: (position.x - 1) * 100,
        bottom: (position.y - 1) * 100,
      }}>
      <RobotIcon />
    </motion.div>
  );
};

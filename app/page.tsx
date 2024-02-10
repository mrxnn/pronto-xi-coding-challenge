"use client";

import { Board } from "@/components/board";
import { Robot } from "@/components/robot";
import { Controls } from "@/components/controls";
import { useRobot } from "../lib/useRobot";

export default function Home() {
  const { position, setPosition, move } = useRobot({ x: 1, y: 1 });

  return (
    <>
      <About />
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex gap-x-4">
          <div className="w-[500px] relative">
            <Board onTeleport={setPosition} />
            <Robot position={position} />
          </div>
          <div className="fixed bottom-10 right-10">
            <Controls onMove={move} />
          </div>
        </div>
      </div>
    </>
  );
}

const About = () => {
  return (
    <div className="fixed top-4 left-4 text-[10px] text-neutral-400 uppercase tracking-widest leading-relaxed">
      <p>Technical Solution</p>
      <p>&mdash; By Mayura Ramanayaka</p>
    </div>
  );
};

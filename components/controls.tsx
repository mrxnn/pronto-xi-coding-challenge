import { HTMLAttributes } from "react";
import { Direction } from "../lib/types";
import { ChevronIcon } from "@/components/icons";

export const Controls = ({
  onMove,
}: {
  onMove: (direction: Direction) => void;
}) => {
  return (
    <div className="text-neutral-400 relative w-[130px] aspect-square">
      <ControlButton
        onClick={() => onMove("LEFT")}
        data-testid="left-control"
        aria-label="Left control"
        className="top-1/2 -translate-y-1/2">
        <ChevronIcon className="rotate-90" />
      </ControlButton>

      <ControlButton
        onClick={() => onMove("RIGHT")}
        data-testid="right-control"
        aria-label="Right control"
        className="top-1/2 -translate-y-1/2 right-0">
        <ChevronIcon className="-rotate-90" />
      </ControlButton>

      <ControlButton
        onClick={() => onMove("TOP")}
        data-testid="top-control"
        aria-label="Top control"
        className="left-1/2 -translate-x-1/2">
        <ChevronIcon className="rotate-180" />
      </ControlButton>

      <ControlButton
        onClick={() => onMove("BOTTOM")}
        data-testid="bottom-control"
        aria-label="Bottom control"
        className="left-1/2 -translate-x-1/2 bottom-0">
        <ChevronIcon />
      </ControlButton>
    </div>
  );
};

const ControlButton = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      data-testid="bottom-control"
      aria-label="Bottom control"
      className={`w-12 h-12 rounded-full bg-neutral-800 flex justify-center items-center absolute hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neutral-700 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 transition-all hover:scale-110 ${className}`}
      {...props}>
      {children}
    </button>
  );
};

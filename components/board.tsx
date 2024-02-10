import { Point } from "../lib/types";

export const Board = ({
  onTeleport,
}: {
  onTeleport: (point: Point) => void;
}) => {
  const cells = [1, 2, 3, 4, 5];

  return (
    <div className="border border-neutral-700/90 flex flex-col-reverse rounded-md">
      {cells.map((y) => (
        <div className="flex" key={y}>
          {cells.map((x) => (
            <button
              key={`${x}-${y}`}
              role="button"
              aria-label="cell"
              onClick={() => onTeleport({ x, y })}
              className="w-full text-white text-xs aspect-square border border-neutral-700/90 hover:bg-neutral-800 cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:z-10 focus-visible:ring-neutral-700">
              <span className="sr-only">
                x {x}, y {y}
              </span>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

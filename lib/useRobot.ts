import { useState } from "react";
import { Direction, Point } from "./types";

export const useRobot = (initialPosition: Point) => {
  const [position, setPosition] = useState(initialPosition);

  const move = (direction: Direction) => {
    let newPosition = { ...position };

    // Calculate the new position based on the direction
    switch (direction) {
      case "LEFT":
        newPosition.x = Math.max(1, position.x - 1);
        break;
      case "RIGHT":
        newPosition.x = Math.min(5, position.x + 1);
        break;
      case "TOP":
        newPosition.y = Math.min(5, position.y + 1);
        break;
      case "BOTTOM":
        newPosition.y = Math.max(1, position.y - 1);
        break;
      default:
        break;
    }

    setPosition(newPosition);
  };

  return { position, setPosition, move };
};

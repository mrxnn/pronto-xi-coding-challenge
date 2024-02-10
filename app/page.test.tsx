import { MotionGlobalConfig } from "framer-motion";
import { render, fireEvent } from "@testing-library/react";
import Page from "./page";

MotionGlobalConfig.skipAnimations = true;

describe("Home Page", () => {
  test("robot starts at x:1, y:1", () => {
    const { getByTestId } = render(<Page />);
    const robot = getByTestId("robot");
    expect(robot?.style.bottom).toBe("0px");
    expect(robot?.style.left).toBe("0px");
  });

  test("robot moves correctly when clicking on controls", async () => {
    const { getByTestId } = render(<Page />);

    fireEvent.click(getByTestId("right-control"));
    fireEvent.click(getByTestId("right-control"));
    fireEvent.click(getByTestId("top-control"));
    fireEvent.click(getByTestId("top-control"));
    fireEvent.click(getByTestId("left-control"));
    fireEvent.click(getByTestId("bottom-control"));
    await delay();

    const robot = getByTestId("robot");
    expect(robot?.style.bottom).toBe("100px");
    expect(robot?.style.left).toBe("100px");
  });

  test("robot does not move beyond table boundaries", async () => {
    const { getByTestId } = render(<Page />);

    fireEvent.click(getByTestId("left-control"));
    fireEvent.click(getByTestId("bottom-control"));
    await delay();

    const robot = getByTestId("robot");
    expect(robot?.style.bottom).toBe("0px");
    expect(robot?.style.left).toBe("0px");
  });
});

const delay = (ms: number = 200) =>
  new Promise((resolve) => setTimeout(() => resolve(1), ms));

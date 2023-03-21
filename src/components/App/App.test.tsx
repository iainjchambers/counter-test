import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./";

test("should show 3 initial 0s", () => {
  render(<App />);
  const linkElement = screen.getAllByText("0");
  expect(linkElement.length).toEqual(3);
});

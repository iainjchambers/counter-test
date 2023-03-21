import { render, screen, fireEvent } from "@testing-library/react";
import App from "./";

test("should show three initial zeros, then a one when a counter is incremented then three zeros again when the same counter is decremented", () => {
  render(<App />);

  expect(screen.getAllByText("0").length).toEqual(3);

  fireEvent.click(screen.getAllByText("+")[1]);
  expect(screen.getAllByText("1").length).toEqual(1);

  fireEvent.click(screen.getAllByText("-")[1]);
  expect(screen.getAllByText("0").length).toEqual(3);
});

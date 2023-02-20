import { getByTestId, render, screen } from "@testing-library/react";

import BandComponent from "../../pages/bands/[bandId]";
import { readFakeData } from "../__mocks__/fakeData";

test("band component displays correct information", async () => {
  const { fakeBands } = await readFakeData();
  render(<BandComponent error={null} band={fakeBands[0]} />);
  const heading = screen.getByRole("heading", {
    name: /the wandering bunnies/i,
  });
  expect(heading).toBeInTheDocument();
});
test("error displays correct message", async () => {
  render(<BandComponent band={null} error="not found" />);
  const error = screen.getByRole("heading", {
    name: /Could not retrieve band data: not found/i,
  });
  expect(error).toBeInTheDocument();
});

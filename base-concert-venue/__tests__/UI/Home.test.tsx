import { render, screen } from "@testing-library/react";

import Home from "@/pages/index";

test("has correct image and heading", () => {
  render(<Home />);
  const heading = screen.getByRole("heading", {
    name: /welcome to popular concert venue/i,
  });
  expect(heading).toBeInTheDocument();
  const img = screen.getByRole("img", {
    name: /concert goer with hands in the shape of a heart/i,
  });
  expect(img).toBeInTheDocument();
});

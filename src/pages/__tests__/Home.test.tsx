import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Home from "../Home";

describe("Home", () => {
  it("displays hogwarts home page", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(
      screen.getByText("School of Witchcraft and Wizardry")
    ).toBeInTheDocument();
  });
});

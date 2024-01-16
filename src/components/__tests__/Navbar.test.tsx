import { MemoryRouter } from "react-router-dom";
import Navbar from "../Navbar";
import { renderWithProviders } from "../../utils/test-util";
import { screen } from "@testing-library/react";

describe("Navbar", () => {
  test("It should render the links", () => {
    renderWithProviders(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});

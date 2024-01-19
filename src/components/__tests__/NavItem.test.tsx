import { MemoryRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import NavItem from "../NavItem";
import { renderWithProviders } from "../../utils/test-util";

describe("NavItem", () => {
  test("It should render the links", () => {
    renderWithProviders(
      <MemoryRouter>
        <NavItem label={"Home"} path="/home" icon="icon.png" />
      </MemoryRouter>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});

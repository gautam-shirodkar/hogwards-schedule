import { render } from "@testing-library/react";
import Logo from "../Logo";
import { MemoryRouter } from "react-router-dom";

describe("Logo", () => {
  test("it should render logo component", () => {
    const component = render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );
    expect(component).toBeDefined();
  });
});

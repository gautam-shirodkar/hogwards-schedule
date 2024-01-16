import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RootLayout from "../RootLayout";

describe("RootLayout Component", () => {
  test("it should render the component", () => {
    const { container } = render(
      <MemoryRouter>
        <RootLayout />
      </MemoryRouter>
    );
    expect(container).toBeDefined();
  });
});

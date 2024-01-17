import { render } from "@testing-library/react";
import Loader from "../Loader";

describe("Loader", () => {
  test("it should render loader component", () => {
    const { container } = render(<Loader />);
    const contentElement = container.querySelector(".animate-spin");
    expect(contentElement).toBeInTheDocument();
  });
});

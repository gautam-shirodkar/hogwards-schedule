import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import * as router from "react-router-dom";
import Home from "../Home";

const mockedUsedNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  return {
    ...((await vi.importActual("react-router-dom")) as any),
    useNavigate: () => mockedUsedNavigate,
  };
});

describe("Home", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("displays enter classroom button", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText("Enter Classroom")).toBeInTheDocument();
  });

  it("it should handle click on enter classroom", async () => {
    const navigate = vi.spyOn(router, "useNavigate");
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const btn = screen.getByTestId("enter-classroom");
    await userEvent.click(btn);
    console.log(navigate);
    expect(navigate).toHaveBeenCalledWith();
  });
});

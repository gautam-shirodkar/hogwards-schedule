import { MemoryRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-util";
import CurrentSchedule from "../CurrentSchedule";
import { useSelector } from "react-redux";
import { MOCK_TEACHERS, STUDENT_ALLOCATIONS } from "../../utils/mockData";

const mocks = vi.hoisted(() => {
  return {
    mockSelector: vi.fn(),
  };
});

vi.mock("react-redux", async (importOriginal) => {
  const mod = await importOriginal();
  return {
    ...mod,
    useSelector: mocks.mockSelector,
  };
});

describe("Schedule", () => {
  test("it should display loader when student allocations are not fetched", () => {
    vi.mocked(useSelector).mockReturnValue({
      allocations: undefined,
    });
    const { container } = renderWithProviders(
      <MemoryRouter>
        <CurrentSchedule />
      </MemoryRouter>
    );

    const contentElement = container.querySelector(".animate-spin");
    expect(contentElement).toBeInTheDocument();
  });

  test("it should render student allocations with their teachers", () => {
    vi.mocked(useSelector).mockReturnValue({
      teachers: MOCK_TEACHERS,
      allocations: STUDENT_ALLOCATIONS,
    });
    renderWithProviders(
      <MemoryRouter>
        <CurrentSchedule />
      </MemoryRouter>
    );
    expect(screen.getByText("Harry Potter")).toBeInTheDocument();
  });
});

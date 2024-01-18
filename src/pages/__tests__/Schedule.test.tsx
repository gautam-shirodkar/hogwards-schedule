import { MemoryRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import ScheduleToday from "../Schedule";
import { renderWithProviders } from "../../utils/test-util";
import {
  MOCK_TEACHERS,
  STUDENT_ALLOCATIONS,
  TEACHER_ATTENDANCE,
} from "../../utils/mockData";
import { useDispatch, useSelector } from "react-redux";

const mocks = vi.hoisted(() => {
  return {
    mockSelector: vi.fn(),
    mockDispatch: vi.fn(),
  };
});

vi.mock("react-redux", async (importOriginal) => {
  const mod = await importOriginal();
  return {
    ...mod,
    useSelector: mocks.mockSelector,
    useDispatch: () => mocks.mockDispatch,
  };
});

describe("Schedule Today Page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("it should dispatch actions to fetch the initial data", () => {
    vi.mocked(useSelector).mockReturnValue({
      teachers: [],
      attendance: [],
      allocations: [],
    });
    renderWithProviders(
      <MemoryRouter>
        <ScheduleToday />
      </MemoryRouter>
    );
    expect(mocks.mockDispatch).toHaveBeenCalled();
  });
  test("it should render attendance and schedule section on the page", () => {
    vi.mocked(useSelector).mockReturnValue({
      teachers: MOCK_TEACHERS,
      allocations: STUDENT_ALLOCATIONS,
      attendance: TEACHER_ATTENDANCE,
    });
    renderWithProviders(
      <MemoryRouter>
        <ScheduleToday />
      </MemoryRouter>
    );
    expect(screen.getByText("Professor Dumbledore")).toBeInTheDocument();
    expect(screen.getByText("Harry Potter")).toBeInTheDocument();
  });
  test("it should render call handleAttendance when teacher attendance is changed", () => {
    vi.mocked(useSelector).mockReturnValue({
      teachers: MOCK_TEACHERS,
      allocations: STUDENT_ALLOCATIONS,
      attendance: TEACHER_ATTENDANCE,
    });
    renderWithProviders(
      <MemoryRouter>
        <ScheduleToday />
      </MemoryRouter>
    );
    expect(screen.getByText("Professor Dumbledore")).toBeInTheDocument();
    expect(screen.getByText("Harry Potter")).toBeInTheDocument();
  });
});

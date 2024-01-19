import { MemoryRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-util";
import TeacherTree from "../TeacherTree";
import { useSelector } from "react-redux";
import { MOCK_TEACHERS } from "../../utils/mockData";
import userEvent from "@testing-library/user-event";

const mockAttendanceChange = vi.fn();
const mockHierarchy = {
  "1": [
    {
      id: "t1",
      name: "Professor Dumbledore",
      img: "Albus_Dumbledore.webp",
      priority: 4,
      attendance: "Present",
    },
  ],
};
const mocks = vi.hoisted(() => {
  return {
    mockSelector: vi.fn(),
  };
});

vi.mock("react-redux", async (importOriginal) => {
  const mod: Object = await importOriginal();
  return {
    ...mod,
    useSelector: mocks.mockSelector,
  };
});

describe("Teachers Attendance", () => {
  test("it should call attendance onTeacherAttendanceChange when attendance is changed", async () => {
    vi.mocked(useSelector).mockReturnValue({
      teachers: MOCK_TEACHERS,
    });
    renderWithProviders(
      <MemoryRouter>
        <TeacherTree
          onTeacherAttendanceChange={mockAttendanceChange}
          hierarchy={mockHierarchy}
        />
      </MemoryRouter>
    );
    const selectEle = screen.getByTestId("professor-dumbledore-attendance");
    await userEvent.selectOptions(selectEle, "Absent");
    expect(mockAttendanceChange).toHaveBeenCalled();
  });
});

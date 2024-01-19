import { MOCK_TEACHERS, TEACHER_ATTENDANCE } from "../../../../utils/mockData";
import { initialState, reducer, teacherActions } from "../teacher.slice";

describe("Student slice", () => {
  test("should return the initial state", () => {
    expect(reducer(undefined, { type: "" })).toEqual(initialState);
  });

  test("should handle get teachers start", () => {
    const previousState = initialState;
    expect(reducer(previousState, teacherActions.getTeachers())).toEqual({
      ...initialState,
      loading: true,
    });
  });
  test("should handle teachers set", () => {
    const previousState = initialState;
    const teachers = MOCK_TEACHERS;
    expect(
      reducer(previousState, teacherActions.setTeachers(teachers))
    ).toEqual({
      ...initialState,
      teachers,
      loading: false,
    });
  });

  test("should handle get teachers attendance", () => {
    const previousState = initialState;
    expect(
      reducer(previousState, teacherActions.getTeacherAttendance())
    ).toEqual(initialState);
  });
  test("should handle set teacher attendance", () => {
    const previousState = initialState;
    const teacherAttendance = TEACHER_ATTENDANCE;
    expect(
      reducer(
        previousState,
        teacherActions.setTeacherAttendance(teacherAttendance)
      )
    ).toEqual({
      ...initialState,
      attendance: teacherAttendance,
    });
  });
});

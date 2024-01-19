import { call, put, takeLatest } from "redux-saga/effects";
import { teacherActions } from "../teacher.slice";
import teacherSaga, {
  fetchTeachers,
  fetchTeachersAttendance,
} from "../teacher.saga";
import * as api from "../teacher.api";
import { TEACHER_ATTENDANCE, MOCK_TEACHERS } from "../../../../utils/mockData";

const responseDataTeachers = MOCK_TEACHERS;
const responseDataAttendance = TEACHER_ATTENDANCE;

vi.mock("../teacher.api", () => ({
  teacherApi: vi.fn(() => Promise.resolve(responseDataTeachers)),
  teacherAttendanceApi: vi.fn(() => Promise.resolve(responseDataAttendance)),
}));

describe("teachers saga", () => {
  it("should dispatch setTeachers on successful API call", async () => {
    const generator = fetchTeachers();
    expect(generator.next().value).toEqual(call(api.teacherApi));

    expect(generator.next(responseDataTeachers).value).toEqual(
      put(teacherActions.setTeachers(responseDataTeachers))
    );
    expect(generator.next().done).toBe(true);
  });

  it("should dispatch setTeacherAttendance on successful API call", async () => {
    const generator = fetchTeachersAttendance();
    expect(generator.next().value).toEqual(call(api.teacherAttendanceApi));

    expect(generator.next(responseDataAttendance).value).toEqual(
      put(teacherActions.setTeacherAttendance(responseDataAttendance))
    );
    expect(generator.next().done).toBe(true);
  });
});

describe("Student saga", () => {
  it("should take the latest action", async () => {
    const generator = teacherSaga();
    expect(generator.next().value).toEqual(
      takeLatest(teacherActions.getTeachers, fetchTeachers)
    );
    expect(generator.next().value).toEqual(
      takeLatest(teacherActions.getTeacherAttendance, fetchTeachersAttendance)
    );
  });
});

import { call, put, takeLatest } from "redux-saga/effects";
import { IAttendance, ITeacher, teacherActions } from "./teacher.slice";
import { teacherApi, teacherAttendanceApi } from "./teacher.api";

export function* fetchTeachers() {
  try {
    const teachersData: ITeacher[] = yield call(teacherApi);
    yield put(teacherActions.setTeachers(teachersData));
  } catch (err) {}
}

export function* fetchTeachersAttendance() {
  try {
    const teachersAttendanceData: IAttendance[] = yield call(
      teacherAttendanceApi
    );
    yield put(teacherActions.setTeacherAttendance(teachersAttendanceData));
  } catch (err) {}
}

export default function* teacherSaga() {
  yield takeLatest(teacherActions.getTeachers, fetchTeachers);
  yield takeLatest(
    teacherActions.getTeacherAttendance,
    fetchTeachersAttendance
  );
}

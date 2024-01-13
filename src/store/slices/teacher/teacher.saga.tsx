import { put, takeLatest } from "redux-saga/effects";
import { teacherActions } from "./teacher.slice";
import { teacherApi, teacherAttendanceApi } from "./teacher.api";

function* fetchTeachers() {
  try {
    const teachersData = yield teacherApi();
    yield put(teacherActions.setTeachers(teachersData));
  } catch (err) {}
}

function* fetchTeachersAttendance() {
  try {
    const teachersAttendanceData = yield teacherAttendanceApi();
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

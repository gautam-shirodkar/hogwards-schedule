import { all } from "redux-saga/effects";
import teacherSaga from "./slices/teacher/teacher.saga";
import studentSaga from "./slices/student/student.saga";

export default function* rootSaga() {
  yield all([teacherSaga(), studentSaga()]);
}

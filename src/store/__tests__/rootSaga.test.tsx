import { all } from "redux-saga/effects";
import rootSaga from "../rootSaga";
import teacherSaga from "../slices/teacher/teacher.saga";
import studentSaga from "../slices/student/student.saga";

test("rootSaga", () => {
  const gen = rootSaga();
  expect(gen.next().value).toEqual(all([teacherSaga(), studentSaga()]));
});

import { all } from "redux-saga/effects";
import { runSaga, stdChannel } from "redux-saga";
import rootSaga from "../rootSaga";
import teacherSaga from "../slices/teacher/teacher.saga";
import studentSaga from "../slices/student/student.saga";

test("rootSaga", () => {
  const gen = rootSaga();
  expect(gen.next().value).toEqual(all([teacherSaga(), studentSaga()]));
});

import { call, put, takeLatest } from "redux-saga/effects";
import { getStudentAllocations, setAllocations } from "./student.slice";
import { studentAllocationApi } from "./student.api";

export function* fetchStudentsAllocation() {
  try {
    const studentsData = yield call(studentAllocationApi);
    yield put(setAllocations(studentsData));
  } catch (err) {}
}

export default function* studentSaga() {
  yield takeLatest(getStudentAllocations, fetchStudentsAllocation);
}

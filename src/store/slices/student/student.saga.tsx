import { put, takeLatest } from "redux-saga/effects";
import { getStudentAllocations, setStudentAllocations } from "./student.slice";
import { studentAllocationApi } from "./student.api";

function* fetchStudentsAllocation() {
  try {
    const studentsData = yield studentAllocationApi();
    yield put(setStudentAllocations(studentsData));
  } catch (err) {}
}

export default function* studentSaga() {
  yield takeLatest(getStudentAllocations, fetchStudentsAllocation);
}

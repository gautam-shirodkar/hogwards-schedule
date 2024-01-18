import { call, put, takeLatest } from "redux-saga/effects";
import {
  IStudentAllocation,
  getStudentAllocations,
  setAllocations,
} from "./student.slice";
import { studentAllocationApi } from "./student.api";

export function* fetchStudentsAllocation() {
  try {
    const studentsData: IStudentAllocation[] = yield call(studentAllocationApi);
    yield put(setAllocations(studentsData));
  } catch (err) {}
}

export default function* studentSaga() {
  yield takeLatest(getStudentAllocations, fetchStudentsAllocation);
}

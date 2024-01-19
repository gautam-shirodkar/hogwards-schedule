import { call, put, takeLatest } from "redux-saga/effects";
import studentSaga, { fetchStudentsAllocation } from "../student.saga";
import { getStudentAllocations, setAllocations } from "../student.slice";
import * as api from "../student.api";
import { STUDENT_ALLOCATIONS } from "../../../../utils/mockData";

const responseData = STUDENT_ALLOCATIONS;

vi.mock("../student.api", () => ({
  studentAllocationApi: vi.fn(() => Promise.resolve(responseData)),
}));

describe("fetch allcoations saga", () => {
  it("should dispatch setAllocations on successful API call", async () => {
    const generator = fetchStudentsAllocation();
    expect(generator.next().value).toEqual(call(api.studentAllocationApi));
    expect(generator.next(responseData).value).toEqual(
      put(setAllocations(responseData))
    );
    expect(generator.next().done).toBe(true);
  });
});

describe("Student saga", () => {
  it("should take the latest getStudentAllocations action", async () => {
    const generator = studentSaga();
    expect(generator.next().value).toEqual(
      takeLatest(getStudentAllocations, fetchStudentsAllocation)
    );
  });
});

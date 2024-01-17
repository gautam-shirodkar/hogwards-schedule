import { call, put, takeLatest } from "redux-saga/effects";
import studentSaga, { fetchStudentsAllocation } from "../student.saga";
import { getStudentAllocations, setAllocations } from "../student.slice";
import * as api from "../student.api";
import { STUDENT_ALLOCATIONS } from "../../../../utils/mockData";

const responseData = STUDENT_ALLOCATIONS;

// // Mocking the delay function (if your saga uses a delay)
// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

vi.mock("../student.api", () => ({
  studentAllocationApi: vi.fn(() => Promise.resolve(responseData)),
}));

describe("fetch allcoations saga", () => {
  it("should dispatch setAllocations on successful API call", async () => {
    const generator = fetchStudentsAllocation();

    // Assert that the API call is made
    expect(generator.next().value).toEqual(call(api.studentAllocationApi));

    // Simulate a successful API response
    expect(generator.next(responseData).value).toEqual(
      put(setAllocations(responseData))
    );

    // Saga should be done
    expect(generator.next().done).toBe(true);
  });

  // it('should dispatch fetchDataFailure on failed API call', async () => {
  //   const action = { type: FETCH_DATA_REQUEST, payload: /* Your payload here */ };
  //   const errorMessage = 'An error occurred';

  //   const generator = fetchDataSaga(action);

  //   // Assert that the API call is made
  //   expect(generator.next().value).toEqual(call(api.studentAllocationApi, action.payload));

  //   // Simulate a failed API response
  // //   expect(generator.throw(new Error(errorMessage)).value).toEqual(
  // //     put(fetchDataFailure(errorMessage))
  // //   );

  //   // Saga should be done
  //   expect(generator.next().done).toBe(true);
  // });
});

describe("Student saga", () => {
  it("should take the latest FETCH_DATA_REQUEST action", async () => {
    const generator = studentSaga();

    // Assert that the watcher saga is listening for FETCH_DATA_REQUEST actions
    expect(generator.next().value).toEqual(
      takeLatest(getStudentAllocations, fetchStudentsAllocation)
    );
  });
});

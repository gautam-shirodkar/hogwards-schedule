import { STUDENT_ALLOCATIONS } from "../../../../utils/mockData";
import reducer, {
  getStudentAllocations,
  setAllocations,
  initialState,
} from "../student.slice";

describe("Student slice", () => {
  test("should return the initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });

  test("should handle get allocations start", () => {
    const previousState = initialState;
    expect(reducer(previousState, getStudentAllocations())).toEqual(
      initialState
    );
  });
  test("should handle allocations being set", () => {
    const previousState = initialState;
    const allocationData = STUDENT_ALLOCATIONS;
    expect(reducer(previousState, setAllocations(allocationData))).toEqual({
      allocations: allocationData,
    });
  });
});

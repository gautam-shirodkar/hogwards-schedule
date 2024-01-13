import { createSlice } from "@reduxjs/toolkit";

export interface IStudentAllocation {
  id: string;
  student: string;
  subject: string;
  teacher: string;
}

export interface IStudentState {
  allocations: IStudentAllocation[];
}

const initialState: IStudentState = {
  allocations: [],
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    getStudentAllocations: (state) => {
      return state;
    },
    setStudentAllocations: (state, action) => {
      state.allocations = action.payload;
    },
  },
});

export const { getStudentAllocations, setStudentAllocations } =
  studentSlice.actions;
export default studentSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IStudentAllocation {
  id: string;
  student: string;
  subject: string;
  teacher: string;
  img: string;
  assignedHistory: string[];
}

export interface IStudentState {
  allocations: IStudentAllocation[];
}

export const initialState: IStudentState = {
  allocations: [],
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    getStudentAllocations: (state) => {
      return state;
    },
    setAllocations: (state, action: PayloadAction<IStudentAllocation[]>) => {
      state.allocations = action.payload;
    },
  },
});

export const { getStudentAllocations, setAllocations } = studentSlice.actions;
export default studentSlice.reducer;

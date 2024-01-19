import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ITeacher {
  id: string;
  name: string;
  priority: number;
  img: string;
}

export interface IAttendance {
  id: string;
  attendance: string;
}

export interface ITeacherstate {
  teachers: ITeacher[];
  attendance: IAttendance[];
  loading: boolean;
}

export const initialState: ITeacherstate = {
  teachers: [],
  attendance: [],
  loading: false,
};

export const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    getTeachers: (state) => {
      state.loading = true;
    },
    setTeachers: (state, action: PayloadAction<ITeacher[]>) => {
      state.loading = false;
      state.teachers = action.payload;
    },
    getTeacherAttendance: (state) => {
      return state;
    },
    setTeacherAttendance: (state, action: PayloadAction<IAttendance[]>) => {
      state.attendance = action.payload;
    },
  },
});

export const { actions: teacherActions, reducer } = teacherSlice;

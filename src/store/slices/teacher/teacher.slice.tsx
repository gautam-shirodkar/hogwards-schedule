import { createSlice } from "@reduxjs/toolkit";

export interface ITeacher {
  id: string;
  name: string;
  priority: number;
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

export const initialState = {
  teachers: [],
  attendance: {},
  loading: false,
};

export const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    getTeachers: (state) => {
      state.loading = true;
    },
    setTeachers: (state, action) => {
      state.loading = false;
      state.teachers = action.payload;
    },
    getTeacherAttendance: (state) => {
      return state;
    },
    setTeacherAttendance: (state, action) => {
      state.attendance = action.payload;
    },
  },
});

export const { actions: teacherActions, reducer } = teacherSlice;

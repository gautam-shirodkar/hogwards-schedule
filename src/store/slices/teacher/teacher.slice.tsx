import { createSlice } from "@reduxjs/toolkit";

export interface ITeacher {}

export const teacherSlice = createSlice({
  name: "teacher",
  initialState: {
    teachers: [],
    attendance: {},
    loading: false,
  },
  reducers: {
    getTeachers: (state) => {
      state.loading = true;
    },
    setTeachers: (state, action) => {
      state.loading = false;
      state.teachers = action.payload;
    },
    getTeacherAttendance: (state) => {
      state.loading = false;
    },
    setTeacherAttendance: (state, action) => {
      state.attendance = action.payload;
    },
  },
});

export const { actions: teacherActions, reducer } = teacherSlice;

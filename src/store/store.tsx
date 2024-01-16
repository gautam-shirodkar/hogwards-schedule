import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { ITeacherstate, teacherSlice } from "./slices/teacher/teacher.slice";
import { IStudentState, studentSlice } from "./slices/student/student.slice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export interface State {
  teachers: ITeacherstate;
  students: IStudentState;
}

const store = configureStore({
  reducer: {
    teachers: teacherSlice.reducer,
    students: studentSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;

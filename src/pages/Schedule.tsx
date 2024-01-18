import { useEffect } from "react";
import AttendanceSection from "../components/AttendanceSection";
import CurrentScheduleSection from "../components/CurrentSchedule";
import { useDispatch, useSelector } from "react-redux";
import { teacherActions } from "../store/slices/teacher/teacher.slice";
import {
  IStudentAllocation,
  getStudentAllocations,
  setAllocations,
} from "../store/slices/student/student.slice";
import { State } from "../store/store";

const subjectTeachers = [
  {
    subject: "Potions Master",
    professors: ["t1", "t2", "t3", "t4", "t5"],
  },
  {
    subject: "Defense Against the Dark Arts",
    professors: ["t1", "t2", "t3", "t7", "t8"],
  },
];

const ScheduleToday = () => {
  const dispatch = useDispatch();

  const { teachers, attendance: teacherAttendance } = useSelector(
    (state: State) => state.teachers
  );
  const { allocations } = useSelector((state: State) => state.students);

  useEffect(() => {
    !teachers?.length && dispatch(teacherActions.getTeachers());
    !teacherAttendance?.length &&
      dispatch(teacherActions.getTeacherAttendance());
    !allocations?.length && dispatch(getStudentAllocations());
  }, []);

  const handleTeacherAttendanceChange = (id: string, attendance: string) => {
    const updateData = [...teacherAttendance];
    const updateIndex = teacherAttendance.findIndex(
      (teacher) => teacher.id === id
    );
    updateData[updateIndex] = { ...updateData[updateIndex], attendance };
    dispatch(teacherActions.setTeacherAttendance(updateData));
  };

  const getAttendance = (teacherId: string) => {
    return (
      teacherAttendance.length &&
      teacherAttendance?.find((attendance) => attendance.id === teacherId)
        ?.attendance
    );
  };

  const assignTeacher = (student: IStudentAllocation) => {
    const currentPriority =
      teachers.find((teacher) => teacher.id === student.teacher)?.priority || 1;

    const allSubjectProfessors = subjectTeachers.find(
      (subTeach) => subTeach.subject === student.subject
    )?.professors;

    const otherProfessors = teachers
      .filter(
        (professor) =>
          professor.priority > currentPriority &&
          getAttendance(professor.id) === "Present" &&
          allSubjectProfessors?.some((subProf) => subProf === professor.id)
      )
      .sort((a, b) => a.priority - b.priority);
    return otherProfessors[0]?.id || "";
  };

  const getTeacher = (teacherId: string) => {
    return teachers.find((teacher) => teacher.id === teacherId)?.id;
  };

  useEffect(() => {
    const currentAllocations = [...allocations];
    const modifiedAllocations = currentAllocations.map((student) => {
      let teacher = getTeacher(student.teacher) || "";
      if (
        getAttendance(student.teacher) === "Absent" ||
        student.teacher === "" ||
        student.teacher === "Not Assigned"
      ) {
        teacher = assignTeacher(student);
      }
      return { ...student, teacher };
    });
    dispatch(setAllocations(modifiedAllocations));
  }, [teachers, teacherAttendance, JSON.stringify(allocations)]);

  return (
    <div className="flex bg-schedule-bg bg-cover min-h-[calc(100vh-110px)] h-auto w-full">
      <AttendanceSection
        onTeacherAttendanceChange={handleTeacherAttendanceChange}
      />
      <CurrentScheduleSection />
    </div>
  );
};

export default ScheduleToday;

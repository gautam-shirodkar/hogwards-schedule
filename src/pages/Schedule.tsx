import { useState, useEffect, useCallback } from "react";
import AttendanceSection from "../components/AttendanceSection";
import CurrentScheduleSection from "../components/CurrentSchedule";
import { useDispatch, useSelector } from "react-redux";
import { teacherActions } from "../store/slices/teacher/teacher.slice";
import { getStudentAllocations } from "../store/slices/student/student.slice";
import { State } from "../store/store";

const ScheduleToday = () => {
  const dispatch = useDispatch();
  const { teachers, attendance } = useSelector((state) => state.teachers);
  const { allocations } = useSelector((state: State) => state.students);

  const subjectTeachers = [
    {
      subject: "Potions Master",
      professors: [
        "Professor Dumbledore",
        "Minerva McGonagall",
        "Rubeus Hagrid",
        "Horace Slughorn",
        "Severus Snape",
      ],
    },
    {
      subject: "Defense Against the Dark Arts",
      professors: [
        "Professor Dumbledore",
        "Minerva McGonagall",
        "Alastor Moody",
        "Remus Lupin",
        "Gilderoy Lockhart",
      ],
    },
  ];

  const [teacherAttendance, setTeacherAttendance] = useState({});

  const [studentAllocations, setStudentAllocations] = useState([]);

  useEffect(() => {
    dispatch(teacherActions.getTeachers());
    dispatch(teacherActions.getTeacherAttendance());
    dispatch(getStudentAllocations());
  }, []);

  useEffect(() => {
    setTeacherAttendance(attendance);
  }, [attendance]);

  useEffect(() => {
    setStudentAllocations(allocations);
  }, [allocations]);

  const handleTeacherAttendanceChange = (teacher, attendance) => {
    setTeacherAttendance((prevAttendance) => ({
      ...prevAttendance,
      [teacher]: attendance,
    }));
  };

  const assignTeacher = (student) => {
    const currentPriority =
      teachers.find((teacher) => teacher.name === student.teacher)?.priority ||
      1;

    const allSubjectProfessors = subjectTeachers.find(
      (subTeach) => subTeach.subject === student.subject
    )?.professors;

    const otherProfessors = teachers
      .filter(
        (professor) =>
          professor.priority > currentPriority &&
          teacherAttendance[professor.name] === "Present" &&
          allSubjectProfessors?.some((subProf) => subProf === professor.name)
      )
      .sort((a, b) => a.priority - b.priority);
    return otherProfessors[0]?.name || "Not Assigned";
  };

  useEffect(() => {
    const allocationsTemp = [...studentAllocations];
    const modifiedAllocations = allocationsTemp.map((student) => {
      let teacher = student.teacher;
      if (
        teacherAttendance[student.teacher] === "Absent" ||
        student.teacher === "" ||
        student.teacher === "Not Assigned"
      ) {
        teacher = assignTeacher(student);
      }
      return { ...student, teacher };
    });
    setStudentAllocations([...modifiedAllocations]);
  }, [teachers, teacherAttendance, JSON.stringify(studentAllocations)]);

  return (
    <div className="flex bg-schedule-bg bg-cover min-h-[calc(100vh-110px)]">
      <AttendanceSection
        onTeacherAttendanceChange={handleTeacherAttendanceChange}
      />

      <CurrentScheduleSection studentAllocations={studentAllocations} />
    </div>
  );
};

export default ScheduleToday;

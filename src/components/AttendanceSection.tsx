import Loader from "./Loader";
import { useSelector } from "react-redux";
import HierarchyTree from "./TeacherTree";
import { State } from "../store/store";
import { FC } from "react";
import { IAttendance, ITeacher } from "../store/slices/teacher/teacher.slice";
interface IAttendanceSectionProps {
  onTeacherAttendanceChange: (id: string, attendance: string) => void;
}

interface IHierarchy {
  [key: string]: (ITeacher & IAttendance)[];
}

const AttendanceSection: FC<IAttendanceSectionProps> = ({
  onTeacherAttendanceChange,
}) => {
  const { teachers, attendance } = useSelector(
    (state: State) => state.teachers
  );

  const finalTeachers: (ITeacher & IAttendance)[] = teachers?.map(
    (teacher) => ({
      ...teacher,
      ...attendance?.find((attendance) => attendance.id === teacher.id)!,
    })
  );
  const createHierarchy = () => {
    const hierarchy: IHierarchy = {};
    const refTeachers = [...finalTeachers];
    const sortedTeachers = refTeachers.sort((a, b) => b.priority - a.priority);

    sortedTeachers.forEach((teacher) => {
      if (!hierarchy[teacher.priority.toString()]) {
        hierarchy[teacher.priority] = [];
      }
      hierarchy[teacher.priority].push(teacher);
    });
    return hierarchy;
  };
  if (!finalTeachers?.length) {
    return (
      <div className="flex align-center justify-center m-auto">
        <Loader />
      </div>
    );
  }
  const hierarchyTree = createHierarchy();
  return (
    <HierarchyTree
      hierarchy={hierarchyTree}
      onTeacherAttendanceChange={onTeacherAttendanceChange}
    />
  );
};

export default AttendanceSection;

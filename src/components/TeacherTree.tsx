import { FC } from "react";
import { IAttendance, ITeacher } from "../store/slices/teacher/teacher.slice";
import Character from "./Character";

interface IHierarchyTree {
  hierarchy: {
    [key: string]: (ITeacher & IAttendance)[];
  };
  onTeacherAttendanceChange: (id: string, attendance: string) => void;
}

const HierarchyTree: FC<IHierarchyTree> = ({
  hierarchy,
  onTeacherAttendanceChange,
}) => {
  return (
    <div className="w-1/2 flex flex-col items-center">
      {Object.keys(hierarchy)
        .reverse()
        .map((priority) => (
          <div key={priority}>
            <div className="flex justify-between gap-10 mb-8">
              {hierarchy[priority].map((teacher: ITeacher & IAttendance) => (
                <div
                  className="flex flex-col justify-center items-center"
                  key={teacher.name}
                >
                  <Character
                    img={`images/staff/${teacher.img}`}
                    name={teacher.name}
                    classes={teacher.attendance === "Absent" ? "grayscale" : ""}
                  />
                  <select
                    data-testid={`${teacher.name
                      .toLowerCase()
                      .replace(/\s/g, "-")}-attendance`}
                    onChange={(e) =>
                      onTeacherAttendanceChange(teacher.id, e.target.value)
                    }
                    value={teacher.attendance}
                    className="px-4 py-1 border border-gray-300 rounded-md focus:outline-none"
                  >
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                  </select>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default HierarchyTree;

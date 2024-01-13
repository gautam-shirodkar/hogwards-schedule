import { Fragment } from "react";
import Loader from "./Loader";
import { useSelector } from "react-redux";

const AttendanceSection = ({ onTeacherAttendanceChange }) => {
  const { teachers } = useSelector((state) => state.teachers);
  return (
    <div className="mt-8 mx-auto min-w-[30%] bg-white shadow-md rounded-md overflow-hidden">
      <div className="bg-gray-200 p-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="font-semibold">Teacher</div>
          <div className="font-semibold">Attendance</div>
        </div>
      </div>
      {teachers.length ? (
        <div className="divide-y divide-gray-300">
          <div className="grid grid-cols-2 items-center gap-4 p-4">
            {teachers.map((teacher) => (
              <Fragment key={teacher.name}>
                <div>{teacher.name}</div>
                <div>
                  <select
                    onChange={(e) =>
                      onTeacherAttendanceChange(teacher.name, e.target.value)
                    }
                  >
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                  </select>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex align-center justify-center mt-12">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default AttendanceSection;

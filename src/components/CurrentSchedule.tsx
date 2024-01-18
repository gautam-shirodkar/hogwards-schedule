import Loader from "./Loader";
import { useSelector } from "react-redux";
import { State } from "../store/store";
import Character from "./Character";

const CurrentScheduleSection = () => {
  const { teachers } = useSelector((state: State) => state.teachers);
  const { allocations: studentAllocations } = useSelector(
    (state: State) => state.students
  );
  const getTeacher = (teacherId: string) => {
    return teachers.find((teacher) => teacher.id === teacherId);
  };
  if (!studentAllocations?.length) {
    return (
      <div className="flex align-center justify-center m-auto">
        <Loader />
      </div>
    );
  }
  return (
    <div className="w-1/2 mx-auto">
      {studentAllocations.map((allocation) => {
        const teacher = getTeacher(allocation.teacher);
        return (
          <div
            data-testid={`${allocation.student}-student`}
            className="grid grid-cols-3 justify-center items-center gap-4 p-4"
            key={allocation.student}
          >
            <div className="flex flex-col items-center">
              <Character
                img={`images/students/${allocation.img}`}
                name={allocation.student}
              />
            </div>
            <div className="text-white text-center">{allocation.subject}</div>
            <div
              className="flex flex-col items-center justify-center text-center"
              data-testid={`${allocation?.teacher
                ?.toLowerCase()
                .replace(/\s/g, "-")}-teacher`}
            >
              {teacher ? (
                <Character
                  img={`images/staff/${teacher.img}`}
                  name={teacher.name}
                />
              ) : (
                <span className="text-white">Not Assigned</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CurrentScheduleSection;

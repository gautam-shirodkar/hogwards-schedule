// CurrentScheduleSection.js
import { Fragment } from "react";
import Loader from "./Loader";

const CurrentScheduleSection = ({ studentAllocations }) => {
  return (
    <div className="mt-8 min-w-[40%] mx-auto bg-white shadow-md rounded-md overflow-hidden">
      <div className="bg-gray-200 p-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="font-semibold">Student</div>
          <div className="font-semibold">Subject</div>
          <div className="font-semibold">Teacher</div>
        </div>
      </div>
      {studentAllocations.length ? (
        <div className="divide-y divide-gray-300">
          <div className="grid grid-cols-3 items-center gap-4 p-4">
            {studentAllocations.map((allocation) => (
              <Fragment key={allocation.student}>
                <div>{allocation.student}</div>
                <div>{allocation.subject}</div>
                <div>{allocation.teacher}</div>
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

export default CurrentScheduleSection;

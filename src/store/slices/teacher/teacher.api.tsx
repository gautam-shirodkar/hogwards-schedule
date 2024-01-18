import { IAttendance, ITeacher } from "./teacher.slice";

export const teacherApi = (): Promise<ITeacher[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: "t1",
          name: "Professor Dumbledore",
          img: "Albus_Dumbledore.webp",
          priority: 4,
        },
        {
          id: "t2",
          name: "Minerva McGonagall",
          img: "mcgonagall.webp",
          priority: 3,
        },
        { id: "t3", name: "Rubeus Hagrid", img: "hagrid.webp", priority: 2 },
        {
          id: "t4",
          name: "Horace Slughorn",
          img: "slughorn.webp",
          priority: 1,
        },
        { id: "t5", name: "Severus Snape", img: "snape.webp", priority: 1 },
        { id: "t6", name: "Alastor Moody", img: "Moody.webp", priority: 2 },
        { id: "t7", name: "Remus Lupin", img: "lupin.webp", priority: 1 },
        {
          id: "t8",
          name: "Gilderoy Lockhart",
          img: "Gilderoy_Lockhart.webp",
          priority: 1,
        },
      ]);
    }, 1000);
  });
};

export const teacherAttendanceApi = (): Promise<IAttendance[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: "t1", attendance: "Present" },
        { id: "t2", attendance: "Present" },
        { id: "t3", attendance: "Present" },
        { id: "t4", attendance: "Present" },
        { id: "t5", attendance: "Present" },
      ]);
    });
  });
};

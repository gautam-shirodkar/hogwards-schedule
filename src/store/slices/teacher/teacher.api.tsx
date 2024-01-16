export const teacherApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: "t1", name: "Professor Dumbledore", priority: 4 },
        { id: "t2", name: "Minerva McGonagall", priority: 3 },
        { id: "t3", name: "Rubeus Hagrid", priority: 2 },
        { id: "t4", name: "Horace Slughorn", priority: 1 },
        { id: "t5", name: "Severus Snape", priority: 1 },
        { id: "t6", name: "Alastor Moody", priority: 2 },
        { id: "t7", name: "Remus Lupin", priority: 1 },
        { id: "t8", name: "Gilderoy Lockhart", priority: 1 },
      ]);
    }, 1000);
  });
};

export const teacherAttendanceApi = () => {
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

// {
//   "Professor Dumbledore": "Present",
//   "Minerva McGonagall": "Present",
//   "Rubeus Hagrid": "Present",
//   "Horace Slughorn": "Present",
//   "Severus Snape": "Present",
// }

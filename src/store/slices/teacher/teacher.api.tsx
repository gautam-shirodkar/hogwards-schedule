export const teacherApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { name: "Professor Dumbledore", priority: 4 },
        { name: "Minerva McGonagall", priority: 3 },
        { name: "Rubeus Hagrid", priority: 2 },
        { name: "Horace Slughorn", priority: 1 },
        { name: "Severus Snape", priority: 1 },
        { name: "Alastor Moody", priority: 2 },
        { name: "Remus Lupin", priority: 1 },
        { name: "Gilderoy Lockhart", priority: 1 },
      ]);
    }, 1000);
  });
};

export const teacherAttendanceApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        "Professor Dumbledore": "Present",
        "Minerva McGonagall": "Present",
        "Rubeus Hagrid": "Present",
        "Horace Slughorn": "Present",
        "Severus Snape": "Present",
      });
    });
  });
};

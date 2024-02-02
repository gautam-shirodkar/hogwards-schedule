
export const MOCK_TEACHERS = [
    { id: "t1", name: "Professor Dumbledore", priority: 4, img: "dumbledore.png" },
    { id: "t2", name: "Minerva McGonagall", priority: 3, img: "minervar.png" },
    {
        id: "t4",
        name: "Horace Slughorn",
        img: "slughorn.webp",
        priority: 1,
    },
];

export const STUDENT_ALLOCATIONS = [
    {
        id: "s1",
        student: "Harry Potter",
        subject: "Potions Master",
        teacher: "t4",
        img: "harry.png",
        assignedHistory: []
    }, {
        id: "s2",
        student: "Hermione Granger",
        subject: "Potions Master",
        teacher: "",
        img: "hermione.png",
        assignedHistory: []
    },
]

export const TEACHER_ATTENDANCE = [
    { id: "t1", attendance: "Present" },
    { id: "t2", attendance: "" },
]
import { studentAllocationApi } from "../student.api";

const responseData = [
  {
    id: "s1",
    student: "Harry Potter",
    subject: "Potions Master",
    teacher: "t4",
  },
  {
    id: "s2",
    student: "Hermione Granger",
    subject: "Potions Master",
    teacher: "",
  },
  {
    id: "s3",
    student: "Ron Weasley",
    subject: "Potions Master",
    teacher: "t5",
  },
  {
    id: "s4",
    student: "Draco Malfoy",
    subject: "Potions Master",
    teacher: "t4",
  },
  {
    id: "s5",
    student: "Padma Patil",
    subject: "Potions Master",
    teacher: "",
  },
  {
    id: "s6",
    student: "Luna Lovegood",
    subject: "Potions Master",
    teacher: "t5",
  },
];

describe("Student allocation api", () => {
  it("fetches data from an API and resolves correctly", async () => {
    const result = await studentAllocationApi();
    expect(result).toEqual(responseData);
  });
});

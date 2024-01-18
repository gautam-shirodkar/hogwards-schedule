import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on home page", () => {
  cy.visit("http://localhost:5173/");
});

When("I click schedule link", () => {
  cy.contains("Schedule").click();
});

Then("I should be redirected to the schedule page", () => {
  cy.location("pathname").should("eq", "/schedule");
});

Then(
  "Student {string} should be assigned teacher {string}",
  (student: string, teacher: string) => {
    const studentTestId = `${student}-student`;
    cy.get(`[data-testid="${studentTestId}"]`).within((row) => {
      cy.get("div").eq(2).should("contain", teacher);
    });
  }
);

When(
  "I change attendance of {string} to {string}",
  (teacher: string, attendance: string) => {
    const teacherTestId = `${teacher
      .toLowerCase()
      .replace(/\s/g, "-")}-attendance`;
    cy.get(`[data-testid="${teacherTestId}"]`).select(attendance);
  }
);

Then(
  "{string} attendance should be marked {string}",
  (teacher: string, changedAttendance: string) => {
    const teacherTestId = `${teacher
      .toLowerCase()
      .replace(/\s/g, "-")}-attendance`;
    cy.get(`[data-testid="${teacherTestId}"]`)
      .find(":selected")
      .should("have.text", changedAttendance);
  }
);

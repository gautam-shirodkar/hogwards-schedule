Feature: Teacher Allocation to Students
    Scenario Outline: Allocate teacher <Teacher> to student <Student> if no teacher is allocated
        Given I am on home page
        When I click schedule link
        Then I should be redirected to the schedule page
        Then Student "<Student>" should be assigned teacher "<Teacher>"

        Examples:
            | Student          | Teacher       |
            | Hermione Granger | Rubeus Hagrid |
            | Padma Patil      | Rubeus Hagrid |

    Scenario: Allocate teacher higher up in the hierarchy when a teacher is absent
        Given I am on home page
        When I click schedule link
        Then I should be redirected to the schedule page
        When I change attendance of "Severus Snape" to "Absent"
        When I change attendance of "Horace Slughorn" to "Absent"
        Then "Horace Slughorn" attendance should be marked "Absent"
        Then Student "Harry Potter" should be assigned teacher "Rubeus Hagrid"
        When I change attendance of "Rubeus Hagrid" to "Absent"
        Then "Rubeus Hagrid" attendance should be marked "Absent"
        Then Student "Harry Potter" should be assigned teacher "Minerva McGonagall"
        When I change attendance of "Minerva McGonagall" to "Absent"
        Then "Minerva McGonagall" attendance should be marked "Absent"
        Then Student "Harry Potter" should be assigned teacher "Professor Dumbledore"
        When I change attendance of "Professor Dumbledore" to "Absent"
        Then "Professor Dumbledore" attendance should be marked "Absent"
        Then Student "Harry Potter" should be assigned teacher "Not Assigned"

    Scenario: Reassign original teacher once the teacher is Present
        Given I am on home page
        When I click schedule link
        Then I should be redirected to the schedule page
        When I change attendance of "Severus Snape" to "Absent"
        Then "Severus Snape" attendance should be marked "Absent"
        Then Student "Ron Weasley" should be assigned teacher "Rubeus Hagrid"
        Then Student "Luna Lovegood" should be assigned teacher "Rubeus Hagrid"
        When I change attendance of "Severus Snape" to "Present"
        Then Student "Ron Weasley" should be assigned teacher "Severus Snape"
        Then Student "Luna Lovegood" should be assigned teacher "Severus Snape"

Feature: Basic Search Flow, Invalid Return Dates
    Basic Search Flow:
    As a MarsAir Sales Director (Mark)
    I want potential customers to be able to search for flights to Mars
    So that they see what trips are available

    Invalid Return Dates:
    As a MarsAir Sales Director (Mark)
    I want to prevent potential customers from searching for invalid trips
    So that they don’t waste time, and book valid ones

    Background:
        Given I open Mars Airline home page

    Scenario Outline: Search-001 - Validate seats available should be returned when there are available seats
        When I search flight with "<departing>", "<returning>" and "<promoCode>"
        Then I should see "Seats available!" message
        And I should see "Call now on 0800 MARSAIR to book!" message

        Examples:
            | departing | returning                     | promoCode |
            | July      | July (two years from now)     |           |
            | July      | December (two years from now) |           |
            | December  | December (two years from now) |           |

    Scenario Outline: Search-002 - Validate sorry there are no more seats available when there are no seats
        When I search flight with "<departing>", "<returning>" and "<promoCode>"
        Then I should see "Sorry, there are no more seats available." message

        Examples:
            | departing            | returning                     | promoCode |
            | July                 | July (next year)              |           |
            | July                 | December (next year)          |           |
            | July                 | July (two years from now)     |           |
            | December             | December (next year)          |           |
            | December             | July (two years from now)     |           |
            | December             | December (two years from now) |           |
            | July (next year)     | July (two years from now)     |           |
            | July (next year)     | December (two years from now) |           |
            | December (next year) | December (two years from now) |           |

    Scenario Outline: Search-003 - Validate this schedule is not possible when the trip duration is less than 1 years
        When I search flight with "<departing>", "<returning>" and "<promoCode>"
        Then I should see "Unfortunately, this schedule is not possible. Please try again." message

        Examples:
            | departing                     | returning                     | promoCode |
            | July                          | July                          |           |
            | July                          | December                      |           |
            | December                      | December                      |           |
            | December                      | July (next year)              |           |
            | December                      | July                          |           |
            | July (next year)              | July (next year)              |           |
            | July (next year)              | December (next year)          |           |
            | July (next year)              | July                          |           |
            | July (next year)              | December                      |           |
            | December (next year)          | December (next year)          |           |
            | December (next year)          | July (two years from now)     |           |
            | December (next year)          | July                          |           |
            | December (next year)          | December                      |           |
            | December (next year)          | July (next year)              |           |
            | July (two years from now)     | July (two years from now)     |           |
            | July (two years from now)     | December (two years from now) |           |
            | July (two years from now)     | July                          |           |
            | July (two years from now)     | December                      |           |
            | July (two years from now)     | July (next year)              |           |
            | July (two years from now)     | December (next year)          |           |
            | December (two years from now) | December (two years from now) |           |
            | December (two years from now) | July                          |           |
            | December (two years from now) | December                      |           |
            | December (two years from now) | July (two years from now)     |           |
            | December (two years from now) | December (next year)          |           |
            | December (two years from now) | July (two years from now)     |           |


Feature: Promotional Codes
    As a MarsAir Sales Director (Mark)
    I want to distribute promotional codes to customers
    So that they get discounts and are more tempted to purchase tickets

    Background:
        Given I open Mars Airline home page

    Scenario Outline: Promo-001 - Validate a valid promo code should be accepted
        When I search flight with "<departing>", "<returning>" and "<promoCode>"
        Then I should see "Seats available!" message
        And I should see "Call now on 0800 MARSAIR to book!" message
        And I should see valid message for promotion code "<promoCode>" with "<discount>" discount

        Examples:
            | departing | returning                     | promoCode   | discount |
            | July      | December (two years from now) | AF0-FJK-415 | 00       |
            | July      | December (two years from now) | BC1-HGY-966 | 10       |
            | July      | December (two years from now) | ZH2-LGJ-057 | 20       |
            | July      | December (two years from now) | AF3-FJK-418 | 30       |
            | July      | December (two years from now) | BK4-DEF-419 | 40       |
            | July      | December (two years from now) | YT5-HJK-016 | 50       |
            | July      | December (two years from now) | ad6-ad3-118 | 60       |
            | July      | December (two years from now) | HN7-TUI-209 | 70       |
            | July      | December (two years from now) | KI8-OIU-019 | 80       |
            | July      | December (two years from now) | PO9-NHA-009 | 90       |

    Scenario Outline: Promo-002 - Error should be displayed when entering invalid promotional code
        When I search flight with "<departing>", "<returning>" and "<promoCode>"
        Then I should see invalid promotion code message for promotion code "<promoCode>"

        Examples:
            | departing | returning                     | promoCode   |
            | July      | December (two years from now) | AF3FJK418   |
            | July      | December (two years from now) | JJ2-OPQ-679 |
            | July      | December (two years from now) | 3-#$%-418   |
            | July      | December (two years from now) | 214-123-419 |
            | July      | December (two years from now) | YT5-231-016 |




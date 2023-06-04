Feature: Link to Home Page
    As a MarsAir Sales Director (Mark)
    I want potential customers to be able to go back to the flight search from anywhere on the site
    So that they are guided towards booking trips

    Background:
        Given I open Mars Airline home page

    Scenario: HomeNavi-002 - Validate user can navigate to home page by clicking on the logo
        When I search flight with "July", "July" and ""
        And I click on MarsAir logo
        Then I should be on the Home page

        When I search flight with "July", "December (two years from now)" and ""
        And I click on MarsAir logo
        Then I should be on the Home page

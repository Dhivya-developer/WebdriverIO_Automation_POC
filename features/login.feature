Feature: Automation practice website page

@test
Scenario Outline: As a user, I register on the website

    Given I am on the Automation practice website page
    And I signin on the page
    # And I create an account by entering <emailaddress>
    # When I register by entering personal Information details
    # Then I should see the correct Firstname and surname displayed on the page
    # And I add a product to the cart 
    # And I proceed to checkout the product 
    # And I should see correct product details displayed        

    Examples:
      | emailaddress | 
      | tomsmith@gmail.com |




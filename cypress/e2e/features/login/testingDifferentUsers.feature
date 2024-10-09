Feature: Different User Tests

Scenario: Standard User Tests
    Given I log in as 'standard' user
    When I add every product to cart and get their values
    Then I assert all of the values for each item
    When I remove every product from the cart and assert
    Then I add one item and go to cart to assert
    Then I go to checkout, enter data and assert success
    Then I log out

Scenario: Problem User Tests
    Given I log in as 'problem' user
    When I try to assert the source of the image

Scenario: Locked Out User Tests
    Given I log in as 'locked_out' user

Scenario: Error User Tests
    Given I log in as 'error' user
    Then I assert that the product is added in the cart
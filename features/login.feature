Feature: Login

  @login @smoke
  Scenario Outline: Login with multiple users
    Given I am on the login page
    When I login with username "<username>" and password "<password>"
    Then I validate result "<result>"

    Examples:
      | username                | result  | password     |
      | standard_user           | success | secret_sauce |
      | locked_out_user         | fail    | secret_sauce |
      | problem_user            | success | secret_sauce |
      | performance_glitch_user | slow    | secret_sauce |

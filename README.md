# AT_JS_HT1
**orange-hrm-test-project**

This project was created in order to provide functional test automation of the scenario (below) for [orange HRM](https://opensource-demo.orangehrmlive.com/)

## Scenario

- precondition: script must log in to the site with the credentials specified above input form.

Scenario:

1. Add new job: Student or Intern (Go to Admin -> Job - Job Titles -> Click on the Add button)
           Add job title
           Add Job Description: free text up to 20 chars
           Add note
           Save
2. Check newly added title is visible on the grid
3. Modify your Job Title (select your field -> click on the Edit button):
            Change Job Description: free text up to 20 chars
            Save changes
4. Check that your changes are visible on the Job Title page
5. Select your field, click the Remove button and make sure your field is removed.

Each step of the scenario is the "it" block, so it's easy to catch and find out the potential problem.

## Technology used

- [WebDriver IO](https://webdriver.io/)
- [Mocha](https://mochajs.org/)

## Setup and running the test suit

1. Clone this repo with `git clone https://github.com/barbylka/at-js-ht1.git`
2. Install dependencies that mentioned in package.json with `npm install` via the terminal
**run the test**
3. Open the terminal
4. Make sure you're in the root of this repo
5. Run with `npm run wdio`

## The folder structure

- In **utils/common.actions.js** there is the class with simple actions that can be used in every page
- In **test/constants** should be placed objects with test data
- In **test/pageobjects** should be placed classes for pages, tabs and modals(popups)
- In **test/specs** should be placed tests

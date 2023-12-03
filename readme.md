## Tech Stack

**Libraries:** chai, mocha, supertest, get-nested-value, mochawesome

**Requirements:** Node (min version 14)


## Installation

Install with npm

```bash
  npm install
```
    
## Running Tests

To run tests, run the following command

```bash
  npm run $testSetName
```
$testSetName - mandatory param, test set name. List of the supported test sets:
  - project-all
  - project-positive
  - project-negative
  - color-all
  - color-positive
  - color-negative
  - all-tests
  - all-positive
  - all-negative

#### Execution report can be find at /mochawesome-report/mochawesome.html
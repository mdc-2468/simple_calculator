# Introduction

This is a calculator for a learning progress.

# Updates

## 2025-02-28

- Implemented `add`/ `subtract`/ `multiply`/ `divide` functions
- Refactored to use number map with key-value pair object instead of converting the HTML id to number in the function
- Enhanced the method for capturing the input value (system will capture all the input in the innerText, and render the innerText for calculations)
- Handled the `dot` for calculation
- Fixed the issue for inputting 0 after a `dot` (i.e: 1.09)

## 2025-03-01

- Implemented the `clear` input function to reset the input and data
- Added handling for the error case of zero-division
- Added handling for calculation with `negative` numbers
- Added handling for clicking `negative` button to toggle on and off the `-` sign prefix
- Added handling for clicking `dot` button twice that should not show up two dots in the display
- Fixed an issue where calculations after pressing `equal` did not work correctly. (Previously, an extra value was incorrectly pushed to numArr)
- Fix an issue where clicking the `negative` button after obtaining a result with `equal` would incorrectly prepend an extra minus sign (e.g., --12). After the change, it should return `12`

# Known Issue

- big decimal issue

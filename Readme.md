# Introduction

This is a calculator for a learning progress.

# Updates

## 2025-02-28

- Simple calculator that have add/ subtract/ multiply/ divide function
- Refactor to use number map with key-value pair object instead of converting the HTML id for number to number in the function
- Switched to use the method of clicking a number will update the display; and get the display innerText for calculation
- Fixing the dot issue, and '0' after dot cases

## Known Issue

- Clear function isn't ready
- big decimal issue after 2dp
- After equal sign, and continue with calculation doesn't work; ` 1``+``2``= `... by the time the UI should reflect `3`; it's expected to use 3 to follow thereafter calculations, however the numArr has lenght >2 by update Operator function.

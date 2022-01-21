# _Mr. Roboger's Neighborhood_

#### By _**Josh Tillinghast**_

#### _An application that generates robo-text based on what number the user inputs_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Javascript_
* _JQuery_

## Description

_After user enters a number, text is printed on the screen. For every number containing a 3, "Will you be my neighbor" is added, 2 "Boop!"(for numbers not containing a 3), and 1 "Beep"(for numbers not containing a 2, all other numbers between user entered number and 0 are printed, except for those containing 1, 2, and 3, which are printed like the above. For entertainment purposes only_

## Setup/Installation Requirements

* _Simply download all files and folders, then open up index.html on your favorite browser. Then simply fill the form out, press submit, and a suggestion will print on the screen. To do it again, press the reset button and the fields will return to their default state._




## Known Bugs

* _No known bugs at the time of this writing_


## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright (c) _01/21/2022_ _Joshua Tillinghast_
#### Tests:
---------------------------------------------------------------------------------------------
## Describe: beepBoop()

#### Test: "User input should be a number"
Code: beepBoop("c");\
Expected output: false;

#### Test: "If user enters negative number, they will asked to enter a positive one."
Code: beepBoop(-1);\
Expected output: "Please enter a number 0 or greater."

#### Test: "It should return "Beep" if a 1 is entered"
Code: beepBoop(1);\
Expected Output: "Beep!" 

#### Test: "It should return "Boop" if a 2 is entered"
Code: beepBoop(2);\
Expected Output: "Boop" 

#### Test: "It should return "Won't you be my neighbor" if a 3 is entered"
Code: beepBoop(3);\
Expected Output: "Won't you be me neighbor?"

#### Test: "It should return "A larger number takes presidence over a smaller number for previous tests"
Code: beepBoop(23);\
Expected Output: "Won't you be me neighbor?"

#### Test: "It should return results for all numbers between 0 and 10"
Code: beepBoop(10);\
Expected Output:"0, Beep, Boop, Won't you be my neighbor, 4, 5, 6, 7, 8, 9, Beep"

#### Test: "It should return results using the correct presidence(3 > 2 > 1) for higher numbers
Code: beepBoop(23);\
Expected Output: "0, Beep, Boop, Won't you be my neighbor, 4, 5, 6, 7, 8, 9, Beep, Beep, Boop, Won't you be my neighbor, Beep, Beep, Beep, Beep, Beep, Beep, Boop, Boop, Boop, Won't you be my neighbor"

#### Test: "User should be able to enter a new number and it should present new results over and over again"
Code: beepBoop(10);\
Expected Output: Page will reload and display new output.


----------------------------------------------------------------------------------------------------









<!-- 1. Numbers that contain a 1: all digits replaced with "Beep!"
2. Numbers that contain a 2: all digits replaced with "Boop!"
3. Numbers that contain a 3: all digits replaced with "Won't you be my neighbor?"
4. Numbers that contain both a 1, 2, or 3 default to larger number, ie 13 "Boop!", 21 "Won't you be my neighbor", 32 "Won't you be my neighbor!"
5. A user should be able to enter a new number and see new results over and over again. -->

Describe: beepBoop()

Test: "User input should be a number"
Code: beepBoop("c");
Expected output: false;

Test: "It should return a string with a 0 if the number 0 is inputted"
Code: beepBoop(0);
Expected Output: 0

Test: "It should return "Beep" if a 1 is entered"
Code: beepBoop(1);
Expected Output: 0, Beep 

Test: "It should return "Boop" if a 2 is entered"
Code: beepBoop(2);
Expected Output: 0, Boop 

Test: "It should return "Won't you be my neighbor" if a 3 is entered"
Code: beepBoop(3);
Expected Output: 0, Won't you be me neighbor

Test: "It should return "A larger number takes presidence over a smaller number for previous tests"
Code: beepBoop(23);
Expected Output: 0, Won't you be me neighbor

Test: "It should return results for all numbers between 0 and user inputted number"
Code: beepBoop(5);
Expected Output: 0, Beep, Boop, Won't you be my neighbor, 4, 5





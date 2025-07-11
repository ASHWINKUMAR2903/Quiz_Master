# Quiz_Master
## Date: 11.07.25
## Objective:
To demonstrate the concepts of callback functions and higher-order functions in JavaScript by building a simple quiz scoring system where the evaluation logic is passed as a callback to a higher-order function.

## Tasks:

#### 1. Create the HTML Layout:
Add a heading ```<h1>QuizMaster</h1>```

Add a few mock questions (or inputs for answers — optional)

Add a “Check Score” button

Display the final score in a ```<div> or <p>```

#### 2. Add CSS Styling:
Style the layout with a clean font and spacing

Add background color and rounded buttons

Keep the output score in a prominent style

#### 3. JavaScript Functionality:
Create a higher-order function called calculateScore(callback)

The callback will contain the logic for checking answers (or mocked results)

Pass different callback functions to demonstrate modular scoring (e.g., strict or lenient scoring)
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>QuizMaster</title>
  <link rel="stylesheet" href="style.css">
  <script src="script.js"></script>
</head>
<body>
  <div class="container">
    <h1>QuizMaster</h1>
    
    <div class="question">
      <label>What color is the sky?</label>
      <input type="text" id="q1">
    </div>
    
    <div class="question">
      <label>How many legs do spiders have?</label>
      <input type="text" id="q2">
    </div>
    
    <div class="question">
      <label>Whats is the powerhouse of the cell?</label>
      <input type="text" id="q3">
    </div>

    <button onclick="calculateScore(strictScoring)">Check Score (Strict)</button>
    <button onclick="calculateScore(lenientScoring)">Check Score (Lenient)</button>

    <h1>ScoreBoard</h1>
    <p id="scoreDisplay"></p>
  </div>
</body>
</html>
```
## CSS Code:
```
body {
  font-family: Arial, sans-serif;
  background-color: #3b3636;
  display: flex;
  justify-content: center;
  padding: 40px;
}

.container {
  background: rgb(109, 195, 112);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  max-width: 500px;
  width: 100%;
}

h1 {
  text-align: center;
  color: #333;
}

.question {
  margin-bottom: 20px;
}

input {
  width: 90%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

button {
  margin-right: 10px;
  padding: 10px 40px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #4ea7ff;
}

#scoreDisplay {
  margin-top: 20px;
  font-size: 1.2em;
  font-weight: bold;
  color: rgb(0, 255, 0);
  text-align: center;

  background: rgb(35, 40, 39);
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  max-width: 450px;
  width: 100%;
}
```
## JavaScript Code:
```
function calculateScore(callback) {
  const userAnswers = {
    q1: document.getElementById("q1").value.trim(),
    q2: document.getElementById("q2").value.trim(),
    q3: document.getElementById("q3").value.trim()
  };

  const score = callback(userAnswers);
  document.getElementById("scoreDisplay").innerText = `Your Score: ${score}/3`;
}

function strictScoring(answers) {
  let score = 0;
  if (answers.q1 === "Blue colour") score++;
  if (answers.q2 === "Eight") score++;
  if (answers.q3 === "Mitochondria") score++;
  return score;
}

function lenientScoring(answers) {
  let score = 0;
  if (answers.q1 === "blue" || answers.q1 === "Blue") score++;
  if (answers.q2 == "8") score++;
  if (answers.q3 == "mitochondria") score++;
  return score;
}
```
## Output:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/072e9d68-194e-4cb9-98ff-4eaf3b74e6d8" />

## Result:
A mini module using JavaScript callbacks and higher-order functions is successfully created. This reinforces real-world use of passing functions as arguments to other functions and modularizes logic for reusability.

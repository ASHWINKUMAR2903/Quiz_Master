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

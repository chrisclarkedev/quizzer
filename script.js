const quizData = [
  {
    question: "First United States President?",
    a: "Abraham Lincoln",
    b: "John Adams",
    c: "George Washington",
    d: "Bill Clinton",
    correct: "c",
  },
  {
    question: "What does https stand for?",
    a: "Hyper Text Terminal Pattern Softwares",
    b: "Have Ton Terminated Padded Soldiers",
    c: "How To Take Pictures Standing",
    d: "Hypertext Transfter Protocal Secure",
    correct: "d",
  },
  {
    question: "What is the most spoken language in the world currently?",
    a: "English",
    b: "Spanish",
    c: "Chinese (Mandarin)",
    d: "Hindi",
    correct: "a",
  },
  {
    question: "Which one of these is the smallest planet?",
    a: "Pluto",
    b: "Neptune",
    c: "Earth",
    d: "Saturn",
    correct: "a",
  },
  {
    question: "What does HTML stand for?",
    a: "How to make lemonade",
    b: "Hyper Text Markup Language",
    c: "Hypertext Management Location",
    d: "Java Development Docs",
    correct: "b",
  },
  {
    question: "What does CSS stand for?",
    a: "Creative System Security",
    b: "Concurrent Symantec Software",
    c: "Cascading Style Sheet",
    d: "Consecutive Storage Shortage",
    correct: "c",
  },
];

//
const quiz = document.getElementById("quiz");
// .answer and question are both radio buttons
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
// All text to be targeted
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

// Keep track of current question
let currentQuiz = 0;

// Keep track of the current score
let score = 0;

//Keep track of current answer
let answer = undefined;

// Load the actual Quiz (function)
loadQuiz();

function loadQuiz() {
  deselectAns();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  // Display the answer letter when sumbitted
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

// Adding deselection of choices after answer is submitted
function deselectAns() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  //check to see if the answer is there
  const answer = getSelected();
  console.log(answer);
  // Check if we have correct answer then add to score
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      // Once all questions are answered display score out of total questions answered
      // Button at the bottom of results page will restart test
      quiz.innerHTML = `<h2> Your score is ${score}/${quizData.length}</h2><button onclick="location.reload()">Retry Test</button>`;
    }
  }
});

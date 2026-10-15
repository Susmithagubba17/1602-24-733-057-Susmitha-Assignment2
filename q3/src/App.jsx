import { useEffect, useState } from "react";

const questions = [
  {
    question: "Which language is used with React?",
    options: ["Python", "JavaScript", "C", "Java"],
    answer: "JavaScript"
  },
  {
    question: "Which hook is used for state?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    answer: "useState"
  },
  {
    question: "Which hook handles side effects?",
    options: ["useState", "useEffect", "useContext", "useRef"],
    answer: "useEffect"
  },
  {
    question: "React is mainly used for?",
    options: [
      "Database",
      "User Interfaces",
      "Operating Systems",
      "Networking"
    ],
    answer: "User Interfaces"
  },
  {
    question: "JSX stands for?",
    options: [
      "JavaScript XML",
      "Java Syntax XML",
      "JavaScript Extension",
      "JSON XML"
    ],
    answer: "JavaScript XML"
  }
];

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(30);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (finished) return;

    if (time === 0) {
      setFinished(true);
      return;
    }

    const timer = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time, finished]);

  const selectAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    if (current === questions.length - 1) {
      setFinished(true);
    } else {
      setCurrent(current + 1);
    }
  };

  if (finished) {
    return (
      <div>
        <h1>Quiz Completed</h1>
        <h2>
          Your Score: {score} / {questions.length}
        </h2>
      </div>
    );
  }

  return (
    <div>
      <h1>Timed Quiz</h1>

      <h2>Time Left: {time} seconds</h2>

      <h3>
        Question {current + 1} of {questions.length}
      </h3>

      <h2>{questions[current].question}</h2>

      {questions[current].options.map((option) => (
        <button
          key={option}
          onClick={() => selectAnswer(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default App;

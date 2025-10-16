"use client";

import { useState, useEffect } from "react";

function QuestionNav({ questions, current, goToQuestion }: {
  questions: { question: string }[];
  current: number;
  goToQuestion: (index: number) => void;
}) {
  return (
    <div className="grid grid-cols-5 gap-2 w-full mb-6">
      {questions.map((q, idx) => (
        <button
          key={idx}
          onClick={() => goToQuestion(idx)}
          className={`aspect-square w-full rounded-md text-sm font-medium ${
            current === idx ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-blue-200'
          }`}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );
}

const questions = [
  { question: "What time _______ you go to bed?", options: ["do", "are", "have", "did"], answer: 0 },
  { question: "She _______ a sister and a brother.", options: ["is", "has", "have", "having"], answer: 1 },
  { question: "Where ______ your shoes?", options: ["do", "is", "are", "does"], answer: 2 },
  { question: "I like _______ to music after school.", options: ["to listen", "listen", "listening", "be listen"], answer: 0 },
  { question: "They ______ in the kitchen right now.", options: ["sits", "is sitting", "are sitting", "sitting"], answer: 2 },
  { question: "Can you ______ me your pen?", options: ["borrow", "lend", "give to", "take"], answer: 1 },
  { question: "We didn't go out because it ______ all day.", options: ["rained", "was raining", "is raining", "rains"], answer: 1 },
  { question: "That’s the man ______ helped me.", options: ["what", "who", "which", "where"], answer: 1 },
  { question: "There aren't ______ apples left.", options: ["no", "any", "much", "some"], answer: 1 },
  { question: "The cake is big enough for _______.", options: ["everyone", "all one", "each people", "everyones"], answer: 0 },
  { question: "I’ve lived here ______ five years.", options: ["since", "during", "for", "from"], answer: 2 },
  { question: "We’re going to the cinema, _______ we?", options: ["do", "are", "aren't", "shall"], answer: 2 },
  { question: "If I had more time, I ______ take up painting.", options: ["will", "can", "would", "must"], answer: 2 },
  { question: "The book was ______ interesting that I couldn’t put it down.", options: ["such", "so", "too", "very"], answer: 1 },
  { question: "She told me she ______ the meeting.", options: ["will attend", "was attending", "would attend", "attends"], answer: 2 },
  { question: "I wish I ______ more languages.", options: ["know", "knew", "had known", "could know"], answer: 1 },
  { question: "That’s the hotel ______ we stayed last summer.", options: ["which", "what", "where", "when"], answer: 2 },
  { question: "It’s important to ______ your goals clearly.", options: ["define", "defining", "be defined", "defined"], answer: 0 },
  { question: "The company is known ______ its excellent customer service.", options: ["with", "to", "for", "by"], answer: 2 },
  { question: "He arrived late, ______ I wasn’t surprised.", options: ["which", "so", "although", "as"], answer: 0 },
  { question: "The film had too many characters, most of ______ weren’t necessary.", options: ["whom", "that", "which", "who"], answer: 0 },
  { question: "Her proposal was rejected ______ it lacked evidence.", options: ["due", "because", "because of", "due to"], answer: 1 },
  { question: "Had she studied harder, she ______ the exam.", options: ["would have passed", "will pass", "had passed", "was passing"], answer: 0 },
  { question: "Not only ______ late, but he also forgot the presentation.", options: ["he arrived", "did he arrive", "he did arrive", "arrived he"], answer: 1 },
];

export default function TestPage() {
  const getCEFRLevel = (score: number) => {
    if (score <= 6) return "A1";
    if (score <= 12) return "A2";
    if (score <= 18) return "B1";
    if (score <= 22) return "B2";
    return "C1";
  };
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(() => Array(questions.length).fill(null));
  const [countdown, setCountdown] = useState(7);

  useEffect(() => {
    fetch("/api/clear-test-cookie", { method: "GET" });
  }, []);

  const goToQuestion = (index: number) => {
    setCurrent(index);
    setSelected(answers[index]);
  };

  const calculateScore = () => {
    const total = answers.reduce((acc: number, answer: number | null, idx: number) => {
        return answer !== null && answer === questions[idx].answer ? acc + 1 : acc;
    }, 0);
    setScore(total);
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(answers[current + 1]);
    } else {
      calculateScore();
      setFinished(true);
    }
  };

  useEffect(() => {
    if (finished) {
      setCountdown(7);
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            window.location.href = "/";
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [finished]);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
      {!finished ? (
        <>
          <aside className="col-span-1 bg-gray-100 p-4 rounded h-fit sticky top-10">
            <h3 className="text-lg font-semibold mb-4">Quiz Navigation</h3>
            <QuestionNav questions={questions} current={current} goToQuestion={goToQuestion} />
          </aside>

          <section className="col-span-1 lg:col-span-3 bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">
              Question {current + 1} of {questions.length}
            </h2>
            <p className="text-lg mb-4">{questions[current].question}</p>
            <ul className="space-y-2 mb-6">
              {questions[current].options.map((opt, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      setSelected(idx);
                      setAnswers((prev) => {
                        const updated = [...prev];
                        updated[current] = idx;
                        return updated;
                      });
                    }}
                    className={`w-full px-4 py-2 rounded border text-left transition ${
                      selected === idx
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 hover:bg-blue-100"
                    }`}
                  >
                    {opt}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setCurrent(Math.max(0, current - 1))}
                disabled={current === 0}
                className="bg-gray-400 text-white px-4 py-2 rounded disabled:opacity-50"
              >
                Prev
              </button>
              <button
                onClick={handleNext}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                {current + 1 === questions.length ? "Finish" : "Next"}
              </button>
            </div>
          </section>
        </>
      ) : (
        <div className="col-span-full text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-lg mb-6">Your score: {score} / {questions.length}</p>
          <p className="text-lg mb-6">Your CEFR Level: <span className="font-bold">{getCEFRLevel(score)}</span></p>
          <p className="text-sm text-gray-600 mt-4">
            Bạn sẽ được chuyển về trang chủ sau {countdown} giây...
          </p>
        </div>
      )}
    </div>
  );
}

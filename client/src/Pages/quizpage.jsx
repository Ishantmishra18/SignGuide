import React, { useState, useEffect , useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../Context/user";

const SubmitQuizPage = () => {
  const { param } = useParams(); // Get quiz index from URL
  const [quizData, setQuizData] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);


  const {setUser}= useContext(UserContext) 

  useEffect(() => {
    fetch("/data/quiz.json") // Fetch the quiz data from public folder
      .then((res) => res.json())
      .then((data) => {
        const quizIndex = parseInt(param, 10); // Convert param to number
        if (!isNaN(quizIndex) && data.quizzes[quizIndex]) {
          setQuizData(data.quizzes[quizIndex]); // Set the specific quiz
        } else {
          console.error("Invalid quiz index");
        }
      })
      .catch((error) => console.error("Error fetching quiz data:", error));
  }, [param]);

  // Handle selecting an answer
  const handleAnswerSelect = (questionIndex, optionIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: optionIndex,
    }));
  };

  // Submit the quiz
  const handleSubmit = async () => {
    if (!quizData) return;
  
    let correct = 0;
    let attempted = 0;
  
    quizData.quiz.forEach((question, index) => {
      if (answers[index] !== undefined) {  // Count only attempted questions
        attempted++;
        if (answers[index] === question.ans) {
          correct++;
        }
      }
    });
  
    setCorrectCount(correct);
    setSubmitted(true);
  
    // Send the result to the backend
    try {
      await axios.post("/quizsubmit", {
        total: attempted,
        correct
      });
  
      console.log("Quiz result submitted successfully!");
    } catch (error) {
      console.error("Error submitting quiz result:", error);
    }
    setUser.quiz = [attempted , correct];
    
  };

  
  return (
    <div className="min-h-screen w-screen flex flex-col items-center gap-8 p-10 bg-gray-100">
      <h1 className="text-5xl font-bold text-gray-800">Take Your Quiz</h1>

      {quizData ? (
        <div className="w-[50vw] p-5 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold text-gray-700">{quizData.title}</h2>
          <p className="text-xl text-gray-600">Difficulty: {quizData.difficulty}</p>
          <p className="text-xl text-gray-600">Total Questions: {quizData.quiz.length}</p>

          {!submitted ? (
            <div className="mt-5">
              {quizData.quiz.map((question, qIndex) => (
                <div key={qIndex} className="mb-6">
                  <p className="text-2xl font-medium">{qIndex + 1}. {question.question}</p>
                  <div className="mt-2">
                    {question.options.map((option, optIndex) => (
                      <label key={optIndex} className="block bg-gray-200 p-3 rounded-lg cursor-pointer hover:bg-gray-300">
                        <input
                          type="radio"
                          name={`question-${qIndex}`}
                          value={optIndex}
                          checked={answers[qIndex] === optIndex}
                          onChange={() => handleAnswerSelect(qIndex, optIndex)}
                          className="mr-2"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              <button
                onClick={handleSubmit}
                className="mt-5 px-6 py-3 bg-sec text-white rounded-lg hover:bg-opacity-80"
              >
                Submit Quiz
              </button>
            </div>
          ) : (
            <div className="mt-6 text-center">
              <h3 className="text-3xl font-bold text-green-600">Quiz Submitted!</h3>
              <p className="text-2xl mt-2">Total Attempted: {Object.keys(answers).length}</p>
              <p className="text-2xl">Correct Answers: {correctCount} / {quizData.quiz.length}</p>
              <p className="text-2xl font-semibold text-blue-600 mt-3">
                {correctCount >= quizData.quiz.length / 2 ? "🎉 Well Done!" : "😕 Try Again!"}
              </p>
            </div>
          )}
        </div>
      ) : (
        <p className="text-2xl text-gray-600">Loading quiz...</p>
      )}
    </div>
  );
};

export default SubmitQuizPage;

// App.js
import { useState, useEffect } from "react";
import styles from "./App.module.css";
import { InitialScreen } from "./screens/initialScreen/InitialScreen";
import { QuizScreen } from "./screens/quizScreen/QuizScreen";
import { ReviewScreen } from "./screens/reviewScreen/ReviewScreen";


export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });
  const [isShowQuiz, setIsShowQuiz] = useState(false);
  const [isRetakeQuiz, setIsRetakeQuiz] = useState(false);
  const [isReviewQuiz, setIsReviewQuiz] = useState(false);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const handleStartQuiz = (isShowQuiz) => {
    setIsShowQuiz(isShowQuiz);
  };

  const handleRetakeQuiz = (isRetakeQuiz) => {
    setIsRetakeQuiz(isRetakeQuiz);
    setIsReviewQuiz(false);
    setIsShowQuiz(false);
  };

  const handleReviewQuiz = (isReviewQuiz) => {
    setIsReviewQuiz(isReviewQuiz);
  };

  return (
    <div className={`${styles.appWrapper} ${darkMode ? styles.darkMode : ''}`}>
      {!isShowQuiz ? (
        <InitialScreen
          setStartQuiz={handleStartQuiz}
          isRetakeQuiz={isRetakeQuiz}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      ) : isReviewQuiz ? (
        <ReviewScreen 
          setIsRetake={handleRetakeQuiz}
          darkMode={darkMode}
          setDarkMode={setDarkMode}  // Add this line
        />
      ) : (
        <QuizScreen
          setIsRetake={handleRetakeQuiz}
          setIsReview={handleReviewQuiz}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      )}
    </div>
  );
}
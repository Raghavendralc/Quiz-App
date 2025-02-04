// ReviewScreen.jsx
import { useState, useEffect } from "react";
import styles from "./ReviewScreen.module.css";
import appStyles from "../../App.module.css";
import { fetchQuizData } from "../../utils/quizData"; // Update this import
import { InfoToolTip } from "../../components/toolTip/InfoToolTip";
import { Question } from "../../components/question/Question";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import cx from "classnames";

export const ReviewScreen = ({ setIsRetake, darkMode, setDarkMode }) => {
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadQuizData = async () => {
      try {
        const data = await fetchQuizData();
        setQuizData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error loading quiz data:', error);
        setLoading(false);
      }
    };
    loadQuizData();
  }, []);

  if (loading) {
    return (
      <div className={cx(styles.loadingContainer, {
        [styles.darkMode]: darkMode
      })}>
        <div className={styles.loader}></div>
        <p>Loading review...</p>
      </div>
    );
  }

  return (
    <>
      <button 
        className={styles.darkModeToggle} 
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>

      <div className={cx(
        appStyles.fadeInRight,
        styles.reviewScreenWrapper,
        { [styles.darkMode]: darkMode }
      )}>
        <div className={styles.reviewScreen}>
          <div className={styles.quizInfo}>
            <h2 className={cx(styles.quizTitle, {
              [styles.darkModeText]: darkMode
            })}>
              {quizData.title}
            </h2>
            <p className={cx(styles.quizTopic, {
              [styles.darkModeText]: darkMode
            })}>
              Topic: {quizData.topic}
            </p>
          </div>

          <div className={styles.columnContainer}>
            {/* Split questions into two columns */}
            <div className={styles.column}>
              {quizData.questions.slice(0, Math.ceil(quizData.questions.length / 2)).map((question, index) => (
                <Question 
                  key={question.id} 
                  index={index} 
                  data={question} 
                  darkMode={darkMode}
                  marks={quizData.correct_answer_marks}
                  negativeMarks={quizData.negative_marks}
                />
              ))}
            </div>
            <div className={styles.column}>
              {quizData.questions.slice(Math.ceil(quizData.questions.length / 2)).map((question, index) => (
                <Question 
                  key={question.id} 
                  index={index + Math.ceil(quizData.questions.length / 2)} 
                  data={question} 
                  darkMode={darkMode}
                  marks={quizData.correct_answer_marks}
                  negativeMarks={quizData.negative_marks}
                />
              ))}
            </div>
          </div>

          <div className={styles.btnDiv}>
            <InfoToolTip
              text="Click me to retake the quiz!"
              component={
                <button
                  onClick={() => setIsRetake(true)}
                  className={cx(styles.retakeBtn, {
                    [styles.darkModeRetakeBtn]: darkMode
                  })}
                >
                  Retake Quiz
                </button>
              }
              darkMode={darkMode}
            />
          </div>
        </div>
      </div>
    </>
  );
};
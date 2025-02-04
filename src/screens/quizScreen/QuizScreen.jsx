// QuizScreen.jsx
import { useState, useEffect } from "react";
import styles from "./QuizScreen.module.css";
import appStyles from "../../App.module.css";
import { fetchQuizData } from "../../utils/quizData";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";
import { InfoToolTip } from "../../components/toolTip/InfoToolTip";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";
import cx from "classnames";

export const QuizScreen = ({ setIsRetake, setIsReview, darkMode, setDarkMode }) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0
  });

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

  if (loading || !quizData) {
    return (
      <div className={cx(styles.loadingContainer, {
        [styles.darkMode]: darkMode
      })}>
        <div className={styles.loader}></div>
        <p>Loading quiz...</p>
      </div>
    );
  }

  const { questions } = quizData;
  const currentQuestion = questions[activeQuestion];

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setShowDescription(false);
    setResult((prev) =>
      selectedAnswer
        ? {
          ...prev,
          score: prev.score + parseFloat(quizData.correct_answer_marks),
          correctAnswers: prev.correctAnswers + 1
        }
        : {
          ...prev,
          score: prev.score - parseFloat(quizData.negative_marks),
          wrongAnswers: prev.wrongAnswers + 1
        }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (option, index) => {
    setSelectedAnswerIndex(index);
    setSelectedAnswer(option.is_correct);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <button
        className={styles.darkModeToggle}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>

      <div className={cx(
        showResult ? appStyles.fadeInRight : appStyles.fadeInLeft,
        styles.quizScreenWrapper,
        { [styles.darkMode]: darkMode }
      )}>
        {!showResult ? (
          <div className={cx(styles.quizCard, {
            [styles.darkModeQuizCard]: darkMode
          })}>
            <div className={styles.quizHeader}>
              <div className={styles.quizTitle}>
                <h2 className={cx(styles.title, {
                  [styles.darkModeText]: darkMode
                })}>
                  {quizData.title}
                </h2>
                <p className={cx(styles.topic, {
                  [styles.darkModeText]: darkMode
                })}>
                  Topic: {quizData.topic}
                </p>
              </div>
              <div className={styles.questionInfo}>
                <span className={cx(styles.activeQuestionNo, {
                  [styles.darkModeText]: darkMode
                })}>
                  {String(activeQuestion + 1).padStart(2, '0')}
                </span>
                <span className={cx(styles.totalQuestion, {
                  [styles.darkModeText]: darkMode
                })}>
                  /{String(questions.length).padStart(2, '0')}
                </span>
              </div>
            </div>

            <div className={styles.questionMeta}>
              <span className={styles.marks}>
                Correct: +{quizData.correct_answer_marks} | Wrong: -{quizData.negative_marks}
              </span>
              <span className={styles.duration}>
                Duration: {quizData.duration} mins
              </span>
            </div>

            <div className={styles.questionContent}>
              <h3 className={cx(styles.questionText, {
                [styles.darkModeText]: darkMode
              })}>
                {currentQuestion.description}
              </h3>
              {showDescription && (
                <div className={cx(styles.description, {
                  [styles.darkModeDescription]: darkMode
                })}>
                  <p>{currentQuestion.detailed_solution}</p>
                </div>
              )}
              <button
                className={cx(styles.descriptionBtn, {
                  [styles.darkModeDescriptionBtn]: darkMode
                })}
                onClick={() => setShowDescription(!showDescription)}
              >
                <FaInfoCircle /> {showDescription ? 'Hide' : 'Show'} Solution
              </button>
            </div>

            <div className={styles.optionsDiv}>
              {currentQuestion.options.map((option, index) => (
                <div
                  onClick={() => onAnswerSelected(option, index)}
                  key={option.id}
                  className={cx(
                    selectedAnswerIndex === index
                      ? styles.selectedAnswer
                      : styles.option,
                    {
                      [styles.darkModeOption]: darkMode,
                      [styles.darkModeSelectedAnswer]:
                        darkMode && selectedAnswerIndex === index,
                    }
                  )}
                >
                  {option.description}
                </div>
              ))}
            </div>

            <div className={styles.btnDiv}>
              <button
                onClick={onClickNext}
                disabled={selectedAnswerIndex === null}
                className={cx(
                  selectedAnswerIndex === null
                    ? styles.disabledDiv
                    : styles.nextBtnDiv,
                  {
                    [styles.darkModeDisabledBtn]:
                      darkMode && selectedAnswerIndex === null,
                    [styles.darkModeNextBtn]:
                      darkMode && selectedAnswerIndex !== null,
                  }
                )}
              >
                {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        ) : (
          <div className={cx(styles.resultScreen, {
            [styles.darkModeResultScreen]: darkMode
          })}>
            <div className={styles.resultHeader}>
              <h3 className={darkMode ? styles.darkModeText : ''}>
                Quiz Results - {quizData.title}
              </h3>
            </div>
            <div className={styles.resultContent}>
              <div className={cx(styles.resultStats, {
                [styles.darkModeStats]: darkMode
              })}>
                <p className={darkMode ? styles.darkModeText : ''}>
                  Total Questions: {questions.length}
                </p>
                <p className={darkMode ? styles.darkModeText : ''}>
                  Score: {result.score}
                </p>
                <p className={darkMode ? styles.darkModeText : ''}>
                  Correct Answers: {result.correctAnswers}
                </p>
                <p className={darkMode ? styles.darkModeText : ''}>
                  Wrong Answers: {result.wrongAnswers}
                </p>
                <p className={darkMode ? styles.darkModeText : ''}>
                  Percentage: {((result.correctAnswers / questions.length) * 100).toFixed(2)}%
                </p>
                <p className={darkMode ? styles.darkModeText : ''}>
                  Date: {new Date().toLocaleString()}
                </p>
                <p className={darkMode ? styles.darkModeText : ''}>
                  User: {quizData.name}
                </p>
              </div>
              <div className={styles.resultChart}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible
                      ? (result.correctAnswers / questions.length) * 100
                      : 0;
                    return (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage.toFixed(0)}%`}
                        styles={buildStyles({
                          // Colors
                          pathColor: percentage >= 75 ? '#4caf50' : percentage >= 50 ? '#ff9800' : '#f44336',
                          textColor: darkMode ? '#ffffff' : '#333333',
                          trailColor: darkMode ? '#444444' : '#f5f5f5',

                          // Text
                          textSize: '16px',

                          // Animation
                          pathTransitionDuration: 0.5,

                          // Border
                          strokeLinecap: 'round',
                        })}
                      />
                    );
                  }}
                </VisibilitySensor>
              </div>
            </div>
            <div className={styles.btnDiv}>
              <InfoToolTip
                text="Review your answers"
                component={
                  <button
                    onClick={() => setIsReview(true)}
                    className={cx(styles.reviewBtn, {
                      [styles.darkModeReviewBtn]: darkMode
                    })}
                  >
                    Review Quiz
                  </button>
                }
                darkMode={darkMode}
              />
              <InfoToolTip
                text="Take the quiz again"
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
        )}
      </div>
    </>
  );
};
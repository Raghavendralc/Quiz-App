import { useMemo, useState, useEffect } from "react";
import { instructionsData } from "../../utils/instructionsData";
import { InfoToolTip } from "../../components/toolTip/InfoToolTip";
import cx from "classnames";
import styles from "./InitialScreen.module.css";
import appStyles from "../../App.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const COUNTDOWN_TEXTS = [
  { number: "1", text: "Ready" },
  { number: "2", text: "Set" },
  { number: "3", text: "Quiz" },
];

export const InitialScreen = ({ setStartQuiz, isRetakeQuiz }) => {
  const [click, setClicked] = useState(false);
  const [count, setCount] = useState(0);
  const [restartTimer, setRestartTimer] = useState(false);
  const [rubberBand, setRubberBand] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const currentText = useMemo(
    () => COUNTDOWN_TEXTS[count] || COUNTDOWN_TEXTS[0],
    [count]
  );

  useEffect(() => {
    if (!click) {
      setTimeout(() => {
        setRubberBand(true);
      }, 500);
    }

    if (click || restartTimer) {
      const interval = setInterval(() => {
        setCount((prev) => (prev < COUNTDOWN_TEXTS.length - 1 ? prev + 1 : prev));
      }, 2000);

      const timeout = setTimeout(() => {
        clearInterval(interval);
        setStartQuiz(true);
        setCount(0);
        setRestartTimer(false);
      }, 6000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [click, restartTimer, setStartQuiz]);

  useEffect(() => {
    if (isRetakeQuiz) {
      setClicked(true);
      setCount(0);
      setRestartTimer(true);
    }
  }, [isRetakeQuiz]);

  return (
    <>
      <button 
        className={styles.darkModeToggle} 
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>

      <div
        className={cx(styles.initialScreenWrapper, {
          [appStyles.fadeInRight]: click,
          [styles.countDownWrapper]: click,
          [styles.darkMode]: darkMode, // Add dark mode class to wrapper
        })}
      >
        {!click ? (
          <>
            <div
              className={cx(appStyles.fadeInBottom, styles.leftDiv, {
                [styles.darkLeft]: darkMode,
              })}
            >
              <p className={cx(styles.rubberBand, { [styles.animated]: rubberBand })}>Quiz</p>
            </div>
            <div
              className={cx(appStyles.fadeInTop, styles.rightDiv, {
                [styles.darkRight]: darkMode,
              })}
            >
              <p className={cx(styles.rubberBand, { [styles.animated]: rubberBand })}>-APP</p>
            </div>
            <div className={styles.btnDiv}>
              <InfoToolTip
                text="Click me to start the Quiz!"
                component={
                  <button
                    onClick={() => setClicked(true)}
                    className={cx({
                      [styles.darkModeButton]: darkMode,
                    })}
                  >
                    <span className={darkMode ? styles.darkModeText : ""}>
                      Enter the Quiz Arena!{" "}
                    </span>
                    <AiOutlineArrowRight />
                  </button>
                }
              />
            </div>
          </>
        ) : (
          <>
            <div 
              className={cx(
                styles.counter, 
                appStyles.pulse,
                { [styles.darkModeCounter]: darkMode }
              )}
            >
              <p className={cx(styles.numberStyling, { [styles.darkModeText]: darkMode })}>
                {currentText.number}
              </p>
              <p className={cx(styles.textStyling, { [styles.darkModeText]: darkMode })}>
                {currentText.text}
              </p>
            </div>
            <div 
              className={cx(
                styles.instructionsDiv, 
                appStyles.fadeInRight,
                { [styles.darkModeInstructions]: darkMode }
              )}
            >
              <h3 className={darkMode ? styles.darkModeText : ""}>
                {instructionsData?.title}:
              </h3>
              <ol>
                {instructionsData?.data?.map((instruction, index) => (
                  <li 
                    key={index} 
                    className={darkMode ? styles.darkModeText : ""}
                  >
                    {instruction}
                  </li>
                ))}
              </ol>
            </div>
          </>
        )}
      </div>
    </>
  );
};
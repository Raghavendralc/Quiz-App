// Question.jsx
import React, { useState } from 'react';
import styles from "./Question.module.css";
import { TiTickOutline } from "react-icons/ti";
import { FaInfoCircle } from "react-icons/fa";
import cx from 'classnames';

export const Question = ({ index, data, darkMode, marks, negativeMarks }) => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div 
      key={index} 
      className={cx(styles.questionDiv, {
        [styles.darkModeQuestionDiv]: darkMode
      })}
    >
      <div className={styles.questionHeader}>
        <p className={cx(styles.question, {
          [styles.darkModeText]: darkMode
        })}>
          {index + 1}. {data.description}
        </p>
        <div className={styles.questionInfo}>
          <span className={cx(styles.marks, {
            [styles.darkModeText]: darkMode
          })}>
            Marks: +{marks} / -{negativeMarks}
          </span>
        </div>
      </div>

      <ul className={cx(styles.options, {
        [styles.darkModeOptions]: darkMode
      })}>
        {data.options.map((option) => (
          <li
            key={option.id}
            className={cx(
              option.is_correct
                ? styles.correctOption
                : styles.option,
              {
                [styles.darkModeOption]: darkMode,
                [styles.darkModeCorrectOption]: darkMode && option.is_correct
              }
            )}
          >
            {option.description}
            {option.is_correct && (
              <TiTickOutline
                style={{
                  fontSize: "20px",
                  color: darkMode ? "#4caf50" : "green"
                }}
              />
            )}
          </li>
        ))}
      </ul>

      <div className={styles.solutionSection}>
        <button
          className={cx(styles.solutionButton, {
            [styles.darkModeSolutionButton]: darkMode
          })}
          onClick={() => setShowSolution(!showSolution)}
        >
          <FaInfoCircle /> {showSolution ? 'Hide' : 'Show'} Solution
        </button>
        
        {showSolution && (
          <div className={cx(styles.solution, {
            [styles.darkModeSolution]: darkMode
          })}>
            {data.detailed_solution}
          </div>
        )}
      </div>
    </div>
  );
};
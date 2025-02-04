# Quiz App

A quiz application that allows users to take quizzes on various topics, view their results, and retake quizzes. The application supports dark mode and provides detailed solutions for each quiz question.
![image](https://github.com/user-attachments/assets/328ca43e-5c99-41bc-9964-262bd7c3aafa)



## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Description

The Quiz App is a web application that allows users to take quizzes and review their answers. The app supports dark mode for a better user experience and provides detailed solutions for each question. Users can retake quizzes and see their scores and statistics.

## Features

- Take quizzes on various topics
- View detailed solutions for each question
- Dark mode support
- Retake quizzes
- View quiz statistics and scores
- Responsive design for mobile and desktop

## Installation

To run the Quiz App locally, follow these steps:

1. Clone the repository:
   git clone https://github.com/Raghavendralc/Quiz-App.git
2. Navigate to the project directory:

3. cd Quiz-App
Install the dependencies:

4. npm install
Start the development server:

5. npm start
Open your browser and go to http://localhost:3000 to see the app.

Usage
Taking a Quiz: Select a quiz from the available list and answer the questions. You can switch between light and dark modes using the toggle button in the top-right corner.
Viewing Results: After completing the quiz, you can view your score, correct answers, and detailed solutions for each question.
Retaking a Quiz: You can retake the quiz by clicking the "Retake Quiz" button on the results screen.
Project Structure
Code
Quiz-App/
├── public/
├── src/
│   ├── components/
│   │   ├── question/
│   │   │   ├── Question.jsx
│   │   │   └── Question.module.css
│   │   ├── toolTip/
│   │   │   ├── InfoToolTip.jsx
│   │   │   └── InfoToolTip.module.css
│   ├── screens/
│   │   ├── reviewScreen/
│   │   │   ├── ReviewScreen.jsx
│   │   │   └── ReviewScreen.module.css
│   │   ├── quizScreen/
│   │   │   ├── QuizScreen.jsx
│   │   │   └── QuizScreen.module.css
│   ├── utils/
│   │   └── quizData.js
│   ├── App.jsx
│   ├── App.module.css
│   ├── index.js
│   └── index.css
└── package.json
Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch).
Open a pull request.

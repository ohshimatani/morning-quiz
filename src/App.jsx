import React, { useState } from 'react';
import QuestionIndex from './components/QuestionIndex';
import QuestionWord from './components/QuestionWord';
import AnswerForm from './components/AnswerForm';
import StartPage from './components/StartPage';
import NextButton from './components/NextButton';
import WordClassLabel from './components/WordClassLabel';

// load a json file
export const questions = require('../src/questions.json');

const App = () => {
	// setting for state-------
	const [pageState, setPageState] = useState("start");// start, question, end
	const [questionIndex, incrementQuestionIndex] = useState(0);
	const [isCorrect, setIsCorrect] = useState(false);
	const [isQuestionBoxColored, setIsQuestionBoxColored] = useState(false);
	// end of setting for state-------

	// check input text equal answer when rendering-------
	const checkAnswer = (inputText) => {
		// eslint-disable-next-line eqeqeq
		if (questions[questionIndex].answer == inputText || inputText == "next") {
			setIsCorrect(true);
			return true;
		}
		return false;
	}
	// -------

	// if "checkAnswer" said "true", box colored and reset flag("isCorrect").-------
	if (isCorrect) {
		setIsQuestionBoxColored(true);
		setIsCorrect(false);
	}
	// -------

	// "pageState" is end
	if (questionIndex === questions.length) {
		setPageState("end");
	}

	// render page by "pageState"(start, question or end)-------
	if (pageState === "start") {
		return (
			<StartPage onClick={() => setPageState("question")} />
		);
	} else if (pageState === "question") {
		return (
			<>
				<QuestionIndex questionIndex={questionIndex} />
				<QuestionWord word={questions[questionIndex].word} isQuestionBoxColored={isQuestionBoxColored}/>
				<WordClassLabel classLabel={questions[questionIndex].Classification}/>
				<AnswerForm questionIndex={questionIndex} checkAnswer={checkAnswer} setIsCorrect={setIsCorrect} cancelButtonOnClick={() => setIsQuestionBoxColored(false)}/>
				<NextButton onClick={() => {
						incrementQuestionIndex(questionIndex + 1);
						setIsQuestionBoxColored(false);
						}
					}/>
			</>
		);
	} else {// end page
		return (
			<QuestionIndex questionIndex={questionIndex} />
		);
	}
	// end of rendering-------

}



export default App;

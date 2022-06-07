import React, { useState } from 'react';
import QuestionIndex from './components/QuestionIndex';
import QuestionWord from './components/QuestionWord';
import AnswerForm from './components/AnswerForm';
import StartPage from './components/StartPage';

// load a json file
const questions = require('../src/questions.json');
console.log(questions.length);

const App = () => {
	// state
	const [isQuizPage, setPageState] = useState(true);

	// question index
	const questionIndex = 0;
	const incrementQuestionIndex = () => {
		questionIndex++;
	}

	if (isQuizPage) {
		console.log("true");
		return (
			<>
				<QuestionIndex questionIndex={questionIndex}/>
				<QuestionWord />
				<AnswerForm />
			</>
		);
	} else {
		console.log("false");
		return (
			<StartPage onClick={() => setPageState(true)}/>
		);
	}
}



export default App;

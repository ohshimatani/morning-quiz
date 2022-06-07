import React, { useState } from 'react';
import QuestionIndex from './components/QuestionIndex';
import QuestionWord from './components/QuestionWord';
import AnswerForm from './components/AnswerForm';
import StartPage from './components/StartPage';
import LabelAndNextButton from './components/LabelAndNextButton';

// load a json file
const questions = require('../src/questions.json');

const App = () => {
	// setting for state
	const [pageState, setPageState] = useState("start");// start, question, end
	const [questionIndex, incrementQuestionIndex] = useState(0);

	// setting for question index
	// const incrementQuestionIndex = () => {
	// 	if (questionIndex <= questions.length) {
	// 		questionIndex++;
	// 	} else {
	// 		setPageState("end");
	// 	}
	// }

	if (pageState === "start") {
		
		return (
			<StartPage onClick={() => setPageState("question")}/>
		);
	} else if (pageState === "question"){
		return (
			<>
				<QuestionIndex qid={questionIndex}/>
				<QuestionWord />
				<AnswerForm onClick={() => incrementQuestionIndex(questionIndex + 1)}/>
				<LabelAndNextButton />
			</>
		);
	} else {
		// return (
		// 
		// );
	}
}



export default App;

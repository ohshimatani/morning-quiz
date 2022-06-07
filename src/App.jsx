import React, { useState } from 'react';
import QuestionWord from './components/QuestionWord';
import AnswerForm from './components/AnswerForm';
import StartTitle from './components/StartTitle';
import StartButton from './components/StartButton';

function App() {
	/*
		[pageState]
		"start": start page
		"quiz": quiz page
	*/
	const [pageState, setPageState] = useState("start");
	switch (pageState) {
		case "start":
			return (
				<>
					<StartTitle />
					<StartButton onClick={() => setPageState("quiz")}/>
				</>
			);
		case "quiz":
			return (
				<>
					<QuestionWord />
					<AnswerForm />
				</>
			);
		default:
			break;
	}
}

export default App;

import React, { useState } from 'react';
import QuestionWord from './components/QuestionWord';
import AnswerForm from './components/AnswerForm';
import StartPage from './components/StartPage';

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
				// <>
				// 	<StartTitle />
				// 	<StartButton onClick={() => setPageState("quiz")}/>
				// </>
				<StartPage onClick={setPageState("quiz")}/>
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

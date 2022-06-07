import React, { useState } from 'react';
// import { questions } from '../App';

const thisFontSize = `text-3xl`;

const AnswerForm = (props) => {
	const [inputState, setInputState] = useState("");

	return (
		<form className={formClass}>
			<div className={wrapperClass}>
				<input className={inputClass} type="text" placeholder="input here" value={inputState} onChange={e => setInputState(e.target.value)}></input>
				<button className={okButtonClass} type="button" onClick={() => props.setIsCorrect(props.checkAnswer(inputState))}>
					OK
				</button>
				<button className={cancelButtonClass} type="button" onClick={() => {
						setInputState("");
						props.cancelButtonOnClick();
					}
				}>
					Clear
				</button>
			</div>
		</form>
	);
}

const formClass = `
	w-2/3
	mx-auto
`;

const wrapperClass = `
	flex
	items-center
	border-b-2
	border-blue-500
	py-2
`;

const inputClass = `
	appearance-none
	bg-transparent
	border-none
	w-full
	text-gray-700
	mr-3
	py-1
	px-2
	leading-tight
	focus:outline-none
	animate-bounce
	focus:animate-none
	font-mono
${thisFontSize}
`;

const okButtonClass = `
	flex-shrink-0
	bg-blue-500
	hover:bg-blue-700
	border-blue-500
	hover:border-blue-700
	border-4
	text-white
	py-4
	px-8
	rounded
	active:animate-ping
${thisFontSize}
`;

const cancelButtonClass = `
	flex-shrink-0
	border-transparent
	border-4
	text-red-700
	hover:text-red-400
	py-4
	px-8
	rounded
	active:animate-ping
${thisFontSize}
`;



export default AnswerForm;
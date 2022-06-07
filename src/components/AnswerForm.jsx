import React from 'react';

const thisFontSize = `text-3xl`;

const AnswerForm = () => {
	return (
		<form className={formClass}>
			<div className={wrapperClass}>
				<input className={inputClass} type="text" placeholder="input place"></input>
				<button className={okButtonClass} type="button">
					OK
				</button>
				<button className={cancelButtonClass} type="button">
					Cancel
				</button>
			</div>
		</form>
	);
}
// w-full max-w-sm
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
${thisFontSize}
`;



export default AnswerForm;

const word = "mkdir";

const QuestionWord = () => {
	return (
		<div className={divClass}>
			<p className={pClass}>{word}</p>
		</div>
	);
}

const divClass = `
	w-screen
	p-20
	flex
	justify-center
	items-center
`;

const pClass = `
	border-solid
	border-2
	border-gray-400
	rounded-l
	p-20
	text-center
	text-9xl
	font-mono
`;

export default QuestionWord;
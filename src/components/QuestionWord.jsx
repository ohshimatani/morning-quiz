
const QuestionWord = (props) => {
	return (
		<div className={divClass}>
			<p className={pClass}>{props.word}</p>
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
	w-2/3
	h-1/4
	text-center
	text-9xl
	font-mono
`;

export default QuestionWord;
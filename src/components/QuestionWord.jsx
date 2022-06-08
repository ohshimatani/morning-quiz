const coloredBorderClassName = "border-teal-500";
const borderClassName = "border-gray-500";

const QuestionWord = (props) => {
	if (props.isQuestionBoxColored) {
		return (
			<div className={divClass}>
				<p className={pClass + coloredBorderClassName}>{props.word}</p>
			</div>
			);
	} else {
		return (
		<div className={divClass}>
			<p className={pClass + borderClassName}>{props.word}</p>
		</div>
		);
	}
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
	rounded-xl
	p-20
	w-2/3
	h-1/4
	text-center
	text-9xl
	font-mono
`;

export default QuestionWord;
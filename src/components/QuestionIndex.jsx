
const QuestionIndex = (props) => {
	return (
		<p className={pClassName}>Question.{props.questionIndex}</p>
	);
}

const pClassName = `
	text-3xl
	text-center
	mt-10
	-mb-10
	underline
`;

export default QuestionIndex;


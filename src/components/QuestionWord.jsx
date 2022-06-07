
const word = "mkdir";

const qClass = `
	border-solid
	border-2
	border-gray-500
	rounded-xl
	inline-block
	text-center
	text-9xl
	font-mono
	m-10
	p-10
`;

function QuestionWord() {
	return (
		<p className={qClass}>
			{word}
		</p>
	);
}

export default QuestionWord;
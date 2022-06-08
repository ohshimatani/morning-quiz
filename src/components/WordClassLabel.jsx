const WordClassLabel = (props) => {
	return (
		<p className={pClassName}>category: {props.classLabel}</p>
	);
}

const pClassName = `
	text-3xl
	font-thin
	text-right
	w-5/6
	-mt-16
	mb-10
	pr-10
	underline
`;

export default WordClassLabel;
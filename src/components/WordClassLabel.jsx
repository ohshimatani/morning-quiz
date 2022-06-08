const WordClassLabel = (props) => {
	return (
		<p className={pClassName}>{props.classLabel}</p>
	);
}

const pClassName = `
	text-l
	text-thin
`;

export default WordClassLabel;
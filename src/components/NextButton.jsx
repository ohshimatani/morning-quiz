const NextButton = (props) => {
	return (
		<div className={wrapperClassName}>
			<button className={buttonClassName()} onClick={props.questionIndex}>Next</button>
		</div>
	)
}

let isAllow = false;

const wrapperClassName = `
	w-2/3
	mx-auto
	text-right
`;

const buttonClassName = () => {
	if (isAllow) {
		return (
			`text-3xl
			py-4
			px-8
			text-teal-500
			mt-4
			hover:text-teal-400
			`
		)
	} else {
		return (
			`text-3xl
			py-4
			px-8
			text-teal-500
			mt-4
			hover:text-teal-400
			cursor-not-allowed
			`
		);
	}
}


export default NextButton;
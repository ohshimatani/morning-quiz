const LabelAndNextButton = () => {
	return (
		<div className={wrapperClassName}>
			<button className={buttonClassName}>Next</button>
		</div>
	)
}

const wrapperClassName = `
	w-2/3
	mx-auto
	text-right
`;

const buttonClassName = `
	text-3xl
	py-4
	px-8
	text-teal-500
	mt-4
	hover:text-teal-400
`;


export default LabelAndNextButton;
function StartButton() {
	const thisClassName = `
		text-4xl
		text-center
		bg-blue-400
		p-8
		rounded-xl
		w-1/6
		hover:text-blue-50`;
	return (
		<div className={thisClassName}>スタート</div>
	);
};

export default StartButton;
function StartButton() {
	const thisClassName = `
		text-4xl
		text-center
		font-thin
		bg-blue-400
		p-8
		rounded-xl
		w-1/6
		mx-auto
		shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
		hover:text-blue-50
		hover:shadow-none
		hover:opacity-90
		`;
	return (
		<div className={thisClassName}>スタート</div>
	);
};

export default StartButton;
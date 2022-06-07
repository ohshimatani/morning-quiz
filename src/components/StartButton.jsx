const thisClassName = `
		text-4xl
		text-center
		font-thin
		bg-blue-400
		p-8
		rounded-xl
		w-1/6
		mx-auto
		duration-500
		shadow-[10px_10px_10px_rgba(0,0,0,0.3)]
		hover:text-blue-50
		hover:shadow-[0_0_10px_rgba(0,0,0,0)]
		hover:opacity-90
		`;

function StartButton(props) {
	return (
		<div className={thisClassName} onClick={props.onClick}>スタート</div>
	);
};

export default StartButton;
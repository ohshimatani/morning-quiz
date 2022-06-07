import StartTitle from "./StartTitle";
import StartButton from "./StartButton";
import React from "react";

function StartPage(props) {
	return (
		<div className={wrapperClass}>
			<StartTitle />
			<StartButton onClick={props.onClick}/>
		</div>
);
}

const wrapperClass = `
	h-screen
	flex
	justify-center
	items-center
`;

export default StartPage;
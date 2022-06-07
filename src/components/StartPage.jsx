import React from "react";
import StartTitle from "./StartTitle";
import StartButton from "./StartButton";


const StartPage = (props) => {
	return (
		<div className={wholeWrapperClassName}>
			<StartTitle />
			<StartButton onClick={props.onClick}/>
		</div>
);
}

const wholeWrapperClassName = `
	h-screens
	flex
	justify-center
	items-center
	flex-col
`;

export default StartPage;
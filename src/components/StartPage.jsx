import StartTitle from "./StartTitle";
import StartButton from "./StartButton";
import React from "react";

function StartPage() {
	const clickAlert = () => {
		alert('clicked!!!');
	};
	return (
		<React.Fragment>
			<StartTitle />
			<StartButton onClick={clickAlert}/>
		</React.Fragment>
);
}

export default StartPage;
import StartTitle from "./StartTitle";
import StartButton from "./StartButton";
import React from "react";

function StartPage(props) {
	return (
		<React.Fragment>
			<StartTitle />
			<StartButton onClick={props.setPageState}/>
		</React.Fragment>
);
}

export default StartPage;
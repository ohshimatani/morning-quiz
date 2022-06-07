import StartTitle from "./StartTitle";
import StartButton from "./StartButton";

function StartPage() {
	const clickAlert = () => {
		alert('clicked!!!');
	};
	return (
		<div>
			<StartTitle />
			<StartButton onClick={clickAlert}/>
		</div>
);
}

export default StartPage;
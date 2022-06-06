import React from 'react';
import StartTitle from './components/StartTitle';
import StartButton from './components/StartButton';

function App() {
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

export default App;

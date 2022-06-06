const allCenterStyle = "h-screen w-screen flex justify-center items-center";

const title = () => {
	return (
		<div className="font-bold">
			<h1 className="text-5xl text-center">忘れた頃にやってくる！IT略語クイズ！</h1>
			<h2 className="text-4xl text-center">〜気持ちいい朝を迎えよう〜</h2>
		</div>
	);
};
const button = () => {
	const thisClassName = "text-4xl bg-blue-400 p-8 rounded-xl inline-block hover:text-blue-50";
	return <div className={thisClassName}>スタート</div>;
};


function StartScene() {
	return (
		<div className={allCenterStyle}>
			{title()}
			{button()}
		</div>
	);
}

export default StartScene;
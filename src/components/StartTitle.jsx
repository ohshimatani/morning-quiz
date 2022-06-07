const StartTitle = () => {
	return (
		<div className={wrapperClass}>
			<h1 className={h1Class}>忘れた頃にやってくる！IT略語クイズ！</h1>
			<h2 className={h2Class}>〜楽しく学んで気持ちいい朝を迎えよう〜</h2>
		</div>
	);
};

const wrapperClass = `
	font-thin
`;

const h1Class = `
	text-5xl
	text-center
	m-10
`;

const h2Class = `
	text-4xl
	text-center
	m-8
`;

export default StartTitle;
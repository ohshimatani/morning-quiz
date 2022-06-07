const StartTitle = () => {
	return (
		<div className={titleWrapperClassName}>
			<h1 className={h1ClassName}>忘れた頃にやってくる！IT略語クイズ！</h1>
			<h2 className={h2ClassName}>〜楽しく学んで気持ちいい朝を迎えよう〜</h2>
		</div>
	);
};

const titleWrapperClassName = `
	font-thin
`;

const h1ClassName = `
	text-5xl
	text-center
	m-10
`;

const h2ClassName = `
	text-4xl
	text-center
	m-8
`;

export default StartTitle;
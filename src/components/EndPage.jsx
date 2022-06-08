const bigTextSize = "text-7xl";
const midTextSize = "text-5xl";
const smallTexSize = "text-4xl";


const EndPage = () => {
	return (
		<div className={wrapperClassName}>
			<h2 className={h2ClassName}>いい朝は迎えられました？</h2>
			<p className={pClassName}>このクイズの目的</p>
			<dl className={dlClassName}>
				<li className={liClassName}>エビングハウスへの仕返し</li>
				<li className={liClassName}>単なる記号の意味付け</li>
			</dl>
			<p className={pClassName}>使った技術</p>
			<dl className={dlClassName}>
				<li className={liClassName}>React (JSのフレームワーク)</li>
				<li className={liClassName}>TailwindCSS (CSSのフレームワーク)</li>
				<li className={liClassName}>
					<a className={linkClassName}href="https://github.com/ohshimatani/morning-quiz">https://github.com/ohshimatani/morning-quiz</a>
					(<span className={spanClassName}>refs.txt</span>だけでも見て！)
				</li>
			</dl>

		</div>
	);
}


const wrapperClassName = `
	
`;

const h2ClassName = `
	${bigTextSize}
	text-center
	p-10
	bg-blue-400
	text-white
	font-thin
`;

const pClassName = `
	${midTextSize}
	underline
	m-10
`;

const dlClassName = `
	${smallTexSize}
	ml-20
`;

const liClassName = `
	p-3
`;

const linkClassName = `
	p-3
	text-blue-400
	hover:text-blue-300
	underline
	text-xl
`;

const spanClassName = `
	font-mono
`;

export default EndPage;
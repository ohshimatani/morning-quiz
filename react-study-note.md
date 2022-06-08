# React勉強メモ

## create-react-appしたプロジェクトでTailwindCSSを使う

### 参考URL

- TailwindCSS with `create-react-app`
    
    設定ほんま大変やった…
    
    WebPackのこと、なんもわかってないから、落ち着いたらしっかり理解できるようにせんとあかんなぁ
    

[Install Tailwind CSS with Create React App - Tailwind CSS](https://tailwindcss.com/docs/guides/create-react-app)

- `create-react-app`のファイル構成・及び不要なファイルについて
    
    （逆に）初期に必要な最低限のファイルは，
    
    - `public/index.html`
    - `src/index.js, index.css, App.js`
    
    のみ
    

[Reactの身内向けチュートリアル（その１） - Qiita](https://qiita.com/zaburo/items/99dc965d273f1922deae)

## React Hooksの使い方など

### つまづきポイント

- `useState`利用時に，二層先の子コンポーネントに`useState`の更新関数を`props`を使って渡そうと思ったが，うまく行かなかった．
    
    ```jsx
    const [state, setState] = useState(false);
    ```
    
    ```jsx
    <StartPage onClick={setState(true)} />
    ```
    
    - **原因：**`props`の受け渡しは，変数でなくてはいけない（`setState(true)`は戻り値を持たないため，何も渡されず，その場で実行のみされる）
    - **解決策：**アロー関数にするなどして、関数を変数っぽく扱い、実行を子コンポーネントに委ねる（JSやTSでは関数はデータ型）。
    
    ```jsx
    <StartPage onClick={() => setState(true)} />
    ```
    
- macOSからWindowsにGitを通じてクローンしてきたとき、`npm start`ができなかった。
    - **原因：**そもそも`npm_modules`フォルダは`.gitignore`に含まれている。それぞれの端末にグローバルインストールされたnpmモジュールが違うため。
    - **解決策：**クローンしたプロジェクトで`npm install`を行う→`package.json`の情報に基づいて、npmのモジュールがローカルインストールされる。
    

### 参考URL

- `useContext`について
    
    `useContext`とは、複数階層を伴う親子関係にあるコンポーネント間において、値・データのやり取りを行うためのもの（それまでは`props`でバケツリレーを行う必要があった）
    

[[React] useContextの使い方を改めて確認してみた | DevelopersIO](https://dev.classmethod.jp/articles/react-i-checked-again-how-to-use-usecontext/)

- 

## Reactで嬉しいなぁと感じたこと

### コンポーネント単位でUIを構成できるので，構成的にWebページを作れる．

HTMLファイルにごちゃごちゃと記述し，CSSファイルにもごちゃごちゃと記述していると，いつの間にか一つのファイルの情報が膨大になってしまい，泣きそうになる．後述のTailwindCSS等のCSSフレームワークを使うことで，スタイルの記述もJSファイル（or JSXファイル）への記述にまとめることができ，とても便利（しかもJS内なので，変数を使ったりできてとても便利）．

### JSXが楽！

JSX（JavaScript XML）がとても楽．HTMLに似ているし，複数階層のタグツリーをまとめてコンポーネントとして管理できるので，宣言的で可読性が高くなる．

## TailwindCSSで嬉しいなぁと感じたこと

### JS内にスタイルを簡単に記述できる

例：こんな感じ

```jsx
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
				<li className={linkClassName}>https://github.com/ohshimatani/morning-quiz</li>
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
`;

export default EndPage;
```

### 結局CSSをしっかり理解しないと使いこなせなさそう

Bootstrapなどの他のCSSフレームワークと違って，「なんかようわからんけど，こうしたら綺麗なUIができた」みたいなことは少なめ．あくまでもclassの記述を簡略化しているにとどまっている（？）ので，結局CSSをしっかり理解することになる（嫌やけど）．
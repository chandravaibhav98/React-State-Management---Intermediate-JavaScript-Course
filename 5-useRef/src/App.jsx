import { useState, useRef, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	const [names, setNames] = useState([{ id: 'id', name: 'value' }]);

	const idRef = useRef(1);

	const onAddName = () => {
		setNames([
			...names,
			{ id: idRef.current++, name: inputRef.current.value },
		]);
		inputRef.current.value = '';
	};

	return (
		<div className="App">
			<div>
				<main>
					<h1>useRef</h1>
					<input
						type="text"
						ref={inputRef}
					/>
					<button onClick={onAddName}>Add Name</button>
					<hr />
					{names.map((name) => (
						<div key={name.name}>
							id: {name.id}; name: {name.name};
						</div>
					))}
				</main>
				<br />
				<hr />
			</div>
			<div>
				<a
					href="https://vitejs.dev"
					target="_blank"
					rel="noreferrer">
					<img
						src={viteLogo}
						className="logo"
						alt="Vite logo"
					/>
				</a>
				<a
					href="https://react.dev"
					target="_blank"
					rel="noreferrer">
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
}

export default App;

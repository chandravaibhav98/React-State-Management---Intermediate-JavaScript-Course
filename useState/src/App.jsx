import { useState } from 'react';
import './App.css';

function NameList() {
	const [list, setList] = useState(['Jack', 'Jayden', 'James']);
	const [name, setName] = useState(() => 'James');

	const onAddName = () => {
		setList([...list, name]);
		setName('');
	};

	return (
		<div>
			<ul>
				{list.map((name) => (
					<li key={name}>{name}</li>
				))}
			</ul>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={onAddName}>Add name</button>
		</div>
	);
}

function Counter() {
	const [count, setCount] = useState(10);

	function addOne() {
		setCount(count + 1);
	}

	return (
		<>
			<h6>Counter</h6>
			<button onClick={addOne}>
				{count} + 1 = {count}
			</button>
		</>
	);
}

function App() {
	return (
		<div>
			<h5>Vite + React</h5>
			<NameList />
			<Counter />
			<Counter />
			<Counter />
		</div>
	);
}

export default App;

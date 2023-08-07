import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const Stopwatch = () => {
	const [time, setTime] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setTime((t) => {
				console.log(t);
				return t + 1;
			});
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return <div>Time: {time}</div>;
};

function App() {
	const [names, setNames] = useState([]);

	useEffect(() => {
		fetch('/names.json')
			.then((response) => response.json())
			.then((data) => setNames(data));
	}, []);

	const [selectedNameDetails, setSelectedNameDetails] = useState(null);

	const onSelectedNameChange = (name) => {
		fetch(`/${name}.json`)
			.then((response) => response.json())
			.then((data) => setSelectedNameDetails(data));
	};

	return (
		<div>
			<div>
				useEffect
				<h5>Names:{names.join(', ')}</h5>
				<main>
					{names.map((name) => (
						<button
							key={name}
							onClick={() => onSelectedNameChange(name)}>
							{name}
						</button>
					))}
					<Stopwatch />
					<h6>{JSON.stringify(selectedNameDetails)}</h6>
				</main>
			</div>
		</div>
	);
}

export default App;

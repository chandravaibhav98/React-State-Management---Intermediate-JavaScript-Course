import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [names, setNames] = useState([]);

	useEffect(() => {
		fetch('/names.json')
			.then((response) => response.json())
			.then((data) => setNames(data));
	}, []);

	const [selectedName, setSelectedName] = useState(null);
	const [selectedNameDetails, setSelectedNameDetails] = useState(null);

	useEffect(() => {
        if (selectedName) {
            fetch(`/${selectedName}.json`)
				.then((response) => response.json())
				.then((data) => setSelectedNameDetails(data));
        }
	}, [selectedName]);

	return (
		<div>
			<div>
				useEffect
				<h5>Names:{names.join(', ')}</h5>
				<main>
					{names.map((name) => (
						<button
							key={name}
							onClick={() => setSelectedName(name)}>
							{name}
						</button>
					))}
					<h6>{selectedName}</h6>
					<h6>{JSON.stringify(selectedNameDetails)}</h6>
				</main>
			</div>
		</div>
	);
}

export default App;

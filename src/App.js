import { useState } from 'react';
import './App.css';

function App() {

	const [switchStuff, setSwitchStuff] = useState(true);

	return (
		<div className="App" style={{ backgroundColor: switchStuff ? "lightblue" : "darkblue", color: switchStuff ? "darkblue" : "lightblue" }}>
			<h1>{switchStuff ? "Es ist Tag ☀️" : "Es ist Nacht🌑"}</h1>
			<button onClick={() => setSwitchStuff(!switchStuff)}>
				{switchStuff ? "Wechsel zu Nacht" : "Wechsel zu Tag"}
			</button>
		</div>
	);
}

export default App;

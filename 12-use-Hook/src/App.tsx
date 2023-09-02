import { use } from "react";

const res = fetch("/data.json").then((res) => res.json());

function App() {
  const data = use(res);
    return (
        <div className="App">
            <h2>{JSON.stringify(data)}</h2>
        </div>
    );
}

export default App;
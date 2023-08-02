import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [names, setNames] = useState([]);

    useEffect(() => {
        fetch('/names.json')
            .then((response) => response.json())
            .then((data) => setNames(data))
    }, []);

    const [selectedName, setSelectedName] = useState(null);

        

  return (
    <>
        <div>
            <h5>Names:{names.join(", ")}</h5>
        </div>
    </>
  )
}

export default App

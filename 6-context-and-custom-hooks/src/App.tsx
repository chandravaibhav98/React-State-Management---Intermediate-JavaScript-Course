import { useState, useEffect,createContext,useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

function usePokemonSource() {
        const [pokemon, setPokemon] = useState<Pokemon[]>([]);
        
        useEffect(() => {
            fetch('/pokemon.json')
                .then((response) => response.json())
                .then((data) => setPokemon(data))
        }, []);
        
        return { pokemon };       
}
const PokemonContext = createContext<ReturnType<typeof usePokemonSource>>(
  {} as unknown as ReturnType<typeof usePokemonSource>
);

function usePokemon() {
    return useContext(PokemonContext);
}

const PokemonList = () => {
    const { pokemon } = usePokemon();
  return (
      <div>
      {pokemon.map((p) => (
          <div key={p.id}>
              | id: {p.id} | type: {p.type} | name: {p.name} | hp: {p.hp} |
        </div>
      ))}
    </div>
  );
};




function App() {
    const { pokemon } = usePokemon();

  return (
      <>
          <div>
              <main>
                  <PokemonContext.Provider value={usePokemonSource()} >    
                    <div className='Pokemon'>
                        <PokemonList />
                    </div>
                  </PokemonContext.Provider>
                  <hr />
              </main>
          </div>
      <h6>Vite + React</h6>      
    </>
  )
}

export default App

import './App.css'
import { useState, useEffect,createContext,useContext } from 'react'
import { usePokemon,PokemonProvider } from './store';

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
                  <PokemonProvider>
                      <PokemonList /> 
                  </PokemonProvider>
              </main>
          </div>
      <h6>Vite + React</h6>      
    </>
  )
}

export default App

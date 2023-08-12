import './App.css'
import { useState, useEffect,createContext,useContext } from 'react'
import { usePokemon,PokemonProvider } from './store';

const PokemonList = () => {
    const { pokemon } = usePokemon();
  return (
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-3">
      {pokemon.map((p) => (
          <div key={p.id}>
              | id: {p.id} | type: {p.type} | name: {p.name} | hp: {p.hp} |
        </div>
      ))}
    </ul>
  );
};


function App() {
    const { pokemon } = usePokemon();

  return (
      <>
                <h1 className="text-3xl font-bold underline">useContext & Custom Hooks</h1>
          <div>
              <main className='mx-auto max-w-3xl'>
                  <PokemonProvider>
                      <PokemonList /> 
                  </PokemonProvider>
              </main>
          </div>      
    </>
  )
}

export default App

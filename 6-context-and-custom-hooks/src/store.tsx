import { useState, useEffect,createContext,useContext } from 'react'

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

export function usePokemon() {
    return useContext(PokemonContext);
}

export function PokemonProvider({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <PokemonContext.Provider value={usePokemonSource()} >    
                    <div className='Pokemon'>
                        {children}
                    </div>
                  </PokemonContext.Provider>
                  <hr />
        </div>
    )
 }

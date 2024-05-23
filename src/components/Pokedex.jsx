import { useState, useEffect } from "react"

export default function Pokedex() {
    const [id, setId] = useState(1); //iniciando id com valor 1
    const [pokemon, setPokemon] = useState(null); //iniciando dado pokemon com valor nulo


    const fetchData = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();


            setPokemon(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [id]
    );

    const nextPokemon = () => {
        setId(id + 1);
    }
    const backPokemon = () => {
        if (id > 1) {
            setId(id - 1);
        }
    }

    return (
        <div className="pokedex">
            {pokemon && (
                <div className="pokemon">
                    <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_bJWzzRDRZdKc2qCh3S-fSXZltTBezmBjYYdh0uL8ng&s" alt="Pokemon" />
                    <div className="pokearea">
                        <div className="header">
                            <p><strong>Peso: </strong>{pokemon.weight}</p>
                        </div>
                        <h2>{pokemon.name}</h2>
                        <img className="pokeImg" src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
                        <div className="btnarea">
                            <button className="back" onClick={backPokemon}>Voltar</button>
                            <button className="next" onClick={nextPokemon}>Próximo</button>
                        </div>
                    </div>


                </div>
            )

            }
        </div>
    )
}
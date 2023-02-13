import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0);
  const [pokemonData, setPokemonData] = useState("");

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${page}`
        );
        const data = await response.json();
        setPokemon(data.results);
        setPokemonData(data.previous);
      } catch (error) {
        console.log(error);
      }
    }
    loadPokemon();
  }, [page]);

  return (
    <main>
      <button
        type="button"
        disabled={pokemonData === null ? true : false}
        onClick={() => {
          setPage(page - 20);
        }}
      >
        Previous Page
      </button>
      <button
        type="button"
        onClick={() => {
          setPage(page + 20);
        }}
      >
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}

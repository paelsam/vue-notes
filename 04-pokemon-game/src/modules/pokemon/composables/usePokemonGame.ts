import { computed, onMounted, ref } from 'vue';
import { GameStatus, type Pokemon, type PokemonListResponse } from '../interfaces';
import { pokemonAPI } from '../api/pokemonAPI';
import confetti from 'canvas-confetti';

export const usePokemonGame = () => {
  //! Reactive variables
  const gameStatus = ref<GameStatus>(GameStatus.Playing);
  const pokemons = ref<Pokemon[]>([]);
  const pokemonOptions = ref<Pokemon[]>([]);

  //! Computed methods

  //? Undefined 'cause pokemonOptions is empty in the begining
  const randomPokemon = computed<Pokemon | undefined>(() => {
    const pokemonOptionsLenght = pokemonOptions.value!.length;
    const randomPokemonIndex = Math.floor((pokemonOptionsLenght - 1) * Math.random());
    return pokemonOptions.value!.at(randomPokemonIndex);
  });
  const isLoading = computed<boolean>(() => pokemons.value.length === 0);

  //! Methods
  const getPokemons = async (): Promise<Pokemon[]> => {
    const response = await pokemonAPI.get<PokemonListResponse>('/?limit=251');
    const pokemonsArray: Pokemon[] = response.data.results.map((pokemon) => {
      return {
        name: pokemon.name,
        id: parseInt(pokemon.url.split('/').at(-2) as string),
      };
    });

    return pokemonsArray.sort(() => Math.random() - 0.5);
  };

  const getNewOptions = (howMany: number = 4) => {
    gameStatus.value = GameStatus.Playing;
    pokemonOptions.value = pokemons.value.slice(0, howMany); //! Añadiendo opciones aleatorias
    pokemons.value = pokemons.value.slice(howMany); //! Eliminando de la lista de pokemons
  };

  const checkAnswer = (id: number) => {
    const hasWon: boolean = randomPokemon.value!.id === id;

    if (hasWon) {
      gameStatus.value = GameStatus.Won;
      confetti({
        particleCount: 300,
        spread: 150,
        origin: { y: 0.6 },
      });
      return;
    }

    gameStatus.value = GameStatus.Lost;
  };

  const retryGame = () => {
    if (pokemons.value.length < 4) {
      getPokemons();
    }

    getNewOptions();
  };

  //! Life-cycle Hooks

  onMounted(async () => {
    await new Promise((r) => setTimeout(r, 200)); //! 200ms de espera
    pokemons.value = await getPokemons();
    getNewOptions();
  });

  return {
    // Refs
    gameStatus,
    pokemonOptions,

    // Computed
    isLoading,
    randomPokemon,

    // Methods
    getNextOptions: getNewOptions,
    checkAnswer,
    retryGame,
  };
};

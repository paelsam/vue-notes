<template>
  <section
    v-if="isLoading || !randomPokemon?.id"
    class="flex flex-col justify-center items-center w-screen h-screen"
  >
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokémons</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-2xl font-bold m-10">¿Who's that Pokemon?</h1>

    <!-- Pokemon Picture -->
    <PokemonPicture
      :pokemon-id="randomPokemon.id"
      :show-pokemon="gameStatus !== GameStatus.Playing"
    />

    <!-- Pokemon Options -->
    <PokemonOptions
      :options="options"
      :block-selection="gameStatus !== GameStatus.Playing"
      :correct-answer="randomPokemon.id"
      @selected-option="checkAnswer"
    />

    <!-- Retry game -->
    <button
      v-show="gameStatus !== GameStatus.Playing"
      @click="retryGame"
      class="bg-blue-400 font-bold capitalize shadow-md rounded-lg p-3 mt-5 cursor-pointer w-60 text-center"
    >
      Try again?
    </button>
  </section>
</template>

<script setup lang="ts">
import PokemonPicture from '@pokemon/components/PokemonPicture.vue';
import PokemonOptions from '@pokemon/components/PokemonOptions.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { GameStatus } from '../interfaces';

const {
  isLoading,
  randomPokemon,
  gameStatus,
  checkAnswer,
  retryGame,
  pokemonOptions: options,
} = usePokemonGame();
</script>

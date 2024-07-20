<template>
  <section class="w-full">
    <img
      :src="pokemonImage"
      class="min-w-[35%] md:min-w-[30%] lg:min-w-[25%] m-auto"
      :class="{ 'brightness-0': !showPokemon, 'fade-in': showPokemon }"
      :alt="altPokemonName"
    />
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  pokemonId: number;
  showPokemon: boolean;
}

const props = defineProps<Props>();

const pokemonImage = computed(
  () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonId}.svg`,
);
const altPokemonName = computed(() => `Pokemon #${props.pokemonId}`);
</script>

<style scoped>
img {
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
</style>

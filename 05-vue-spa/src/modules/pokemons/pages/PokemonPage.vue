<template>
  <section class="flex flex-col">
    <h1 class="text-3xl font-bold">
      Pokemon <small class="text-blue-500">#{{ id }}</small>
    </h1>

    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
      alt="Pokemon"
      class="w-[200px] h-[200px] mt-5"
    />

    <RouterLink
      class="bg-yellow-300 p-2 rounded mt-5 text-center hover:bg-yellow-500 transition-all"
      :to="{ name: 'pokemon-page', params: { id: id + 1 } }"
    >
      Next
    </RouterLink>
  </section>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';

interface Props {
  id: number;
}

const props = defineProps<Props>();

console.log({
  id: props.id,
});
</script>

<template>
  <section class="flex flex-col items-center mt-5 w-3/5">
    <button
      v-for="{ name, id } in options"
      :key="id"
      @click="$emit('selectedOption', id)"
      class="button-default disabled:shadow-none disabled:bg-gray-100"
      :class="{
        correct: correctAnswer === id && blockSelection,
        incorrect: correctAnswer !== id && blockSelection,
        'choose-hover': !blockSelection,
      }"
      :disabled="blockSelection"
    >
      {{ name }}
    </button>
  </section>
</template>

<script setup lang="ts">
import { type Pokemon } from '../interfaces';

interface Props {
  options: Pokemon[];
  blockSelection: boolean;
  correctAnswer: number;
}

const { options, blockSelection } = defineProps<Props>();

defineEmits<{
  selectedOption: [id: number];
}>();
</script>

<style scoped>
.button-default {
  @apply bg-white capitalize shadow-md rounded-lg p-3 mt-2 cursor-pointer w-40 text-center transition-all;
}

.choose-hover {
  @apply hover:bg-yellow-300;
}

.correct {
  @apply bg-green-400;
}

.incorrect {
  @apply bg-red-400;
}

.blocked-button {
  @apply bg-gray-500;
}
</style>

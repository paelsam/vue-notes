<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squaredCounter }}</h3>

    <div>
      <button @click="counter++">+1</button>
      <button @click="counter--">-1</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCounter } from '@/composables/useCounter';

interface Props {
  value: number;
}

const props = defineProps<Props>();

const { counter, squaredCounter } = useCounter(props.value);

// Definir propiedades como interfaces

// const counter = ref(props.value);
// const squaredCounter = computed(() => counter.value * counter.value);
</script>

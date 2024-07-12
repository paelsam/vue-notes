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

<script lang="ts">
import { useCounter } from '@/composables/useCounter';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {
    const { counter, squaredCounter } = useCounter(props.value);

    return {
      counter,
      squaredCounter,
    };
  },
});
</script>

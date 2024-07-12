<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squaredCounter }}</h3>

    <div>
      <button @click="counter++" class="btn-primary">+1</button>
      <button @click="counter--" class="btn-danger">-1</button>
    </div>
  </section>
</template>

<script lang="ts" src="./MyCounterScript2.ts"></script>

<style scoped>
.btn-primary {
  @apply m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
}

.btn-danger {
  @apply m-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded;
}
</style>

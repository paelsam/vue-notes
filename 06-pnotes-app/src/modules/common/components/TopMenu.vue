<template>
  <div
    class="flex items-center justify-between p-4 bg-base-content border-b border-neutral-content"
  >
    <h2 class="text-3xl font-bold text-white">
      <span class="text-neutral-content">P</span>-Notes 🐱
    </h2>
    <button @click="$emit('change', true)" class="btn bg-neutral-content btn-circle p-1">
      <ChangeTheme />
    </button>
  </div>
</template>

<script setup lang="ts">
import ChangeTheme from '../icons/ChangeTheme.vue';

defineEmits<{
  change: [boolean];
}>();
</script>

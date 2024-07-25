<template>
  <RouterView />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const dataTheme = ref<HTMLHtmlElement | null>(document.querySelector('html'));

if (!localStorage.getItem('theme')) localStorage.setItem('theme', dataTheme.value!.dataset.theme!);
dataTheme.value!.dataset.theme = localStorage.getItem('theme')!;
</script>

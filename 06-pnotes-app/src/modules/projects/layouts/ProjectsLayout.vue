<template>
  <div class="flex flex-col">
    <!-- Top Menu -->
    <TopMenu @change="changeTheme" />

    <main class="flex flex-row bg-neutral-content">
      <!-- Side menu -->
      <SideMenu />

      <!-- RouterView -->
      <RouterView />
    </main>
  </div>
</template>

<script lang="ts" setup>
import TopMenu from '@/modules/common/components/TopMenu.vue';
import { RouterView } from 'vue-router';
import SideMenu from '../components/SideMenu.vue';
import { ref } from 'vue';

//? Code to change theme

const dataTheme = ref<HTMLHtmlElement | null>(null);

const changeTheme = () => {
  dataTheme.value = document.querySelector('html');

  const actualTheme = localStorage.getItem('theme');

  if (actualTheme) {
    dataTheme.value!.dataset.theme = actualTheme;
  }

  if (actualTheme == 'cyberpunk') {
    dataTheme.value!.dataset.theme = 'cupcake';
  } else {
    dataTheme.value!.dataset.theme = 'cyberpunk';
  }

  return localStorage.setItem('theme', dataTheme.value!.dataset.theme);
};
</script>

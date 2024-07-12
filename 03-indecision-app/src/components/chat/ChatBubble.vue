<template>
  <!-- Messages go here -->
  <!-- Example Message -->
  <div v-if="itsMe" class="flex justify-end">
    <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">{{ message }}</div>
  </div>

  <!-- Example Received Message -->
  <div v-else class="flex">
    <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
      <span class="capitalize">{{ message }}</span>
      <img v-if="image" :src="image" class="w-30 h-30 object-cover rounded-md" alt="YesNoImage" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  message: string;
  itsMe: boolean;
  image?: string;
}

defineProps<Props>();
</script>

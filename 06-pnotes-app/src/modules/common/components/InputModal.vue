<template>
  <dialog class="modal" :open="open">
    <div class="modal-box">
      <h3 class="text-lg font-bold">{{ props.title }}</h3>
      <p v-if="props.subtitle" class="py-4">{{ props.subtitle }}</p>
      <div class="modal-action flex flex-col">
        <form method="dialog" @submit.prevent="submitValue">
          <input
            ref="inputRef"
            type="text"
            :placeholder="placeholder ?? 'Project name'"
            class="input input-bordered input-primary w-full flex-1 border-neutral rounded-lg"
            v-model="inputValue"
          />
          <!-- if there is a button in form, it will close the modal -->
          <div class="flex justify-end mt-5 gap-3">
            <button type="submit" class="btn btn-neutral">Save</button>
            <button @click.prevent="$emit('close')" class="btn">Close</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>

  <div
    v-if="open"
    class="modal-backdrop fixed top-0 left-0 z-10 bg-black opacity-60 w-screen h-screen"
  ></div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

interface Props {
  open: boolean;
  title: string;
  placeholder?: string;
  subtitle?: string;
}

const props = defineProps<Props>();

const emits = defineEmits<{
  close: [void];
  value: [text: string];
}>();

const inputValue = ref('');
const inputRef = ref<HTMLInputElement | null>(null);

watch(
  () => props.open,
  (open) => {
    if (open) {
      inputRef.value?.focus();
    }
  },
);

const submitValue = () => {
  if (!inputValue.value) {
    inputRef.value?.focus();
    return;
  }

  emits('value', inputValue.value.trim());
  emits('close');

  inputValue.value = '';
};
</script>

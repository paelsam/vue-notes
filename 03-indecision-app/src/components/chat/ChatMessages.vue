<template>
  <div ref="chatContainerRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <ChatBubble v-for="message in messages" :key="message.id" :="message" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatBubble from '@/components/chat/ChatBubble.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { ref, watch } from 'vue';

interface Props {
  messages: ChatMessage[];
}

const { messages } = defineProps<Props>();

const chatContainerRef = ref<HTMLDivElement | null>(null);

watch(messages, () => {
  setTimeout(() => {
    chatContainerRef.value?.scrollTo({
      top: chatContainerRef.value.scrollHeight,
      behavior: 'smooth',
    });
  }, 200);
});
</script>

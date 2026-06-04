<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon: string
  color: string
}>()

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button 
    @click="emit('click')"
    class="neon-border rounded-xl p-6 bg-space-deep/50 hover:bg-space-blue/50 transition-all card-hover text-left"
  >
    <div class="text-4xl mb-4">{{ icon }}</div>
    <h3 :class="['text-xl font-bold mb-2', color]">{{ title }}</h3>
    <p class="text-gray-400 text-sm">{{ description }}</p>
  </button>
</template>
<script setup lang="ts">
defineProps<{
  activeTab: string
}>()

const emit = defineEmits<{
  (e: 'navigate', tab: string): void
}>()

const navItems = [
  { id: 'home', label: '首页', icon: '🏠' },
  { id: 'games', label: '互动游戏', icon: '🎮' },
  { id: 'messages', label: '星际留言', icon: '💬' }
]
</script>

<template>
  <nav class="bg-space-deep/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center gap-3">
          <span class="text-3xl">🌌</span>
          <div>
            <h1 class="text-xl font-bold text-neon-blue glow-text">星痕空间站</h1>
            <p class="text-xs text-gray-500">蛰伏宇宙，置身黑暗森林</p>
          </div>
        </div>
        
        <div class="flex gap-4">
          <button 
            v-for="item in navItems" 
            :key="item.id"
            @click="emit('navigate', item.id)"
            :class="[
              'flex items-center gap-2 px-4 py-2 rounded-lg transition-all',
              activeTab === item.id 
                ? 'bg-neon-blue/20 text-neon-blue' 
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            ]"
          >
            <span>{{ item.icon }}</span>
            <span>{{ item.label }}</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
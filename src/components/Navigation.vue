<script setup lang="ts">
defineProps<{
  activeTab: string
}>()

const emit = defineEmits<{
  (e: 'navigate', tab: string): void
}>()

const navItems = [
  { id: 'home', label: '首页' },
  { id: 'games', label: '互动游戏' },
  { id: 'scenes', label: '经典场景' },
  { id: 'redshore', label: '红岸基地' },
  { id: 'wallfacers', label: '面壁者' },
  { id: 'swordsman', label: '执剑人' },
  { id: 'fairy', label: '云天明童话' },
  { id: 'encyclopedia', label: '三体百科' },
  { id: 'community', label: 'UGC社区' },
  { id: 'messages', label: '星际留言' }
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
              'px-4 py-2 rounded-lg transition-all text-sm',
              activeTab === item.id 
                ? 'bg-neon-blue/20 text-neon-blue' 
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            ]"
          >
            {{ item.label }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
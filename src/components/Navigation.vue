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
  <nav class="bg-space-deep/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800 overflow-x-auto">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center gap-6 py-3">
        <div class="flex items-center gap-3 flex-shrink-0">
          <span class="text-2xl">🌌</span>
          <div>
            <h1 class="text-lg font-bold text-neon-blue">星痕空间站</h1>
            <p class="text-xs text-gray-500">蛰伏宇宙，置身黑暗森林</p>
          </div>
        </div>
        
        <div class="flex gap-2 flex-wrap">
          <button 
            v-for="item in navItems" 
            :key="item.id"
            @click="emit('navigate', item.id)"
            :class="[
              'px-3 py-1.5 rounded-lg transition-all text-xs whitespace-nowrap',
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
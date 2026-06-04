<script setup lang="ts">import { ref } from 'vue';
import { drawRandomIdentity, type StarIdentity } from '@/utils/gameLogic';
const identity = ref<StarIdentity | null>(null);
const isDrawing = ref(false);
function draw() {
 isDrawing.value = true;
 setTimeout(() => {
 identity.value = drawRandomIdentity();
 isDrawing.value = false;
 }, 1500);
}
function reset() {
 identity.value = null;
}
function getIdentityColor(name: string): string {
 const colors: Record<string, string> = {
 '三体士兵': 'text-gray-400',
 '太空舰长': 'text-neon-blue',
 '歌者': 'text-neon-purple',
 '归零者': 'text-neon-green',
 '地球人': 'text-white',
 '水滴探测器': 'text-cyan-400',
 '面壁者': 'text-neon-yellow',
 '执剑人': 'text-neon-red'
 };
 return colors[name] || 'text-white';
}
</script>

<template>
  <div class="min-h-screen p-6">
    <div class="max-w-2xl mx-auto">
      <h2 class="text-2xl font-bold text-cyan-400 mb-6 glow-text">随机星际身份抽签</h2>
      <p class="text-gray-400 mb-8">点击抽取你的星际身份，看看你在黑暗森林中是谁</p>
      
      <div class="neon-border rounded-lg p-6 text-center space-y-6">
        <div v-if="!identity" class="space-y-6">
          <div class="text-8xl animate-float">🔮</div>
          <button 
            @click="draw"
            :disabled="isDrawing"
            class="w-full bg-gradient-to-r from-cyan-500 to-neon-purple text-white font-bold py-4 rounded-lg hover:opacity-80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="isDrawing" class="flex items-center justify-center gap-2">
              <span class="animate-spin">🔄</span>
              正在抽取...
            </span>
            <span v-else>抽取身份</span>
          </button>
        </div>
        
        <div v-else class="space-y-6">
          <div class="text-8xl mb-4 animate-bounce">{{ identity?.avatar }}</div>
          <h3 :class="['text-3xl font-bold', getIdentityColor(identity?.name || '')]">
            {{ identity?.name }}
          </h3>
          <p class="text-gray-300 leading-relaxed">{{ identity?.description }}</p>
          
          <button 
            @click="reset"
            class="w-full bg-gray-700 text-white font-bold py-3 rounded-lg hover:bg-gray-600 transition-all"
          >
            再次抽取
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
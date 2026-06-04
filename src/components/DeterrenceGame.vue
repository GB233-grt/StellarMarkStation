<script setup lang="ts">import { ref } from 'vue';
import { simulateDeterrence, type DeterrenceResult } from '@/utils/gameLogic';
const showResult = ref(false);
const result = ref<DeterrenceResult | null>(null);
const countdown = ref(10);
const isCounting = ref(false);
let timer: ReturnType<typeof setInterval> | null = null;
function startCountdown() {
 isCounting.value = true;
 countdown.value = 10;
 timer = setInterval(() => {
 countdown.value--;
 if (countdown.value <= 0) {
 if (timer)
 clearInterval(timer);
 isCounting.value = false;
 makeChoice('release');
 }
 }, 1000);
}
function makeChoice(choice: 'press' | 'release') {
 if (timer)
 clearInterval(timer);
 isCounting.value = false;
 result.value = simulateDeterrence(choice);
 showResult.value = true;
}
function reset() {
 showResult.value = false;
 result.value = null;
 countdown.value = 10;
 isCounting.value = false;
}
</script>

<template>
  <div class="min-h-screen p-6">
    <div class="max-w-2xl mx-auto">
      <h2 class="text-2xl font-bold text-neon-red mb-6 glow-text">执剑人压力测试</h2>
      <p class="text-gray-400 mb-8">三体舰队已经抵达太阳系边缘，你手握引力波发射器的开关...</p>
      
      <div v-if="!showResult" class="space-y-6">
        <div class="neon-border rounded-lg p-6 text-center">
          <div class="text-6xl mb-4">⚔️</div>
          <h3 class="text-xl font-semibold text-white mb-2">威慑倒计时</h3>
          <p class="text-gray-400 mb-6">选择是否按下引力波发射器</p>
          
          <div v-if="isCounting" class="mb-8">
            <div class="text-6xl font-bold text-neon-red mb-4">{{ countdown }}</div>
            <p class="text-gray-500">时间耗尽将自动放弃威慑</p>
          </div>
          
          <div class="flex gap-4">
            <button
              @click="makeChoice('press')"
              :disabled="isCounting"
              class="flex-1 bg-neon-red text-white font-bold py-4 rounded-lg hover:bg-opacity-80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              📡 按下发射器
            </button>
            <button
              @click="makeChoice('release')"
              :disabled="isCounting"
              class="flex-1 bg-gray-600 text-white font-bold py-4 rounded-lg hover:bg-gray-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              🤝 放弃威慑
            </button>
          </div>
          
          <button
            v-if="!isCounting"
            @click="startCountdown"
            class="mt-6 text-gray-500 hover:text-neon-blue transition-colors"
          >
            开始限时挑战（10秒）
          </button>
        </div>
      </div>
      
      <div v-else class="neon-border rounded-lg p-6 space-y-6">
        <div class="text-center">
          <div class="text-6xl mb-4">
            {{ result?.choice === 'press' ? '📡' : '🤝' }}
          </div>
          <h3 :class="['text-2xl font-bold mb-4', result?.choice === 'press' ? 'text-neon-red' : 'text-neon-yellow']">
            {{ result?.choice === 'press' ? '威慑启动' : '威慑失败' }}
          </h3>
        </div>
        
        <p class="text-gray-300 leading-relaxed">{{ result?.outcome }}</p>
        
        <button 
          @click="reset"
          class="w-full bg-gray-700 text-white font-bold py-3 rounded-lg hover:bg-gray-600 transition-all"
        >
          重新测试
        </button>
      </div>
    </div>
  </div>
</template>
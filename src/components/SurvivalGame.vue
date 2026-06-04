<script setup lang="ts">import { ref, computed } from 'vue';
import { survivalScenarios, calculateSurvival, type SurvivalResult } from '@/utils/gameLogic';
const currentScenario = ref(0);
const selectedOptions = ref<string[]>([]);
const showResult = ref(false);
const result = ref<SurvivalResult | null>(null);
const current = computed(() => survivalScenarios[currentScenario.value]);
function toggleOption(id: string) {
 const index = selectedOptions.value.indexOf(id);
 if (index > -1) {
 selectedOptions.value.splice(index, 1);
 } else {
 selectedOptions.value.push(id);
 }
}
function submit() {
 if (selectedOptions.value.length === 0)
 return;
 result.value = calculateSurvival(selectedOptions.value, currentScenario.value);
 showResult.value = true;
}
function reset() {
 currentScenario.value = 0;
 selectedOptions.value = [];
 showResult.value = false;
 result.value = null;
}
function nextScenario() {
 if (currentScenario.value < survivalScenarios.length - 1) {
 currentScenario.value++;
 selectedOptions.value = [];
 showResult.value = false;
 result.value = null;
 }
}
</script>

<template>
  <div class="min-h-screen p-6">
    <div class="max-w-2xl mx-auto">
      <h2 class="text-2xl font-bold text-neon-yellow mb-6 glow-text">三体行星生存试炼</h2>
      <p class="text-gray-400 mb-8">三星乱纪元降临，选择正确的生存方案让文明延续</p>
      
      <div v-if="!showResult" class="space-y-6">
        <div class="bg-space-deep rounded-lg p-2">
          <div class="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div 
              class="h-full bg-gradient-to-r from-neon-yellow to-neon-red transition-all duration-500"
              :style="{ width: `${((currentScenario + 1) / survivalScenarios.length) * 100}%` }"
            />
          </div>
          <p class="text-gray-500 text-sm mt-2 text-center">
            试炼 {{ currentScenario + 1 }} / {{ survivalScenarios.length }}
          </p>
        </div>
        
        <div class="neon-border rounded-lg p-6">
          <div class="flex items-center gap-3 mb-6">
            <span class="text-4xl">🌠</span>
            <h3 class="text-xl font-semibold text-white">{{ current.scenario }}</h3>
          </div>
          
          <p class="text-gray-400 mb-6">请选择多个你认为正确的生存方案：</p>
          
          <div class="space-y-3">
            <button
              v-for="option in current.options"
              :key="option.id"
              @click="toggleOption(option.id)"
              :class="[
                'w-full text-left rounded-lg px-4 py-3 transition-all',
                selectedOptions.includes(option.id)
                  ? 'bg-neon-yellow/20 border border-neon-yellow text-neon-yellow'
                  : 'bg-space-deep border border-gray-700 hover:border-neon-yellow/50'
              ]"
            >
              <span class="mr-3">{{ ['A', 'B', 'C', 'D'][current.options.indexOf(option)] }}.</span>
              <span>{{ option.text }}</span>
            </button>
          </div>
        </div>
        
        <button 
          @click="submit"
          :disabled="selectedOptions.length === 0"
          class="w-full bg-neon-yellow text-space-dark font-bold py-3 rounded-lg hover:bg-opacity-80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          提交方案
        </button>
      </div>
      
      <div v-else class="neon-border rounded-lg p-6 space-y-6">
        <div class="text-center">
          <div class="text-6xl mb-4">{{ result?.survived ? '✅' : '💀' }}</div>
          <h3 :class="['text-2xl font-bold mb-4', result?.survived ? 'text-neon-green' : 'text-neon-red']">
            {{ result?.survived ? '文明延续' : '文明覆灭' }}
          </h3>
        </div>
        
        <p class="text-gray-300 leading-relaxed">{{ result?.message }}</p>
        
        <div v-if="currentScenario < survivalScenarios.length - 1" class="flex gap-4">
          <button 
            @click="nextScenario"
            class="flex-1 bg-neon-yellow text-space-dark font-bold py-3 rounded-lg hover:bg-opacity-80 transition-all"
          >
            下一关
          </button>
          <button 
            @click="reset"
            class="flex-1 bg-gray-700 text-white font-bold py-3 rounded-lg hover:bg-gray-600 transition-all"
          >
            重新开始
          </button>
        </div>
        
        <button v-else 
          @click="reset"
          class="w-full bg-gray-700 text-white font-bold py-3 rounded-lg hover:bg-gray-600 transition-all"
        >
          重新挑战全部关卡
        </button>
      </div>
    </div>
  </div>
</template>
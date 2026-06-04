<script setup lang="ts">import { ref } from 'vue';
import { type WallfacerPlan, simulateWallfacer, type WallfacerResult } from '@/utils/gameLogic';
const strategy = ref('');
const showResult = ref(false);
const result = ref<WallfacerResult | null>(null);
const isAnalyzing = ref(false);
function submit() {
 if (!strategy.value.trim())
 return;
 isAnalyzing.value = true;
 setTimeout(() => {
 const plan: WallfacerPlan = { strategy: strategy.value };
 result.value = simulateWallfacer(plan);
 isAnalyzing.value = false;
 showResult.value = true;
 }, 2000);
}
function reset() {
 strategy.value = '';
 showResult.value = false;
 result.value = null;
 isAnalyzing.value = false;
}
</script>

<template>
  <div class="min-h-screen p-6">
    <div class="max-w-2xl mx-auto">
      <h2 class="text-2xl font-bold text-neon-purple mb-6 glow-text">面壁计划推演器</h2>
      <p class="text-gray-400 mb-8">作为面壁者，提出你的战略计划，让破壁人来分析...</p>
      
      <div v-if="!showResult" class="space-y-6">
        <div>
          <label class="block text-gray-300 mb-2">你的面壁策略</label>
          <textarea 
            v-model="strategy"
            rows="6"
            placeholder="描述你的战略计划，包括目标、实施步骤和预期效果..."
            class="w-full bg-space-deep border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon-purple focus:outline-none resize-none"
          />
        </div>
        
        <button 
          @click="submit"
          :disabled="!strategy.trim() || isAnalyzing"
          class="w-full bg-neon-purple text-white font-bold py-3 rounded-lg hover:bg-opacity-80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="isAnalyzing" class="flex items-center justify-center gap-2">
            <span class="animate-spin">🔄</span>
            破壁人正在分析...
          </span>
          <span v-else>提交策略</span>
        </button>
      </div>
      
      <div v-else class="neon-border rounded-lg p-6 space-y-6">
        <div class="text-center">
          <div class="text-6xl mb-4">{{ result?.success ? '✅' : '❌' }}</div>
          <h3 :class="['text-2xl font-bold mb-4', result?.success ? 'text-neon-green' : 'text-neon-red']">
            {{ result?.success ? '计划成功' : '计划失败' }}
          </h3>
        </div>
        
        <div class="bg-space-deep rounded-lg p-4">
          <p class="text-gray-400 text-sm mb-2">你的策略：</p>
          <p class="text-white">{{ strategy }}</p>
        </div>
        
        <div class="bg-space-deep rounded-lg p-4">
          <p class="text-gray-400 text-sm mb-2">破壁人剖析：</p>
          <p class="text-gray-200">{{ result?.analysis }}</p>
        </div>
        
        <button 
          @click="reset"
          class="w-full bg-gray-700 text-white font-bold py-3 rounded-lg hover:bg-gray-600 transition-all"
        >
          重新推演
        </button>
      </div>
    </div>
  </div>
</template>
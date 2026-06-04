<script setup lang="ts">import { ref, computed } from 'vue';
import { civilizationQuestions, calculateKardashevLevel, type KardashevResult } from '@/utils/gameLogic';
const currentQuestion = ref(0);
const answers = ref<number[]>([]);
const showResult = ref(false);
const result = ref<KardashevResult | null>(null);
const current = computed(() => civilizationQuestions[currentQuestion.value]);
const progress = computed(() => ((currentQuestion.value + 1) / civilizationQuestions.length) * 100);
function selectAnswer(score: number) {
 answers.value[currentQuestion.value] = score;
 if (currentQuestion.value < civilizationQuestions.length - 1) {
 currentQuestion.value++;
 }
 else {
 result.value = calculateKardashevLevel(answers.value);
 showResult.value = true;
 }
}
function reset() {
 currentQuestion.value = 0;
 answers.value = [];
 showResult.value = false;
 result.value = null;
}
function getLevelColor(level: number): string {
 switch (level) {
 case 1: return 'text-gray-400';
 case 2: return 'text-neon-green';
 case 3: return 'text-neon-blue';
 case 4: return 'text-neon-purple';
 default: return 'text-white';
 }
}
function getLevelStars(level: number): string {
 return '⭐'.repeat(level) + '☆'.repeat(4 - level);
}
</script>

<template>
  <div class="min-h-screen p-6">
    <div class="max-w-2xl mx-auto">
      <h2 class="text-2xl font-bold text-neon-green mb-6 glow-text">文明等级测评</h2>
      <p class="text-gray-400 mb-8">回答以下问题，测试你的文明达到了卡尔达肖夫指数的哪个等级</p>
      
      <div v-if="!showResult" class="space-y-6">
        <div class="bg-space-deep rounded-lg p-2">
          <div class="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div 
              class="h-full bg-gradient-to-r from-neon-green to-neon-blue transition-all duration-500"
              :style="{ width: `${progress}%` }"
            />
          </div>
          <p class="text-gray-500 text-sm mt-2 text-center">
            问题 {{ currentQuestion + 1 }} / {{ civilizationQuestions.length }}
          </p>
        </div>
        
        <div class="neon-border rounded-lg p-6">
          <h3 class="text-xl font-semibold text-white mb-6">{{ current.question }}</h3>
          
          <div class="space-y-3">
            <button
              v-for="(option, index) in current.options"
              :key="index"
              @click="selectAnswer(current.scores[index])"
              class="w-full text-left bg-space-deep border border-gray-700 rounded-lg px-4 py-3 hover:border-neon-green hover:bg-space-blue transition-all"
            >
              <span class="text-neon-green mr-3">{{ ['A', 'B', 'C', 'D'][index] }}.</span>
              <span class="text-gray-200">{{ option }}</span>
            </button>
          </div>
        </div>
      </div>
      
      <div v-else class="neon-border rounded-lg p-6 space-y-6">
        <div class="text-center">
          <div class="text-6xl mb-4">🌍</div>
          <h3 :class="['text-3xl font-bold mb-2', getLevelColor(result?.level || 1)]">
            卡尔达肖夫 {{ result?.level }} 型文明
          </h3>
          <p class="text-xl text-gray-400 mb-4">{{ result?.name }}</p>
          <p class="text-4xl">{{ getLevelStars(result?.level || 1) }}</p>
        </div>
        
        <p class="text-gray-300 leading-relaxed">{{ result?.description }}</p>
        
        <div class="grid grid-cols-4 gap-2 text-center">
          <div :class="['p-3 rounded-lg', result?.level >= 1 ? 'bg-neon-green/20 text-neon-green' : 'bg-gray-800 text-gray-600']">
            <div class="text-xl">1</div>
            <div class="text-xs">行星文明</div>
          </div>
          <div :class="['p-3 rounded-lg', result?.level >= 2 ? 'bg-neon-green/20 text-neon-green' : 'bg-gray-800 text-gray-600']">
            <div class="text-xl">2</div>
            <div class="text-xs">恒星文明</div>
          </div>
          <div :class="['p-3 rounded-lg', result?.level >= 3 ? 'bg-neon-blue/20 text-neon-blue' : 'bg-gray-800 text-gray-600']">
            <div class="text-xl">3</div>
            <div class="text-xs">银河文明</div>
          </div>
          <div :class="['p-3 rounded-lg', result?.level >= 4 ? 'bg-neon-purple/20 text-neon-purple' : 'bg-gray-800 text-gray-600']">
            <div class="text-xl">4</div>
            <div class="text-xs">宇宙文明</div>
          </div>
        </div>
        
        <button 
          @click="reset"
          class="w-full bg-gray-700 text-white font-bold py-3 rounded-lg hover:bg-gray-600 transition-all"
        >
          重新测评
        </button>
      </div>
    </div>
  </div>
</template>
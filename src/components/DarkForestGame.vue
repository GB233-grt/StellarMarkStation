<script setup lang="ts">import { ref } from 'vue';
import { type Civilization, calculateDarkForestOutcome, type Outcome } from '@/utils/gameLogic';
const civName = ref('');
const coordX = ref(0);
const coordY = ref(0);
const coordZ = ref(0);
const civSize = ref<'small' | 'medium' | 'large' | 'galaxy'>('medium');
const showResult = ref(false);
const outcome = ref<Outcome | null>(null);
const sizes = [
 { value: 'small', label: '小型文明' },
 { value: 'medium', label: '中型文明' },
 { value: 'large', label: '大型文明' },
 { value: 'galaxy', label: '星系级文明' }
];
function submit() {
 if (!civName.value.trim())
 return;
 const civ: Civilization = {
 name: civName.value,
 x: coordX.value,
 y: coordY.value,
 z: coordZ.value,
 size: civSize.value
 };
 outcome.value = calculateDarkForestOutcome(civ);
 showResult.value = true;
}
function reset() {
 civName.value = '';
 coordX.value = 0;
 coordY.value = 0;
 coordZ.value = 0;
 civSize.value = 'medium';
 showResult.value = false;
 outcome.value = null;
}
function getOutcomeColor(type: string): string {
 switch (type) {
 case 'clean': return 'text-neon-red';
 case 'lock': return 'text-neon-yellow';
 case 'hide': return 'text-neon-green';
 default: return 'text-neon-blue';
 }
}
</script>

<template>
  <div class="min-h-screen p-6">
    <div class="max-w-2xl mx-auto">
      <h2 class="text-2xl font-bold text-neon-blue mb-6 glow-text">黑暗森林坐标模拟器</h2>
      <p class="text-gray-400 mb-8">在宇宙中广播你的文明坐标，看看会发生什么...</p>
      
      <div v-if="!showResult" class="space-y-6">
        <div>
          <label class="block text-gray-300 mb-2">文明名称</label>
          <input 
            v-model="civName"
            type="text" 
            placeholder="输入你的文明名称"
            class="w-full bg-space-deep border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon-blue focus:outline-none"
          />
        </div>
        
        <div>
          <label class="block text-gray-300 mb-2">三维坐标</label>
          <div class="grid grid-cols-3 gap-4">
            <div>
              <label class="text-gray-500 text-sm">X</label>
              <input 
                v-model.number="coordX"
                type="number" 
                class="w-full bg-space-deep border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-neon-blue focus:outline-none"
              />
            </div>
            <div>
              <label class="text-gray-500 text-sm">Y</label>
              <input 
                v-model.number="coordY"
                type="number" 
                class="w-full bg-space-deep border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-neon-blue focus:outline-none"
              />
            </div>
            <div>
              <label class="text-gray-500 text-sm">Z</label>
              <input 
                v-model.number="coordZ"
                type="number" 
                class="w-full bg-space-deep border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-neon-blue focus:outline-none"
              />
            </div>
          </div>
        </div>
        
        <div>
          <label class="block text-gray-300 mb-2">文明体量</label>
          <select 
            v-model="civSize"
            class="w-full bg-space-deep border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-neon-blue focus:outline-none"
          >
            <option v-for="size in sizes" :key="size.value" :value="size.value">
              {{ size.label }}
            </option>
          </select>
        </div>
        
        <button 
          @click="submit"
          :disabled="!civName.trim()"
          class="w-full bg-neon-blue text-space-dark font-bold py-3 rounded-lg hover:bg-opacity-80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          广播坐标
        </button>
      </div>
      
      <div v-else class="neon-border rounded-lg p-6 space-y-6">
        <div class="text-center">
          <div class="text-6xl mb-4">🌌</div>
          <h3 :class="['text-2xl font-bold mb-4', getOutcomeColor(outcome?.type || '')]">
            {{ outcome?.title }}
          </h3>
        </div>
        
        <p class="text-gray-300 leading-relaxed">{{ outcome?.description }}</p>
        
        <button 
          @click="reset"
          class="w-full bg-gray-700 text-white font-bold py-3 rounded-lg hover:bg-gray-600 transition-all"
        >
          重新模拟
        </button>
      </div>
    </div>
  </div>
</template>
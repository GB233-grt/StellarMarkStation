<script setup lang="ts">
import { ref, computed } from 'vue'
import StarBackground from '@/components/StarBackground.vue'
import Navigation from '@/components/Navigation.vue'
import HeroCarousel from '@/components/HeroCarousel.vue'
import GameCard from '@/components/GameCard.vue'
import DarkForestGame from '@/components/DarkForestGame.vue'
import WallfacerGame from '@/components/WallfacerGame.vue'
import CivilizationTest from '@/components/CivilizationTest.vue'
import DeterrenceGame from '@/components/DeterrenceGame.vue'
import SurvivalGame from '@/components/SurvivalGame.vue'
import IdentityGame from '@/components/IdentityGame.vue'
import MessageWall from '@/components/MessageWall.vue'

const activeTab = ref('home')
const activeGame = ref<string | null>(null)

const games = [
  { id: 'darkforest', title: '黑暗森林坐标模拟器', description: '在宇宙中广播你的文明坐标', icon: '🌑', color: 'text-neon-blue' },
  { id: 'wallfacer', title: '面壁计划推演器', description: '提出你的战略计划，让破壁人分析', icon: '🧠', color: 'text-neon-purple' },
  { id: 'civilization', title: '文明等级测评', description: '测试你的卡尔达肖夫文明等级', icon: '🌍', color: 'text-neon-green' },
  { id: 'deterrence', title: '执剑人压力测试', description: '限时选择威慑开关，决定人类命运', icon: '⚔️', color: 'text-neon-red' },
  { id: 'survival', title: '三体行星生存试炼', description: '模拟三星乱纪元，选择生存方案', icon: '🌠', color: 'text-neon-yellow' },
  { id: 'identity', title: '随机星际身份抽签', description: '抽取你的星际角色身份', icon: '🔮', color: 'text-cyan-400' }
]

const showHome = computed(() => activeTab.value === 'home' && !activeGame.value)
const showGames = computed(() => activeTab.value === 'games' && !activeGame.value)
const showMessages = computed(() => activeTab.value === 'messages')

function navigate(tab: string) {
  activeTab.value = tab
  activeGame.value = null
}

function openGame(gameId: string) {
  activeGame.value = gameId
}

function closeGame() {
  activeGame.value = null
}
</script>

<template>
  <div class="min-h-screen bg-space-dark text-white">
    <StarBackground />
    
    <Navigation :active-tab="activeTab" @navigate="navigate" />
    
    <main class="relative z-10 max-w-6xl mx-auto px-6 py-8">
      <div v-if="activeGame" class="mb-6">
        <button 
          @click="closeGame"
          class="flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors"
        >
          <span>←</span>
          <span>返回游戏列表</span>
        </button>
      </div>
      
      <div v-if="showHome" class="space-y-8">
        <HeroCarousel />
        
        <section>
          <h2 class="text-2xl font-bold text-white mb-6">趣味互动专区</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <GameCard
              v-for="game in games"
              :key="game.id"
              :title="game.title"
              :description="game.description"
              :icon="game.icon"
              :color="game.color"
              @click="openGame(game.id)"
            />
          </div>
        </section>
        
        <section class="text-center py-12">
          <div class="text-6xl mb-4">🌌</div>
          <h2 class="text-3xl font-bold text-white mb-4 glow-text">星痕空间站</h2>
          <p class="text-gray-400 max-w-2xl mx-auto">
            欢迎来到黑暗森林的边缘。在这里，你将体验三体宇宙中的各种场景，
            从坐标广播到面壁计划，从文明测评到生存试炼。每一个选择都可能决定文明的命运。
          </p>
        </section>
      </div>
      
      <div v-else-if="showGames" class="space-y-6">
        <h2 class="text-2xl font-bold text-white mb-6">趣味互动专区</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <GameCard
            v-for="game in games"
            :key="game.id"
            :title="game.title"
            :description="game.description"
            :icon="game.icon"
            :color="game.color"
            @click="openGame(game.id)"
          />
        </div>
      </div>
      
      <div v-else-if="showMessages">
        <MessageWall />
      </div>
      
      <div v-else-if="activeGame === 'darkforest'">
        <DarkForestGame />
      </div>
      
      <div v-else-if="activeGame === 'wallfacer'">
        <WallfacerGame />
      </div>
      
      <div v-else-if="activeGame === 'civilization'">
        <CivilizationTest />
      </div>
      
      <div v-else-if="activeGame === 'deterrence'">
        <DeterrenceGame />
      </div>
      
      <div v-else-if="activeGame === 'survival'">
        <SurvivalGame />
      </div>
      
      <div v-else-if="activeGame === 'identity'">
        <IdentityGame />
      </div>
    </main>
    
    <footer class="relative z-10 border-t border-gray-800 py-8 mt-12">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <p class="text-gray-500 text-sm">
          星痕空间站 · 蛰伏宇宙，置身黑暗森林
        </p>
      </div>
    </footer>
  </div>
</template>
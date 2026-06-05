<script setup lang="ts">
import { ref } from 'vue'

interface Wallfacer {
  id: string
  name: string
  title: string
  country: string
  image: string
  strategy: string
  analysis: string
  outcome: string
  breaker?: string
}

const wallfacers: Wallfacer[] = [
  {
    id: 'frederick',
    name: '弗里德里克·泰勒',
    title: '美国前国防部长',
    country: '🇺🇸 美国',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
    strategy: '泰勒计划的核心是组建一支由人类士兵组成的"量子幽灵部队"。他计划利用宏原子技术将士兵量子化，使其能够以概率云的形式存在，从而规避三体探测器的攻击。',
    analysis: '破壁人认为泰勒的计划存在根本性缺陷：量子态的士兵无法维持意识和记忆，即使成功量子化，他们也将成为没有自我意识的幽灵，无法执行任何战略任务。',
    outcome: '失败 - 计划被破壁人看穿后，泰勒在罗辑的庄园中开枪自杀。',
    breaker: '三体破壁人一号'
  },
  {
    id: 'manuel',
    name: '曼努尔·雷迪亚兹',
    title: '委内瑞拉总统',
    country: '🇻🇪 委内瑞拉',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
    strategy: '雷迪亚兹计划在水星上引爆大量氢弹，改变水星轨道使其撞击太阳，引发太阳爆炸，以此作为与三体文明同归于尽的终极威慑手段。',
    analysis: '破壁人揭示了该计划的致命弱点：人类无法在水星上部署足够数量的氢弹，而且即使成功引爆，也不足以改变水星的轨道。',
    outcome: '失败 - 雷迪亚兹回到委内瑞拉后，在民众的愤怒中被乱石砸死。',
    breaker: '三体破壁人二号'
  },
  {
    id: 'bill',
    name: '比尔·希恩斯',
    title: '英国脑科学家',
    country: '🇬🇧 英国',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
    strategy: '希恩斯计划通过思想钢印技术，向人类士兵的大脑中植入"必胜"的信念，使他们在面对三体入侵时拥有绝对的战斗意志。',
    analysis: '破壁人揭露了希恩斯的真实意图：他并非要植入必胜信念，而是要植入"人类必败"的思想钢印，让人类放弃抵抗，选择逃亡。',
    outcome: '失败 - 计划暴露后，希恩斯被剥夺面壁者身份，但其思想钢印已影响了部分"太空军"成员。',
    breaker: '三体破壁人三号'
  },
  {
    id: 'luoji',
    name: '罗辑',
    title: '中国天体物理学家',
    country: '🇨🇳 中国',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
    strategy: '罗辑利用黑暗森林法则，向宇宙广播了一颗恒星的坐标，以此展示人类掌握的终极威慑能力。他成为了第一位成功的面壁者。',
    analysis: '三体文明意识到罗辑已经领悟了黑暗森林法则，这是他们唯一无法破解的战略。任何试图攻击地球的行为都可能导致三体世界的坐标被暴露。',
    outcome: '成功 - 罗辑建立了黑暗森林威慑体系，成为人类文明的执剑人，为人类赢得了近两个世纪的和平。',
    breaker: '无 - 三体文明未能破解他的战略'
  }
]

const activeWallfacer = ref(wallfacers[3])
</script>

<template>
  <div class="space-y-8">
    <div class="relative rounded-xl overflow-hidden h-[300px]">
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&h=600&fit=crop"
        alt="面壁者"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-space-dark via-space-dark/50 to-transparent">
        <div class="absolute bottom-0 left-0 right-0 p-8">
          <h1 class="text-4xl font-bold text-white glow-text">面壁计划</h1>
          <p class="text-gray-300 mt-2">四位面壁者，四个拯救人类的计划</p>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap gap-3 mb-8">
      <button
        v-for="wallfacer in wallfacers"
        :key="wallfacer.id"
        @click="activeWallfacer = wallfacer"
        :class="[
          'px-4 py-2 rounded-lg font-medium transition-all',
          activeWallfacer.id === wallfacer.id
            ? 'bg-neon-blue text-space-dark'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
        ]"
      >
        {{ wallfacer.name }}
      </button>
    </div>

    <div class="grid lg:grid-cols-3 gap-8">
      <div class="lg:col-span-1">
        <div class="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700">
          <img
            :src="activeWallfacer.image"
            :alt="activeWallfacer.name"
            class="w-full h-64 object-cover"
          />
          <div class="p-6">
            <h2 class="text-2xl font-bold text-white mb-1">{{ activeWallfacer.name }}</h2>
            <p class="text-neon-blue text-sm mb-2">{{ activeWallfacer.title }}</p>
            <span class="text-gray-500 text-sm">{{ activeWallfacer.country }}</span>
          </div>
        </div>
      </div>

      <div class="lg:col-span-2 space-y-6">
        <div class="bg-gray-800/50 rounded-xl p-6">
          <h3 class="text-lg font-semibold text-neon-blue mb-3">📋 面壁计划</h3>
          <p class="text-gray-300">{{ activeWallfacer.strategy }}</p>
        </div>

        <div class="bg-gray-800/50 rounded-xl p-6">
          <h3 class="text-lg font-semibold text-neon-purple mb-3">🧠 破壁人分析</h3>
          <p class="text-gray-300">{{ activeWallfacer.analysis }}</p>
          <div v-if="activeWallfacer.breaker" class="mt-3 flex items-center gap-2">
            <span class="text-gray-500 text-sm">破壁人：</span>
            <span class="text-red-400 text-sm">{{ activeWallfacer.breaker }}</span>
          </div>
        </div>

        <div class="bg-gray-800/50 rounded-xl p-6">
          <h3 class="text-lg font-semibold mb-3" :class="activeWallfacer.outcome.includes('成功') ? 'text-neon-green' : 'text-neon-red'">
            {{ activeWallfacer.outcome.includes('成功') ? '✅ 计划结果：成功' : '❌ 计划结果：失败' }}
          </h3>
          <p class="text-gray-300">{{ activeWallfacer.outcome }}</p>
        </div>
      </div>
    </div>

    <div class="bg-gray-800/50 rounded-xl p-6">
      <h3 class="text-lg font-semibold text-neon-blue mb-4">📖 面壁计划背景</h3>
      <p class="text-gray-300 leading-relaxed">
        面壁计划是联合国为应对三体危机而制定的绝密计划。由于三体文明拥有透明思维，人类无法隐藏战略意图，因此联合国选出四位"面壁者"，授予他们无上的权力和资源，让他们各自独立制定对抗三体的战略。每位面壁者都可以调动全球资源实施自己的计划，而无需向任何人解释。他们的计划只有破壁人能够破解——三体文明为每位面壁者都安排了一位"破壁人"，负责解读和揭露他们的真实意图。
      </p>
    </div>
  </div>
</template>

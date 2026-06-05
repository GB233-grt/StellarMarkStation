<script setup lang="ts">
import { ref } from 'vue'

interface Swordsman {
  id: string
  name: string
  term: string
  image: string
  description: string
  actions: string[]
  legacy: string
}

const swordsmen: Swordsman[] = [
  {
    id: 'luoji',
    name: '罗辑',
    term: '公元2215年 - 2408年（193年）',
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=wise%20elderly%20chinese%20man%20with%20intense%20eyes%20holding%20red%20button%20dramatic%20portrait%20sci-fi&image_size=portrait_4_3',
    description: '罗辑是人类历史上第一位执剑人。在面壁计划成功后，他建立了黑暗森林威慑体系，成为手握全人类命运的终极决策者。在他担任执剑人的近两个世纪里，三体文明始终不敢轻举妄动。',
    actions: [
      '建立黑暗森林威慑体系',
      '在冥王星建立引力波发射台',
      '维持与三体文明的平衡',
      '培养新一代执剑人'
    ],
    legacy: '罗辑的威慑为人类赢得了宝贵的喘息时间，使人类文明得以在相对和平的环境中发展。他的牺牲精神和坚定意志成为人类文明的象征。'
  },
  {
    id: 'chengxin',
    name: '程心',
    term: '公元2408年 - 2408年（15分钟）',
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=young%20chinese%20woman%20with%20gentle%20expression%20holding%20red%20button%20conflicted%20emotions%20sci-fi%20portrait&image_size=portrait_4_3',
    description: '程心是第二位执剑人。在罗辑卸任后，她以高票当选为新的执剑人。然而，在三体文明发动攻击的关键时刻，她未能按下威慑按钮，导致人类文明的威慑体系崩溃。',
    actions: [
      '当选为第二任执剑人',
      '面对三体攻击时放弃威慑',
      '启动"光速飞船"计划',
      '成为人类文明最后的希望'
    ],
    legacy: '程心的选择引发了巨大的争议。她的善良和不忍使人类失去了最后的威慑手段，但她的选择也体现了人类文明最珍贵的品质——对生命的尊重和对和平的渴望。'
  },
  {
    id: 'zhangbeihai',
    name: '章北海',
    term: '无正式任期（逃亡主义者）',
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=chinese%20military%20officer%20with%20determined%20expression%20space%20uniform%20leadership%20portrait&image_size=portrait_4_3',
    description: '章北海虽然没有正式担任执剑人，但他是人类逃亡主义的先驱。他预见到了人类在技术上的劣势，策划了"自然选择号"的逃亡，为人类文明保留了火种。',
    actions: [
      '策划"自然选择号"逃亡',
      '建立星舰文明',
      '领导人类幸存者探索宇宙',
      '成为星舰地球的精神领袖'
    ],
    legacy: '章北海的逃亡主义被证明是正确的。他的远见和决断使一部分人类得以逃离太阳系的毁灭，在宇宙中延续人类文明的火种。'
  }
]

const activeSwordsman = ref(swordsmen[0])
</script>

<template>
  <div class="space-y-8">
    <div class="relative rounded-xl overflow-hidden h-[300px]">
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=600&fit=crop"
        alt="执剑人"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-space-dark via-space-dark/50 to-transparent">
        <div class="absolute bottom-0 left-0 right-0 p-8">
          <h1 class="text-4xl font-bold text-white glow-text">执剑人</h1>
          <p class="text-gray-300 mt-2">手握全人类命运的终极决策者</p>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap gap-3 mb-8">
      <button
        v-for="swordsman in swordsmen"
        :key="swordsman.id"
        @click="activeSwordsman = swordsman"
        :class="[
          'px-4 py-2 rounded-lg font-medium transition-all',
          activeSwordsman.id === swordsman.id
            ? 'bg-neon-blue text-space-dark'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
        ]"
      >
        {{ swordsman.name }}
      </button>
    </div>

    <div class="grid lg:grid-cols-3 gap-8">
      <div class="lg:col-span-1">
        <div class="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700">
          <img
            :src="activeSwordsman.image"
            :alt="activeSwordsman.name"
            class="w-full h-64 object-cover"
          />
          <div class="p-6">
            <h2 class="text-2xl font-bold text-white mb-1">{{ activeSwordsman.name }}</h2>
            <p class="text-neon-blue text-sm">执剑人任期</p>
            <span class="text-gray-500 text-sm">{{ activeSwordsman.term }}</span>
          </div>
        </div>
      </div>

      <div class="lg:col-span-2 space-y-6">
        <div class="bg-gray-800/50 rounded-xl p-6">
          <h3 class="text-lg font-semibold text-neon-blue mb-3">👤 人物简介</h3>
          <p class="text-gray-300">{{ activeSwordsman.description }}</p>
        </div>

        <div class="bg-gray-800/50 rounded-xl p-6">
          <h3 class="text-lg font-semibold text-neon-green mb-3">📋 主要行动</h3>
          <ul class="space-y-2">
            <li
              v-for="(action, index) in activeSwordsman.actions"
              :key="index"
              class="flex items-start gap-2"
            >
              <span class="text-neon-green">•</span>
              <span class="text-gray-300">{{ action }}</span>
            </li>
          </ul>
        </div>

        <div class="bg-gray-800/50 rounded-xl p-6">
          <h3 class="text-lg font-semibold text-neon-purple mb-3">🏛️ 历史遗产</h3>
          <p class="text-gray-300">{{ activeSwordsman.legacy }}</p>
        </div>
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      <div class="bg-gray-800/50 rounded-xl p-6">
        <h3 class="text-lg font-semibold text-neon-blue mb-4">⚔️ 执剑人的职责</h3>
        <ul class="space-y-3">
          <li class="flex items-start gap-2">
            <span class="text-neon-blue">1.</span>
            <span class="text-gray-300">掌握引力波广播系统的控制权</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-blue">2.</span>
            <span class="text-gray-300">时刻监视三体文明的动向</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-blue">3.</span>
            <span class="text-gray-300">在三体文明违反协议时启动威慑</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-blue">4.</span>
            <span class="text-gray-300">以全人类的生存为最高准则</span>
          </li>
        </ul>
      </div>

      <div class="bg-gray-800/50 rounded-xl p-6">
        <h3 class="text-lg font-semibold text-neon-red mb-4">🔴 威慑系统</h3>
        <ul class="space-y-3">
          <li class="flex items-start gap-2">
            <span class="text-neon-red">•</span>
            <span class="text-gray-300">引力波发射器：位于冥王星轨道</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-red">•</span>
            <span class="text-gray-300">广播范围：银河系及邻近星系</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-red">•</span>
            <span class="text-gray-300">触发条件：三体文明的任何攻击行为</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-neon-red">•</span>
            <span class="text-gray-300">后果：暴露三体世界和太阳系的坐标</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

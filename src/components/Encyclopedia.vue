<script setup lang="ts">
import { ref } from 'vue'

interface Category {
  id: string
  title: string
  icon: string
  description: string
  items: { name: string; brief: string }[]
}

const categories: Category[] = [
  {
    id: 'civilizations',
    title: '文明',
    icon: '🌍',
    description: '宇宙中各种文明的介绍',
    items: [
      { name: '三体文明', brief: '来自半人马座α星的三体人，拥有透明思维的外星文明' },
      { name: '人类文明', brief: '地球文明，在三体危机中艰难求生' },
      { name: '歌者文明', brief: '宇宙中的清理员，随手抛出二向箔' },
      { name: '归零者文明', brief: '宇宙的重启者，试图将宇宙降维归零' },
      { name: '星舰文明', brief: '逃离太阳系的人类幸存者建立的文明' }
    ]
  },
  {
    id: 'technologies',
    title: '技术',
    icon: '🔬',
    description: '各种先进技术的解析',
    items: [
      { name: '强相互作用力材料', brief: '水滴探测器使用的材料，绝对光滑' },
      { name: '曲率引擎', brief: '实现光速飞行的关键技术' },
      { name: '思想钢印', brief: '可以修改人类信念的神经技术' },
      { name: '引力波广播', brief: '向宇宙广播坐标的手段' },
      { name: '二向箔', brief: '降维打击武器，将三维降为二维' }
    ]
  },
  {
    id: 'locations',
    title: '地点',
    icon: '📍',
    description: '三体宇宙中的重要地点',
    items: [
      { name: '红岸基地', brief: '人类与三体首次接触的地方' },
      { name: '三体星系', brief: '三体文明的故乡，拥有三颗恒星' },
      { name: '冥王星', brief: '引力波发射台所在地' },
      { name: '澳大利亚', brief: '人类被三体强迫迁移的地方' },
      { name: 'DX3906', brief: '云天明送给程心的星星' }
    ]
  },
  {
    id: 'events',
    title: '事件',
    icon: '📅',
    description: '三体宇宙中的重大事件',
    items: [
      { name: '古筝行动', brief: '人类首次成功打击ETO' },
      { name: '末日战役', brief: '水滴摧毁人类舰队' },
      { name: '面壁计划', brief: '四位面壁者拯救人类的计划' },
      { name: '黑暗森林威慑', brief: '罗辑建立的威慑体系' },
      { name: '太阳系二维化', brief: '歌者文明的降维打击' }
    ]
  },
  {
    id: 'characters',
    title: '人物',
    icon: '👤',
    description: '三体宇宙中的关键人物',
    items: [
      { name: '叶文洁', brief: '红岸基地总工程师，首次接触三体' },
      { name: '罗辑', brief: '成功的面壁者，第一代执剑人' },
      { name: '程心', brief: '第二代执剑人，引发争议的选择' },
      { name: '章北海', brief: '逃亡主义先驱，星舰文明之父' },
      { name: '云天明', brief: '用童话传递宇宙奥秘的人' }
    ]
  },
  {
    id: 'concepts',
    title: '概念',
    icon: '💡',
    description: '三体宇宙中的核心概念',
    items: [
      { name: '黑暗森林法则', brief: '宇宙社会学的基本法则' },
      { name: '技术爆炸', brief: '文明技术发展的加速现象' },
      { name: '猜疑链', brief: '星际文明间无法消除的猜疑' },
      { name: '降维打击', brief: '高级文明的终极武器' },
      { name: '黑域', brief: '低光速黑洞，安全声明' }
    ]
  }
]

const activeCategory = ref(categories[0])
</script>

<template>
  <div class="space-y-8">
    <div class="relative rounded-xl overflow-hidden h-[300px]">
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=600&fit=crop"
        alt="三体百科"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-space-dark via-space-dark/50 to-transparent">
        <div class="absolute bottom-0 left-0 right-0 p-8">
          <h1 class="text-4xl font-bold text-white glow-text">三体百科</h1>
          <p class="text-gray-300 mt-2">探索三体宇宙的一切</p>
        </div>
      </div>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <button
        v-for="category in categories"
        :key="category.id"
        @click="activeCategory = category"
        :class="[
          'p-6 rounded-xl text-left transition-all border',
          activeCategory.id === category.id
            ? 'bg-neon-blue/20 border-neon-blue'
            : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
        ]"
      >
        <span class="text-3xl mb-2 block">{{ category.icon }}</span>
        <h3 class="text-lg font-semibold text-white">{{ category.title }}</h3>
        <p class="text-gray-400 text-sm mt-1">{{ category.description }}</p>
      </button>
    </div>

    <div class="bg-gray-800/50 rounded-xl p-6">
      <h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <span>{{ activeCategory.icon }}</span>
        <span>{{ activeCategory.title }}</span>
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="item in activeCategory.items"
          :key="item.name"
          class="bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer"
        >
          <h3 class="text-white font-medium mb-2">{{ item.name }}</h3>
          <p class="text-gray-400 text-sm">{{ item.brief }}</p>
        </div>
      </div>
    </div>

    <div class="bg-gray-800/50 rounded-xl p-6">
      <h3 class="text-lg font-semibold text-neon-blue mb-4">📖 黑暗森林法则</h3>
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <h4 class="text-white font-medium mb-2">基本公理</h4>
          <ul class="space-y-2 text-gray-300">
            <li>1. 生存是文明的第一需要</li>
            <li>2. 文明不断增长和扩张，但宇宙中的物质总量保持不变</li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-medium mb-2">两大概念</h4>
          <ul class="space-y-2 text-gray-300">
            <li>• 猜疑链：文明间无法确定对方是善意还是恶意</li>
            <li>• 技术爆炸：文明的技术可能在短时间内发生飞跃</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('history')

const tabs = [
  { id: 'history', label: '历史背景', icon: '📜' },
  { id: 'facility', label: '基地设施', icon: '🏗️' },
  { id: 'research', label: '科研成果', icon: '🔬' },
  { id: 'personnel', label: '关键人物', icon: '👤' }
]

const historyContent = {
  title: '红岸基地的历史',
  description: '红岸基地是中国在20世纪60年代至80年代期间建设的一座绝密射电观测站，位于大兴安岭深处。其表面上是国家天文台的一个观测站，实际上是一个用于搜索外星文明的秘密项目。',
  timeline: [
    { year: '1967年', event: '红岸基地开始建设' },
    { year: '1969年', event: '红岸基地正式投入运行' },
    { year: '1971年', event: '叶文洁首次接收到三体文明信号' },
    { year: '1971年', event: '叶文洁向三体世界发送回信' },
    { year: '1987年', event: '红岸基地关闭' },
    { year: '2007年', event: '红岸基地遗址被发现' }
  ]
}

const facilityContent = {
  title: '基地设施',
  facilities: [
    { name: '射电望远镜', description: '口径32米的抛物面天线，是当时亚洲最大的射电望远镜之一', capacity: '最大发射功率250千瓦' },
    { name: '信号处理中心', description: '负责接收和分析来自宇宙的无线电信号', capacity: '每秒处理10亿比特数据' },
    { name: '发电站', description: '独立的水力发电设施，为整个基地提供能源', capacity: '装机容量50兆瓦' },
    { name: '生活保障区', description: '科研人员的生活区域，包括宿舍、食堂、医疗室等', capacity: '可容纳200人' }
  ]
}

const researchContent = {
  title: '科研成果',
  projects: [
    { name: '宇宙无线电信号监测', description: '持续监测来自银河系的无线电信号', result: '发现127个异常信号源' },
    { name: '星际通信实验', description: '尝试与外星文明建立通信', result: '成功与三体世界建立联系' },
    { name: '太阳增益反射实验', description: '利用太阳作为信号放大器', result: '首次实现星际广播' },
    { name: '射电天文学研究', description: '对脉冲星、类星体等天体的观测研究', result: '发表37篇学术论文' }
  ]
}

const personnelContent = {
  title: '关键人物',
  people: [
    {
      name: '叶文洁',
      role: '红岸基地总工程师',
      description: '天体物理学家，红岸基地的核心人物。她在1971年首次接收到三体文明的信号，并做出了历史性的决定——向三体世界发送回信。',
      quote: '宇宙很大，生活更大。也许以后还有缘相见。'
    },
    {
      name: '杨卫宁',
      role: '红岸基地政委',
      description: '军队干部，负责基地的政治工作和行政管理。他对叶文洁有着复杂的情感，既是她的上级，也是她的保护者。',
      quote: ''
    },
    {
      name: '雷志成',
      role: '红岸基地司令员',
      description: '基地的最高负责人，对红岸项目的战略意义有深刻理解。他在一次事故中不幸遇难。',
      quote: ''
    }
  ]
}
</script>

<template>
  <div class="space-y-8">
    <div class="relative rounded-xl overflow-hidden h-[300px]">
      <img
        src="https://neeko-copilot.bytedance.net/api/text2image?prompt=secret%20radio%20telescope%20station%20in%20deep%20forest%20at%20night%20with%20giant%20satellite%20dish%20looking%20at%20stars%20sci-fi%20mysterious%20atmosphere&image_size=landscape_16_9"
        alt="红岸基地"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-space-dark via-space-dark/50 to-transparent">
        <div class="absolute bottom-0 left-0 right-0 p-8">
          <h1 class="text-4xl font-bold text-white glow-text">红岸基地</h1>
          <p class="text-gray-300 mt-2">人类与三体文明的第一次接触之地</p>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap gap-2 mb-8">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="activeTab = tab.id"
        :class="[
          'flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all',
          activeTab === tab.id
            ? 'bg-neon-blue text-space-dark'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
        ]"
      >
        <span>{{ tab.icon }}</span>
        <span>{{ tab.label }}</span>
      </button>
    </div>

    <div v-if="activeTab === 'history'" class="space-y-6">
      <div>
        <h2 class="text-2xl font-bold text-white mb-4">{{ historyContent.title }}</h2>
        <p class="text-gray-300 leading-relaxed">{{ historyContent.description }}</p>
      </div>
      
      <div class="bg-gray-800/50 rounded-xl p-6">
        <h3 class="text-lg font-semibold text-neon-blue mb-4">历史时间线</h3>
        <div class="space-y-3">
          <div
            v-for="item in historyContent.timeline"
            :key="item.year"
            class="flex items-start gap-4"
          >
            <span class="text-neon-blue font-mono min-w-[80px]">{{ item.year }}</span>
            <span class="text-gray-300">{{ item.event }}</span>
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="activeTab === 'facility'" class="space-y-6">
      <h2 class="text-2xl font-bold text-white mb-4">{{ facilityContent.title }}</h2>
      <div class="grid md:grid-cols-2 gap-4">
        <div
          v-for="facility in facilityContent.facilities"
          :key="facility.name"
          class="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-neon-blue/50 transition-colors"
        >
          <h3 class="text-xl font-semibold text-white mb-2">{{ facility.name }}</h3>
          <p class="text-gray-400 text-sm mb-2">{{ facility.description }}</p>
          <span class="text-neon-blue text-sm">{{ facility.capacity }}</span>
        </div>
      </div>
    </div>

    <div v-else-if="activeTab === 'research'" class="space-y-6">
      <h2 class="text-2xl font-bold text-white mb-4">{{ researchContent.title }}</h2>
      <div class="space-y-4">
        <div
          v-for="project in researchContent.projects"
          :key="project.name"
          class="bg-gray-800/50 rounded-xl p-6"
        >
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-lg font-semibold text-white">{{ project.name }}</h3>
              <p class="text-gray-400 text-sm mt-1">{{ project.description }}</p>
            </div>
            <span class="bg-neon-blue/20 text-neon-blue px-3 py-1 rounded-full text-sm">
              {{ project.result }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="activeTab === 'personnel'" class="space-y-6">
      <h2 class="text-2xl font-bold text-white mb-4">{{ personnelContent.title }}</h2>
      <div class="space-y-4">
        <div
          v-for="person in personnelContent.people"
          :key="person.name"
          class="bg-gray-800/50 rounded-xl p-6 border-l-4 border-neon-blue"
        >
          <div class="flex justify-between items-start mb-3">
            <div>
              <h3 class="text-xl font-semibold text-white">{{ person.name }}</h3>
              <span class="text-gray-500 text-sm">{{ person.role }}</span>
            </div>
          </div>
          <p class="text-gray-300 mb-3">{{ person.description }}</p>
          <blockquote v-if="person.quote" class="text-gray-400 italic border-l-2 border-neon-blue pl-4">
            "{{ person.quote }}"
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Scene {
  id: string
  title: string
  subtitle: string
  image: string
  description: string
  background: string
  parameters: { label: string; value: string }[]
  easterEgg?: string
}

const scenes: Scene[] = [
  {
    id: 'guzheng',
    title: '古筝行动',
    subtitle: '三体I · 巴拿马运河',
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=epic%20space%20battle%20scene%20with%20giant%20ship%20being%20cut%20by%20nano%20wire%20in%20deep%20space%20dark%20sci-fi%20style&image_size=landscape_16_9',
    description: '古筝行动是人类首次成功对抗三体组织（ETO）的重大行动。在巴拿马运河的狭窄航道上，由汪淼参与研发的"飞刃"纳米材料被布置成一道无形的切割网。当ETO的旗舰"审判日号"驶入这片水域时，整艘万吨巨轮被瞬间切割成数十片薄如蝉翼的金属切片，船上所有人员无一幸免。',
    background: '【原著背景】在《三体I》中，古筝行动标志着人类与三体组织之间的力量对比发生逆转。此前，ETO凭借来自三体世界的技术支持，在全球范围内制造混乱，几乎无人能与之抗衡。但通过纳米技术的突破，人类终于找到了对抗的方法。这次行动不仅摧毁了ETO的指挥中枢，更重要的是获取了三体文明发送的全部信息，为后续的面壁计划奠定了基础。',
    parameters: [
      { label: '行动时间', value: '公元2007年' },
      { label: '纳米丝直径', value: '0.1纳米' },
      { label: '切割速度', value: '1000米/秒' },
      { label: '目标舰船', value: '审判日号' },
      { label: '行动代号', value: '古筝' },
      { label: '执行者', value: '中国太空军' }
    ],
    easterEgg: '💡 彩蛋：如果你仔细观察审判日号的残骸，会发现其中一片切片上残留着叶文洁的笔记碎片...'
  },
  {
    id: 'waterdrop',
    title: '水滴战役',
    subtitle: '三体II · 末日之战',
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=silver%20droplet%20shaped%20alien%20probe%20destroying%20human%20spaceships%20in%20space%20battle%20sci-fi%20dark%20atmosphere&image_size=landscape_16_9',
    description: '末日战役是人类与三体文明的首次正面交锋。三体文明派出的首个探测器——一颗看似普通的水滴状物体，以其绝对光滑的表面和超越人类理解的加速度，在短短十几分钟内摧毁了人类两千艘星际战舰组成的庞大舰队。此战彻底粉碎了人类的傲慢与幻想。',
    background: '【原著背景】在《三体II：黑暗森林》中，水滴探测器的到来标志着三体危机进入新阶段。人类曾以为凭借技术爆炸和数量优势可以与三体抗衡，但水滴的出现证明了双方在科技水平上的鸿沟。水滴由强相互作用力材料制成，其表面绝对光滑，任何常规武器都无法对其造成伤害。这场战役后，人类文明陷入前所未有的绝望。',
    parameters: [
      { label: '战役时间', value: '公元2214年' },
      { label: '水滴质量', value: '约10吨' },
      { label: '最高速度', value: '光速的10%' },
      { label: '人类战舰数', value: '2015艘' },
      { label: '幸存战舰', value: '4艘' },
      { label: '战役时长', value: '15分钟' }
    ],
    easterEgg: '💡 彩蛋：章北海的"自然选择号"在战役爆发前的最后一刻逃离，成为人类文明延续的火种...'
  },
  {
    id: '2dfoil',
    title: '太阳系二维化',
    subtitle: '三体III · 降维打击',
    image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=solar%20system%20being%20flattened%20into%202D%20by%20dark%20matter%20weapon%20epic%20sci-fi%20catastrophe%20scene&image_size=landscape_16_9',
    description: '二向箔是歌者文明使用的一种降维武器。当它被激活时，会将整个太阳系从三维空间不可逆地降维至二维平面。在这场宇宙级的灾难中，所有物质都被压扁成没有厚度的平面图像，太阳系从此成为宇宙中的一幅"画"。',
    background: '【原著背景】在《三体III：死神永生》中，二向箔的到来宣告了太阳系文明的终结。歌者文明的"清理员"在发现太阳系坐标后，随手抛出了这片看似普通的"纸"。整个降维过程持续了数天，从海王星开始，逐步向内吞噬整个太阳系。最终，只有程心和艾AA驾驶的星环号借助曲率引擎逃离了这场灾难。',
    parameters: [
      { label: '降维时间', value: '公元2273年' },
      { label: '武器类型', value: '降维打击' },
      { label: '扩张速度', value: '光速' },
      { label: '波及范围', value: '整个太阳系' },
      { label: '投掷者', value: '歌者文明' },
      { label: '逃离者', value: '程心、艾AA' }
    ],
    easterEgg: '💡 彩蛋：在二维化的太阳系中，你能看到梵高的《星空》与地球一同被永远定格...'
  }
]

const activeScene = ref(scenes[0])
const showEasterEgg = ref<string | null>(null)

function selectScene(scene: Scene) {
  activeScene.value = scene
  showEasterEgg.value = null
}

function toggleEasterEgg(sceneId: string) {
  if (showEasterEgg.value === sceneId) {
    showEasterEgg.value = null
  } else {
    showEasterEgg.value = sceneId
  }
}
</script>

<template>
  <div class="space-y-8">
    <div class="flex flex-wrap gap-4 mb-8">
      <button
        v-for="scene in scenes"
        :key="scene.id"
        @click="selectScene(scene)"
        :class="[
          'px-6 py-3 rounded-lg font-medium transition-all',
          activeScene.id === scene.id
            ? 'bg-neon-blue text-space-dark'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
        ]"
      >
        {{ scene.title }}
      </button>
    </div>

    <div class="grid lg:grid-cols-2 gap-8">
      <div class="relative rounded-xl overflow-hidden h-[400px]">
        <img
          :src="activeScene.image"
          :alt="activeScene.title"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-space-dark/80 to-transparent">
          <div class="absolute bottom-0 left-0 right-0 p-6">
            <span class="text-neon-blue text-sm">{{ activeScene.subtitle }}</span>
            <h2 class="text-2xl font-bold text-white mt-1">{{ activeScene.title }}</h2>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold text-neon-blue mb-2">场景概述</h3>
          <p class="text-gray-300 leading-relaxed">{{ activeScene.description }}</p>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-neon-blue mb-2">原著背景</h3>
          <p class="text-gray-300 leading-relaxed text-sm">{{ activeScene.background }}</p>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-neon-blue mb-3">关键参数</h3>
          <div class="grid grid-cols-2 gap-3">
            <div
              v-for="param in activeScene.parameters"
              :key="param.label"
              class="bg-gray-800/50 rounded-lg p-3"
            >
              <span class="text-gray-500 text-sm">{{ param.label }}</span>
              <p class="text-white font-medium">{{ param.value }}</p>
            </div>
          </div>
        </div>

        <button
          v-if="activeScene.easterEgg"
          @click="toggleEasterEgg(activeScene.id)"
          class="text-yellow-400 hover:text-yellow-300 flex items-center gap-2"
        >
          <span>🔮</span>
          <span>{{ showEasterEgg === activeScene.id ? '隐藏彩蛋' : '查看隐藏彩蛋' }}</span>
        </button>
        <div
          v-if="showEasterEgg === activeScene.id"
          class="bg-yellow-900/30 border border-yellow-500/30 rounded-lg p-4"
        >
          <p class="text-yellow-200">{{ activeScene.easterEgg }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

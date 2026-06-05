<script setup lang="ts">
import { ref } from 'vue'

interface Tale {
  id: string
  title: string
  chapter: string
  summary: string
  meaning: string
  characters: { name: string; role: string; significance: string }[]
  keyQuote: string
}

const tales: Tale[] = [
  {
    id: 'painter',
    title: '王国的新画师',
    chapter: '童话一',
    summary: '一个王国来了一位新画师，他能用画画出真实的物体。他画了一条鱼，鱼就从画中游出来；他画了一座城堡，城堡就真的矗立在眼前。但画师的画也能毁灭事物——他画了一个沙漏，沙漏里的沙子漏完时，王国就会消失。',
    meaning: '这个童话揭示了降维打击的概念。画师代表掌握降维技术的高级文明，他的画代表二向箔等降维武器。沙漏则暗示了降维过程的不可逆性和时间限制。',
    characters: [
      { name: '画师', role: '来自外星的神秘画师', significance: '代表高级文明的清理员' },
      { name: '国王', role: '童话王国的统治者', significance: '代表被打击的文明' },
      { name: '公主', role: '国王的女儿', significance: '代表文明最后的希望' }
    ],
    keyQuote: '画出来的东西会变成真的，但画消失时，画里的东西也会消失。'
  },
  {
    id: 'sea',
    title: '饕餮海',
    chapter: '童话二',
    summary: '一艘船航行在饕餮海上，海上漂浮着许多岛屿。但这些岛屿其实是巨大的鱼——饕餮鱼。当船只靠近时，饕餮鱼会张开巨口将船只吞噬。唯一的逃生方法是驾驶"肥皂船"，因为饕餮鱼害怕肥皂。',
    meaning: '饕餮海代表充满危险的宇宙，饕餮鱼代表宇宙中的猎手文明。肥皂船则象征着曲率引擎驱动的光速飞船，是逃离危险的唯一途径。',
    characters: [
      { name: '水手', role: '航行在海上的船员', significance: '代表探索宇宙的人类' },
      { name: '饕餮鱼', role: '海中的巨型怪兽', significance: '代表宇宙中的猎手文明' },
      { name: '肥皂', role: '普通的日常用品', significance: '代表曲率引擎技术' }
    ],
    keyQuote: '在饕餮海上，只有肥皂船才能生存。'
  },
  {
    id: 'prince',
    title: '深水王子',
    chapter: '童话三',
    summary: '深水王子是一个与众不同的王子，他不会被画进画里——无论画师怎么努力，都无法捕捉到他的形象。他生活在深海中，那里是安全的。当王国被画师毁灭时，只有深水王子幸存下来。',
    meaning: '深水王子代表掌握了"黑域"或"光速飞船"技术的文明。他无法被画入画中，象征着低光速黑洞中的文明无法被降维打击影响。深海则代表安全的黑域。',
    characters: [
      { name: '深水王子', role: '生活在深海的王子', significance: '代表掌握黑域技术的文明' },
      { name: '冰沙王子', role: '深水王子的哥哥', significance: '代表选择对抗的文明' },
      { name: '露珠公主', role: '王子的妹妹', significance: '代表需要被拯救的普通人类' }
    ],
    keyQuote: '深水王子是唯一不会被画进画里的人。'
  }
]

const activeTale = ref(tales[0])
</script>

<template>
  <div class="space-y-8">
    <div class="relative rounded-xl overflow-hidden h-[300px]">
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=600&fit=crop"
        alt="云天明童话"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-space-dark via-space-dark/50 to-transparent">
        <div class="absolute bottom-0 left-0 right-0 p-8">
          <h1 class="text-4xl font-bold text-white glow-text">云天明童话</h1>
          <p class="text-gray-300 mt-2">隐藏在童话中的宇宙奥秘</p>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap gap-3 mb-8">
      <button
        v-for="tale in tales"
        :key="tale.id"
        @click="activeTale = tale"
        :class="[
          'px-4 py-2 rounded-lg font-medium transition-all',
          activeTale.id === tale.id
            ? 'bg-neon-blue text-space-dark'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
        ]"
      >
        {{ tale.chapter }}：{{ tale.title }}
      </button>
    </div>

    <div class="grid lg:grid-cols-2 gap-8">
      <div class="space-y-6">
        <div class="bg-gray-800/50 rounded-xl p-6">
          <h3 class="text-xl font-bold text-white mb-4">{{ activeTale.title }}</h3>
          <p class="text-gray-300 leading-relaxed">{{ activeTale.summary }}</p>
        </div>

        <div class="bg-gray-800/50 rounded-xl p-6">
          <h3 class="text-lg font-semibold text-neon-green mb-3">🔍 深层含义</h3>
          <p class="text-gray-300 leading-relaxed">{{ activeTale.meaning }}</p>
        </div>

        <div class="bg-gray-800/50 rounded-xl p-6 border-l-4 border-yellow-500">
          <h3 class="text-lg font-semibold text-yellow-400 mb-3">💬 关键语句</h3>
          <p class="text-gray-300 italic">"{{ activeTale.keyQuote }}"</p>
        </div>
      </div>

      <div class="space-y-6">
        <div class="bg-gray-800/50 rounded-xl p-6">
          <h3 class="text-lg font-semibold text-neon-blue mb-4">🎭 人物解析</h3>
          <div class="space-y-4">
            <div
              v-for="character in activeTale.characters"
              :key="character.name"
              class="bg-gray-700/50 rounded-lg p-4"
            >
              <div class="flex justify-between items-start mb-2">
                <span class="text-white font-medium">{{ character.name }}</span>
                <span class="text-neon-blue text-sm">{{ character.role }}</span>
              </div>
              <p class="text-gray-400 text-sm">{{ character.significance }}</p>
            </div>
          </div>
        </div>

        <div class="bg-gray-800/50 rounded-xl p-6">
          <h3 class="text-lg font-semibold text-neon-purple mb-4">📖 童话背景</h3>
          <p class="text-gray-300 leading-relaxed text-sm">
            云天明童话是《三体III：死神永生》中的重要情节。云天明在送给程心的星星中隐藏了三个童话，这些童话看似简单，实则包含了拯救人类文明的关键信息。通过解读这三个童话，人类最终明白了如何制造光速飞船和建立黑域，为文明的延续找到了出路。
          </p>
        </div>

        <div class="bg-gray-800/50 rounded-xl p-6">
          <h3 class="text-lg font-semibold text-neon-red mb-4">⚠️ 警告信息</h3>
          <ul class="space-y-2 text-sm">
            <li class="flex items-start gap-2">
              <span class="text-neon-red">•</span>
              <span class="text-gray-300">不要回答！不要回答！不要回答！</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-neon-red">•</span>
              <span class="text-gray-300">光速是宇宙的终极壁垒</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-neon-red">•</span>
              <span class="text-gray-300">降维打击是宇宙中最致命的攻击方式</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

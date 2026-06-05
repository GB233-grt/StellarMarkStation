<script setup lang="ts">import { ref } from 'vue';
interface Post {
 id: string;
 title: string;
 author: string;
 avatar: string;
 content: string;
 category: string;
 likes: number;
 comments: number;
 date: string;
}
const posts: Post[] = [
 {
 id: '1',
 title: '对黑暗森林法则的深入思考',
 author: '星尘旅行者',
 avatar: '👨‍🚀',
 content: '最近重读《三体》，对黑暗森林法则有了新的理解。其实宇宙中的文明就像黑暗森林中的猎人，谁先暴露自己的位置，谁就可能被消灭...',
 category: '讨论',
 likes: 128,
 comments: 32,
 date: '2小时前'
 },
 {
 id: '2',
 title: '自制三体宇宙星图',
 author: '银河漫游者',
 avatar: '👩‍🔬',
 content: '花了一周时间制作的三体宇宙星图，包含了三体星系、太阳系、DX3906等重要位置。希望大家喜欢！',
 category: '创作',
 likes: 256,
 comments: 45,
 date: '5小时前'
 },
 {
 id: '3',
 title: '如果我是执剑人',
 author: '黑暗森林',
 avatar: '🎭',
 content: '如果我成为执剑人，我会怎么做？思考了很久，我觉得我可能会选择...（剧透预警）',
 category: '脑洞',
 likes: 89,
 comments: 23,
 date: '昨天'
 },
 {
 id: '4',
 title: '三体中的科学设定解析',
 author: '科学探索者',
 avatar: '🔬',
 content: '从物理学角度分析三体中的各种技术设定，包括曲率引擎、二向箔、思想钢印等...',
 category: '科普',
 likes: 312,
 comments: 56,
 date: '昨天'
 },
 {
 id: '5',
 title: '手绘三体人物插画',
 author: '星际画家',
 avatar: '🎨',
 content: '最近画的一些三体人物插画，包括罗辑、程心、章北海等，希望大家喜欢！',
 category: '创作',
 likes: 178,
 comments: 28,
 date: '2天前'
 },
 {
 id: '6',
 title: '关于降维打击的哲学思考',
 author: '深空哲学家',
 avatar: '🧠',
 content: '降维打击不仅仅是一种武器，它更是一种宇宙观的体现。当三维世界被压缩到二维，意味着什么？',
 category: '讨论',
 likes: 95,
 comments: 17,
 date: '2天前'
 }
];
const categories = ['全部', '讨论', '创作', '脑洞', '科普'];
const activeCategory = ref('全部');
const filteredPosts = ref(posts);
function filterPosts(category: string) {
 activeCategory.value = category;
 if (category === '全部') {
 filteredPosts.value = posts;
 }
 else {
 filteredPosts.value = posts.filter(post => post.category === category);
 }
}
</script>

<template>
  <div class="space-y-8">
    <div class="relative rounded-xl overflow-hidden h-[300px]">
      <img
        src="https://neeko-copilot.bytedance.net/api/text2image?prompt=online%20community%20forum%20with%20stars%20and%20messages%20floating%20sci-fi%20social%20media%20concept&image_size=landscape_16_9"
        alt="UGC社区"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-space-dark via-space-dark/50 to-transparent">
        <div class="absolute bottom-0 left-0 right-0 p-8">
          <h1 class="text-4xl font-bold text-white glow-text">UGC社区</h1>
          <p class="text-gray-300 mt-2">分享你的三体故事和见解</p>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap gap-2 mb-6">
      <button
        v-for="category in categories"
        :key="category"
        @click="filterPosts(category)"
        :class="[
          'px-4 py-2 rounded-lg font-medium transition-all',
          activeCategory === category
            ? 'bg-neon-blue text-space-dark'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
        ]"
      >
        {{ category }}
      </button>
    </div>

    <div class="grid md:grid-cols-2 gap-4">
      <div
        v-for="post in filteredPosts"
        :key="post.id"
        class="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800 transition-colors cursor-pointer"
      >
        <div class="flex items-start justify-between mb-4">
          <div class="flex items-center gap-3">
            <span class="text-3xl">{{ post.avatar }}</span>
            <div>
              <span class="text-white font-medium">{{ post.author }}</span>
              <span class="text-gray-500 text-sm ml-3">{{ post.date }}</span>
            </div>
          </div>
          <span class="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
            {{ post.category }}
          </span>
        </div>
        
        <h3 class="text-xl font-bold text-white mb-2">{{ post.title }}</h3>
        <p class="text-gray-400 mb-4">{{ post.content }}</p>
        
        <div class="flex items-center gap-6 text-gray-500">
          <span class="flex items-center gap-1">
            <span>❤️</span>
            <span>{{ post.likes }}</span>
          </span>
          <span class="flex items-center gap-1">
            <span>💬</span>
            <span>{{ post.comments }}</span>
          </span>
        </div>
      </div>
    </div>

    <div class="bg-gray-800/50 rounded-xl p-6">
      <h3 class="text-lg font-semibold text-neon-blue mb-4">📝 发帖指南</h3>
      <div class="grid md:grid-cols-3 gap-4">
        <div class="bg-gray-700/50 rounded-lg p-4">
          <span class="text-2xl mb-2 block">🎯</span>
          <h4 class="text-white font-medium mb-1">主题明确</h4>
          <p class="text-gray-400 text-sm">请确保你的帖子主题明确，便于其他用户理解</p>
        </div>
        <div class="bg-gray-700/50 rounded-lg p-4">
          <span class="text-2xl mb-2 block">🤝</span>
          <h4 class="text-white font-medium mb-1">友好交流</h4>
          <p class="text-gray-400 text-sm">尊重他人观点，保持友好的讨论氛围</p>
        </div>
        <div class="bg-gray-700/50 rounded-lg p-4">
          <span class="text-2xl mb-2 block">📚</span>
          <h4 class="text-white font-medium mb-1">原创内容</h4>
          <p class="text-gray-400 text-sm">鼓励发布原创内容，包括分析、创作、脑洞等</p>
        </div>
      </div>
    </div>
  </div>
</template>

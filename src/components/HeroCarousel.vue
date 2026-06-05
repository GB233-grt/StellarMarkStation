<script setup lang="ts">import { ref, onMounted, onUnmounted } from 'vue';
interface Slide {
 id: number;
 title: string;
 subtitle: string;
 description: string;
 image: string;
}
const slides: Slide[] = [
 {
 id: 1,
 title: '古筝行动',
 subtitle: '三体I · 人类的反击',
 description: '巴拿马运河，纳米丝线组成的"古筝"静静等待。审判日号驶入的瞬间，整艘巨轮被切割成数十片薄如蝉翼的切片。这是ETO的覆灭，也是人类首次在技术层面展现对抗三体的决心。',
 image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=epic%20space%20battle%20scene%20with%20giant%20ship%20being%20cut%20by%20nano%20wire%20in%20deep%20space%20dark%20sci-fi%20style&image_size=landscape_16_9'
 },
 {
 id: 2,
 title: '水滴战役',
 subtitle: '三体II · 黑暗森林',
 description: '末日战役，三体探测器"水滴"以绝对光滑的表面和不可思议的加速度，在短短十几分钟内摧毁了人类两千艘战舰组成的星际舰队。此战宣告了人类在技术上的绝对劣势。',
 image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=silver%20droplet%20shaped%20alien%20probe%20destroying%20human%20spaceships%20in%20space%20battle%20sci-fi%20dark%20atmosphere&image_size=landscape_16_9'
 },
 {
 id: 3,
 title: '太阳系二维化',
 subtitle: '三体III · 死神永生',
 description: '歌者文明的"清理员"随手抛出二向箔，将整个太阳系不可逆地降维至二维。在这场宇宙级的灾难面前，人类文明最终走向终结，只留下程心与艾AA驾驶的星环号在宇宙中漂流。',
 image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=solar%20system%20being%20flattened%20into%202D%20by%20dark%20matter%20weapon%20epic%20sci-fi%20catastrophe%20scene&image_size=landscape_16_9'
 }
];
const currentSlide = ref(0);
let timer: ReturnType<typeof setInterval> | null = null;
function nextSlide() {
 currentSlide.value = (currentSlide.value + 1) % slides.length;
}
function prevSlide() {
 currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
}
function goToSlide(index: number) {
 currentSlide.value = index;
}
function startAutoPlay() {
 timer = setInterval(nextSlide, 5000);
}
function stopAutoPlay() {
 if (timer) {
 clearInterval(timer);
 timer = null;
 }
}
onMounted(() => {
 startAutoPlay();
});
onUnmounted(() => {
 stopAutoPlay();
});
</script>

<template>
  <div 
    class="relative w-full h-[400px] rounded-xl overflow-hidden"
    @mouseenter="stopAutoPlay"
    @mouseleave="startAutoPlay"
  >
    <div 
      class="flex transition-transform duration-500 ease-in-out h-full"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div 
        v-for="slide in slides" 
        :key="slide.id"
        class="w-full h-full flex-shrink-0 relative"
      >
        <img 
          :src="slide.image" 
          :alt="slide.title"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-space-dark via-space-dark/50 to-transparent">
          <div class="absolute bottom-0 left-0 right-0 p-8">
            <span class="text-neon-blue text-sm">{{ slide.subtitle }}</span>
            <h3 class="text-3xl font-bold text-white mt-2 mb-3 glow-text">{{ slide.title }}</h3>
            <p class="text-gray-300 max-w-2xl">{{ slide.description }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <button 
      @click="prevSlide"
      class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all"
    >
      ◀
    </button>
    <button 
      @click="nextSlide"
      class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all"
    >
      ▶
    </button>
    
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      <button 
        v-for="(_, index) in slides" 
        :key="index"
        @click="goToSlide(index)"
        :class="[
          'w-3 h-3 rounded-full transition-all',
          currentSlide === index ? 'bg-neon-blue w-8' : 'bg-white/50 hover:bg-white/70'
        ]"
      />
    </div>
  </div>
</template>
<script setup lang="ts">import { ref, onMounted } from 'vue';
interface Star {
 id: number;
 x: number;
 y: number;
 size: number;
 delay: number;
 duration: number;
 opacity: number;
}
const stars = ref<Star[]>([]);
onMounted(() => {
 const starCount = 100;
 for (let i = 0; i < starCount; i++) {
 stars.value.push({
 id: i,
 x: Math.random() * 100,
 y: Math.random() * 100,
 size: Math.random() * 2 + 1,
 delay: Math.random() * 5,
 duration: Math.random() * 3 + 2,
 opacity: Math.random() * 0.5 + 0.3
 });
 }
});
</script>

<template>
  <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
    <div class="absolute inset-0 bg-gradient-to-b from-space-dark via-space-blue to-space-dark" />
    
    <div 
      v-for="star in stars" 
      :key="star.id"
      class="star animate-twinkle"
      :style="{
        left: `${star.x}%`,
        top: `${star.y}%`,
        width: `${star.size}px`,
        height: `${star.size}px`,
        animationDelay: `${star.delay}s`,
        animationDuration: `${star.duration}s`,
        opacity: star.opacity
      }"
    />
    
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent" />
    <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent" />
  </div>
</template>
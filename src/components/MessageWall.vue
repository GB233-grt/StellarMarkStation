<script setup lang="ts">import { ref } from 'vue';
interface Message {
 id: number;
 author: string;
 content: string;
 timestamp: Date;
}
const messages = ref<Message[]>([
 { id: 1, author: '星尘旅行者', content: '在黑暗森林中，每一个文明都是孤独的猎人...', timestamp: new Date('2024-01-15') },
 { id: 2, author: '三体观察员', content: '不要回答！不要回答！不要回答！', timestamp: new Date('2024-01-14') },
 { id: 3, author: '面壁者', content: '主不在乎', timestamp: new Date('2024-01-13') },
 { id: 4, author: '执剑人', content: '威慑是唯一的生存之道', timestamp: new Date('2024-01-12') }
]);
const author = ref('');
const content = ref('');
const nextId = ref(5);
function addMessage() {
 if (!author.value.trim() || !content.value.trim())
 return;
 messages.value.unshift({
 id: nextId.value++,
 author: author.value,
 content: content.value,
 timestamp: new Date()
 });
 author.value = '';
 content.value = '';
}
function deleteMessage(id: number) {
 messages.value = messages.value.filter(m => m.id !== id);
}
function formatDate(date: Date): string {
 return new Intl.DateTimeFormat('zh-CN', {
 year: 'numeric',
 month: '2-digit',
 day: '2-digit',
 hour: '2-digit',
 minute: '2-digit'
 }).format(date);
}
</script>

<template>
  <div class="min-h-screen p-6">
    <div class="max-w-2xl mx-auto">
      <h2 class="text-2xl font-bold text-neon-blue mb-6 glow-text">星际留言墙</h2>
      <p class="text-gray-400 mb-8">在这里留下你的星际印记</p>
      
      <div class="space-y-6">
        <div class="neon-border rounded-lg p-4">
          <div class="space-y-3">
            <div>
              <label class="block text-gray-300 mb-2">你的代号</label>
              <input 
                v-model="author"
                type="text" 
                placeholder="输入你的星际代号"
                class="w-full bg-space-deep border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-neon-blue focus:outline-none"
              />
            </div>
            <div>
              <label class="block text-gray-300 mb-2">留言内容</label>
              <textarea 
                v-model="content"
                rows="3"
                placeholder="写下你想说的话..."
                class="w-full bg-space-deep border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-neon-blue focus:outline-none resize-none"
              />
            </div>
            <button 
              @click="addMessage"
              :disabled="!author.trim() || !content.trim()"
              class="w-full bg-neon-blue text-space-dark font-bold py-2 rounded-lg hover:bg-opacity-80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              发送留言
            </button>
          </div>
        </div>
        
        <div class="space-y-3">
          <div 
            v-for="message in messages" 
            :key="message.id"
            class="bg-space-deep border border-gray-700 rounded-lg p-4"
          >
            <div class="flex justify-between items-start mb-2">
              <span class="text-neon-blue font-semibold">{{ message.author }}</span>
              <button 
                @click="deleteMessage(message.id)"
                class="text-gray-500 hover:text-neon-red transition-colors text-sm"
              >
                删除
              </button>
            </div>
            <p class="text-gray-300">{{ message.content }}</p>
            <p class="text-gray-500 text-sm mt-2">{{ formatDate(message.timestamp) }}</p>
          </div>
          
          <div v-if="messages.length === 0" class="text-center text-gray-500 py-8">
            还没有留言，成为第一个留下印记的人吧
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
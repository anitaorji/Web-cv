<script setup lang="ts" >
import { ref, onMounted, onUnmounted } from 'vue';

const showButton = ref(false);

const checkScroll = () => {
  showButton.value = window.scrollY > 200;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => window.addEventListener('scroll', checkScroll));
onUnmounted(() => window.removeEventListener('scroll', checkScroll));
</script>

<template>
  <button
    v-show="showButton"
    @click="scrollToTop"
    class="scroll-btn"
  >
    ↑
  </button>
</template>



<style scoped>
.scroll-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: rgb(102, 102, 102);
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
}
</style>

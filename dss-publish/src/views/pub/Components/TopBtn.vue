<template>
  <transition name="fade-ani">
    <v-btn 
    v-show="screenY > 100" 
    @click="toTop"
    class="top-btn"
    variant="flat"
    >
      <v-icon class="btn-arrow-top" />
      <span class="sr-only">위로가기</span>
    </v-btn>
  </transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
const screenTimer = ref(0);
const screenY = ref(0);
const handleScroll = () => {
  if (screenTimer.value) return;
  screenTimer.value = setTimeout(() => {
    screenY.value = window.scrollY;
    clearTimeout(screenTimer.value);
    screenTimer.value = 0;
  }, 100);
};
const toTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

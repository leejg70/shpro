<script setup>

import { ref, watchEffect, onMounted, onUnmounted } from 'vue';
const snackbar = ref(true);
// 토스트팝업 3초뒤 실행
// setTimeout(() =>{
//   snackbar.value = true;
// },3000);

const hide = () => {
  snackbar.value = false;
};

// 스크롤 이벤트 리스너
const handleScroll = () => {
  // 팝업이 열려있을 때만 스크롤 이벤트 감지
  if (snackbar.value) {
    hide();
  }
};

// 컴포넌트가 마운트되었을 때 스크롤 이벤트 리스너 등록
watchEffect(onInvalidate => {
  window.addEventListener('scroll', handleScroll);

  // 컴포넌트가 언마운트될 때 스크롤 이벤트 리스너 제거
  onInvalidate(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});

// 뷰포트 너비를 저장할 반응형 변수 생성
const isSmallScreen = ref(window.innerWidth < 1200);

// 현재 창 너비에 따라 반응형 변수를 업데이트하는 함수
const updateWidth = () => {
  isSmallScreen.value = window.innerWidth < 1200;
};

// 창 리사이즈 이벤트 리스너 설정
onMounted(() => {
  window.addEventListener('resize', updateWidth);
  updateWidth(); // 초기 체크
});

// 컴포넌트가 언마운트될 때 이벤트 리스너 정리
onUnmounted(() => {
  window.removeEventListener('resize', updateWidth);
});

defineExpose({
  hide
});
</script>

<template>
    <v-btn
    color="indigo"
    @click="snackbar = true"
  >
    Open Snackbar
  </v-btn>

  <v-snackbar
    v-if="isSmallScreen"
    :timeout="3000"
    v-model="snackbar"
    class="toast"
    variant="flat"  
  > 
    <v-icon>icon-toast-hand</v-icon>
    <p class="text">이미지를<br>확대해보세요</p>
  </v-snackbar>
</template>

<style lang="scss" Scoped>
</style>
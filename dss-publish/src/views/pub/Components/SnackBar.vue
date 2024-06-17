<script setup>
import { ref } from 'vue';
const snackbar = ref(false);
// 토스트팝업 3초뒤 실행
setTimeout(() =>{
  snackbar.value = true;
},3000);
</script>

<template>
    <v-btn
    color="indigo"
    @click="snackbar = true"
  >
    Open Snackbar
  </v-btn>
  <v-snackbar
    :timeout="3000"
    v-model="snackbar"
    class="toast"
    variant="flat"
    rounded="lg"
    title="이미지를 확대해보세요"
  > 
    <v-icon>icon-toast-hand</v-icon>
  </v-snackbar>
</template>

<style lang="scss" Scoped>
</style>
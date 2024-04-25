<script setup>
import { ref } from 'vue';

const terms = ref(false);
</script>

<template>
  <v-dialog
    v-model="terms"
    width="auto"
  >
    <!-- 샘플 버튼 -->
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps">
        DataBlue 이용약관 팝업
      </v-btn>
    </template>
    <!-- // 샘플 버튼 -->

    <!-- DataBlue 이용약관 -->
    <div class="popup-wrap medium">
      <div class="popup-head">
        <h3 class="h-title">DataBlue이용약관</h3>
      </div>
      <div class="popup-cont">
        
      </div>
      <v-btn
        @click="terms = false"
        variant="text"
        class="btn-popup-close"
      >
        <span class="sr-only">닫기</span>
      </v-btn>
    </div>
    <!-- // DataBlue 이용약관 -->
  </v-dialog>
</template>

<style scoped>
.v-btn--size-default {
  font-size: 1.4rem;
}
</style>
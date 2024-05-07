<script setup>
import { ref } from 'vue';

const credit = ref(false);
</script>

<template>
  <v-dialog
    v-model="credit"
    width="auto"
  >
    <!-- 샘플 버튼 -->
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps">
        마이크레딧 팝업
      </v-btn>
    </template>
    <!-- // 샘플 버튼 -->

    <!-- 마이크레딧 -->
    <div class="popup-wrap x-medium">
      <div class="popup-head">
        <h3 class="h-title">마이크레딧</h3>
      </div>
      <div class="popup-cont">
        <div class="my-cont">
          <div class="my-bg"><span>BI</span></div>
          <p class="my-title">마이크레딧 <span>1</span>등급</p>
          <p class="my-text">고객님의 마이크레딧 등급은 <span>1</span>등급입니다.</p>
        </div>
      </div>
      <div class="popup-foot">
        <div class="btn-popwrap">
          <v-btn
            variant="flat"
            color="primary"
            size="large"
            rounded="md"
            class="default"
          >
            확인
          </v-btn>
        </div>
      </div>
      <v-btn
        @click="credit = false"
        variant="text"
        class="btn-popup-close"
      >
        <span class="sr-only">닫기</span>
      </v-btn>
    </div>
    <!-- // 마이크레딧 -->
  </v-dialog>
</template>

<style scoped>
.v-btn--size-default {
  font-size: 1.4rem;
}
</style>
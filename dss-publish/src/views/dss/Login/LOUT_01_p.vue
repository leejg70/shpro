<script setup>
import { ref } from 'vue';

const confirm = ref(false);
</script>

<template>
  <v-dialog
    v-model="confirm"
    width="auto"
  >
    <!-- 샘플 버튼 -->
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps">
        로그아웃 재확인 안내 팝업
      </v-btn>
    </template>
    <!-- // 샘플 버튼 -->

    <!-- 로그아웃 재확인 안내 -->
    <div class="popup-alert-wrap">
      <div class="alert-cont">
        <p class="text">로그아웃 하시겠습니까?</p>
      </div>
      <div class="alert-foot confirm">
        <v-btn
          variant="text"
          class="cancel"
        >
          취소
        </v-btn>
        <v-btn
          variant="text"
          class="default"
        >
          확인
        </v-btn>
      </div>
    </div>
    <!-- // 로그아웃 재확인 안내 -->
  </v-dialog>
</template>

<style scoped>
.v-btn--size-default {
  font-size: 1.4rem;
}
</style>
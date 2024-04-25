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
        Confirm 경고창 팝업
      </v-btn>
    </template>
    <!-- // 샘플 버튼 -->

    <!-- Confirm 경고창 -->
    <div class="popup-alert-wrap">
      <div class="alert-cont">
        <p class="text">경고창 팝업의 내용이 들어갑니다.<br>텍스트는 센터배열 입니다.</p>
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
    <!-- // Confirm 경고창 -->
  </v-dialog>
</template>

<style scoped>
.v-btn--size-default {
  font-size: 1.4rem;
}
</style>
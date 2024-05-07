<script setup>
import { ref } from 'vue';

const appkey = ref(false);
</script>

<template>
  <v-dialog
    v-model="appkey"
    width="auto"
  >
    <!-- 샘플 버튼 -->
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps">
        APP Key 팝업
      </v-btn>
    </template>
    <!-- // 샘플 버튼 -->

    <!-- APP Key -->
    <div class="popup-wrap x-medium">
      <div class="popup-head">
        <h3 class="h-title">APP Key</h3>
      </div>
      <div class="popup-cont">
        <div class="my-cont">
          <div class="my-bg appkey"><span>해당계약의 APP Key 노출texttexttexttexttexttextexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</span></div>
          <p class="key-text">현재 표시된 <span>APP Key</span>는 중요한 자산입니다.<br>무단 공유나 유출 되지 않게 관리해 주시기 바랍니다.</p>
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
            복사하기
          </v-btn>
        </div>
      </div>
      <v-btn
        @click="appkey = false"
        variant="text"
        class="btn-popup-close"
      >
        <span class="sr-only">닫기</span>
      </v-btn>
    </div>
    <!-- // APP Key -->
  </v-dialog>
</template>

<style scoped>
.v-btn--size-default {
  font-size: 1.4rem;
}
</style>
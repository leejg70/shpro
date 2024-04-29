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
        개인정보 수집 및 이용동의 팝업
      </v-btn>
    </template>
    <!-- // 샘플 버튼 -->

    <!-- 개인정보 수집 및 이용동의 -->
    <div class="popup-wrap medium">
      <div class="popup-head">
        <h3 class="h-title">개인정보 수집 및 이용동의</h3>
      </div>
      <div class="popup-cont">
        <div class="terms-cont">
          <p>귀하는 개인정보 수집, 이용 동의에 대해 거부하실 수 있습니다. 다만, 본 계약과 관련하여 신한카드에 대한 개인정보 수집, 이용 동의는 거래관계의 설정, 유지에 필수적이거나 귀하에게 제공되는 서비스와 직접적으로 관련된 필수적 사항이므로, 아래 사항에 동의하여야만 거래관계의 설정 및 유지가 가능합니다.</p>
        </div>
      </div>
      <v-btn
        @click="terms = false"
        variant="text"
        class="btn-popup-close"
      >
        <span class="sr-only">닫기</span>
      </v-btn>
    </div>
    <!-- // 개인정보 수집 및 이용동의 -->
  </v-dialog>
</template>

<style scoped>
.v-btn--size-default {
  font-size: 1.4rem;
}
</style>
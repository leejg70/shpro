<script setup>
import { ref } from 'vue';

const alarm = ref(false);
</script>

<template>
  <v-dialog
    v-model="alarm"
    width="auto"
  >
    <!-- 샘플 버튼 -->
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps">
        휴면계정 알림 팝업
      </v-btn>
    </template>
    <!-- // 샘플 버튼 -->

    <!-- 휴면계정 알림 -->
    <div class="popup-wrap small">
      <div class="popup-head">
        <h3 class="h-title">휴면계정안내</h3><!-- 2024.06.14 알림 -> 안내 제목 수정 -->
      </div>
      <div class="popup-cont">
        <p class="alarm">고객님의 계정이 오랜시간 동안 접속되지 않아 휴면 상태로 전환되었습니다.<br>계속해서 서비스를 이용하시려면 본인인증을 진행해주세요.</p><!-- 2024.06.14 내용 추가 -> 진행 -->
      </div>
      <div class="popup-foot">
        <div class="btn-popwrap">
          <v-btn
            variant="flat"
            color="secondary"
            size="large"
            rounded="md"
            class="cancel"
          >
            취소
          </v-btn>
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
    </div>
    <!-- // 휴면계정 알림 -->
  </v-dialog>
</template>

<style scoped>
.v-btn--size-default {
  font-size: 1.4rem;
}
</style>
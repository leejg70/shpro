<script setup>
import { ref } from 'vue';

const session = ref(false);
</script>

<template>
  <v-dialog
    v-model="session"
    width="auto"
  >
    <!-- 샘플 버튼 -->
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps">
        로그아웃 예정 안내 팝업
      </v-btn>
    </template>
    <!-- // 샘플 버튼 -->

    <!-- 로그아웃 예정 안내 -->
    <div class="popup-wrap small">
      <div class="popup-head">
        <h3 class="h-title">60초 후 자동 로그아웃 됩니다.</h3>
      </div>
      <div class="popup-cont">
        <p class="alarm">고객님의 소중한 정보보호를 위해 10분 동안 서비스 이용을 하지 않는 경우 자동 로그아웃 됩니다.<br><br>로그인 시간을 연장하시겠습니까?</p>
      </div>
      <div class="popup-foot">
        <div class="btn-popwrap end">
          <v-btn
            variant="flat"
            color="secondary"
            size="large"
            rounded="md"
            class="cancel"
          >
            로그아웃
          </v-btn>
          <v-btn
            variant="flat"
            color="primary"
            size="large"
            rounded="md"
            class="default"
          >
            로그인 연장
          </v-btn>
        </div>
      </div>
    </div>
    <!-- // 로그아웃 예정 안내 -->
  </v-dialog>
</template>

<style scoped>
.v-btn--size-default {
  font-size: 1.4rem;
}
</style>
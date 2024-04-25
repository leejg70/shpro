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
        강제 로그아웃 안내 팝업
      </v-btn>
    </template>
    <!-- // 샘플 버튼 -->

    <!-- 강제 로그아웃 안내 -->
    <div class="popup-wrap small">
      <div class="popup-head">
        <h3 class="h-title">자동 로그아웃 되었습니다.</h3>
      </div>
      <div class="popup-cont">
        <p class="alarm">로그인 정책에 의해 동일 계정 동시 접속 시 기존 사용자는 로그아웃 됩니다.<br><br>서비스를 이용하시려면 다시 로그인 하세요.</p>
      </div>
      <div class="popup-foot">
        <div class="btn-popwrap auto">
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
    <!-- // 강제 로그아웃 안내 -->
  </v-dialog>
</template>

<style scoped>
.v-btn--size-default {
  font-size: 1.4rem;
}
</style>
<script setup>
import { ref } from 'vue';

const tab = ref(null);
const agree = ref(false);
</script>

<template>
  <v-dialog
    v-model="agree"
    width="auto"
  >
    <!-- 샘플 버튼 -->
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps">
        고유식별정보 처리 동의 팝업
      </v-btn>
    </template>
    <!-- // 샘플 버튼 -->

    <!-- 고유식별정보 처리 동의 -->
    <div class="popup-wrap large">
      <div class="popup-head">
        <h3 class="h-title">고유식별정보 처리 동의</h3>
      </div>
      <div class="popup-cont">
        <v-card>
          <v-tabs
            v-model="tab"
            bg-color="transparent"
          >
            <v-tab value="tab01_1">NICE평가정보</v-tab>
            <v-tab value="tab01_2">KCB</v-tab>
          </v-tabs>
          <v-card-text>
            <v-window v-model="tab">
              <v-window-item value="tab01_1">
                One
              </v-window-item>
              <v-window-item value="tab01_2">
                Two
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </div>
      <v-btn
        @click="agree = false"
        variant="text"
        class="btn-popup-close"
      >
        <span class="sr-only">닫기</span>
      </v-btn>
    </div>
    <!-- // 고유식별정보 처리 동의 -->
  </v-dialog>
</template>

<style scoped>
.v-btn--size-default {
  font-size: 1.4rem;
}
</style>
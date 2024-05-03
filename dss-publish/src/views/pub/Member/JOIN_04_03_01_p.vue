<script setup>
import { ref } from 'vue';

const tab = ref(null);
const company = ref(false);
</script>

<template>
  <v-dialog
    v-model="company"
    persistent
  >
    <!-- 샘플 버튼 -->
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps">
        기업찾기 팝업
      </v-btn>
    </template>
    <!-- // 샘플 버튼 -->

    <!-- 기업찾기 -->
    <div class="popup-wrap large">
      <div class="popup-head">
        <h3 class="h-title">기업찾기</h3>
      </div>
      <div class="popup-cont">
        <v-card
          flat
          rounded="0"
          class="tab-cont"
        >
          <v-tabs
            v-model="tab"
            bg-color="transparent"
            color="selected"
            class="tab-search"
          >
            <v-tab value="tab01_1">기업명 검색</v-tab>
            <v-tab value="tab01_2">사업자등록번호 검색</v-tab>
          </v-tabs>
          <v-window v-model="tab">
            <v-window-item
              :transition="false"
              :reverse-transition="false"
              value="tab01_1"
            >
              <v-card flat>
                <v-card-text>

                </v-card-text>
              </v-card>
            </v-window-item>
            <v-window-item
              :transition="false"
              :reverse-transition="false"
              value="tab01_2"
            >
              <v-card flat>
                <v-card-text>

                </v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
        </v-card>
      </div>
      <v-btn
        @click="company = false"
        variant="text"
        class="btn-popup-close"
      >
        <span class="sr-only">닫기</span>
      </v-btn>
    </div>
    <!-- // 기업찾기 -->
  </v-dialog>
</template>

<style scoped>
.v-btn--size-default {
  font-size: 1.4rem;
}
</style>
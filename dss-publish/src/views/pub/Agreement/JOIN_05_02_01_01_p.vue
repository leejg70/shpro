<script setup>
import { ref } from 'vue';

const tab = ref(null);
const tab01 = ref(null);
const tab02 = ref(null);
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
        <v-card
          flat
          rounded="0"
          class="tab-cont"
        >
          <v-tabs
            v-model="tab"
            color="selected"
            bg-color="transparent"
          >
            <v-tab value="tab01_1">NICE평가정보</v-tab>
            <v-tab value="tab01_2">KCB</v-tab>
          </v-tabs>
          <v-window v-model="tab">
            <v-window-item
              :transition="false"
              :reverse-transition="false"
              value="tab01_1"
            >
              <v-tabs
                v-model="tab01"
                color="selected"
                bg-color="transparent"
                grow
              >
                <v-tab value="tab01_1_1">SKT</v-tab>
                <v-tab value="tab01_1_2">KT</v-tab>
                <v-tab value="tab01_1_3">LGU+</v-tab>
              </v-tabs>
              <v-window v-model="tab01">
                <v-window-item
                  :transition="false"
                  :reverse-transition="false"
                  value="tab01_1_1"
                >
                  <v-card
                    flat
                  >
                    <v-card-text>
                      제1조 (목적)
                    </v-card-text>
                  </v-card>
                </v-window-item>
                <v-window-item
                  :transition="false"
                  :reverse-transition="false"
                  value="tab01_1_2"
                >
                  <v-card
                    flat
                  >
                    <v-card-text>
                    제1조 (목적)
                    </v-card-text>
                  </v-card>
                </v-window-item>
                <v-window-item
                  :transition="false"
                  :reverse-transition="false"
                  value="tab01_1_3"
                >
                  <v-card
                    flat
                  >
                    <v-card-text>
                      제1조 (목적)
                    </v-card-text>
                  </v-card>
                </v-window-item>
              </v-window>
            </v-window-item>
            <v-window-item
              :transition="false"
              :reverse-transition="false"
              value="tab01_2"
            >
            <v-tabs
                v-model="tab02"
                color="selected"
                bg-color="transparent"
                grow
              >
                <v-tab value="tab01_2_1">SKT</v-tab>
                <v-tab value="tab01_2_2">KT</v-tab>
                <v-tab value="tab01_2_3">LGU+</v-tab>
              </v-tabs>
              <v-window v-model="tab02">
                <v-window-item
                  :transition="false"
                  :reverse-transition="false"
                  value="tab01_2_1"
                >
                  <v-card
                    flat
                  >
                    <v-card-text>
                      제1조 (목적)
                    </v-card-text>
                  </v-card>
                </v-window-item>
                <v-window-item
                  :transition="false"
                  :reverse-transition="false"
                  value="tab01_2_2"
                >
                  <v-card
                    flat
                  >
                    <v-card-text>
                    제1조 (목적)
                    </v-card-text>
                  </v-card>
                </v-window-item>
                <v-window-item
                  :transition="false"
                  :reverse-transition="false"
                  value="tab01_2_3"
                >
                  <v-card
                    flat
                  >
                    <v-card-text>
                      제1조 (목적)
                    </v-card-text>
                  </v-card>
                </v-window-item>
              </v-window>
            </v-window-item>
          </v-window>
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
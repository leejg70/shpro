<script setup>
import { ref } from 'vue';

const pwcheck = ref(false);
const todaypw = ref('');
const todaypwRules = ref(['비밀번호가 일치하지 않습니다.']);
</script>

<template>
  <v-dialog
    v-model="pwcheck"
    persistent
  >
    <!-- 샘플 버튼 -->
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps">
        비밀번호 확인 팝업
      </v-btn>
    </template>
    <!-- // 샘플 버튼 -->

    <!-- 비밀번호 확인 -->
    <div class="popup-wrap member medium fixed">
      <div class="popup-head">
        <h3 class="h-title">비밀번호 확인</h3>
      </div>
      <div class="popup-cont">
        <Form class="form-wrap">
          <div class="form-box form-type">
            <div class="form-group">
              <div class="ele-tit">
                <v-label>비밀번호</v-label>
              </div>
              <div class="input-wrap">
                <v-text-field
                  aria-label="비밀번호"
                  v-model="todaypw"
                  :rules="todaypwRules"
                  placeholder="비밀번호 입력"
                  title="비밀번호 입력"
                  density="comfortable"
                  variant="outlined"
                  color="primary"
                  hide-details="auto"
                  clearable
                  required
                ></v-text-field>
              </div>
            </div>
          </div>
        </Form>
      </div>
      <div class="popup-foot">
        <div class="btn-popwrap">
          <v-btn
            variant="flat"
            color="primary"
            size="x-large"
            rounded="md"
            class="default"
          >
            확인
          </v-btn>
        </div>
      </div>
      <v-btn
        @click="pwcheck = false"
        variant="text"
        class="btn-popup-close"
      >
        <span class="sr-only">닫기</span>
      </v-btn>
    </div>
    <!-- // 비밀번호 확인 -->
  </v-dialog>
</template>

<style scoped>
.v-btn--size-default {
  font-size: 1.4rem;
}
</style>
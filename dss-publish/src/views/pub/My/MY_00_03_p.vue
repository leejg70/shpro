<script setup>
import { ref } from 'vue';

const pwchange = ref(false);
const todaypw = ref('');
const resetpw = ref('');
const verifytpw = ref('');
const todaypwRules = ref(['현재 비밀번호를 입력해주세요.']);
const resetpwRules = ref(['비밀번호를 입력해주세요.']);
const verifytpwRules = ref(['비밀번호가 일치하지 않습니다. 위 입력 비밀번호와 동일하게 입력해주세요.']);
</script>

<template>
  <v-dialog
    v-model="pwchange"
    persistent
  >
    <!-- 샘플 버튼 -->
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps">
        비밀번호 변경 팝업
      </v-btn>
    </template>
    <!-- // 샘플 버튼 -->

    <!-- 비밀번호 변경 -->
    <div class="popup-wrap member medium fixed">
      <div class="popup-head">
        <h3 class="h-title">비밀번호 변경</h3>
      </div>
      <div class="popup-cont">
        <Form class="form-wrap">
          <div class="form-box form-type">
            <div class="form-group">
              <div class="ele-tit">
                <v-label>현재 비밀번호</v-label>
              </div>
              <div class="input-wrap">
                <v-text-field
                  aria-label="현재 비밀번호"
                  v-model="todaypw"
                  :rules="todaypwRules"
                  placeholder="현재 비밀번호 입력"
                  title="현재 비밀번호 입력"
                  density="comfortable"
                  variant="outlined"
                  color="primary"
                  hide-details="auto"
                  clearable
                  required
                ></v-text-field>
              </div>
              <!-- <p class="text-tip error">현재 비밀번호가 일치하지 않습니다.</p> -->
            </div>
            <div class="form-group">
              <div class="ele-tit">
                <v-label>새 비밀번호</v-label>
              </div>
              <div class="input-wrap">
                <v-text-field
                  :type="show ? 'text' : 'password'"
                  aria-label="새 비밀번호"
                  v-model="resetpw"
                  :rules="resetpwRules"
                  placeholder="비밀번호 입력"
                  title="새 비밀번호 입력"
                  density="comfortable"
                  variant="outlined"
                  color="primary"
                  hide-details="auto"
                  clearable
                  required
                ></v-text-field>
              </div>
              <p class="text-tip message">비밀번호는 숫자, 영문, 특수문자를 조합해 8~20자리로 생성해주세요.</p>
              <!-- <p class="text-tip error">이전 및 현재 비밀번호는 사용할 수 없습니다.</p> -->
            </div>
            <div class="form-group">
              <div class="ele-tit">
                <v-label>새 비밀번호 확인</v-label>
              </div>
              <div class="input-wrap">
                <v-text-field
                  :type="show ? 'text' : 'password'"
                  aria-label="새 비밀번호 확인"
                  v-model="verifytpw"
                  :rules="verifytpwRules"
                  placeholder="비밀번호 입력"
                  title="새 비밀번호 재입력"
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
            비밀번호 변경
          </v-btn>
        </div>
      </div>
      <v-btn
        @click="pwchange = false"
        variant="text"
        class="btn-popup-close"
      >
        <span class="sr-only">닫기</span>
      </v-btn>
    </div>
    <!-- // 비밀번호 변경 -->
  </v-dialog>
</template>

<style scoped>
.v-btn--size-default {
  font-size: 1.4rem;
}
</style>
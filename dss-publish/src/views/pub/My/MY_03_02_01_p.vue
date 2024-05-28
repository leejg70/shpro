<script setup>
import { ref } from 'vue';

const sms = ref('');
const certify = ref(false);
</script>

<template>
  <v-dialog
    v-model="certify"
    persistent
  >
    <!-- 샘플 버튼 -->
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps">
        1단계 휴대폰인증 팝업
      </v-btn>
    </template>
    <!-- // 샘플 버튼 -->

    <!-- SMS 인증 -->
    <div class="popup-wrap member medium fixed">
      <div class="popup-head">
        <h3 class="h-title">SMS 인증</h3>
      </div>
      <div class="popup-cont">
        <dl class="download-area">
          <dt class="title">계약번호</dt>
          <dd class="number">C240405001</dd>
        </dl>
        <ul class="download-guide">
          <li>휴대폰번호로 전송된 인증번호를 입력해주세요.</li>
          <li>인증 완료 후 상품을 다운로드 받으실 수 있습니다. (로그인 시마다 최초 1회 인증)</li>
        </ul>
        <Form class="form-wrap">
          <div class="form-box form-type">
            <div class="form-group">
              <div class="ele-tit">
                <v-label>휴대폰번호</v-label>
              </div>
              <div class="input-wrap side-btn">
                <div class="data-wrap">
                  <span class="data">010-1111-****</span>
                </div>
                <v-btn
                  variant="outlined"
                  color="primary"
                  size="large"
                  rounded="md"
                  class="line-blue"
                >
                  재전송
                </v-btn>
              </div>
            </div>
            <div class="form-group">
              <div class="ele-tit">
                <v-label>인증번호</v-label>
              </div>
              <div class="input-wrap side-timer">
                <v-text-field
                  aria-label="인증번호"
                  v-model="sms"
                  placeholder="숫자 6자리 입력"
                  title="인증번호 숫자 6자리 입력"
                  density="comfortable"
                  variant="outlined"
                  color="primary"
                  hide-details="auto"
                  clearable
                  required
                ></v-text-field>
                <span class="timer-box">
                  <v-icon>icon-timer</v-icon>
                  <span>99:99</span>
                </span>
              </div>
              <p class="text-tip error">입력시간을 초과하였습니다. 인증번호 재전송 후 다시 시도해주세요.</p>
              <!-- <p class="text-tip success">인증번호가 재전송되었습니다. 인증번호를 입력해주세요.</p> -->
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
            인증하기
          </v-btn>
        </div>
      </div>
      <v-btn
        @click="certify = false"
        variant="text"
        class="btn-popup-close"
      >
        <span class="sr-only">닫기</span>
      </v-btn>
    </div>
    <!-- // SMS 인증 -->
  </v-dialog>
</template>

<style scoped>
.v-btn--size-default {
  font-size: 1.4rem;
}
</style>
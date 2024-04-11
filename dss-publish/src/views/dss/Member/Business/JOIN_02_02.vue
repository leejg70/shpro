<script setup lang="ts">
import { ref } from 'vue';

const checkbox = ref(false);
</script>

<template>
  <div class="member">
    <div class="member-header">
      <h3 class="h-title">회원가입 (개인)</h3>
    </div>
    <div class="member-step member-flow">
      <div class="step-txt">서비스 이용약관</div>
      <div class="step-flow" role="text">
        <ul>
          <li class="complete"><i>1단계 본인인증</i></li>
          <li class="current"><i>2단계 서비스이용동의</i></li>
          <li><i>3단계 정보입력</i></li>
          <li><i>4단계 가입완료</i></li>
        </ul>
        <span class="blind">현재 2단계 진행중</span>
      </div>
    </div>
    <div class="member-text">
      <p class="text">서비스 이용약관에 동의해 주세요.</p>
    </div>
    <Form class="form-wrap">
      <div class="form-group agree-checkbox">
        <div class="form-checkbox">
          <v-checkbox
            v-model="checkbox"
            label="아래의 이용약관에 동의합니다."
            hide-details
            class="check-all"
          ></v-checkbox>
        </div>
        <div class="text-area">

        </div>
      </div>
      <div class="btn-wrap">
        <v-btn
          variant="flat"
          color="primary"
          size="x-large"
          rounded="lg"
          class="btn-w14"
        >
          다음
        </v-btn>
      </div>
    </Form>
  </div>
</template>
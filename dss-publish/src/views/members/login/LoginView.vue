<script setup lang="ts">
import { ref } from 'vue';
import { Form } from 'vee-validate';

const checkbox = ref(false);
const valid = ref(false);
const show = ref(false);
const password = ref('');
const userid = ref('');
const passwordRules = ref([
  (v: string) => !!v || '비밀번호를 입력해주세요.',
  (v: string) => (v && v.length <= 10) || '비밀번호는 10자 미만이어야 합니다.'
]);
const emailRules = ref([(v: string) => !!v || '이메일 아이디를 입력해주세요.', (v: string) => /.+@.+\..+/.test(v) || '이메일 아이디는 유효해야 합니다.']);
</script>

<template>
  <div class="contents-box">
    <div class="has_flow_step">
      <div class="step_txt">로그인</div>
    </div>
    <Form class="loginForm">
      <div class="form-ele">
        <v-label>아이디</v-label>
        <v-text-field
          aria-label="아이디"
          v-model="userid"
          :rules="emailRules"
          placeholder="이메일 아이디 입력"
          density="comfortable"
          variant="outlined"
          color="primary"
          hide-details="auto"
          clearable
          required
        ></v-text-field>
      </div>
      <div class="form_ele">
        <v-label>비밀번호</v-label>
        <v-text-field
          aria-label="비밀번호"
          v-model="password"
          :rules="passwordRules"
          :type="show ? 'text' : 'password'"
          placeholder="비밀번호 입력"
          density="comfortable"
          variant="outlined"
          color="primary"
          hide-details="auto"
          clearable
          required
        ></v-text-field>
      </div>
      <div class="check-wrap">
        <v-checkbox
          v-model="checkbox"
          label="아이디 저장"
          color="primary"
          hide-details
          class="checkbox"
        ></v-checkbox>
      </div>
      <div class="btn_wrap align_c">
        <v-btn
          :disabled="valid"
          type="submit"
          variant="flat"
          color="primary"
          size="large"
          rounded="lg"
          block
        >
          로그인
        </v-btn>
      </div>
    </Form>
    <div class="link-wrap mg-t25">
      <a href="#none" class="txt-link">회원가입</a>
      <a href="#none" class="txt-link">아이디 찾기</a>
      <a href="#none" class="txt-link">비밀번호 변경</a>
    </div>
  </div>
</template>

<style lang="scss">
.contents-box {
  max-width: 100%;
}

@media (min-width: 576px) {
  .contents-box {
    padding: 0rem 1.5rem;
  }
}

.v-label {
  font-size: 1.125rem;
}
.v-text-field input {
  font-size: 1.125rem;
}
.v-btn--size-large {
  --v-btn-height: 4rem;
  font-size: 1.25rem;
  font-weight: 700;
}
.v-input--density-comfortable {
  --v-input-control-height: 64px;
  --v-input-padding-top: 12px;
}
</style>
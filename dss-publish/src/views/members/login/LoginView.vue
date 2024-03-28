<script setup lang="ts">
import { ref } from 'vue';
import { Form } from 'vee-validate';

const userid = ref('');
const password = ref('');
const show = ref(false);
const checkbox = ref(false);
const valid = ref(false);
const emailRules = ref([(v: string) => !!v || '이메일 아이디를 입력해주세요.', (v: string) => /.+@.+\..+/.test(v) || '이메일 아이디는 유효해야 합니다.']);
const passwordRules = ref([
  (v: string) => !!v || '비밀번호를 입력해주세요.',
  (v: string) => (v && v.length <= 10) || '비밀번호는 10자 미만이어야 합니다.'
]);
</script>

<template>
  <div class="login">
    <div class="login-header">
      <h3 class="h-title">로그인</h3>
    </div>
    <Form class="loginForm">
      <div class="form-group">
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
      <div class="form-group">
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
          class="form-checkbox"
        ></v-checkbox>
      </div>
      <div class="btn_wrap">
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
    <div class="link-wrap">
      <a href="#none" class="txt-link">회원가입</a>
      <a href="#none" class="txt-link">아이디 찾기</a>
      <a href="#none" class="txt-link">비밀번호 변경</a>
    </div>
  </div>
</template>

<style lang="scss">
.login {
  position: relative;
  width: 588px;
  margin: 0 auto;
  padding: 0;
  .login-header {
    position: relative;
    width: 100%;
    margin: 0;
    padding-bottom: 1rem;
    .h-title {
      font-size: 3rem;
      font-weight: 700;
      color: #111518;
      text-align: center;
    }
  }
  .form-group {
    margin-top: 1.5rem;
  }
  .v-label {
    margin-bottom: .5rem;
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
  .v-checkbox .v-label {
    margin-bottom: 0;
    font-size: 1rem;
  }
}

@media only screen and (max-width: 1280px) {
  .login {
    width: 100%;
    padding: 0 1.5rem;
    .login-header {
      padding-bottom: 0;
      .h-title {
        font-size: 1.375rem;
      }
    }
    .form-group {
      margin-top: 1rem;
    }
    .v-label {
      font-size: 1rem;
    }
    .v-text-field input {
      font-size: 1rem;
    }
    .v-btn--size-large {
      --v-btn-height: 3.5rem;
      font-size: 1.125rem;
    }
    .v-input--density-comfortable {
      --v-input-control-height: 56px;
    }
  }
}
</style>
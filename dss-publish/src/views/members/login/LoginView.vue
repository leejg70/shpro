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
          :rules="emailRules"
          aria-label="아이디"
          v-model="userid"
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
          :rules="passwordRules"
          :type="show ? 'text' : 'password'"
          aria-label="비밀번호"
          v-model="password"
          placeholder="비밀번호 입력"
          density="comfortable"
          variant="outlined"
          color="primary"
          hide-details="auto"
          clearable
          required
        ></v-text-field>
      </div>
      <div class="form-checkbox">
        <v-checkbox
          :ripple="false"
          v-model="checkbox"
          label="아이디 저장"
          hide-details
          class="check-agree"
        ></v-checkbox>
      </div>
      <v-btn
        :ripple="false"
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
    </Form>
    <div class="link-wrap">
      <a href="#none" class="txt-link">회원가입</a>
      <a href="#none" class="txt-link">아이디 찾기·비밀번호 변경</a>
    </div>
  </div>
</template>

<style lang="scss">
.login {
  position: relative;
  max-width: 588px;
  margin: 0 auto;
  padding: 0;
  .login-header {
    position: relative;
    width: 100%;
    margin-bottom: 2.5rem;
    .h-title {
      font-family: 'OneShinhan';
      font-size: 2.5rem;
      font-weight: 700;
      color: #111518;
      line-height: 150%;
      text-align: center;
    }
  }
  .form-group {
    margin-bottom: 1.5rem;
    .v-label {
      margin-bottom: .5rem;
      font-size: 1.125rem;
      line-height: 150%;
    }
    .v-text-field input {
      font-size: 1.125rem;
    }
    .v-input--density-comfortable {
      --v-input-control-height: 4rem;
      --v-input-padding-top: 0.75rem;
    }
  }
  .form-checkbox {
    margin-bottom: 2.5rem;
    .v-checkbox .v-label {
      margin: 0 0 0 .5rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 150%;
    }
  }
  .v-btn--size-large {
    --v-btn-height: 4rem;
    font-size: 1.25rem;
    font-weight: 700;
  }
  .link-wrap {
    position: relative;
    height: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    .txt-link {
      padding: 0 1.5rem;
      font-size: 1rem;
      line-height: 100%;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        width: 1px;
        height: 1.25rem;
        margin-left: 1.5rem;
        background-color: #e5e5e5;
      }
    }
  }
}

@media only screen and (max-width: 1280px) {
  .login {
    width: 100%;
    padding: 0 1.5rem;
    .login-header {
      margin-bottom: 1rem;
      .h-title {
        font-size: 1.25rem;
      }
    }
    .form-group {
      margin-bottom: 1rem;
      .v-label {
        font-size: 1rem;
      }
      .v-text-field input {
        font-size: 1rem;
      }
      .v-input--density-comfortable {
        --v-input-control-height: 3.5rem;
      }
    }
    .form-checkbox {
      .v-checkbox .v-label {
        margin-left: .25rem;
        font-size: 0.875rem;
      }
    }
    .v-btn--size-large {
      --v-btn-height: 3.5rem;
      font-size: 1.125rem;
    }
  }
}
</style>
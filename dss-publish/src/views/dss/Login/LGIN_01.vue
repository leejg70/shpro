<script setup lang="ts">
import { ref } from 'vue';

const userid = ref('');
const password = ref('');
const show = ref(false);
const checkbox = ref(false);
const valid = ref(false);
</script>

<template>
  <div class="login">
    <div class="login-header">
      <h3 class="h-title">로그인</h3>
    </div>
    <Form class="form-wrap">
      <div class="form-group">
        <v-label>아이디</v-label>
        <v-text-field
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
        <p class="text-tip error">아이디는 필수 입력입니다.</p>
      </div>
      <div class="form-group">
        <v-label>비밀번호</v-label>
        <v-text-field
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
        <p class="text-tip error">비밀번호를 입력해주세요.</p>
      </div>
      <div class="form-checkbox">
        <v-checkbox
          v-model="checkbox"
          label="아이디 저장"
          hide-details
          class="check-all"
        ></v-checkbox>
      </div>
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
    </Form>
    <div class="link-wrap">
      <a href="#none" class="txt-link">회원가입</a>
      <a href="#none" class="txt-link">아이디 찾기·비밀번호 변경</a>
    </div>
  </div>
</template>
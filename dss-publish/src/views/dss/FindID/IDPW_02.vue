<script setup>
import { ref } from 'vue';

const resetpw = ref('');
const verifytpw = ref('');
</script>

<template>
  <div class="member">
    <div class="member-header">
      <h3 class="h-title">아이디 찾기·비밀번호 변경</h3>
    </div>
    <p class="find-text"><span>김신한</span>님의 아이디는 <span class="email">hg**@shinhan.com</span> 입니다.</p>
    <div class="btn-wrap">
      <v-btn
        variant="flat"
        color="primary"
        size="x-large"
        rounded="lg"
        class="btn-w14"
      >
        로그인
      </v-btn>
    </div>
    <div class="change-box">
      <p class="title"><span>비밀번호</span>를 잊으셨나요?</p>
      <p class="text">비밀번호 재설정을 통해 변경이 가능합니다.</p>
    </div>
    <Form class="form-wrap">
      <div class="form-box change">
        <div class="form-group">
          <div class="ele-tit">
            <v-label>새 비밀번호</v-label>
          </div>
          <div class="input-wrap">
            <v-text-field
              :type="show ? 'text' : 'password'"
              aria-label="새 비밀번호"
              v-model="resetpw"
              placeholder="새 비밀번호"
              density="comfortable"
              variant="outlined"
              color="primary"
              hide-details="auto"
              clearable
              required
            ></v-text-field>
          </div>
          <p class="text-tip message">비밀번호는 숫자, 영문, 특수문자를 조합해 8~20자리로 생성해주세요.</p>
          <!--
          <p class="text-tip error">비밀번호를 입력해주세요.</p>
          <p class="text-tip error">이전 및 현재 비밀번호는 사용할 수 없습니다.</p>
          <p class="text-tip error">비밀번호는 숫자, 영문, 특수문자를 조합해 8~20자리로 생성해주세요.</p>
          -->
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
              placeholder="새 비밀번호 확인"
              density="comfortable"
              variant="outlined"
              color="primary"
              hide-details="auto"
              clearable
              required
            ></v-text-field>
          </div>
          <p class="text-tip error">비밀번호가 일치하지 않습니다. 입력하신 비밀번호와 동일하게 입력해주세요.</p>
        </div>
      </div>
      <div class="btn-wrap">
        <v-btn
          variant="flat"
          color="primary"
          size="x-large"
          rounded="lg"
          class="btn-w14"
          disabled
        >
          비밀번호 변경
        </v-btn>
      </div>
    </Form>
  </div>
</template>
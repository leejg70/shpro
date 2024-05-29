<script setup>
import { ref } from 'vue';

const email = ref('');
const emailurl = ref('');
const sms = ref('');
const resetpw = ref('');
const verifytpw = ref('');
const valid = ref(false);
</script>

<template>
  <div class="member">
    <div class="member-header">
      <h3 class="h-title">회원가입 (개인)</h3>
    </div>
    <div class="member-step">
      <div class="step-txt">정보 입력</div>
      <div class="step-flow">
        <ul>
          <li class="complete"><i>1단계 본인인증</i></li>
          <li class="complete"><i>2단계 서비스이용약관</i></li>
          <li class="current"><i>3단계 정보입력</i></li>
          <li><i>4단계 가입완료</i></li>
        </ul>
        <span class="blind">현재 3단계 진행중</span>
      </div>
    </div>
    <div class="member-text">
      <p class="text">회원가입을 위한 정보를 입력해주세요.</p>
    </div>
    <Form class="form-wrap">
      <div class="form-box">
        <div class="form-group">
          <div class="ele-tit">
            <v-label>이메일주소</v-label>
          </div>
          <div class="email-wrap"><!-- 2024.05.29 이메일주소 입력부분 수정 -->
            <div class="first">
              <div class="input-wrap">
                <v-text-field
                  aria-label="이메일주소"
                  v-model="email"
                  placeholder="이메일주소 입력"
                  title="이메일주소 입력"
                  density="comfortable"
                  variant="outlined"
                  color="primary"
                  hide-details="auto"
                  required
                ></v-text-field>
              </div>
            </div>
            <span class="space">@</span>
            <div class="last">
              <div class="input-wrap">
                <v-text-field
                  aria-label="도메인명"
                  v-model="emailurl"
                  placeholder="도메인명"
                  title="도메인명 입력"
                  density="comfortable"
                  variant="outlined"
                  color="primary"
                  hide-details="auto"
                  required
                ></v-text-field>
              </div>
            </div>
            <v-btn
              variant="outlined"
              color="primary"
              size="large"
              rounded="md"
              class="line-blue"
            >
              인증번호전송
            </v-btn>
            <!--
            <v-btn
              variant="outlined"
              color="primary"
              size="large"
              rounded="md"
              class="line-blue"
            >
              재전송
            </v-btn>
            -->
          </div>
          <p class="text-tip message">이메일 인증에 사용하신 이메일 주소는 로그인 ID로 사용됩니다.<br>추후 서비스 이용을 위해 해당 이메일을 기억해 주시기 바랍니다.</p>
          <!--
          <p class="text-tip success">인증번호가 전송되었습니다. 인증번호를 입력해주세요.</p>
          <p class="text-tip error">이메일주소가 올바르지 않습니다.</p>
          <p class="text-tip error">이미 등록된 이메일입니다.</p>
          -->
        </div>
        <div class="form-group">
          <div class="ele-tit">
            <v-label>인증번호</v-label>
          </div>
          <div class="input-wrap side-btn side-timer">
            <v-text-field
              aria-label="인증번호"
              v-model="sms"
              placeholder="숫자 5자리 입력"
              title="인증번호 숫자 5자리 입력"
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
            <v-btn
              variant="outlined"
              color="primary"
              size="large"
              rounded="md"
              class="line-blue"
            >
              이메일인증
            </v-btn>
          </div>
          <p class="text-tip error">입력시간을 초과하였습니다. 인증번호 재전송 후 다시 시도해주세요.</p>
        </div>
        <div class="form-group">
          <div class="ele-tit">
            <v-label>비밀번호</v-label>
          </div>
          <div class="input-wrap">
            <v-text-field
              :type="show ? 'text' : 'password'"
              aria-label="비밀번호"
              v-model="resetpw"
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
          <p class="text-tip message">비밀번호는 숫자, 영문, 특수문자를 조합해 8~20자리로 생성해주세요.</p>
          <!-- <p class="text-tip error">비밀번호는 숫자, 영문, 특수문자를 조합해 8~20자리로 생성해주세요.</p> -->
        </div>
        <div class="form-group">
          <div class="ele-tit">
            <v-label>비밀번호 확인</v-label>
          </div>
          <div class="input-wrap">
            <v-text-field
              :type="show ? 'text' : 'password'"
              aria-label="비밀번호 확인"
              v-model="verifytpw"
              placeholder="비밀번호 재입력"
              title="비밀번호 재입력"
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
          :disabled="valid"
          variant="flat"
          color="primary"
          size="x-large"
          rounded="lg"
          class="default"
        >
          다음
        </v-btn>
      </div>
    </Form>
  </div>
</template>
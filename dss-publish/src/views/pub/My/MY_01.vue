<script setup>
import { ref } from 'vue';

const company = ref('');
const companynumber = ref('');
const email = ref('');
const sms = ref('');
const valid = ref(false);
</script>

<template>
  <div class="member">
    <div class="member-header">
      <h3 class="h-title">계정전환 (개인사업자)</h3>
    </div>
    <div class="member-step">
      <div class="step-txt">정보 입력</div>
      <div class="step-flow">
        <ul>
          <li class="current"><i>1단계 정보입력</i></li>
          <li><i>2단계 신청완료</i></li>
        </ul>
        <span class="blind">현재 1단계 진행중</span>
      </div>
    </div>
    <div class="member-text">
      <p class="text">계정전환을 위한 정보를 입력해주세요.</p>
    </div>
    <Form class="form-wrap">
      <div class="form-box">
        <div class="form-group">
          <div class="ele-tit">
            <v-label>기업명</v-label>
          </div>
          <div class="input-wrap">
            <v-text-field
              aria-label="기업명"
              v-model="company"
              placeholder="기업명 입력"
              title="기업명 입력"
              density="comfortable"
              variant="outlined"
              color="primary"
              hide-details="auto"
              clearable
              required
            ></v-text-field>
          </div>
          <p class="text-tip error">기업명은 필수 입력입니다.</p>
        </div>
        <div class="form-group">
          <div class="ele-tit">
            <v-label>사업자등록번호</v-label>
          </div>
          <div class="input-wrap side-btn">
            <div class="input-wrap">
              <v-text-field
                aria-label="사업자등록번호"
                v-model="companynumber"
                placeholder="[-] 없이 숫자만 입력"
                title="사업자등록번호 숫자 10자리 입력"
                density="comfortable"
                variant="outlined"
                color="primary"
                hide-details="auto"
                clearable
                required
              ></v-text-field>
            </div>
            <v-btn
              variant="outlined"
              color="primary"
              size="large"
              rounded="md"
              class="line-blue"
            >
              사업자번호확인
            </v-btn>
          </div>
          <p class="text-tip error">유효한 사업자번호가 아닙니다.</p>
          <!-- <p class="text-tip success">확인되었습니다.</p> -->
        </div>
        <div class="form-group">
          <div class="ele-tit">
            <v-label>이메일주소</v-label>
          </div>
          <div class="input-wrap side-btn">
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
                clearable
                required
              ></v-text-field>
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
          <p class="text-tip success">인증번호가 전송되었습니다. 인증번호를 입력해주세요.</p>
          <!--
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
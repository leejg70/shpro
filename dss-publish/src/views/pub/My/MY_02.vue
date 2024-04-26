<script setup>
import { ref } from 'vue';

const company = ref('');
const email = ref('');
const emailurl = ref('');
const sms = ref('');
const department = ref('');
const valid = ref(false);
</script>

<template>
  <div class="member">
    <div class="member-header">
      <h3 class="h-title">계정전환 (법인사업자)</h3>
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
          <div class="input-wrap side-btn">
            <div class="input-wrap">
              <v-text-field
                aria-label="기업명"
                v-model="company"
                placeholder="기업명"
                density="comfortable"
                variant="outlined"
                color="primary"
                hide-details="auto"
                disabled
              ></v-text-field>
            </div>
            <v-btn
              variant="outlined"
              color="primary"
              size="large"
              rounded="md"
              class="line-blue"
            >
              기업찾기
            </v-btn>
          </div>
        </div>
        <div class="form-group">
          <div class="ele-tit">
            <v-label>이메일주소</v-label>
          </div>
          <div class="email-wrap">
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
                  density="comfortable"
                  variant="outlined"
                  color="primary"
                  hide-details="auto"
                  disabled
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
        <div class="form-group">
          <div class="ele-tit">
            <v-label>부서명</v-label>
          </div>
          <div class="input-wrap">
            <v-text-field
              aria-label="부서명"
              v-model="department"
              placeholder="부서명 입력"
              title="부서명 입력"
              density="comfortable"
              variant="outlined"
              color="primary"
              hide-details="auto"
              clearable
              required
            ></v-text-field>
          </div>
          <p class="text-tip error">부서명은 필수 입력입니다.</p>
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
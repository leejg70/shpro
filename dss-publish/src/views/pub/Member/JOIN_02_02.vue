<script setup>
import { ref } from 'vue';

const formTerms = ref({
  value: ['0', '1', '2'],
  allSelected: false,
});
const valid = ref(false);
</script>

<template>
  <div class="member">
    <div class="member-header">
      <h3 class="h-title">회원가입 (개인)</h3>
    </div>
    <div class="member-step">
      <div class="step-txt">서비스 이용약관</div>
      <div class="step-flow">
        <ul>
          <li class="complete"><i>1단계 본인인증</i></li>
          <li class="current"><i>2단계 서비스이용약관</i></li>
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
      <div class="form-box service">
        <div class="form-group agree-depth">
          <div class="ele-tit">
            <v-label>약관동의</v-label>
          </div>
          <div class="terms-info">
            <dl class="terms-wrap">
              <dt class="terms-header">
                <div class="form-checkbox">
                  <v-checkbox
                    v-model="formTerms.allSelected"
                    label="이용약관 전체 동의"
                    hide-details
                    class="check-all"
                  ></v-checkbox>
                </div>
              </dt>
              <dd class="terms-body">
                <div class="check-wrap">
                  <div class="form-checkbox">
                    <v-checkbox
                      :value="formTerms.value[0]"
                      label="[필수] DataBlue 이용약관"
                      hide-details
                      class="check-agree"
                    ></v-checkbox>
                  </div>
                  <v-btn
                    variant="text"
                    class="btn-link"
                  >
                    <span>내용보기</span>
                    <v-icon>icon-arrow-right</v-icon>
                  </v-btn>
                </div>
                <div class="check-wrap">
                  <div class="form-checkbox">
                    <v-checkbox
                      :value="formTerms.value[1]"
                      label="[필수] 개인정보 수집 및 이용동의"
                      hide-details
                      class="check-agree"
                    ></v-checkbox>
                  </div>
                  <v-btn
                    variant="text"
                    class="btn-link"
                  >
                    <span>내용보기</span>
                    <v-icon>icon-arrow-right</v-icon>
                  </v-btn>
                </div>
                <div class="check-wrap">
                  <div class="form-checkbox">
                    <v-checkbox
                      :value="formTerms.value[2]"
                      label="[선택] 마케팅동의"
                      hide-details
                      class="check-agree"
                    ></v-checkbox>
                  </div>
                  <v-btn
                    variant="text"
                    class="btn-link"
                  >
                    <span>내용보기</span>
                    <v-icon>icon-arrow-right</v-icon>
                  </v-btn>
                </div>
                <!-- 2024.05.08 추가 -->
                <div class="check-wrap">
                  <v-checkbox
                    label="전부 동의"
                    hide-details
                    class="top-banner-check"
                  ></v-checkbox>
                </div>
                <div class="check-wrap">
                  <v-checkbox
                    label="이메일"
                    hide-details
                    class="top-banner-check"
                  ></v-checkbox>
                </div>
                <div class="check-wrap">
                  <v-checkbox
                    label="휴대폰메시지(카카오톡 등 모바일 메시지 포함)"
                    hide-details
                    class="top-banner-check"
                  ></v-checkbox>
                </div>
                <!-- // 2024.05.08 추가 -->
              </dd>
            </dl>
          </div>
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
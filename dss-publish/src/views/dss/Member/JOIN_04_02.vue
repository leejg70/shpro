<script setup>
import { ref } from 'vue';
import Agreement from  './JOIN_02_02_01_p.vue'

const formTerms = ref({
  value: ['0', '1', '2'],
  allSelected: false,
});
const agreeOnOf = ref(true);
const agreeClick = () => {
  if(agreeOnOf.value == false){
    agreeOnOf.value = true ;
  } else {
    agreeOnOf.value = false;
  }
};
const dialog = ref(false);
</script>

<template>
  <div class="member">
    <div class="member-header">
      <h3 class="h-title">회원가입 (법인사업자)</h3>
    </div>
    <div class="member-step">
      <div class="step-txt">서비스 이용약관</div>
      <div class="step-flow">
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
      <div class="form-box service">
        <div class="form-group agree-depth">
          <div class="ele-tit">
            <v-label>약관 동의</v-label>
          </div>
          <div class="terms-info">
            <dl class="terms-wrap">
              <dt class="terms-header">
                <div class="form-checkbox">
                  <v-checkbox
                    v-model="formTerms.allSelected"
                    label="서비스 이용약관 전체 동의"
                    hide-details
                    class="check-all"
                  ></v-checkbox>
                  <v-btn
                    :class="agreeOnOf ? 'active' : ''"
                    variant="text"
                    icon="mdi-arrow-down"
                    @click="agreeClick"
                    class="btn-toggle"
                  ></v-btn>
                </div>
              </dt>
              <dd v-show="agreeOnOf" class="terms-body">
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
                    append-icon="mdi-chevron-right"
                    variant="text"
                    @click="dialog = true"
                    class="btn-link"
                  >
                    내용보기
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
                    append-icon="mdi-chevron-right"
                    variant="text"
                    class="btn-link"
                  >
                    내용보기
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
                    append-icon="mdi-chevron-right"
                    variant="text"
                    class="btn-link"
                  >
                    내용보기
                  </v-btn>
                </div>
              </dd>
            </dl>
          </div>
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
          다음
        </v-btn>
      </div>
    </Form>
  </div>
  <v-dialog
    v-model="dialog"
    width="auto"
  >
    <Agreement></Agreement>
    <v-btn
      @click="dialog = false"
      block
      class="btn-popup-close"
    >
      닫기
    </v-btn>
  </v-dialog>
</template>
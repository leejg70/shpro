<script setup lang="ts">
import { ref } from 'vue';
import { Form } from 'vee-validate';

const formTerms = ref({
  value: ['0', '1', '2', '3', '4'],
  allSelected: false,
});
</script>

<template>
  <div class="member">
    <div class="member-header">
      <h3 class="h-title">아이디 찾기·비밀번호 변경</h3>
    </div>
    <div class="member-step">
      <div class="step-txt">본인 인증</div>
    </div>
    <div class="member-text">
      <p class="text">본인 확인을 위한 휴대폰인증을 진행합니다.</p>
    </div>
    <Form class="form-wrap">
      <div class="form-group agree-depth">
        <div class="ele-tit">
          <v-label>약관 동의</v-label>
        </div>
        <div class="terms-info">
          <dl class="terms-wrap">
            <dt class="terms-header">
              <div class="form-checkbox">
                <v-checkbox
                  :ripple="false"
                  v-model="formTerms.allSelected"
                  label="휴대폰 본인확인 전체 동의"
                  hide-details
                  class="check-all"
                ></v-checkbox>
              </div>
              <v-btn
                :ripple="false"
                variant="text"
                icon="mdi-arrow-down"
                class="btn-toggle"
              ></v-btn>
            </dt>
            <dd class="terms-body">
              <div class="check-wrap">
                <div class="form-checkbox">
                  <v-checkbox
                    :ripple="false"
                    :value="formTerms.value[0]"
                    label="[필수] 휴대폰 본인확인 이용 동의"
                    hide-details
                    class="check-agree"
                  ></v-checkbox>
                </div>
                <v-btn
                  variant="text"
                  class="btn-link"
                >
                  내용보기
                </v-btn>
              </div>
              <div class="check-wrap">
                <div class="form-checkbox">
                  <v-checkbox
                    :ripple="false"
                    :value="formTerms.value[1]"
                    label="[필수] 고유식별정보 처리 동의"
                    hide-details
                    class="check-agree"
                  ></v-checkbox>
                </div>
                <v-btn
                  variant="text"
                  class="btn-link"
                >
                  내용보기
                </v-btn>
              </div>
              <div class="check-wrap">
                <div class="form-checkbox">
                  <v-checkbox
                    :ripple="false"
                    :value="formTerms.value[2]"
                    label="[필수] 통신사 이용약관 동의"
                    hide-details
                    class="check-agree"
                  ></v-checkbox>
                </div>
                <v-btn
                  variant="text"
                  class="btn-link"
                >
                  내용보기
                </v-btn>
              </div>
              <div class="check-wrap">
                <div class="form-checkbox">
                  <v-checkbox
                    :ripple="false"
                    :value="formTerms.value[3]"
                    label="[필수] 개인정보 수집 및 이용 동의"
                    hide-details
                    class="check-agree"
                  ></v-checkbox>
                </div>
                <v-btn
                  variant="text"
                  class="btn-link"
                >
                  내용보기
                </v-btn>
              </div>
              <div class="check-wrap">
                <div class="form-checkbox">
                  <v-checkbox
                    :ripple="false"
                    :value="formTerms.value[4]"
                    label="[필수] 개인정보 제3자 제공 동의"
                    hide-details
                    class="check-agree"
                  ></v-checkbox>
                </div>
                <v-btn
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
    </Form>
  </div>
</template>

<style lang="scss">

</style>
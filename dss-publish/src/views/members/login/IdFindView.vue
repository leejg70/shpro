<script setup lang="ts">
import { ref } from 'vue';
import { Form } from 'vee-validate';

const checkbox = ref(false);
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
      <div class="form-group">
        <div class="ele-tit">
          <v-label>약관동의</v-label>
        </div>
        <div class="work-info">
          <div class="agreement_wrap">
            <div class="agreement_inner">
              <dl class="accordion_wrap accordion_check agree_depth01">
                <dt class="accordion_header on">
                  <div class="form-checkbox">
                    <v-checkbox
                      :ripple="false"
                      v-model="checkbox"
                      label="휴대폰 본인확인 전체 동의"
                      hide-details
                      class="check-agree"
                    ></v-checkbox>
                  </div>
                  <v-btn
                    icon="$vuetify"
                    variant="text"
                    class="toggle_btn"
                  >
                    전체보기
                  </v-btn>
                </dt>
                <dd class="accordion_body">
                  <div class="agree_depth02">
                    <div class="check_wrap">
                      <label for="t05-NewAgree01_010" class="check_agree">
                      <input type="checkbox" id="t05-NewAgree01_010" name="t05-NewAgree01_010" class="set_AutoComplete">
                        <span>[필수] 휴대폰 본인확인 이용 동의</span>
                      </label>
                      <button type="button" class="btn_check_pop btn_txt"><span>내용보기</span></button>
                    </div>
                    <div class="check_wrap">
                      <label for="t05-NewAgree01_020" class="check_agree">
                        <input type="checkbox" id="t05-NewAgree01_020" name="t05-NewAgree01_020" class="set_AutoComplete">
                        <span>[필수] 고유식별정보 처리 동의</span>
                      </label>
                      <button type="button" class="btn_check_pop btn_txt"><span>내용보기</span></button>
                    </div>
                    <div class="check_wrap">
                      <label for="t05-NewAgree01_030" class="check_agree">
                        <input type="checkbox" id="t05-NewAgree01_030" name="t05-NewAgree01_030" class="set_AutoComplete">
                        <span>[필수] 통신사 이용약관 동의</span>
                      </label>
                      <button type="button" class="btn_check_pop btn_txt"><span>내용보기</span></button>
                    </div>
                    <div class="check_wrap">
                      <label for="t05-NewAgree01_040" class="check_agree">
                        <input type="checkbox" id="t05-NewAgree01_040" name="t05-NewAgree01_040" class="set_AutoComplete">
                        <span>[필수] 개인정보 수집 및 이용 동의</span>
                      </label>
                      <button type="button" class="btn_check_pop btn_txt"><span>내용보기</span></button>
                    </div>
                    <div class="check_wrap">
                      <label for="t05-NewAgree01_050" class="check_agree">
                        <input type="checkbox" id="t05-NewAgree01_050" name="t05-NewAgree01_050" class="set_AutoComplete">
                        <span>[필수] 개인정보 제3자 제공 동의</span>
                      </label>
                      <button type="button" class="btn_check_pop btn_txt"><span>내용보기</span></button>
                    </div>
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </Form>
  </div>
</template>

<style lang="scss">

</style>
<script setup lang="ts">
import { ref } from 'vue';
import { Form } from 'vee-validate';

const formTerms = ref({
  value: ['0', '1', '2', '3', '4'],
  allSelected: false,
});
const agreOnOf = ref(false);
const agreClick = () => {
  if(agreOnOf.value == false){
    agreOnOf.value = true ;
  } else {
    agreOnOf.value = false;
  }
};
const dialog = ref(false);
const realNm = ref(false);
const nameRules = ref([(v: string) => !!v || '이름은 필수 입력입니다.']);
const birthday = ref(false);
const gender = ref(false);
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
                :class="agreOnOf ? 'active' : ''"
                variant="text"
                icon="mdi-arrow-down"
                @click="agreClick"
                class="btn-toggle"
              ></v-btn>
            </dt>
            <dd v-show="agreOnOf" class="terms-body">
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
                  :ripple="false"
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
                    :ripple="false"
                    :value="formTerms.value[1]"
                    label="[필수] 고유식별정보 처리 동의"
                    hide-details
                    class="check-agree"
                  ></v-checkbox>
                </div>
                <v-btn
                  :ripple="false"
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
                    :ripple="false"
                    :value="formTerms.value[2]"
                    label="[필수] 통신사 이용약관 동의"
                    hide-details
                    class="check-agree"
                  ></v-checkbox>
                </div>
                <v-btn
                  :ripple="false"
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
                    :ripple="false"
                    :value="formTerms.value[3]"
                    label="[필수] 개인정보 수집 및 이용 동의"
                    hide-details
                    class="check-agree"
                  ></v-checkbox>
                </div>
                <v-btn
                  :ripple="false"
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
                    :ripple="false"
                    :value="formTerms.value[4]"
                    label="[필수] 개인정보 제3자 제공 동의"
                    hide-details
                    class="check-agree"
                  ></v-checkbox>
                </div>
                <v-btn
                  :ripple="false"
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
      <div class="form-group">
        <div class="ele-tit">
          <v-label>이름</v-label>
        </div>
        <div class="input-wrap">
          <v-text-field
            :rules="nameRules"
            aria-label="이름"
            v-model="realNm"
            placeholder="국·영문 최대 20자 입력"
            density="comfortable"
            variant="outlined"
            color="primary"
            hide-details="auto"
            clearable
            required
          ></v-text-field>
          <!-- <div class="v-input__details"><div class="v-messages" role="alert" aria-live="polite" id="input-24-messages"><div class="v-messages__message">이름은 필수 입력입니다.</div></div></div> -->
        </div>
      </div>
      <div class="form-group">
        <div class="ele-tit">
          <v-label>주민등록번호</v-label>
        </div>
        <div class="jumin-wrap">
          <div class="first">
            <v-text-field
              aria-label="주민등록번호 숫자 앞 6자리"
              v-model="birthday"
              placeholder="앞 6자리"
              density="comfortable"
              variant="outlined"
              color="primary"
              hide-details="auto"
              clearable
              required
            ></v-text-field>
            <span>-</span>
          </div>
          <div class="last">
            <v-text-field
              :rules="nameRules"
              aria-label="주민등록번호 숫자 뒤 1자리"
              v-model="gender"
              placeholder="뒤 1자리"
              density="comfortable"
              variant="outlined"
              color="primary"
              hide-details="auto"
              clearable
              required
            ></v-text-field>
            <div class="masking">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <p class="text_tip error">주민등록번호는 필수 입력입니다.</p>
        </div>
      </div>
    </Form>
  </div>
  <v-dialog
    v-model="dialog"
    width="auto"
  >
    <div class="aaaaaa" style="width: 500px; height:500px; border:2px solid #eee">
      <Agreement></Agreement>
      <v-btn
        @click="dialog = false"
        color="primary"
        block
      >
        Close Dialog
      </v-btn>
    </div>
  </v-dialog>
</template>

<style lang="scss">

</style>
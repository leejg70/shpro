<script setup>
import { ref } from 'vue';

const formTerms = ref({
  value: ['0', '1', '2', '3', '4'],
  allSelected: false,
});
const agreeOnOf = ref(false);
const agreeClick = () => {
  if(agreeOnOf.value == false){
    agreeOnOf.value = true ;
  } else {
    agreeOnOf.value = false;
  }
};
const realNm = ref('');
const birthday = ref('');
const gender = ref('');
const phone = ref('');
const sms = ref('');
const radioGroup = ref('');
const selected = ref('알뜰폰');
const items = ['알뜰폰', 'SKT 알뜰폰', 'KT 알뜰폰', 'LG U+ 알뜰폰'];
const valid = ref(false);
</script>

<template>
  <div class="member">
    <div class="member-header">
      <h3 class="h-title">회원가입 (개인)</h3>
    </div>
    <div class="member-step">
      <div class="step-txt">본인 인증</div>
      <div class="step-flow">
        <ul>
          <li class="current"><i>1단계 본인인증</i></li>
          <li><i>2단계 서비스이용약관</i></li>
          <li><i>3단계 정보입력</i></li>
          <li><i>4단계 가입완료</i></li>
        </ul>
        <span class="blind">현재 1단계 진행중</span>
      </div>
    </div>
    <div class="member-text">
      <p class="text">본인 확인을 위한 휴대폰인증을 진행합니다.</p>
    </div>
    <Form class="form-wrap">
      <div class="form-box">
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
                    label="휴대폰 본인확인 전체 동의"
                    hide-details
                    class="check-all"
                  ></v-checkbox>
                </div>
                <v-btn
                  :class="agreeOnOf ? 'active' : ''"
                  variant="text"
                  @click="agreeClick"
                  class="btn-toggle"
                >
                  <v-icon>icon-arrow-down</v-icon>
                  <span class="sr-only">전체보기</span>
                </v-btn>
              </dt>
              <dd v-show="agreeOnOf" class="terms-body">
                <div class="check-wrap">
                  <div class="form-checkbox">
                    <v-checkbox
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
                    <span>내용보기</span>
                    <v-icon>icon-arrow-right</v-icon>
                  </v-btn>
                </div>
                <div class="check-wrap">
                  <div class="form-checkbox">
                    <v-checkbox
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
                    <span>내용보기</span>
                    <v-icon>icon-arrow-right</v-icon>
                  </v-btn>
                </div>
                <div class="check-wrap">
                  <div class="form-checkbox">
                    <v-checkbox
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
                    <span>내용보기</span>
                    <v-icon>icon-arrow-right</v-icon>
                  </v-btn>
                </div>
                <div class="check-wrap">
                  <div class="form-checkbox">
                    <v-checkbox
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
                    <span>내용보기</span>
                    <v-icon>icon-arrow-right</v-icon>
                  </v-btn>
                </div>
                <div class="check-wrap">
                  <div class="form-checkbox">
                    <v-checkbox
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
                    <span>내용보기</span>
                    <v-icon>icon-arrow-right</v-icon>
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
              aria-label="이름"
              v-model="realNm"
              placeholder="이름 입력"
              title="이름 입력"
              density="comfortable"
              variant="outlined"
              color="primary"
              hide-details="auto"
              clearable
              required
            ></v-text-field>
          </div>
          <p class="text-tip error">이름은 필수 입력입니다.</p>
        </div>
        <div class="form-group">
          <div class="ele-tit">
            <v-label>주민등록번호</v-label>
          </div>
          <div class="jumin-wrap">
            <div class="first">
              <div class="input-wrap">
                <v-text-field
                  aria-label="주민등록번호 숫자 앞 6자리"
                  v-model="birthday"
                  placeholder="앞 6자리"
                  title="주민등록번호 숫자 앞 6자리 입력"
                  density="comfortable"
                  variant="outlined"
                  color="primary"
                  hide-details="auto"
                  clearable
                  required
                ></v-text-field>
              </div>
            </div>
            <span class="space">-</span>
            <div class="last">
              <div class="input-wrap">
                <v-text-field
                  aria-label="주민등록번호 숫자 뒤 1자리"
                  v-model="gender"
                  placeholder="뒤 1자리"
                  title="주민등록번호 숫자 뒤 1자리 입력"
                  density="comfortable"
                  variant="outlined"
                  color="primary"
                  hide-details="auto"
                  clearable
                  required
                ></v-text-field>
              </div>
              <div class="masking">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <p class="text-tip error">주민등록번호는 필수 입력입니다.</p>
          <!--
          <p class="text-tip error">만 19세 미만은 회원가입이 불가합니다.</p>
          -->
        </div>
        <div class="form-group">
          <div class="ele-tit">
            <v-label>통신사 선택</v-label>
          </div>
          <div class="phone-wrap">
            <div class="input-wrap">
              <v-radio-group v-model="radioGroup" class="v-btn-radio" inline>
                <v-radio label="SKT" color="primary" value="SKT"></v-radio>
                <v-radio label="KT" color="primary" value="KT"></v-radio>
                <v-radio label="LG U+" color="primary" value="LG U+"></v-radio>
                <v-radio label="알뜰폰" color="primary" value="알뜰폰"></v-radio>
              </v-radio-group>
            </div>
            <div v-if="radioGroup=='알뜰폰'" class="select-wrap">
              <v-select
                aria-label="알뜰폰"
                v-model="selected"
                :items="items"
                variant="outlined"
                color="primary"
                hide-details="auto"
                required
              ></v-select>
            </div>
          </div>
          <p class="text-tip error">통신사 선택은 필수입니다.</p>
        </div>
        <div class="form-group">
          <div class="ele-tit">
            <v-label>휴대폰번호</v-label>
          </div>
          <div class="input-wrap side-btn">
            <div class="input-wrap">
              <v-text-field
                aria-label="휴대폰번호"
                v-model="phone"
                placeholder="[-] 없이 숫자만 입력"
                title="휴대폰번호 숫자 최대 11자리 입력"
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
          <p class="text-tip error">휴대폰번호는 필수 입력입니다.</p>
          <p class="text-tip error">인증번호 전송에 실패했습니다. 인증정보를 확인해주세요.</p>
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
              placeholder="숫자 6자리 입력"
              title="인증번호 숫자 6자리 입력"
              density="comfortable"
              variant="outlined"
              color="primary"
              hide-details="auto"
              clearable
              required
            ></v-text-field>
            <span class="timer-box">
              <v-icon>icon-timer</v-icon>
              <span>2:44</span>
            </span>
            <v-btn
              variant="outlined"
              color="primary"
              size="large"
              rounded="md"
              class="line-blue"
            >
              휴대폰인증
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
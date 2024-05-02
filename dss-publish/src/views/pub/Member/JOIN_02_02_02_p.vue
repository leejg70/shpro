<script setup>
import { ref } from 'vue';

const terms = ref(false);
</script>

<template>
  <v-dialog v-model="terms">
    <!-- 샘플 버튼 -->
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps">
        개인정보 수집 및 이용동의 팝업
      </v-btn>
    </template>
    <!-- // 샘플 버튼 -->

    <!-- 개인정보 수집 및 이용동의 -->
    <div class="popup-wrap medium fixed">
      <div class="popup-head">
        <h3 class="h-title">개인정보 수집 및 이용동의</h3>
      </div>
      <div class="popup-cont">
        <div class="terms-cont">
          <p>귀하는 개인정보 수집, 이용 동의에 대해 거부하실 수 있습니다.<br>다만, 본 계약과 관련하여 신한카드에 대한 개인정보 수집, 이용 동의는 거래관계의 설정, 유지에 필수적이거나 귀하에게 제공되는 서비스와 직접적으로 관련된 필수적 사항이므로, 아래 사항에 동의하여야만 거래관계의 설정 및 유지가 가능합니다.</p>
          <ol>
            <li>1. 수집, 이용 목적
              <ol>
                <li>가.	회원가입 및 관리 : 회원가입을 위한 사용자 인증 및 회원제 서비스 이용, 부정이용방지, 민원처리 및 고지사항 전달 등</li>
                <li>나. 서비스 제공 및 이용안내 : 서비스 이용 관련 문의사항 응대, 서비스제공 관련 안내, 이용자 의견수렴 및 통계정보 활용 등</li>
              </ol>
            </li>
            <li>2. 수집, 이용 항목
              <ol>
                <li>- &nbsp; 성명, 성별, 생년월일, 전화번호, CI, 이메일, 소속사명, 소속부서명</li>
              </ol>
            </li>
            <li>3. 개인정보 보유 및 이용기간
              <ol>
                <li>- &nbsp; DataBlue 회원 탈회 시까지 단, 관련 법령의 별도 규정이 명시되어 있는 사항의 경우, 그 기간을 따릅니다.</li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
      <div class="popup-foot">
        <div class="btn-popwrap">
          <v-btn
            variant="flat"
            color="primary"
            size="x-large"
            rounded="md"
            class="default"
          >
            확인
          </v-btn>
        </div>
      </div>
      <v-btn
        @click="terms = false"
        variant="text"
        class="btn-popup-close"
      >
        <span class="sr-only">닫기</span>
      </v-btn>
    </div>
    <!-- // 개인정보 수집 및 이용동의 -->
  </v-dialog>
</template>

<style scoped>
.v-btn--size-default {
  font-size: 1.4rem;
}
</style>
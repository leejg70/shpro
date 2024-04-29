<script setup>
import { ref } from 'vue';

const terms = ref(false);
</script>

<template>
  <v-dialog
    v-model="terms"
    width="auto"
  >
    <!-- 샘플 버튼 -->
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps">
        마케팅동의 약관 팝업
      </v-btn>
    </template>
    <!-- // 샘플 버튼 -->

    <!-- 마케팅동의 약관 -->
    <div class="popup-wrap medium fixed">
      <div class="popup-head">
        <h3 class="h-title">마케팅동의 약관</h3>
      </div>
      <div class="popup-cont">
        <div class="terms-cont">
          <p>귀하는 개인 정보를 이용에 대한 동의를 거부할 수 있습니다.<br>그러나 동의를 거부하는 경우 아래와 같은 당사의 상품, 서비스 안내 및 이용 권유 등 관련 혜택을 제공받으실 수 없습니다.</p>
          <ol>
            <li>1. 정보 이용 목적
              <ol>
                <li>- &nbsp; 당사의 상품, 서비스, 설명회 안내 및 이용 권유, 고객 판촉활동 및 편의 제공</li>
              </ol>
            </li>
            <li>2. 정보 이용 항목
              <ol>
                <li>- &nbsp; 성명, 전화번호, 이메일, 소속사명</li>
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
    <!-- // 마케팅동의 약관 -->
  </v-dialog>
</template>

<style scoped>
.v-btn--size-default {
  font-size: 1.4rem;
}
</style>
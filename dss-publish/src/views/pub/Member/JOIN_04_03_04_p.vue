<script setup>
import { ref } from 'vue';

const add = ref(false);
const company = ref('');
const companynumber = ref('');
const emailurl = ref('');
const companyRules = ref(['기업명은 필수 입력입니다.']);
const emailurlRules = ref(['법인 도메인이 올바르지 않습니다. 확인 후 다시 입력해주세요.']);
</script>

<template>
  <v-dialog
    v-model="add"
    persistent
  >
    <!-- 샘플 버튼 -->
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps">
        기업 추가 팝업
      </v-btn>
    </template>
    <!-- // 샘플 버튼 -->

    <!-- 기업 추가 -->
    <div class="popup-wrap member medium fixed"><!-- 2024.05.10 'member' class 추가 -->
      <div class="popup-head">
        <h3 class="h-title">기업 추가</h3>
      </div>
      <div class="popup-cont">
        <Form class="form-wrap">
          <div class="form-box form-type"><!-- 2024.05.10 'form-type' class 추가 -->
            <div class="form-group">
              <div class="ele-tit">
                <v-label>기업명</v-label>
              </div>
              <div class="input-wrap">
                <v-text-field
                  aria-label="기업명"
                  v-model="company"
                  :rules="companyRules"
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
                <v-label>법인도메인</v-label>
              </div>
              <div class="input-wrap">
                <v-text-field
                  aria-label="법인도메인"
                  v-model="emailurl"
                  :rules="emailurlRules"
                  placeholder="@를 제외한 도메인 입력"
                  title="@를 제외한 도메인명 입력"
                  density="comfortable"
                  variant="outlined"
                  color="primary"
                  hide-details="auto"
                  clearable
                  required
                ></v-text-field>
              </div>
              <!-- <p class="text-tip error">이미 등록된 도메인입니다.</p> -->
            </div>
          </div>
        </Form>
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
            기업추가
          </v-btn>
        </div>
      </div>
      <v-btn
        @click="add = false"
        variant="text"
        class="btn-popup-close"
      >
        <span class="sr-only">닫기</span>
      </v-btn>
    </div>
    <!-- // 기업 추가 -->
  </v-dialog>
</template>

<style scoped>
.v-btn--size-default {
  font-size: 1.4rem;
}
</style>
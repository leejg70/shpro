<script setup>
import { ref } from 'vue';

const download = ref(false);
</script>

<template>
  <v-dialog
    v-model="download"
    persistent
  >
    <!-- 샘플 버튼 -->
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps">
        2단계 상품다운로드 팝업
      </v-btn>
    </template>
    <!-- // 샘플 버튼 -->

    <!-- Data 다운로드 -->
    <div class="popup-wrap large fixed">
      <div class="popup-head">
        <h3 class="h-title">Data 다운로드</h3>
      </div>
      <div class="popup-cont">
        <dl class="download-area">
          <dt class="title">계약번호</dt>
          <dd class="number">C240405001</dd>
        </dl>
        <div class="table-download">
          <v-table>
            <colgroup>
              <col width="526px" />
              <col width="140px" />
              <col width="140px" />
              <col width="126px" />
            </colgroup>
            <thead>
              <tr>
                <th v-for="title in ['상품', '다운로드 시작일', '다운로드 종료일', '다운로드 여부']">{{ title }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><router-link to="">스타벅스 6월 결제 데이터 /데이터 상품명이 길어질 경우 줄바꿈으로 모두 출력됩니다.</router-link></td>
                <td>2024.03.20</td>
                <td>2024.03.20</td>
                <td>Y</td>
              </tr>
              <tr class="disabled">
                <td><router-link to="">서울시 상권분석 데이터</router-link></td>
                <td>2024.03.20</td>
                <td>2024.03.20</td>
                <td>N</td>
              </tr>
              <tr>
                <td><router-link to="">스타벅스 5월 결제 데이터</router-link></td>
                <td>2024.03.20</td>
                <td>2024.03.20</td>
                <td>Y</td>
              </tr>
              <tr>
                <td><router-link to="">서울시 중구 배달업체 데이터</router-link></td>
                <td>2024.03.20</td>
                <td>2024.03.20</td>
                <td>N</td>
              </tr>
              <tr class="disabled">
                <td><router-link to="">서울시 상권분석 데이터</router-link></td>
                <td>2024.03.20</td>
                <td>2024.03.20</td>
                <td>Y</td>
              </tr>
              <tr>
                <td><router-link to="">서울시 강남구 배달업체 데이터</router-link></td>
                <td>2024.03.20</td>
                <td>2024.03.20</td>
                <td>N</td>
              </tr>
            </tbody>
          </v-table>
        </div>
        <ul class="download-guide">
          <li class="accent">파일의 비밀번호는 계약번호입니다.</li>
          <li>일회성/일별/주별로 다운로드 받으시는 데이터는 2주간(14일), 월별/분기별 데이터는 1개월(30일)간 다운로드가 가능합니다.</li>
        </ul>
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
        @click="download = false"
        variant="text"
        class="btn-popup-close"
      >
        <span class="sr-only">닫기</span>
      </v-btn>
    </div>
    <!-- // Data 다운로드 -->
  </v-dialog>
</template>

<style scoped>
.v-btn--size-default {
  font-size: 1.4rem;
}
</style>
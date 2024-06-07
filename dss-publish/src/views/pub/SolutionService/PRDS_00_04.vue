<script setup>
import { ref } from 'vue';

const active = ref(true);
</script>

<template>
  <div class="sub-group">
    <div class="sub-title-area">
      <h4 class="sub-title">솔루션상품</h4>
    </div>
    <div class="static-content">
      <!-- 상품 카드 영역 -->
      <div class="product-area">
        <div class="top-info">
          <div class="prod-flag-wrap">
            <span class="flag blue">시장분석</span>
            <span class="flag violet">지역경제</span>
            <span class="flag green">대안신용</span>
            <span class="flag yellow">마이데이터</span>
            <span class="flag pink">카드데이터</span>
          </div>
          <div class="favorites">
            <v-btn @click="active = !active" variant="flat" min-width="auto" height="auto" class="pa-0">
              <v-icon :icon="active ? 'icon-pick-on' : 'icon-pick-off'" />
            </v-btn>
          </div>
        </div>
        <div class="middle-info">
          <div class="text">
            <div class="subtitle-22">상품명 영역 전국 배달 업종 결제 데이터 상품명 글자수 모두 노출</div>
            <div class="text-18">상품 요약 내용 관리자페이지에서 등록한 모든 글자수 노출 23년 9월 기준 전국 행정동 단위 배달 산업 결제 트랜드</div>
          </div>
          <div class="img">
            <img src="@/assets/images/img_thumbnail.png" alt="썸네일이미지" />
          </div>
        </div>
        <div class="bottom-info">
          <span v-for="n in [ '스타벅스', '전국', '시간대별결제데이터', '해시태그 영역', '모든 글자 수 노출' ]" class="hashtag text-16">#{{  n  }}</span>
        </div>
        <div class="btn-area">
          <v-btn variant="flat" rounded="md" size="large" color="primary">문의하기</v-btn>
        </div>
      </div>
      <!--// 상품 카드 영역 -->
      <!-- 01 -->
      <div class="cnt-group">
        <div class="cnt-title subtitle-24">
          <div class="num">01</div>
          <v-divider vertical />
          <div class="title">GPS 란?</div>
        </div>
        <div class="cnt-text">
          <div class="text-16">수요기업에서 개인 고객의 동의에 따라 KCB를 통해 GranData(신한카드, SKT, KCB)가 보유한 정보를 실시간으로 정보를 조회하고, 통합 GPS 항목을 생성하여 고객사에서 원하는 정보를 전송하는 서비스</div>
        </div>
      </div>
      <!-- 02 -->
      <div class="cnt-group">
        <div class="cnt-title subtitle-24">
          <div class="num">02</div>
          <v-divider vertical />
          <div class="title">GPS 주요기능</div>
        </div>
        <div class="cnt-text">
          <div class="text-16">기존 데이터 결합 방식인 가명결합정보는 정책의사결정이나 인사이트 발굴 측면에서는 유용하였으나, 재식별 금지/분리보관 동의 제약사항으로 실제 마케팅 업무는 불가능하였습니다. 하지만 이를 보완하기위해 고객 동의형 GPS 솔루션을 개발하였습니다.<br />활용방법은 고객사 정보와 GrandData 가명결합/분석을 통해 인사이트를 발굴 하여 마케팅에 유용한 GPS 항목을 선별해 드립니다.<br />이후 고객 동의 기반으로 선정된 GPS 항목을 활용하여 효율적인 마케팅 실행이 가능합니다.</div>
          <div class="gps-area">
            <div class="title subtitle-22">GPS서비스 : 동의기반 실시간 정보제공</div>
            <div class="text-16">GrandData(KCB,신한카드,SKT)가 보유한 정보를 수요기업 개인고객의 동의에 따라 KCB를 통해 실시간으로 제공</div>
            <div class="img-box">
              <img src="@/assets/images/content/img_gps_01.png" alt="" />
            </div>
          </div>
          <div class="gps-area">
            <div class="title subtitle-22">Key Point : 개인정보 활용 동의 획득</div>
            <ul class="list-dot text-16">
              <li>개인정보 활용 선택동의 획득시,최대한 구체적으로 제공하는 항목, 이용목적, 이용기간에 대한 설명이 필요</li>
              <li>이용목적은 고객에게 직접적 혜택이 제공되는 Positive 방향으로 설계 필요</li>
            </ul>
            <div class="img-box">
              <img src="@/assets/images/content/img_gps_02.png" alt="" />
            </div>
          </div>
          <div class="gps-area">
            <div class="title subtitle-22">활용단계 : 가명결합/분석 결곽기반 마케팅 실행</div>
            <ul class="list-dot text-16">
              <li>고객사 + 그랜데이터 가명결합/분석을 통해 발굴한 인사이트를 기반으로 마케팅에 유용한 GPS 항목을 선별</li>
              <li>고객동의 기반으로 선정된 GPS 항목을 획득하고, 이를 활용하여 효울적인 마케팅 실행</li>
            </ul>
            <div class="img-box">
              <img src="@/assets/images/content/img_gps_03.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="btn-list">
        <v-btn variant="flat" rounded="lg" size="x-large" color="primary">목록</v-btn>
      </div>
    </div>
  </div>
</template>
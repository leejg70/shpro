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
      <div class="cnt-group">
        <div class="img">
          <img src="@/assets/images/content/img_data_agency.png" alt="" />
        </div>
      </div>
      <!-- 01 -->
      <div class="cnt-group">
        <div class="cnt-title subtitle-24">
          <div class="num">01</div>
          <v-divider vertical />
          <div class="title">데이터, 이제 결합하세요.</div>
        </div>
        <div class="cnt-text">
          <div class="text-16">서로 다른 기관이 보유한 개인정보를 가명처리한 후 결합하여 가치 있는 새로운 정보를 얻는 것을 말합니다.<br />신용정보가 포함된 가명정보 결합은, 관련 법률에 따라 데이터전문기관만이 수행할 수 있습니다.<br />신한카드에가명정보 결합을 요청하시면 최상의 결과물을 제공해드리겠습니다.</div>
        </div>
      </div>
      <!-- 02 -->
      <div class="cnt-group">
        <div class="cnt-title subtitle-24">
          <div class="num">02</div>
          <v-divider vertical />
          <div class="title">신한카드 데이터전문기관에 맡겨주세요.</div>
        </div>
        <div class="cnt-text">
          <div class="text-16">신한카드 데이터전문기관은 민간 기관 중에서 최초로 지정되어, 최초로 결합업무를 수행한 곳입니다.<br />최다 회원수, 최다 가맹점수를 자랑하는 신한카드의 우수한 빅데이터 능력을 기초로 하여,<br />가명정보 결합에 있어 고객님께서 느끼시는 어려운 점들을 빠르게 해결하여드립니다.</div>
        </div>
      </div>
      <!-- 03 -->
      <div class="cnt-group">
        <div class="cnt-title subtitle-24">
          <div class="num">03</div>
          <v-divider vertical />
          <div class="title">편하게 문의해주세요.</div>
        </div>
        <div class="cnt-text">
          <div class="text-16">결합에 대해서 아직 궁금하신 게 많으시죠?<br />문의하기를 통해 요청해 주세요.<br />신한카드 데이터전문기관에서 직접 연락드려 고객님께 답변해 드리겠습니다.</div>
        </div>
      </div>
      <div class="btn-list">
        <v-btn variant="flat" rounded="lg" size="x-large" color="primary">목록</v-btn>
      </div>
    </div>
  </div>
</template>
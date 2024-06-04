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
          <div class="title">빅파이낸스란?</div>
        </div>
        <div class="cnt-text">
          <div class="text-16">"All in one Business intelligence Platform" 기업 투자 전 꼭 알아야 할 기업에 대한 모든 데이터를 한 곳에 !<br>기업 · 산업 · 원자재 · 수출 · 소비 데이터를 총망라하여 투자전에 누구나 쉽게 기업을 이해하도록 도와드립니다.</div>
        </div>
      </div>
      <!-- 02 -->
      <div class="cnt-group">
        <div class="cnt-title subtitle-24">
          <div class="num">02</div>
          <v-divider vertical />
          <div class="title">주요 기능 및 장점</div>
        </div>
        <div class="finace-list-area">
          <v-row>
            <v-col cols="12" md="6">
              <v-card variant="text" class="finace-list">
                <div class="title subtitle-18">데이터 커버리지</div>
                <div class="text-16">주가,주주구성,재무제표,재무정보와 주가 비교와 사업부문별 실적,연관산업 지표,뉴스 등 기업에 대한 모든 정보</div>
                <div class="img">
                  <img src="@/assets/images/content/img_big_finace_01.png" alt="" />
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card variant="text" class="finace-list">
                <div class="title subtitle-18">사업부문별 개별 분석</div>
                <div class="text-16">1개의 기업이 다양한 사업을 진행할 경우 사업부문 별로 데이터를 분리하여 개발 시각화</div>
                <div class="img">
                  <img src="@/assets/images/content/img_big_finace_02.png" alt="" />
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card variant="text" class="finace-list">
                <div class="title subtitle-18">산업지표</div>
                <div class="text-16">기업과 연관된 산업의 수출,소비,원자재를 한 눈에 확인</div>
                <div class="img">
                  <img src="@/assets/images/content/img_big_finace_03.png" alt="" />
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card variant="text" class="finace-list">
                <div class="title subtitle-18">연관기업 분석</div>
                <div class="text-16">협력사,경쟁사를 찾고 주가와 실적을 바로 비교</div>
                <div class="img">
                  <img src="@/assets/images/content/img_big_finace_04.png" alt="" />
                </div>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-card variant="text" class="finace-list">
                <div class="title subtitle-18">산업통계</div>
                <div class="text-16">에너지,자동차,반도체,유통,화장품,금융,철강,화학,건설,조선,기계,헬스케어 등 23개 산업에 대한 통계를 시각화</div>
                <div class="img">
                  <img src="@/assets/images/content/img_big_finace_05.png" alt="" />
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card variant="text" class="finace-list">
                <div class="title subtitle-18">사업부문멸 개별 분석</div>
                <div class="text-16">개별 산업 통계 데이터와 연관성이 높은 기업을 매칭하여 해당 데이터가 어떤 기업에 영향을 주는지 쉽게 파악 가능</div>
                <div class="img">
                  <img src="@/assets/images/content/img_big_finace_06.png" alt="" />
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card variant="text" class="finace-list">
                <div class="title subtitle-18">산업지표</div>
                <div class="text-16">2000만명 이상의 카드 결제 데이터로 160개 기업,600개 이상의 브랜드와 서비스의 결제를 쉽게 조회</div>
                <div class="img">
                  <img src="@/assets/images/content/img_big_finace_07.png" alt="" />
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card variant="text" class="finace-list">
                <div class="title subtitle-18">연관기업 분석</div>
                <div class="text-16">HS코드별,품목별,지역별 무역통계를 잠정치와 확실치로 제공하며 월별/연도별 추세 확인 가능</div>
                <div class="img">
                  <img src="@/assets/images/content/img_big_finace_08.png" alt="" />
                </div>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </div>
      <!-- 03 -->
      <div class="cnt-group">
        <div class="cnt-title subtitle-24">
          <div class="num">03</div>
          <v-divider vertical />
          <div class="title">빅파이낸스 활용 예시</div>
        </div>
      </div>
      <div class="btn-list">
        <v-btn variant="flat" rounded="lg" size="x-large" color="primary">목록</v-btn>
      </div>
    </div>
  </div>
</template>
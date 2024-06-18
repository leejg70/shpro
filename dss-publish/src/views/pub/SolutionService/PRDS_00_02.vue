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
          <div class="title">매모판 Pro란?</div>
        </div>
        <div class="cnt-text">
          <div class="text-16">바쁜 셀러를 위한 스마트스토어 판매 상품 분석 서비스입니다.</div>
          <div class="img-box">
            <img src="@/assets/images/content/img_memopro.png" alt="" />
          </div>
        </div>
      </div>
      <!-- 02 -->
      <div class="cnt-group">
        <div class="cnt-title subtitle-24">
          <div class="num">02</div>
          <v-divider vertical />
          <div class="title">매모판 주요기능</div>
        </div>
        <div class="cnt-text">
          <div class="text-16 mgb64">네이버 쇼핑, 스마트스토어의 공식 정보(API)와 자체 수집 실시간 데이터를 활용하여 분석한 결과를 제공해 스마트스토어 사업자의 사업활동을 촉진 함으로써 신규 진입 허들을 낮추고 기존 사업자의 더 큰 성공을 지원합니다.<br /><br />상품 등록정보 및 판매지표 분석, 상위 노출 상품 분석, 키워드/카테고리/리뷰 상품 통합 분석 뿐만 아니라 온라인 쇼핑 시장 현황을 전망할 수 있는 키워드/카테고리 시장분석과 비즈니스 매거진 등의 주요 기능이 있습니다.</div>
          <div class="goods-list-area">
            <v-row>
              <v-col cols="12" md="6">
                <v-card variant="text" class="goods-list">
                  <div class="title subtitle-22">순위 및 판매지표 분석 : 인기지표</div>
                  <div class="img memo">
                    <img src="@/assets/images/content/img_memopro_01.png" alt="" />
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <v-card variant="text" class="goods-list">
                  <div class="title subtitle-22">순위 및 판매지표 분석 : 상품 키워드 통합분석</div>
                  <div class="img memo">
                    <img src="@/assets/images/content/img_memopro_02.png" alt="" />
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <v-card variant="text" class="goods-list">
                  <div class="title subtitle-22">등록정보 분석</div>
                  <div class="img memo">
                    <img src="@/assets/images/content/img_memopro_03.png" alt="" />
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <v-card variant="text" class="goods-list">
                  <div class="title subtitle-22">시장분석</div>
                  <div class="img memo">
                    <img src="@/assets/images/content/img_memopro_04.png" alt="" />
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
      <!-- 03 -->
      <div class="cnt-group">
        <div class="cnt-title subtitle-24">
          <div class="num">03</div>
          <v-divider vertical />
          <div class="title">매모판 특징 및 장점</div>
        </div>
        <div class="cnt-text">
          <ul class="list-dot text-16">
            <li>운영 중인 스마트스토어의 모든 상품의 노출 순위 및 지표 확인을 빠르게 할 수 있습니다. 매일 새롭게 상승/하락한 내 상품 노출순위, 상세 인기지표, 순위 변화 추이까지 다양하게 활용해 보세요.</li>
            <li>궁금한 키워드 시장 분석을 통해 키워드와 관련된 다양한 추이와 특징, 인기 카테고리, 관련 키워드, 경쟁상품 및 등록정보까지 상세하게 확인해 보세요.</li>
            <li>등록정보 분석부터 수정까지 한번에 보완할 수 있습니다. 스마트스토어 가이드에 따라 내 상품의 상위노출을 돕는 등록정보분석을 매일 꼼꼼하게 체크해보세요.</li>
          </ul>
        </div>
      </div>
      <!-- 04 -->
      <div class="cnt-group">
        <div class="cnt-title subtitle-24">
          <div class="num">04</div>
          <v-divider vertical />
          <div class="title">솔루션 구매 프로세스</div>
        </div>
        <div class="cnt-text">
          <div class="img-box mgt0">
            <img src="@/assets/images/content/img_process.png" alt="" />
          </div>
        </div>
      </div>
      <div class="btn-attach">
        <div role="button" class="text-16">
          <v-icon class="icon-pdf" />매모판Pro소개서_v1.0.pdf
        </div>
      </div>
      <div class="btn-list">
        <v-btn variant="flat" rounded="lg" size="x-large" color="primary">목록</v-btn>
      </div>
    </div>
  </div>
</template>
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
          <div class="title">My BIZMAP이란?</div>
        </div>
        <div class="cnt-text">
          <div class="text-16">신한카드의 Big Data를 기반으로 AI분석 및 시각화 솔루션을 활용하여 상업시설 분석에 필요한 다차원적인 인사이트를 전달하는 최적화된 Prop-tech솔루션입니다.</div>
          <div class="bizmap-area">
            <div class="img">
              <img src="@/assets/images/content/img_bizmap.png" alt="" />
            </div>
            <ul class="list-dot text-16">
              <li>월평균 3.2억건의 카드 Big Data를 활용, 기존 솔루션보다 더 빠르고 정확한 분석정보 제공</li>
              <li>블록, 상원단위 뿐만 아니라, 건물 및 매장 단위의 매출(on/off), 고객, 배후지 등 Micro한 분석 지원</li>
              <li>카드 Data 외 주변환경(주거인구, 아파트) 등 다양한 Data를 활용하여 다차원적인사이트 제시</li>
              <li>AI 및 시각화 분석기법을 통해 깊이 있는 정보를 Web상에서 손쉽게 확인 가능</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 02 -->
      <div class="cnt-group">
        <div class="cnt-title subtitle-24">
          <div class="num">02</div>
          <v-divider vertical />
          <div class="title">My BIZMAP주요기능</div>
        </div>
        <div class="goods-list-area">
          <v-row>
            <v-col cols="12" md="6">
              <v-card variant="text" class="goods-list">
                <div class="title subtitle-22">매장정보</div>
                <ul class="list-dot text-16">
                  <li>전국 카드단말기가 설치되어 있는 모든 매장별로 추정 매출 트렌드, 방문 및 배달 비중, 상권 내 랭킹 및 방문고객 특성 등</li>
                  <li>국내 유일의 매장단위 매출정보를 제공합니다.</li>
                </ul>
                <div class="img">
                  <img src="@/assets/images/content/img_bizmap_01.png" alt="" />
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card variant="text" class="goods-list">
                <div class="title subtitle-22">매출소비자 지역</div>
                <ul class="list-dot text-16">
                  <li>관심 매장, 건물 및 지역을 대상으로 어떤 지역에서 방문한 소비자가 얼마만큼의 매출을 발생시키는지 등 소비자 유입지역을 확인할 수 있습니다.</li>
                </ul>
                <div class="img">
                  <img src="@/assets/images/content/img_bizmap_02.png" alt="" />
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card variant="text" class="goods-list">
                <div class="title subtitle-22">상권권역설정</div>
                <ul class="list-dot text-16">
                  <li>분석 지역 및 목적에 따라 상권의 범위는 다양할 수 있습니다. 이에 My Bizmap은 반경, 격자, 자유형 등</li>
                  <li>자유롭게 상권권역을 설정할 수 있습니다.</li>
                </ul>
                <div class="img">
                  <img src="@/assets/images/content/img_bizmap_03.png" alt="" />
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card variant="text" class="goods-list">
                <div class="title subtitle-22">지역거주자 소비</div>
                <ul class="list-dot text-16">
                  <li>관심 혹은 분석대상 지역에 거주하는 소비자의 총 소비 트렌드, 업종별 소비규모 및 지역소비 비중 등</li>
                  <li>지역 거주민의 소비특성을 파악할 수 있습니다.</li>
                </ul>
                <div class="img">
                  <img src="@/assets/images/content/img_bizmap_04.png" alt="" />
                </div>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </div>
      <div class="btn-attach">
        <router-link to="" class="text-16">
          <v-icon class="icon-pdf" />MyBIZMAP_Introduction_V.1.37.pdf
        </router-link>
      </div>
      <div class="btn-list">
        <v-btn variant="flat" rounded="lg" size="x-large" color="primary">목록</v-btn>
      </div>
    </div>
  </div>
</template>
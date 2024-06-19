<template>
  <div class="sub-group">
    <div class="sub-title-area">
      <h4 class="sub-title">모바일서베이</h4>
    </div>
    <div class="static-content">
      <!-- 01 -->
      <div class="cnt-group">
        <div class="cnt-title subtitle-24">
          <div class="num">01</div>
          <v-divider vertical />
          <div class="title">모바일서베이란?</div>
        </div>
        <div class="cnt-text">
          <div class="text-16">카드데이터만으로 파악이 어려운 정성적인 부분과 고객사의 궁금증을 해소하기 위하여 Big Data기반 모바일 서베이 Solution을 제공합니다. 이를 통해 기존의 설문조사와는 다른 차별적 인사이트를 얻을 수 있습니다.</div>
          <div class="img">
            <img src="@/assets/images/content/img_survey.png" alt="" />
          </div>
        </div>
      </div>
      <!-- 02 -->
      <div class="cnt-group">
        <div class="cnt-title subtitle-24">
          <div class="num">02</div>
          <v-divider vertical />
          <div class="title">활용예시</div>
        </div>
        <div class="cnt-text">
          <div class="card-list-area case02 mgt0">
            <v-row>
              <v-col cols="12" md="4">
                <v-sheet rounded="lg" class="outlined">
                  <div class="col survey">
                    <v-icon class="survey01" />
                    <div class="subtitle-22">타겟 고객 선정</div>
                    <div class="text-18">A유통사의 경우, 특정 기간 內 특정 점포 및 업종 매출데이터 기반 이탈 고객 대상을 선별하여 서베이 타겟고객으로 선정</div>
                  </div>
                </v-sheet>
              </v-col>
              <v-col cols="12" md="4">
                <v-sheet rounded="lg" class="outlined">
                  <div class="col survey">
                    <v-icon class="survey02" />
                    <div class="subtitle-22">모바일 서베이 실행</div>
                    <div class="text-18">대체 상품 결제가 확인될 시, 모바일 서베이 수행을 통해 이탈고객의 이탈 요인 및 소비 패턴에 대한 서베이 진행</div>
                  </div>
                </v-sheet>
              </v-col>
              <v-col cols="12" md="4">
                <v-sheet rounded="lg" class="outlined">
                  <div class="col survey">
                    <v-icon class="survey03" />
                    <div class="subtitle-22">고도화된 마캐팅 전략 수립</div>
                    <div class="text-18">서베이 결과와 시장 및 경쟁사 소비 데이터를 결합하여 고도화된 마케팅 전략 수립 진행</div>
                  </div>
                </v-sheet>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
      <div class="btn-list">
        <v-btn variant="flat" rounded="lg" size="x-large" color="primary">문의하기</v-btn>
      </div>
    </div>
  </div>
</template>
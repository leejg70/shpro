<template>
  <!-- tab2 - 모바일서베이 -->
  <div>
    <!-- 01 -->
    <div class="cnt-group">
      <div class="cnt-title subtitle-24">
        <div class="num">01</div>
        <v-divider vertical />
        <div class="title">모바일서베이란?</div>
      </div>
      <div class="cnt-text">
        <div class="text-16">카드데이터만으로 파악이 어려운 정성적인 부분과 고객사의 궁금증을 해소하기 위하여 Big Data기반 모바일 서베이 Solution을 제공합니다. 이를 통해 기존의 설문조사와는 다른 차별적 인사이트를 얻을 수 있습니다.</div>
      </div>
    </div>
    <!-- 02 -->
    <div class="cnt-group">
      <div class="cnt-title subtitle-24">
        <div class="num">02</div>
        <v-divider vertical />
        <div class="title">모바일서베이 프로세스</div>
      </div>
      <div class="cnt-text">
        <div class="step-area">
          <div class="step-group mgt0">
            <div class="step-title subtitle-22">
              <div class="num">Step 1</div>
              <v-divider vertical />
              <div>서베이 Target 선정</div>
            </div>
            <div class="step-text">
              <ul class="list-dot text-16">
                <li>Big Data 기반의 정교하고 유의미한 Target 대상군 선정이 가능합니다.</li>
                <li>활용예시 : A유통사의 경우,특정기간 內 특정 점포 및 업종 매출데이터 기반 이탈 고객 대상을 선별하여 서배이 타겟고객으로 선정</li>
              </ul>
            </div>
            <div class="card-list-area">
              <v-row>
                <v-col cols="12" md="4" sm="6">
                  <v-sheet rounded="lg" class="outlined">
                    <div class="title subtitle-18">가맹점 기반 필터링</div>
                    <div class="item survey">
                      <v-icon class="target franchise" /> 
                      <ul class="list-dot text-16">
                        <li
                          v-for="item in ['업종/지역별','특정 매장 구분']"
                        >
                          {{ item }}
                        </li>
                      </ul>
                    </div>
                  </v-sheet>
                </v-col>
                <v-col cols="12" md="4" sm="6">
                  <v-sheet rounded="lg" class="outlined">
                    <div class="title subtitle-18">이용일/시간대별 상세화</div>
                    <div class="item survey">
                      <v-icon class="target schedule" />
                      <ul class="list-dot text-16">
                        <li
                          v-for="item in ['이용일 : 주중, 주말','시간대 : 아침, 오후']"
                        >
                          {{ item }}
                        </li>
                      </ul>
                    </div>
                  </v-sheet>
                </v-col>
                <v-col cols="12" md="4" sm="6">
                  <v-sheet rounded="lg" class="outlined">
                    <div class="title subtitle-18">정교한 대상 고객 선정</div>
                    <div class="item survey">
                      <v-icon class="target guest" />
                      <ul class="list-dot text-16">
                        <li
                          v-for="item in ['성별/연령/지역','단골고객, 이탈 고객 등']"
                        >
                          {{ item }}
                        </li>
                      </ul>
                    </div>
                  </v-sheet>
                </v-col>
              </v-row>
            </div>
          </div>
          <div class="step-group">
            <div class="step-title subtitle-22">
              <div class="num">Step 2</div>
              <v-divider vertical />
              <div>실시간 서베이 실행</div>
            </div>
            <div class="step-text">
              <ul class="list-dot text-16">
                <li>카드결제 연동 발송시스템을 통해 실사용자에게 신속한 수행이 가능합니다.</li>
                <li>활용예시 : 대체 상품 결제가 확인될 시, 모바일 서베이 수행을 통해 이탈고객의 이탈 요인 및 소비 패턴에 대한 서베이 진행</li>
              </ul>
            </div>
            <div class="card-list-area">
              <v-row>
                <v-col cols="12" md="4" sm="6">
                  <v-sheet rounded="lg" class="outlined">
                    <div class="title subtitle-18">가맹점 기반 필터링</div>
                    <div class="item survey">
                      <v-icon class="target filtering" /> 
                      <ul class="list-dot text-16">
                        <li
                          v-for="item in ['소비경험,만족도 접근성 등']"
                        >
                          {{ item }}
                        </li>
                      </ul>
                    </div>
                  </v-sheet>
                </v-col>
              </v-row>
            </div>
          </div>
          <div class="step-group">
            <div class="step-title subtitle-22">
              <div class="num">Step 3</div>
              <v-divider vertical />
              <div>Big Data 기반 결과분석</div>
            </div>
            <div class="step-text">
              <ul class="list-dot text-16">
                <li>응답 필터링과 고객 소비 Data를 결합 후 심도있는 분석을 통해 도출된 인사이트를 제공합니다.</li>
                <li>활용예시 : 서베이 결과와 시장 및 경쟁사 소비 데이터를 결합하여 고도화된 마케팅 전략수립 진행</li>
              </ul>
            </div>
            <div class="card-list-area">
              <v-row>
                <v-col cols="12" md="4" sm="6">
                  <v-sheet rounded="lg" class="outlined">
                    <div class="title subtitle-18">응답 필터링</div>
                    <div class="item survey">
                      <v-icon class="target answer" /> 
                      <ul class="list-dot text-16">
                        <li
                          v-for="item in ['불성실응답 제거','무작위 응답 등']"
                        >
                          {{ item }}
                        </li>
                      </ul>
                    </div>
                  </v-sheet>
                </v-col>
                <v-col cols="12" md="4" sm="6">
                  <v-sheet rounded="lg" class="outlined">
                    <div class="title subtitle-18">소비 Data 결합</div>
                    <div class="item survey">
                      <v-icon class="target spend" />
                      <ul class="list-dot text-16">
                        <li
                          v-for="item in ['고객 소비패턴','경쟁사 이용현황 등']"
                        >
                          {{ item }}
                        </li>
                      </ul>
                    </div>
                  </v-sheet>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- // tab2 - 모바일서베이 -->
</template>
<template>
  <div class="sub-group">
    <div class="sub-title-area">
      <h4 class="sub-title">맞춤 Data</h4>
    </div>
    <div class="static-content">
      <!-- 01 -->
      <div class="cnt-group">
        <div class="cnt-title subtitle-24">
          <div class="num">01</div>
          <v-divider vertical />
          <div class="title">CDS &nbsp; Customized Data Service(고객사 맞춤 Data공급)</div>
        </div>
        <div class="cnt-text">
          <div class="cds-list-area">
            <div class="">
              <div class="title subtitle-22">맞춤 Data상품 공급</div>
              <div class="text-16">고객사 Needs에 부합하는 최적의 Data 상품을 개발하고, 다양한 정송방식을 통해 고객사에 적시 제공하는 신한카드의 Data 서비스 입니다.</div>
            </div>
            <div class="">
              <div class="title subtitle-18">주요영역</div>
              <ul class="list-dot text-16">
                <li>Macro Data : 지역경제, 민간소비, 경제효과, 관광/상권 Data 등</li>
                <li>Consumer Data : Profile Data, Micro Segments, 고객유입/이탈 등</li>
                <li>Merchant & Seller Data : 온/오프라인 사업자 Data</li>
                <li>E-Commerce Data : e커머스 카테고리/브랜드/상품 Data</li>
                <li>Market Data : Market Share, 고객유입/이탈, Brand Performance Data 등</li>
              </ul>
            </div>
            <div class="card-list-area">
              <div class="title subtitle-18">서비스 프로세스</div>
              <v-row>
                <v-col cols="12" md="6">
                  <v-sheet rounded="lg" class="outlined">
                    <div class="title subtitle-18"><span>Step 01</span> &nbsp;신청</div>
                    <div class="item cds">
                      <ul class="list-dot text-16">
                        <li
                          v-for="item in ['Data 상품 및 분석문의','1차 고객사 Needs 협의']"
                        >
                          {{ item }}
                        </li>
                      </ul>
                    </div>
                  </v-sheet>
                </v-col>
                <v-col cols="12" md="6">
                  <v-sheet rounded="lg" class="outlined">
                    <div class="title subtitle-18"><span>Step 02</span> &nbsp;협의</div>
                    <div class="item cds">
                      <ul class="list-dot text-16">
                        <li
                          v-for="item in ['상세 Data요건협의(Sample Data)','맞춤 Data 상품 개발 방안 제안']"
                        >
                          {{ item }}
                        </li>
                      </ul>
                    </div>
                  </v-sheet>
                </v-col>
                <v-col cols="12" md="6">
                  <v-sheet rounded="lg" class="outlined">
                    <div class="title subtitle-18"><span>Step 03</span> &nbsp;확정</div>
                    <div class="item cds">
                      <ul class="list-dot text-16">
                        <li
                          v-for="item in ['최종 Data Layout 및 제공방식 확정','상품 공급견적 및 계약체결']"
                        >
                          {{ item }}
                        </li>
                      </ul>
                    </div>
                  </v-sheet>
                </v-col>
                <v-col cols="12" md="6">
                  <v-sheet rounded="lg" class="outlined">
                    <div class="title subtitle-18"><span>Step 04</span> &nbsp;전송</div>
                    <div class="item cds">
                      <ul class="list-dot text-16">
                        <li
                          v-for="item in ['최종 Data Layout 확정','상품 공급 견적 협의']"
                        >
                          {{ item }}
                        </li>
                      </ul>
                    </div>
                  </v-sheet>
                </v-col>
              </v-row>
            </div>
            <div class="">
              <div class="title subtitle-22">제휴형 Data 서비스 개발</div>
              <div class="text-16">신한카드 및 제휴사의 Big Data, 분석 역량 및 인프라를 기반으로 DaaS/SaaS 공동개발, Data Analytics 프로젝트 수행, Data 협력체계 구축 등 다양한 형태의 Data 제휴사업을 추진할 수 있습니다.</div>
            </div>
            <div class="">
              <div class="title subtitle-18">주요영역</div>
              <ul class="list-dot text-16">
                <li>Data Business Alliance : 공동 Data/수집/결합/활용 및 수익모델 개발
                  <ul class="list-line">
                    <li>ex) 결합형 Data 상품 개발, 대형 Big Data 프로젝트 공동 수주 등</li>
                  </ul>
                </li>
                <li>(SaaS)Data기반 다양한 서비스 모델 개발
                  <ul class="list-line">
                    <li>ex) 상권분석 모델, 데이터분석플랫폼, 시각화 대시보드 개발 등</li>
                  </ul>
                </li>
                <li>(DaaS)Data상품 거래/중개모델 개발
                  <ul class="list-line">
                    <li>ex) 데이터거래소, B2B/B2C 데이터 플랫폼 등</li>
                  </ul>
                </li>
                <li>(AI)생성형AI기반 신규사업모델 개발
                  <ul class="list-line">
                    <li>ex) 데이터기반 B2B/B2C AI서비스 개발 등</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 02 -->
      <div class="cnt-group">
        <div class="cnt-title subtitle-24">
          <div class="num">02</div>
          <v-divider vertical />
          <div class="title">CRS &nbsp; Commercial Real Estate Service(상업용 부동산 분석서비스)</div>
        </div>
        <div class="cnt-text">
          <div class="text-16 mgb64">국내 리테일 소비를 대표하는 신한카드 3000만 고객과 280만 가맹점 Big Data를 바탕으로, 자산운용사, 부동산컨설팅, 대형 유통기업 등의 다양한 상업용 부동산 관련 의사결정을 지원합니다.</div>
          <div class="goods-list-area">
            <v-row>
              <v-col cols="12" md="6">
                <v-card variant="text" class="goods-list">
                  <div class="title subtitle-22">상권 성장성 및 특성분석</div>
                  <div class="subtext text-16">매출 성장성,상권 업종별 특성,소비자 유형 등 관심 상권의 핵심 인사이트 도출 지원</div>
                  <div class="img crs">
                    <img src="@/assets/images/content/img_crs_01.png" alt="" />
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <v-card variant="text" class="goods-list">
                  <div class="title subtitle-22">대형 상업시설 배후지 분석</div>
                  <div class="subtext text-16">거주인구, 직장인구 및 소비유입인구 등을 분석하여 상업시설 최적 입지선정, MD기획 등의 의사결정 지원</div>
                  <div class="img crs">
                    <img src="@/assets/images/content/img_crs_02.png" alt="" />
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <v-card variant="text" class="goods-list">
                  <div class="title subtitle-22">부동산 관점 소비자 분석</div>
                  <div class="subtext text-16">대한민국 상위1%, 1인가구, 실버세대 등 다양한 타겟 소비자 계층에 대한 분석 지원</div>
                  <div class="img crs">
                    <img src="@/assets/images/content/img_crs_03.png" alt="" />
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <v-card variant="text" class="goods-list">
                  <div class="title subtitle-22">국내 외국인 관광객 분석</div>
                  <div class="subtext text-16">국내 방문 외국인 관광객의 카드 Data를 바탕으로 핵심관광상권에 필요한 분석정보 제공</div>
                  <div class="img crs">
                    <img src="@/assets/images/content/img_crs_04.png" alt="" />
                  </div>
                </v-card>
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

<style>
.goods-list-area {
  .v-card {
    &.goods-list {
      .subtext {
        flex-grow: 1;
      }
      .img {
        &.crs {
          margin-top: 1.6rem !important;
          border-radius: 0;
          background-color: transparent;
          > img {
            border-radius: 1.6rem;
          }
        }
      }
    }
  }
}
.finace-list-area {
  .v-card {
    &.finace-list {
      .img {
        margin-top: 1.6rem !important;
      }
    }
  }
}
.static-content {
  .cnt-group {
    .card-list-area {
      .v-sheet {
        &.outlined {
          .title {
            > span {
              font-size: 1.6rem;
              font-weight: 300;
            }
          }
          .item {
            &.cds {
              min-height: 6.4em;
              .list-dot {
                margin-left: 0;
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 1280px) {
  .goods-list-area {
    .v-card {
      &.goods-list {
        .img {
          &.crs {
            > img {
              border-radius: .8rem;
            }
          }
        }
      }
    }
  }
  .static-content {
    .cnt-group {
      .card-list-area {
        .v-sheet {
          &.outlined {
            .item {
              &.cds {
                min-height: 5.8rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
<template>
  <!-- tab1 - 타겟마케팅 -->
  <div>
    <!-- 01 -->
    <div class="cnt-group">
      <div class="cnt-title subtitle-24">
        <div class="num">01</div>
        <v-divider vertical />
        <div class="title">타겟마케팅이란?</div>
      </div>
      <div class="cnt-text">
        <div class="text-16">신한카드 3,000만 고객/ 다양한 채널/정교한 Targeting 방법론을 바탕으로 고객사의 효과적/ 효율적 마케팅 수행을 대행하며 공동 프로모션 기획 등 다양한 마케팅을 지원합니다.</div>
        <div class="card-list-area">
          <v-row>
            <v-col cols="12" md="6">
              <v-sheet rounded="lg" class="outlined">
                <div class="title subtitle-18">최적 고객 발굴</div>
                <div class="item targeting">
                  <ul class="list-dot text-16">
                    <li>Big Data 분석 기반 최적 고객 Targeting
                      <ul class="list-line">
                        <li
                          v-for="item in ['고객 Demo별','이용고객/이탈고객/경쟁사고객','신규/단골고객 유치','관심사/업종/브랜드/소비품목별']"
                        >
                          {{ item }}
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <v-icon class="target discover" />
                </div>
              </v-sheet>
            </v-col>
            <v-col cols="12" md="6">
              <v-sheet rounded="lg" class="outlined">
                <div class="title subtitle-18">신한카드 채널 활용</div>
                <div class="item targeting">
                  <ul class="list-dot text-16">
                    <li
                      v-for="item in ['LMS/MMS (RCS 포함)','App-Push','신한 Sol페이 App', '홈페이지']"
                    >
                      {{ item }}
                    </li>
                  </ul>
                  <v-icon class="target channel" />
                </div>
              </v-sheet>
            </v-col>
            <v-col cols="12" md="6">
              <v-sheet rounded="lg" class="outlined">
                <div class="title subtitle-18">마케팅 Oppertunity 협의</div>
                <div class="item targeting">
                  <div>
                    <ul class="list-dot text-16">
                      <li
                        v-for="item in ['고객사 마케팅 Needs 협의/개발','패키지/맞춤형 광고 신청 (배너광고, 이벤트 페이지 등)']"
                      >
                        {{ item }}
                      </li>
                    </ul>
                    <div class="desc text-16">
                      <span class="character">※</span>
                      <span>별도 제휴/협의 가능</span>
                    </div>
                  </div>
                  <v-icon class="target chance" />
                </div>
              </v-sheet>
            </v-col>
            <v-col cols="12" md="6">
              <v-sheet rounded="lg" class="outlined">
                <div class="title subtitle-18">마케팅 결과 분석</div>
                <div class="item targeting">
                  <ul class="list-dot text-16">
                    <li>통제군과 비교분석</li>
                    <li>반응고객 분석
                      <ul class="list-line">
                        <li>반응고객 Porfiling/유입 경로 분석 등</li>
                      </ul>
                    </li>
                    <li>고객사 Data와 융합 분석
                      <ul class="list-line">
                        <li>구매 품목 정보 등</li>
                      </ul>
                    </li>
                  </ul>
                  <v-icon class="target analysis" />
                </div>
              </v-sheet>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
    <!-- 02 -->
    <div class="cnt-group">
      <div class="cnt-title subtitle-24">
        <div class="num">02</div>
        <v-divider vertical />
        <div class="title">서비스 이용 Process</div>
      </div>
      <div class="cnt-text">
        <div class="text-16">해당 서비스는 현재 준비중입니다.<br />문의하기를 통해서 서비스 이용이 가능합니다.</div>
        <div class="img-box marketing">
          <img src="@/assets/images/content/img_marketing.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <!--// tab1 - 타겟마케팅 -->
</template>

<style>
.static-content {
  .cnt-group {
    .card-list-area {
      .v-sheet {
        &.outlined {
          .item {
            &.targeting {
              justify-content: space-between;
              .v-icon.target {
                align-self: flex-end;
                width: 8rem;
                height: 8rem;
                margin-bottom: .8rem;
              }
              .list-dot {
                margin-left: 0;
                .list-line {
                  color: #666;
                  > li {
                    position: relative;
                    padding-bottom: .8rem;
                    padding-left: 1.3rem;
                    &:first-child {
                      margin-top: .8rem;
                    }
                    &:last-child {
                      padding-bottom: 0;
                    }
                    &::before {
                      content: '';
                      display: inline-block;
                      position: absolute;
                      top: 1.2rem;
                      left: .3rem;
                      width: .5rem;
                      height: .1rem;
                      background-color: #666;
                    }
                  }
                }
              }
              .desc {
                display: flex;
                margin: 1.6rem 0 .8rem;
                color: #666;
                .character {
                  margin-right: 0.4rem;
                }
              }
            }
          }
        }
      }
      .v-icon.discover {
        background-image: url('@/assets/images/icon/icon_marketing_01.png');
      }
      .v-icon.channel {
        background-image: url('@/assets/images/icon/icon_marketing_02.png');
      }
      .v-icon.chance {
        background-image: url('@/assets/images/icon/icon_marketing_03.png');
      }
      .v-icon.analysis {
        background-image: url('@/assets/images/icon/icon_marketing_04.png');
      }
    }
  }
}

@media only screen and (max-width: 1280px) {
  .static-content {
    .cnt-group {
      .card-list-area {
        .v-sheet {
          &.outlined {
            .item {
              &.targeting {
                min-height: 14.5rem;
                .v-icon.target {
                  align-self: flex-end;
                  flex-shrink: 0;
                  width: 6.4rem;
                  height: 6.4rem;
                  margin-left: 2.4rem;
                }
                .list-dot {
                  .list-line {
                    > li {
                      &::before {
                        top: 1rem;
                      }
                    }
                  }
                }
                .desc {
                  margin: .8rem 0;
                }
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 960px) {
  .static-content {
    .cnt-group {
      .card-list-area {
        .v-sheet {
          &.outlined {
            .item {
              &.targeting {
                min-height: auto;
              }
            }
          }
        }
      }
    }
  }
}
</style>
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
          <div class="text-16">"All in one Business intelligence Platform" 기업 투자 전 꼭 알아야 할 기업에 대한 모든 데이터를 한 곳에!<br />기업 · 산업 · 원자재 · 수출 · 소비 데이터를 총망라하여 투자전에 누구나 쉽게 기업을 이해하도록 도와드립니다.</div>
        </div>
      </div>
      <!-- 02 -->
      <div class="cnt-group">
        <div class="cnt-title subtitle-24">
          <div class="num">02</div>
          <v-divider vertical />
          <div class="title">주요 기능 및 장점</div>
        </div>
        <div class="cnt-text">
          <div class="finace-list-area">
            <div class="title subtitle-22">기업 분석</div>
            <div class="text-16 mgb48">기업 투자에 필요한 모든 정량 데이터가 한곳에! 다양한 그래프로 기업분석을 쉽고 빠르게!</div>
            <v-row>
              <v-col cols="12" md="6">
                <v-card variant="text" class="finace-list">
                  <div class="title subtitle-18">데이터 커버리지</div>
                  <div class="text-16">주가, 주주구성, 재무제표, 재무정보와 주가 비교와 사업부문별 실적, 연관산업 지표, 뉴스 등 기업에 대한 모든 정보</div>
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
                  <div class="text-16">기업과 연관된 산업의 수출, 소비, 원자재를 한 눈에 확인</div>
                  <div class="img">
                    <img src="@/assets/images/content/img_big_finace_03.png" alt="" />
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <v-card variant="text" class="finace-list">
                  <div class="title subtitle-18">연관기업 분석</div>
                  <div class="text-16">협력사, 경쟁사를 찾고 주가와 실적을 바로 비교</div>
                  <div class="img">
                    <img src="@/assets/images/content/img_big_finace_04.png" alt="" />
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </div>
          <div class="finace-list-area">
            <div class="title subtitle-22">마켓/산업/소비/수출 데이터</div>
            <div class="text-16 mgb48">기업의 실적과 연관된 산업통계, 수출, 원자재 가격, 소비 등 모든 데이터를 한 곳에서 확인</div>
            <v-row>
              <v-col cols="12" md="6">
                <v-card variant="text" class="finace-list">
                  <div class="title subtitle-18">산업통계</div>
                  <div class="text-16">에너지, 자동차, 반도체, 유통, 화장품, 금융, 철강, 화학, 건설, 조선, 기계, 헬스케어 등 23개 산업에 대한 통계를 시각화</div>
                  <div class="img">
                    <img src="@/assets/images/content/img_big_finace_05.png" alt="" />
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <v-card variant="text" class="finace-list">
                  <div class="title subtitle-18">산업과 기업을 매칭</div>
                  <div class="text-16">개별 산업 통계 데이터와 연관성이 높은 기업을 매칭하여 해당 데이터가 어떤 기업에 영향을 주는지 쉽게 파악 가능</div>
                  <div class="img">
                    <img src="@/assets/images/content/img_big_finace_06.png" alt="" />
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <v-card variant="text" class="finace-list">
                  <div class="title subtitle-18">한국 신용카드 결제 데이터</div>
                  <div class="text-16">2000만명 이상의 카드 결제 데이터로 160개 기업, 600개 이상의 브랜드와 서비스의 결제를 쉽게 조회</div>
                  <div class="img">
                    <img src="@/assets/images/content/img_big_finace_07.png" alt="" />
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <v-card variant="text" class="finace-list">
                  <div class="title subtitle-18">무역통계</div>
                  <div class="text-16">HS코드별, 품목별, 지역별 무역통계를 잠정치와 확실치로 제공하며 월별/연도별 추세 확인 가능</div>
                  <div class="img">
                    <img src="@/assets/images/content/img_big_finace_08.png" alt="" />
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
          <div class="title">빅파이낸스 활용 예시</div>
        </div>
        <div class="example-list">
          <v-list>
            <v-list-item>
              <div class="item-avatar">
                <div class="img">
                  <img src="@/assets/images/icon/icon_bigfinace_01.png" alt="" />
                </div>
                <div class="subtitle-16">개인투자자</div>
              </div>
              <div class="item-content">
                <div class="title subtitle-22">주식 투자 전에 누구나 쉽게 기업을 이해할 수 있습니다.</div>
                <ul class="list-dot text-16">
                  <li>데이터의 중요성을 알고는 있지만, 스스로 데이터를 찾고 정리하기 어렵거나, 개인이 접근할 수 없는 데이터를 한 곳에서 확인할 수 있습니다.</li>
                  <li>모든 데이터는 그래프와 표로 시각화 되어 있어 누구나 쉽고 빠르게 기업을 분석하고 합리적인 투자 결정을 할 수 있습니다.</li>
                </ul>
              </div>
            </v-list-item>
            <v-list-item>
              <div class="item-avatar">
                <div class="img">
                  <img src="@/assets/images/icon/icon_bigfinace_02.png" alt="" />
                </div>
                <div class="subtitle-16">자산운용·헤지펀드</div>
              </div>
              <div class="item-content">
                <div class="title subtitle-22">알파 창출에 필요한 핵심 데이터를 쉽게 활용할 수 있습니다.</div>
                <ul class="list-dot text-16">
                  <li>상장 기업 ticker와 매칭된 기업 공시, 재무제표, 연관 산업 지표가 실시간 또는 주간, 월간 단위로 업데이트 됩니다.</li>
                  <li>신용카드 결제, 수출입, 산업 지표를 통해 기업의 밸류에이션을 분석하여 합리적이고 신속한 투자 의사결정이 가능합니다.</li>
                </ul>
              </div>
            </v-list-item>
            <v-list-item>
              <div class="item-avatar">
                <div class="img">
                  <img src="@/assets/images/icon/icon_bigfinace_03.png" alt="" />
                </div>
                <div class="subtitle-16">일반기업</div>
              </div>
              <div class="item-content">
                <div class="title subtitle-22">데이터를 통해 업계 리더 기업으로 성장할 수 있습니다.</div>
                <ul class="list-dot text-16">
                  <li>자사 및 경쟁사의 신제품에 대한 소비자 반응 분석, 기업이 속한 시장의 경쟁환경 및 점유율 분석, 소비 트렌드 변화 포착 등 사업기획, 영업 마케팅, IR 등에 필요한 다양한 데이터를 한 눈에 확인할 수 있습니다.</li>
                </ul>
              </div>
            </v-list-item>
            <v-list-item>
              <div class="item-avatar">
                <div class="img">
                  <img src="@/assets/images/icon/icon_bigfinace_04.png" alt="" />
                </div>
                <div class="subtitle-16">사모펀드·벤처캐피탈</div>
              </div>
              <div class="item-content">
                <div class="title subtitle-22">신뢰할 수 있는 데이터로 투자 포트폴리오를 관리할 수 있습니다.</div>
                <ul class="list-dot text-16">
                  <li>포트폴리오 사의 재무제표 이외에 기업의 성과와 밸류에이션 분석이 가능하도록 신뢰할 수 있는 데이터를 제공합니다.</li>
                  <li>기업이 속한 시장의 경쟁 환경과 밸류체인, 브랜드 점유율 외에도 소비 트렌드 변화까지 종합적 분석이 가능합니다.</li>
                </ul>
              </div>
            </v-list-item>
          </v-list>
        </div>
      </div>
      <div class="btn-attach">
        <router-link to="" class="text-16">
          <v-icon class="icon-ppt" />빅파이낸스 서비스 소개_20240408.pptx
        </router-link>
      </div>
      <div class="btn-list">
        <v-btn variant="flat" rounded="lg" size="x-large" color="primary">목록</v-btn>
      </div>
    </div>
  </div>
</template>
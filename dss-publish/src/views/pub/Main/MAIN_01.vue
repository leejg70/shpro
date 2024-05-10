<script setup>
import { ref } from 'vue';
import { reactive } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import 'swiper/css/effect-fade';

const pager = ref(null);
const paginationRef = ref(null);
const pagination = reactive({
  type: 'custom',
  clickable: true,
  el : paginationRef,
  renderCustom: (swiper, current, total) => {
    return `<span class="swiper-pagination-current">${String(current).padStart(2,'')}</span> / <span class="swiper-pagination-total">${String(total).padStart(2,'')}</span>`
  },
});
const prevEl = ref(null);
const nextEl = ref(null);
const navigation = reactive({
  prevEl: prevEl,
  nextEl: nextEl,
})
</script>

<template>
  <div class="main-wrap">
    <div class="visual-layout-area">
      <div class="main-visual-wrap">
        <swiper
          :loop="true"
          :effect="'fade'"
          :fadeEffect="{
            crossFade: true
          }"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :speed="1000"
          :pagination="pagination"
          :navigation="navigation"
          :modules="[Autoplay, EffectFade, Pagination, Navigation]"
        >
          <swiper-slide>
            <a href="javascript:;" class="block-all">
              <div class="main-visual-list" style="background-color: #eee;">
                <div class="visual-txt-area">
                  <span class="visual-stit">Data + Blue</span>
                  <p class="visual-title">
                    <span>신한 Data Blue의</span><br>
                    <span>다양한 Data를</span><br>
                    <span>탐험하세요.</span>
                  </p>
                  <span class="visual-more"><span>Data Blue 바로가기 </span><v-icon>icon-card-arrow</v-icon></span>
                </div>
                <div class="visual-img">
                  <img src="../../../assets/images/main/visual_img1.png" alt="">
                </div>
              </div>
            </a>
          </swiper-slide>
          <swiper-slide>
            <a href="javascript:;" class="block-all">
              <div class="main-visual-list" style="background-color: #eee;">
                <div class="visual-txt-area">
                  <span class="visual-stit">Data + Blue</span>
                  <p class="visual-title">
                    <span>A World beyond</span><br>
                    <span>Imagination</span><br>
                    <span>that Makes Data.</span>
                  </p>
                  <span class="visual-more"><span>Data Blue 바로가기 </span><v-icon>icon-card-arrow</v-icon></span>
                </div>
                <div class="visual-img">
                  <img src="../../../assets/images/main/visual_img2.png" alt="">
                </div>
              </div>
            </a>
          </swiper-slide>
        </swiper>
        <div class="indicator-wrap">
          <div class="slide-pagination type-num" ref="paginationRef"></div>
          <button type="button" class="btn-main-prev" ref="prevEl"><span class="sr-only">이전</span></button>
          <button type="button" class="btn-main-next" ref="nextEl"><span class="sr-only">다음</span></button>
        </div>
      </div>
      <!-- PC전용 로그인 -->
      <div class="my-login-wrap pc-wrap">
        <div class="outlogin-box">        
          <v-icon class="main-login-photo"><img src="../../../assets/images/icon/icon_main_login.png" alt=""></v-icon>
          <p class="login-txt">로그인 후<br>나만의 맞춤 정보를 이용하세요.</p> 
          <v-btn
            :ripple="false"
            variant="flat"
            color="primary"
            size="large"
            rounded="lg"
          >
          로그인
          </v-btn> 
        </div>
        <!-- <div class="outlogin-box">
          <div class="logout-txt">
            <p>안녕하세요.</p>
            <p class="name">김신한님!</p>
          </div>
          <div class="logout-btn-area">      
            <v-btn  class="btn-mylink">
              <v-icon>icon-my-contract</v-icon>
              <span class="text">나의계약</span>
            </v-btn>
            <v-btn class="btn-mylink">
              <v-icon>icon-my-qa</v-icon>
              <span class="text">나의문의</span>
            </v-btn>
            <v-btn class="btn-mylink">
              <v-icon>icon-larm on</v-icon>
              <span class="text">알림</span>
            </v-btn>
          </div>
        </div> -->
        <div class="notice-box">
          <div class="notice-banner">
            <div class="category-title">데이터블루 활용장</div>
            <div class="title">데이터 활용 성공 노하우</div>
            <div class="notice-graph"><v-icon>icon-data-graph</v-icon></div>
          </div>
          <div class="report-roll-box">
            <swiper
              :loop="true"
              :spaceBetween="24"
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
              }"
              :speed="1000"
              :pagination="{
                clickable: true,
              }"
              :modules="[Autoplay, Pagination]"
            >
              <swiper-slide>
                <span class="flag">Trend Report</span>
                  <a href="javascript:;">
                    <p class="text">ShinhanCard Data Market 신규 오픈 ShinhanCard Data Market 신규 오픈 ShinhanCard Data Market 신규 오픈 ShinhanCard Data Market 신규 오픈</p>
                    <p class="date">2024.08.08</p>
                  </a>
              </swiper-slide>
              <swiper-slide>
                <span class="flag">Trend Report</span>
                  <a href="javascript:;">
                    <p class="text">ShinhanCard Data Market 신규 오픈(두줄)</p>
                    <p class="date">2024.08.08</p>
                  </a>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
    <div class="main-search-wrap">
      <div class="main-search-inner">
        <div class="input-wrap">
          <v-text-field
            color="primary"
            hide-details="auto"
            placeholder="상품명, 해시태그"
            variant="outlined"
            clearable
          ></v-text-field>
          <v-btn
            block
            class="btn-search"
          >
            <span class="sr-only">검색</span>
          </v-btn>
        </div>
        <div class="hashtags">
          <a href="javascript:;" class="hashtag">#Data서비</a>
          <a href="javascript:;" class="hashtag">#계좌인증</a>
          <a href="javascript:;" class="hashtag">#신한카드Data</a>
          <a href="javascript:;" class="hashtag">#카드사용Data</a>
          <a href="javascript:;" class="hashtag">#카드사용Data</a>
          <a href="javascript:;" class="hashtag">#카드사용Data</a>
          <a href="javascript:;" class="hashtag">#카드사용Data</a>
          <a href="javascript:;" class="hashtag">#카드사용Data</a>
          <a href="javascript:;" class="hashtag">#카드사용Data</a>
          <a href="javascript:;" class="hashtag">#카드사용Data</a>
          <a href="javascript:;" class="hashtag">#카드사용Data</a>
          <a href="javascript:;" class="hashtag">#카드사용Data</a>
        </div>
      </div>
    </div>

    <div class="visual-layout-area mobile-wrap">
      <div class="my-login-wrap">
        <div class="outlogin-box">        
          <v-icon class="main-login-photo"><img src="../../../assets/images/icon/icon_main_login.png" alt=""></v-icon>
          <p class="login-txt">로그인 후<br>나만의 맞춤 정보를 이용하세요.</p> 
          <v-btn
            :ripple="false"
            variant="flat"
            color="primary"
            size="large"
            rounded="lg"
          >
          로그인
          </v-btn> 
        </div>
        <!-- <div class="outlogin-box">
          <div class="logout-txt">
            <p>안녕하세요.</p>
            <p class="name">김신한님!</p>
          </div>
          <div class="logout-btn-area">
            <v-btn  class="btn-mylink">
              <v-icon>icon-my-contract</v-icon>
              <span class="text">나의계약</span>
            </v-btn>
            <v-btn class="btn-mylink">
              <v-icon>icon-my-qa</v-icon>
              <span class="text">나의문의</span>
            </v-btn>
            <v-btn class="btn-mylink">
              <v-icon>icon-larm on</v-icon>
              <span class="text">알림</span>
            </v-btn>
          </div>
        </div> -->
        <div class="notice-box">
          <div class="notice-banner">
            <div class="category-title">데이터블루 활용장</div>
            <div class="title">데이터 활용 성공 노하우</div>
            <div class="notice-graph"><v-icon>icon-data-graph</v-icon></div>
          </div>
          <div class="report-roll-box">
            <swiper
              :loop="true"
              :spaceBetween="24"
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
              }"
              :speed="1000"
              :pagination="{
                clickable: true,
              }"
              :modules="[Autoplay, Pagination]"
            >
              <swiper-slide>
                <span class="flag">Trend Report</span>
                  <a href="javascript:;">
                    <p class="text">ShinhanCard Data Market 신규 오픈 ShinhanCard Data Market 신규 오픈 ShinhanCard Data Market 신규 오픈 ShinhanCard Data Market 신규 오픈</p>
                    <p class="date">2024.08.08</p>
                  </a>
              </swiper-slide>
              <swiper-slide>
                <span class="flag">Trend Report</span>
                  <a href="javascript:;">
                    <p class="text">ShinhanCard Data Market 신규 오픈(두줄)</p>
                    <p class="date">2024.08.08</p>
                  </a>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
    <div class="main-card-wrap">
      <div class="main-card-inner">
        <v-btn class="card-box">
          <div class="title-area">
            <span class="card-stit">다양한</span>
            <strong class="card-title">Data서비스</strong>
          </div>
          <v-icon class="card-icon ico-main-data"></v-icon>
          <spoan class="card-text">Data One-Stop Service</spoan>
          <v-icon>icon-card-arrow</v-icon>
        </v-btn>
        <v-btn class="card-box">
          <div class="title-area">
            <span class="card-stit">폭발적인</span>
          <strong class="card-title">솔루션서비스 </strong>
          </div>
          <v-icon class="card-icon ico-main-solution"></v-icon>
          <spoan class="card-text">상권분석, 시장 모니터링</spoan>
          <v-icon>icon-card-arrow</v-icon>
        </v-btn>
        <v-btn class="card-box">
          <div class="title-area">
            <span class="card-stit">스마트한</span>
            <strong class="card-title">광고서비스 </strong>
          </div>
          <v-icon class="card-icon ico-main-ad"></v-icon>
          <spoan class="card-text">최적의 고객 타겟팅</spoan>
          <v-icon>icon-card-arrow</v-icon>
        </v-btn>
        <v-btn class="card-box">
          <div class="title-area">
            <span class="card-stit">경이로운</span>
            <strong class="card-title">API서비스</strong>
          </div>
          <v-icon class="card-icon ico-main-api"></v-icon>
          <spoan class="card-text">Data 실시간 활용</spoan>
          <v-icon>icon-card-arrow</v-icon>
        </v-btn>
      </div>
    </div>
    <div class="main-services-wrap">
      <h2 class="main-title"><span class="fw300">Most Popular</span><span class="fw700">Services</span></h2>
      <div class="services-inner">
        <div class="service-list-area">
                <v-row>
                    <v-col cols="12" md="6" v-for="item in 6">
                        <v-card role="button" variant="outlined" class="service-list">
                            <div class="top-area">
                                <div class="category-title">Data/API서비스</div>
                                <div class="icon-area">
                                    <div class="badge">
                                        <v-icon class="icon-new" />
                                        <v-icon class="icon-hot" />
                                    </div>
                                    <div class="favorites">
                                        <v-btn @click.stop="active = !active" variant="flat" min-width="auto" height="auto" class="pa-0">
                                            <v-icon :icon="active ? 'icon-wishlist' : 'icon-wishlist-off'" />
                                        </v-btn>
                                    </div>
                                </div>
                            </div>
                            <div class="middle-area">
                                <div class="prod-flag-wrap">
                                    <span class="flag blue">시장분석</span>
                                    <span class="flag violet">지역경제</span>
                                    <span class="flag green">대안신용</span>
                                    <span class="flag yellow">마이데이터</span>
                                    <span class="flag pink">카드데이터</span>
                                </div>
                                <div class="title text-truncate" title="상품명은 한줄로 제한 한줄 초과 시 말줄임처리 말줄임처리 말줄임처리 말줄임처리">상품명은 한줄로 제한 한줄 초과 시 말줄임처리 말줄임처리 말줄임처리 말줄임처리</div>
                                <div class="text-area">
                                    <div class="text text-twolines" title="2024 전국 ~~">2024 전국 스타벅스 매장 연령별 결제 데이터 두줄일 경우 2024 전국 스타벅스 매장 연령별 결제 데이터 두줄일 2024 전국 스타벅스 매장 연령별 결제 데이터 두줄일 경우</div>
                                    <div class="flex-shrink-0 ml-auto">
                                        <div class="d-flex align-center justify-center" style="width:6.4rem; height:6.4rem; background:#eee;">썸네일이미지</div>
                                    </div>
                                </div>
                            </div>
                            <div class="bottom-area text-truncate">
                                <span v-for="n in ['스타벅스', '전국', '시간대별결제데이터', '해시태그 한줄까지']" class="hashtag">#{{  n  }}</span>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
                <div class="services-more-area">
                    <v-btn variant="outlined" rounded="xl" class="btn-more">더보기<v-icon class="icon-arrow" /></v-btn>
                </div>
            </div> 
      </div>
    </div>
    <div class="main-special-wrap">
      <h2 class="main-title">
        <span>For Success</span>
        <span class="fw700">Special Know-how</span>
      </h2>
      <div class="main-special-inner">
        <a href="" class="banner-link">
          <div class="banner">
            <div class="category-title">Trend Report+Case Study</div>
            <div class="title">신한카드 Data 200% 활용법</div>
            <divn class="btn-area">
              <span>커뮤니티</span>
              <v-icon>btn-main-arrow</v-icon>
            </divn>
            <v-icon>icon-graph</v-icon>
          </div>
        </a>
        <a href="" class="banner-link">
          <div class="banner">
            <div class="category-title">Data+Data+Data</div>
            <div class="title">나만의 Data 맞춤 서비스</div>
            <divn class="btn-area">
              <span>맞춤Data</span>
              <v-icon>btn-main-arrow</v-icon>
            </divn>
            <v-icon>icon-sawlike</v-icon>
          </div>
        </a>
      </div>
    </div>
    <div class="main-datable-wrap">
      <div class="main-datable-inner">
        <h2 class="main-title">
          <span class="fw300">Value Together</span>
          <span class="fw700">Shinhan Datable</span>
        </h2>
      </div>
    </div>
    <div class="main-customer-wrap">
      <h2 class="main-title">
        <span class="fw300">Always Open</span>
        <span class="fw700">Customer Center</span>
      </h2>
      <div class="main-customer-inner">
        <div class="banner">
          <a href="" class="banner-link">
            <strong class="title">사업제휴</strong>
            <div class="text">새로운 아이디어와<br>사업제안을 환영합니다.</div>
            <divn class="btn-area">
              <span>Datable 제휴신청</span>
              <v-icon>btn-main-arrow</v-icon>
            </divn>
            <v-icon>icon-hand</v-icon>
          </a>
        </div>
        <div class="notice">
          <strong class="title">공지사항</strong>
          <ul class="notice-list">
            <li><a href="javascript:;" class="link"><p class="notice-title">Data Market 서비스 신규 오픈 제목 한줄 서비스 신규 오픈 제목 한줄</p><span class="notice-date">2024.08.08</span></a></li>
            <li><a href="javascript:;" class="link"><p class="notice-title">Data Market 서비스 신규 오픈 제목 한줄 서비스 신규 오픈 제목 한줄</p><span class="notice-date">2024.08.08</span></a></li>
            <li><a href="javascript:;" class="link"><p class="notice-title">Data Market 서비스 신규 오픈 제목 한줄 서비스 신규 오픈 제목 한줄</p><span class="notice-date">2024.08.08</span></a></li>            
          </ul>
          <v-btn
          class="btn-right-more"
          >
            <span class="sr-only">더보기</span>
            <v-icon>icon-card-arrow</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
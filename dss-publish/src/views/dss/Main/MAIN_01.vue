<script setup>
// import { Swiper, SwiperSlide } from 'swiper/vue';
// import 'swiper/swiper.scss';


</script>
<template>
  <div class="main-wrap">
    <div class="visual-layout-area">
      <div class="main-visual-wrap">
        <div class="main-visual-list">  
          <div class="visual-txt-area">
             <span class="visual-stit">Data + Blue</span>
            <p class="visual-title">
              <span>신한 Data Blue의</span><br>
              <span>다양한 Data를 </span><br>
              <span>탐험하세요.</span>
            </p>
            <button class="visual-more">Data Blue 바로가기</button>
          </div>
          <div class="visual-img"><img src="../../../assets/images/main/visual_img1.png" alt="신한 Data Blue의 다양한 Data를 탐험하세요."></div>
        </div>
      </div>
      <div class="my-login-wrap">
        <div class="outlogin-box">        
          <v-icon class="main-login-photo"><img src="../../../assets/images/icon/icon_main_login.png" alt=""></v-icon>
          <p class="login-txt">로그인 후<br>나만의 맞춤 정보를 이용하세요.</p> 
          <!-- <button >로그인</button> -->
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
        <div class="outlogin-box">          
          <div class="logout-txt">
            <p >안녕하세요.</p>
            <p class="name">김신한님!</p>
          </div> 
          <div class="logout-btn-area">
            <v-btn class="btn-mylink">
              <v-icon>icon-my-contract</v-icon>
              <span class="ico-txt">나의계약</span>
            </v-btn>
            <v-btn class="btn-mylink">
              <v-icon>icon-my-qa</v-icon>
              <span class="ico-txt">나의문의</span>
            </v-btn>
            <v-btn class="btn-mylink">
              <v-icon>icon-larm</v-icon>
              <span class="ico-txt">알림</span>
            </v-btn>
          </div>   
        </div>
 
        <div class="notice-box">          
          <div class="notice-banner"><img src=" " alt=""></div>
          <div class="report-roll-box">
            Trend Report
            ShinhanCard Data Market 신규 오픈(두줄)
            2024.08.08
             
          </div>
        </div>            
      </div>
    </div>
    <div class="main-search-wrap">검색</div> 
    <div class="main-card-wrap">
      <div class="main-card-inner">
        <v-btn class="card-box">
          <div class="title-area">
            <span class="card-stit">다양한</span>
            <strong class="card-title">Data 서비스</strong>
          </div>
          <v-icon class="card-icon ico-main-data"></v-icon>
          <spoan class="card-txt">Data One-Stop Service</spoan>
        </v-btn>
        <v-btn class="card-box">
          <div class="title-area">
            <span class="card-stit">폭발적인</span>
          <strong class="card-title">솔루션서비스 </strong>
          </div>
          <v-icon class="card-icon ico-main-solution"></v-icon>
          <spoan class="card-txt">상권분석, 시장 모니터링</spoan>
        </v-btn> 
        <v-btn class="card-box">
          <div class="title-area">
            <span class="card-stit">스마트한</span>
            <strong class="card-title">광고서비스 </strong>
          </div>
          <v-icon class="card-icon ico-main-ad "></v-icon>
          <spoan class="card-txt">최적의 고객 타겟팅</spoan>
        </v-btn> 
        <v-btn class="card-box">
          <div class="title-area">
            <span class="card-stit">경이로운</span> 
            <strong class="card-title">API서비스</strong>
          </div>
          <v-icon class="card-icon ico-main-api"></v-icon>
          <spoan class="card-txt">Data 실시간 활용</spoan>
        </v-btn>    
      </div>      
    </div>
    <div class="main-services-wrap">

      <h2 class="main-title"><span class="fw300">Most Popular</span><span class="fw700">Services</span></h2>
      <div class="main-services-inner">
        <button class="services-box"></button>
        <button class="services-box"></button>
        <button class="services-box"></button>
        <button class="services-box"></button>
        <button class="services-box"></button>
        <button class="services-box"></button>
        <button class="services-box"></button>
        <button class="services-box"></button>
        <button class="services-box"></button>
        <div class="main-more-area">
          <button class="btn-more">더보기</button>
        </div>
      </div>
    
    
    </div>
    <div class="main-special-wrap">
      <h2 class="main-title"><span class="fw300">For Success</span><span class="fw700">Special Know-how</span></h2>     
      

    </div>
    <div class="main-datable-wrap">
      <h2 class="main-title"><span class="fw300">Value Together</span><span class="fw700">Shinhan Datable</span></h2>  
    </div>
    <div class="main-Customer-wrap">
      <h2 class="main-title"><span class="fw300">Always Open</span><span class="fw700">Customer Center</span></h2>
    </div>
  </div> 
</template> 
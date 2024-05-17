<script setup>
import { ref } from 'vue';
import { reactive } from 'vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";

const noticePopup = ref(true);
const prevEl = ref(null);
const nextEl = ref(null);
const navigation = reactive({
  prevEl: prevEl,
  nextEl: nextEl,
});
</script>

<template>
  <v-dialog
    v-model="noticePopup"
    width="auto"
  >
    <!-- 샘플 버튼 -->
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps">
        메인공지 팝업
      </v-btn>
    </template>
    <!-- // 샘플 버튼 -->

    <!-- 메인공지 팝업  -->
    <div class="popup-wrap x-medium main-notice-popup">
      <div class="popup-head">
        <h3 class="h-title">메인공지 팝업</h3>
      </div>
      <div class="popup-cont">
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
              :navigation="navigation"
              :modules="[Autoplay, Pagination, Navigation]"
            >
            <swiper-slide>
                <span class="flag">Trend Report</span>               
                <a href="javascript:;">
                  <p class="text">ShinhanCard Data Market 신규 오픈 ShinhanCard Data Market 신규 오픈 ShinhanCard Data Market 신규 오픈 ShinhanCard Data Market 신규 오픈</p>
                  <p class="date">2024.08.08</p>
                </a>
              </swiper-slide>
              <swiper-slide>
                <span class="flag">StudyCase</span>
                <a href="javascript:;">
                  <p class="text">ShinhanCard Data Market 신규 오픈(두줄1)</p>
                  <p class="date">2024.08.08</p>
                </a>
              </swiper-slide>
              <swiper-slide>
                <span class="flag">DataNews</span>
                <a href="javascript:;">
                  <p class="text">ShinhanCard Data Market 신규 오픈(두줄2)</p>
                  <p class="date">2024.08.08</p>
                </a>
              </swiper-slide>
              <swiper-slide>
                <span class="flag">광고</span>
                <a href="javascript:;">
                  <p class="text">ShinhanCard Data Market 신규 오픈(두줄)</p>
                  <p class="date">2024.08.08</p>
                </a>
              </swiper-slide>
            </swiper>
            <div class="indicator-wrap">             
              <button type="button" class="btn-main-prev" ref="prevEl"><span class="sr-only">이전</span></button>
              <button type="button" class="btn-main-next" ref="nextEl"><span class="sr-only">다음</span></button>
            </div>
      </div>
      <div class="popup-foot">
        <v-btn
          variant="text"
          class="cancel"
        >
         오늘하루 안뜸
        </v-btn>
        <v-btn
          @click="noticePopup = false"
          variant="text"
          class="default"
        >
         닫기
        </v-btn>        
      </div>
    </div>
    <!-- // 비밀번호 확인 -->
  </v-dialog>
</template>

<style scoped>
.v-btn--size-default {
  font-size: 1.4rem;
}
</style>
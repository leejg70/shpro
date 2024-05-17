<script setup>
import { ref } from 'vue';

const noticePopup = ref(false);
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
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

    <!-- 비밀번호 확인 -->
    <div class="popup-wrap x-medium">
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
              :modules="[Autoplay, Pagination]"
            >
            <swiper-slide>
                <span class="flag">Trend Report</span>
                <!-- flag 종류 
                <span class="flag">Trend Report</span>
                <span class="flag">StudyCase</span>
                <span class="flag">DataNews</span>
                <span class="flag">광고</span>               
              -->                
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
      </div>
      <div class="popup-foot">
        <div class="btn-popwrap">
          <v-btn
            variant="flat"
            color="primary"
            size="x-large"
            rounded="md"
            class="default"
          >
            확인
          </v-btn>
        </div>
      </div>
      <v-btn
        @click="noticePopup = false"
        variant="text"
        class="btn-popup-close"
      >
        <span class="sr-only">닫기</span>
      </v-btn>
    </div>
    <!-- // 비밀번호 확인 -->
  </v-dialog>
</template>

<style scoped>
.v-btn--size-default {
  font-size: 1.4rem;
}
</style>
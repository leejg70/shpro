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
                <!--이미지 배너 케이스-->                             
                <a href="javascript:;">
                  <div class="pop-bg-notice"><img src="../../../assets/images/main/banner_notice01.png" alt=""></div>        
                </a>
              </swiper-slide>
              <swiper-slide>               
                <a href="javascript:;">
                  <!--배경이미지+텍스트 케이스-->                
                  <div class="pop-bg-notice"><img src="../../../assets/images/main/bg-notice-type2.png" alt=""></div>
                  <div class="pop-notice-text">
                    <strong class="pop-notice-title">제목크기 40px 한줄 제한</strong>
                    <p class="pop-notice-cont">
                      컨텐츠 텍스트는 관리자에서 등록<br>
                      글자수 제한 있으나, 본 텍스트 영역 이상의 줄바꿈 또는 글자수가 초과될 시 영역밖의 내용은 보이지 않음.<br>
                      글자 영역의 높이깂은 반드시 지켜져야 합니다.<br>
                      그래야 모바일 팝업에서도 동일한 양의 글자가 노출될 수 있습니다.<br>
                      일이삼사오육칠팔구십일이삼사오육<br>
                      칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구
                    </p>
                  </div>                
                </a>
              </swiper-slide>
              <swiper-slide>               
                <a href="javascript:;">
                  <!--배경이미지+텍스트 케이스-->                
                  <div class="pop-bg-notice"><img src="../../../assets/images/main/bg-notice-type1.png" alt=""></div>
                  <div class="pop-notice-text">
                    <strong class="pop-notice-title">제목크기 40px 한줄 제한</strong>
                    <p class="pop-notice-cont">
                      컨텐츠 텍스트는 관리자에서 등록<br>
                      글자수 제한 있으나, 본 텍스트 영역 이상의 줄바꿈 또는 글자수가 초과될 시 영역밖의 내용은 보이지 않음.<br>
                      글자 영역의 높이깂은 반드시 지켜져야 합니다.<br>
                      그래야 모바일 팝업에서도 동일한 양의 글자가 노출될 수 있습니다.<br>
                      일이삼사오육칠팔구십일이삼사오육<br>
                      칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구
                    </p>
                  </div>                
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
          class="pop-1day-close"
        >
        오늘 그만보기
        </v-btn>
        <v-btn
          @click="noticePopup = false"
          variant="text"
          class="pop-notice-close"
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
<script setup>
import { ref } from 'vue';

// const items = ['나의계약', '관심상품', '나의문의', '알림'];
const myLink = ref([
  {
    title: '나의계약',
    link: 'javascript:;'
  },
  {
    title: '관심상품',
    link: 'javascript:;'
  },
  {
    title: '나의문의',
    link: 'javascript:;'
  },
  {
    title: '알림',
    link: 'javascript:;'
  }
]);
const active = ref(true);
</script>

<template>
  <div class="my data-service">
    <div class="sub-title-area">
      <h4 class="sub-title">My</h4>
    </div>
    <div class="">
      <div class="">
        <p class=""><span>김신한</span>님 안녕하세요!</p>
        <div class="">
          <p class="">사업자회원으로의 승인이 대기중입니다.</p>
        </div>
      </div>
      <div class="">

      </div>
    </div>
    <div class="menu-list">
      <v-row>
        <v-col cols="12" md="3" v-for="(item, i) in myLink">
          <a :href="item.link" class="v-list-item">
            {{ item.title }}
          </a>
        </v-col>
      </v-row>
    </div>
    <!-- <div class="menu-list">
      <a href="javascript:;" class="my-contract">
        <em><span>나의계약</span></em>
      </a>
      <a href="javascript:;" class="my-goods selected">
        <em><span>관심상품</span></em>
      </a>
      <a href="javascript:;" class="my-inquiry">
        <em><span>나의문의</span></em>
      </a>
      <a href="javascript:;" class="my-alarm">
        <em><span>알림</span></em>
      </a>
    </div> -->
    <v-divider class="svc-divide" />
    <!-- 상품리스트 -->
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
                  <div class="img-biz flex-shrink-0 ml-auto">
                    <img src="../../../assets/images/icon/icon-biz.png" alt="">                                       
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
    <!--// 상품리스트 -->
  </div>
</template>
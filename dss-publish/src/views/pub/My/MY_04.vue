<script setup>
import { ref } from 'vue';

const items = ref([
  {
    link: '/MY_03',
    icon: 'my-contract',
    text: '나의계약',
    select: ''
  },
  {
    link: '/MY_04',
    icon: 'my-wishlist',
    text: '관심상품',
    select: 'selected'
  },
  {
    link: '/MY_08',
    icon: 'my-qa',
    text: '나의문의',
    select: ''
  },
  {
    link: '/MY_06',
    icon: 'my-alarm',
    text: '알림',
    select: ''
  }
]);
const active = ref(true);
</script>

<template>
  <div class="sub-group data-service">
    <div class="sub-title-area">
      <h4 class="sub-title">My</h4>
    </div>
    <!-- CASE) 개인
    <div class="my-case-info">
      <div class="case-member">
        <p class="member-title"><span>김신한</span>님 안녕하세요!</p>
      </div>
      <div class="case-btn">
        <v-btn variant="text">
          정보변경<v-icon class="btn-arrow" />
        </v-btn>
        <v-btn variant="text">
          사업자계정전환<v-icon class="btn-arrow" />
        </v-btn>
      </div>
    </div>
    -->
    <!-- CASE) 개인 : 승인 대기중
    <div class="my-case-info">
      <div class="case-member">
        <p class="member-title"><span>김신한</span>님 안녕하세요!</p>
        <p class="member-text">사업자회원으로의 승인이 대기중입니다.</p>
      </div>
      <div class="case-btn">
        <v-btn variant="text">
          정보변경<v-icon class="btn-arrow" />
        </v-btn>
      </div>
    </div>
    -->
    <!-- CASE) 개인사업자, 미동의 상태
    <div class="my-case-info">
      <div class="case-member">
        <p class="member-title"><span>김신한</span>님 안녕하세요!</p>
        <dl class="member-buisness">
          <dt>개인사업자</dt>
          <dd>SH상사</dd>
        </dl>
      </div>
      <div class="case-btn">
        <v-btn variant="text">
          <v-icon class="btn-mycredit" />
        </v-btn>
        <v-btn variant="text">
          정보변경<v-icon class="btn-arrow" />
        </v-btn>
      </div>
    </div>
    -->
    <!-- CASE) 법인사업자 -->
    <div class="my-case-info">
      <div class="case-member">
        <p class="member-title"><span>김신한</span>님 안녕하세요!</p>
        <dl class="member-buisness">
          <dt>법인사업자</dt>
          <dd>(주)신한카드</dd>
        </dl>
      </div>
      <div class="case-btn">
        <v-btn variant="text">
          <v-icon class="btn-mycredit" />
        </v-btn>
        <v-btn variant="text">
          정보변경<v-icon class="btn-arrow" />
        </v-btn>
      </div>
    </div>
    <!-- CASE) 동의 상태
    <div class="my-case-info">
      <div class="case-member">
        <p class="member-title"><span>김신한</span>님 안녕하세요!</p>
        <dl class="member-buisness">
          <dt>법인사업자</dt>
          <dd>(주)신한카드 <span>1등급</span></dd>
        </dl>
      </div>
      <div class="case-btn">
        <v-btn variant="text">
          <v-icon class="btn-mycredit" />
        </v-btn>
        <v-btn variant="text">
          정보변경<v-icon class="btn-arrow" />
        </v-btn>
      </div>
    </div>
    -->
    <div class="submenu-list">
      <v-row>
        <v-col cols="12" md="3" v-for="(item, i) in items">
          <v-list
            density="compact"
            :class="item.select"
          >
            <v-list-item
              :value="item"
              :to="item.link"
              link
            >
              <template v-slot:append>
                <v-avatar>
                  <v-icon :icon="item.icon" />
                </v-avatar>
              </template>
              <v-list-item-title v-text="item.text" />
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </div>
    <div class="total-area">
      <div class="total">총&nbsp; <span>10건</span></div>
    </div>
    <v-divider class="svc-divide" />
    <!-- 상품리스트 -->
    <div class="service-list-area">
      <v-row>
        <v-col cols="12" md="6" v-for="item in 10">
          <v-card role="button" to="/PRDD_00_01" variant="outlined" class="service-list">
            <div class="top-area">
              <div class="category-title">Data/API서비스</div>
              <div class="icon-area">
                <div class="badge">
                  <v-icon class="icon-new" />
                  <v-icon class="icon-hot" />
                </div>
                <div class="favorites">
                  <v-btn @click.prevent="active = !active" variant="flat" min-width="auto" height="auto" class="pa-0">
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
                  <img src="@/assets/images/icon/icon-biz.png" alt="샘플이미지" />
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
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
    select: ''
  },
  {
    link: '/MY_05',
    icon: 'my-qa',
    text: '나의문의',
    select: ''
  },
  {
    link: '/MY_06',
    icon: 'my-alarm',
    text: '알림',
    select: 'selected'
  }
]);
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
      <div class="total">총&nbsp; <span>10건</span><span class="text">최근 1년간의 알림 내역만 출력됩니다.</span></div>
      <div class="inp-checkbox justify-end mgb8">
        <v-checkbox
          hide-details
          density="comfortable"
          label="읽지 않은 알림만 보기"
        />
        </div>
    </div>
    <v-divider class="svc-divide" />
    <!-- 알림 리스트 -->
    <div class="alarm-list-area">
      <v-list>
        <v-list-item
          v-for="(item, i) in 10"
          link
          to=""
        >
          <div class="text">
            <div class="date text-14"><span class="alarm">2024.02.01 15:30</span></div><!-- <div class="date text-14"><span>2024.02.01 15:30</span></div> => 이미 읽은 알림일 경우 class="alarm" 삭제 -->
            <div class="text-truncate text-16">올리브영 성별 판매데이터</div>
            <div class="register text-16">계약이 등록되었습니다.</div><!-- <div class="register text-16">상품의 다운로드 파일이 등록되었습니다.</div>, <div class="register text-16">Data 상품이 메일로 발송되었습니다.</div>, <div class="register text-16">문의에 답변이 등록되었습니다.</div> => 이벤트별 메시지 -->
          </div>
          <template v-slot:append>
            <v-btn variant="text">
              <v-icon class="btn-arrow" />
            </v-btn>
          </template>
        </v-list-item>
      </v-list>
      <div class="services-more-area">
          <v-btn variant="outlined" rounded="xl" class="btn-more">더보기<v-icon class="icon-arrow" /></v-btn>
      </div>
    </div>
    <!--// 알림 리스트 -->
    <!-- 나의내역 없음 -->
    <div class="search-result">
      <div class="text">나의 내역</div>
      <div class="desc">내역이 없습니다.</div>
    </div>
    <!--// 나의내역 없음 -->
  </div>
</template>
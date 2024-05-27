<script setup>
import { ref } from 'vue';

const items = ref([
  {
    link: '/MY_03',
    icon: 'my-contract',
    text: '나의계약',
    select: 'selected'
  },
  {
    link: '/MY_04',
    icon: 'my-wishlist',
    text: '관심상품',
    select: ''
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
</script>

<template>
  <div class="sub-group my-page">
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
      <div class="total">총&nbsp; <span>5건</span></div>
    </div>
    <v-divider class="svc-divide" />
    <!-- 나의계약 리스트 -->
    <div class="contract-list-area">
      <v-list>
        <!-- CASE) 카드 하단에 버튼 2개 모두 표시 -->
        <v-list-item>
          <div class="contract-group">
            <div class="contract-title"><span class="number">C240405001</span>올리브영 성별 판매데이터 올리브영 성별 판매데이터 올리브영 성별 판매데이터 올리브영 성별 판매데이터 올리브영 성별 판매데이터</div>
            <div class="contract-box">
              <dl class="period-area">
                <dt class="title">계약기간</dt>
                <dd class="date">2024.01.01~2024.01.02</dd>
              </dl>
              <div class="text-right"><span>4개</span>의 상품이 있습니다.</div>
            </div>
            <ul class="product-list">
              <li>
                <router-link to="" class="list-item">
                  <div class="list-item-content">
                    <div class="text-row">
                      <div class="category">Data 서비스</div>
                      <div class="title">서울시 상권분석 데이터를 상반기와 후반기로 분류해서 제공하는 상품 서울시 상권분석 데이터를 상반기와 후반기로 분류해서 제공하는 상품 서울시 상권분석 데이터를 상반기와 후반기로 분류해서 제공하는 상품</div>
                    </div>
                    <div class="method">이메일</div>
                  </div>
                  <div class="list-item-append">
                    <v-btn variant="text">
                      <v-icon class="btn-arrow" />
                    </v-btn>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="" class="list-item">
                  <div class="list-item-content">
                    <div class="text-row">
                      <div class="category">솔루션서비스</div>
                      <div class="title">기획팀 : 세부 상품명 글자수 제한 여부 알려주세요. 피씨는 한줄+말줄임 권합니다.</div>
                    </div>
                    <div class="method">파일 다운로드</div>
                  </div>
                  <div class="list-item-append">
                    <v-btn variant="text">
                      <v-icon class="btn-arrow" />
                    </v-btn>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="" class="list-item disabled">
                  <div class="list-item-content">
                    <div class="text-row">
                      <div class="category">API서비스</div>
                      <div class="title">기획팀 : 세부 상품명 글자수 제한 여부 알려주세요. 피씨는 한줄+말줄임 권합니다.</div>
                    </div>
                    <div class="method">API</div>
                  </div>
                  <div class="list-item-append">
                    <v-btn variant="text">
                      <v-icon class="btn-arrow" />
                    </v-btn>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="" class="list-item">
                  <div class="list-item-content">
                    <div class="text-row">
                      <div class="category">솔루션서비스</div>
                      <div class="title">2024 전국 스타벅스 매장 연령별 결제 데이터 글자수 제한 여부 필요 (제목이 길어지면 말줄임 사용해주세요)</div>
                    </div>
                    <div class="method">담당자 전달</div>
                  </div>
                  <div class="list-item-append">
                    <v-btn variant="text">
                      <v-icon class="btn-arrow" />
                    </v-btn>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="contract-btn-area">
            <v-btn variant="flat" rounded="md" size="large" color="primary" class="btn-download">Data 다운로드</v-btn>
            <v-btn variant="flat" rounded="md" size="large" color="primary">APP Key</v-btn>
          </div>
        </v-list-item>
        <!-- // 카드 하단에 버튼 2개 모두 표시 -->
        <!-- CASE) 카드 하단에 버튼 1개만 표시 -->
        <v-list-item>
          <div class="contract-group">
            <div class="contract-title"><span class="number">C240405001</span>올리브영 성별 판매데이터</div>
            <div class="contract-box">
              <dl class="period-area">
                <dt class="title">계약기간</dt>
                <dd class="date">2024.01.01~2024.01.02</dd>
              </dl>
              <div class="text-right"><span>1개</span>의 상품이 있습니다.</div>
            </div>
            <ul class="product-list">
              <li>
                <router-link to="" class="list-item">
                  <div class="list-item-content">
                    <div class="text-row">
                      <div class="category">Data 서비스</div>
                      <div class="title">2024 전국 스타벅스 매장 연령별 결제 데이터 글자수 제한 여부 필요 (제목이 길어지면 말줄임 사용해주세요)</div>
                    </div>
                    <div class="method">담당자 전달</div>
                  </div>
                  <div class="list-item-append">
                    <v-btn variant="text">
                      <v-icon class="btn-arrow" />
                    </v-btn>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="contract-btn-area download">
            <v-btn variant="flat" rounded="md" size="large" color="primary" class="btn-download">Data 다운로드</v-btn>
          </div>
        </v-list-item>
        <!-- // 카드 하단에 버튼 1개만 표시 -->
        <!-- CASE) 카드 하단에 버튼도 메시지도 없음 -->
        <v-list-item>
          <div class="contract-group">
            <div class="contract-title"><span class="number">C240405001</span>올리브영 성별 판매데이터</div>
            <div class="contract-box">
              <dl class="period-area">
                <dt class="title">계약기간</dt>
                <dd class="date">2024.01.01~2024.01.02</dd>
              </dl>
              <div class="text-right"><span>1개</span>의 상품이 있습니다.</div>
            </div>
            <ul class="product-list">
              <li>
                <router-link to="" class="list-item">
                  <div class="list-item-content">
                    <div class="text-row">
                      <div class="category">Data 서비스</div>
                      <div class="title">2024 전국 스타벅스 매장 연령별 결제 데이터 글자수 제한 여부 필요 (제목이 길어지면 말줄임 사용해주세요)</div>
                    </div>
                    <div class="method">담당자 전달</div>
                  </div>
                  <div class="list-item-append">
                    <v-btn variant="text">
                      <v-icon class="btn-arrow" />
                    </v-btn>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </v-list-item>
        <!-- // 카드 하단에 버튼도 메시지도 없음 -->
        <!-- CASE) 계약 종료 + 버튼 살아있는 한달 -->
        <v-list-item>
          <div class="contract-group disabled">
            <div class="contract-title"><span class="number">C240405001</span>올리브영 성별 판매데이터</div>
            <div class="contract-box">
              <dl class="period-area">
                <dt class="title">계약기간</dt>
                <dd class="date">2024.01.01~2024.01.02</dd>
              </dl>
              <div class="text-right"><span>1개</span>의 상품이 있습니다.</div>
            </div>
            <ul class="product-list">
              <li>
                <router-link to="" class="list-item">
                  <div class="list-item-content">
                    <div class="text-row">
                      <div class="category">Data 서비스</div>
                      <div class="title">2024 전국 스타벅스 매장 연령별 결제 데이터 글자수 제한 여부 필요 (제목이 길어지면 말줄임 사용해주세요)</div>
                    </div>
                    <div class="method">담당자 전달</div>
                  </div>
                  <div class="list-item-append">
                    <v-btn variant="text">
                      <v-icon class="btn-arrow" />
                    </v-btn>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="contract-btn-area">
            <v-btn variant="flat" rounded="md" size="large" color="primary">APP Key</v-btn>
          </div>
        </v-list-item>
        <!-- // 계약 종료 + 버튼 살아있는 한달 -->
        <!-- CASE) 계약 종료 + 버튼도 히든되는 한달 후 카드 -->
        <v-list-item>
          <div class="contract-group disabled">
            <div class="contract-title"><span class="number">C240405001</span>올리브영 성별 판매데이터</div>
            <div class="contract-box">
              <dl class="period-area">
                <dt class="title">계약기간</dt>
                <dd class="date">2024.01.01~2024.01.02</dd>
              </dl>
              <div class="text-right"><span>1개</span>의 상품이 있습니다.</div>
            </div>
            <ul class="product-list">
              <li>
                <router-link to="" class="list-item">
                  <div class="list-item-content">
                    <div class="text-row">
                      <div class="category">Data 서비스</div>
                      <div class="title">2024 전국 스타벅스 매장 연령별 결제 데이터 글자수 제한 여부 필요 (제목이 길어지면 말줄임 사용해주세요)</div>
                    </div>
                    <div class="method">담당자 전달</div>
                  </div>
                  <div class="list-item-append">
                    <v-btn variant="text">
                      <v-icon class="btn-arrow" />
                    </v-btn>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="contract-btn-area">
            <p class="text">계약기간이 종료된 계약입니다.</p>
          </div>
        </v-list-item>
        <!-- // 계약 종료 + 버튼도 히든되는 한달 후 카드 -->
      </v-list>
      <div class="services-more-area">
        <v-btn variant="outlined" rounded="xl" class="btn-more">더보기<v-icon class="icon-arrow" /></v-btn>
      </div>
    </div>
    <!--// 나의계약 리스트 -->
    <!-- 나의내역 없음 -->
    <div class="search-result">
      <div class="text">나의 내역</div>
      <div class="desc">내역이 없습니다.</div>
    </div>
    <!--// 나의내역 없음 -->
  </div>
</template>
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
    <!-- CASE) 개인사업자, 미동의 상태 -->
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
    <!-- CASE) 법인사업자
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
    -->
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
    <v-divider class="svc-divide" />
    <!-- 회원정보 -->
    <div class="my-info first">
      <div class="title">
        <v-icon size="md" class="icon-member" />회원정보
      </div>
      <div class="member">
        <Form class="form-wrap">
          <div class="form-box">
            <div class="form-group">
              <div class="ele-tit">
                <v-label>로그인아이디</v-label>
              </div>
              <div class="data-wrap">
                <span class="data">kim@gmail.com</span>
              </div>
            </div>
            <div class="form-group">
              <div class="ele-tit">
                <v-label>이름</v-label>
              </div>
              <div class="data-wrap">
                <span class="data">김신한</span>
              </div>
            </div>
            <div class="form-group">
              <div class="ele-tit">
                <v-label>휴대폰번호</v-label>
              </div>
              <div class="input-wrap side-btn">
                <div class="input-wrap">
                  <v-text-field
                    aria-label="휴대폰번호"
                    density="comfortable"
                    variant="outlined"
                    color="primary"
                    hide-details="auto"
                    value="010-2222-4444"
                    disabled
                  ></v-text-field>
                </div>
                <v-btn
                  variant="outlined"
                  color="primary"
                  size="large"
                  rounded="md"
                  class="line-blue"
                >
                  번호변경
                </v-btn>
              </div>
              <p class="text-tip message">번호변경은 본인인증을 통해 진행할 수 있습니다.</p>
            </div>
            <div class="form-group">
              <div class="ele-tit">
                <v-label>수신 이메일주소</v-label>
              </div>
              <div class="data-wrap">
                <span class="data">husjhd@shinhancard.com</span>
              </div>
            </div>
            <div class="form-group">
              <div class="ele-tit">
                <v-label>마케팅동의</v-label>
              </div>
              <div class="check-wrap">
                <div class="form-checkbox">
                  <v-checkbox
                    label="동의"
                    hide-details
                    class="check-all"
                  ></v-checkbox>
                  <v-divider vertical />
                  <v-checkbox
                    label="이메일"
                    hide-details
                    class="check-media"
                  ></v-checkbox>
                  <v-checkbox
                    label="휴대폰메시지"
                    hide-details
                    class="check-media"
                  ></v-checkbox>
                </div>
                <div class="agree-btn">
                  <v-btn variant="text">
                    마케팅동의 약관<v-icon class="btn-arrow" />
                  </v-btn>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
    <!--// 회원정보 -->
    <v-divider class="svc-divide" />
    <!-- 기업정보 -->
    <div class="my-info">
      <div class="title">
        <v-icon size="md" class="icon-business" />기업정보
      </div>
      <div class="member">
        <Form class="form-wrap">
          <div class="form-box">
            <div class="form-group">
              <div class="ele-tit">
                <v-label>기업명</v-label>
              </div>
              <div class="data-wrap">
                <span class="data">(주)신한카드</span>
              </div>
            </div>
            <div class="form-group">
              <div class="ele-tit">
                <v-label>사업자등록번호</v-label>
              </div>
              <div class="data-wrap">
                <span class="data">222-86-11165</span>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
    <!--// 기업정보 -->
    <div class="btn-wrap">
      <v-btn
        variant="flat"
        color="primary"
        size="x-large"
        rounded="lg"
        class="default complete"
      >
        저장
      </v-btn>
    </div>
  </div>
</template>
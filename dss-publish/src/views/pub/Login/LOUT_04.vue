<template>
  <div class="member">
    <div class="member-header">
      <h3 class="h-title">로그아웃</h3>
    </div>
    <div class="member-step no-flow">
      <div class="step-txt">동일계정 동시 접속</div>
    </div>
    <div class="complete-box">
      <v-icon>icon-logout</v-icon>
      <div class="complete-text">
        <div>자동 로그아웃</div>
        <p>로그인 정책에 의해 동일계정 동시 접속시 기존 사용자는 로그아웃됩니다.<br>서비스를 이용하시려면 다시 로그인 하세요.</p>
      </div>
    </div>
    <div class="btn-wrap">
      <v-btn
        variant="flat"
        color="primary"
        size="x-large"
        rounded="lg"
        class="default"
      >
        로그인
      </v-btn>
    </div>
  </div>
</template>
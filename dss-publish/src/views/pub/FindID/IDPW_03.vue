<template>
  <div class="member">
    <div class="member-header">
      <h3 class="h-title">아이디 찾기·비밀번호 변경</h3>
    </div>
    <div class="member-step no-flow">
      <div class="step-txt">비밀번호 변경</div>
    </div>
    <div class="complete-box">
      <v-icon>icon-success</v-icon>
      <div class="complete-text">
        <div>비밀번호 변경 완료</div>
        <p>비밀번호가 재설정 되었습니다.</p>
      </div>
    </div>
    <div class="btn-wrap">
      <v-btn
        variant="flat"
        color="secondary"
        size="x-large"
        rounded="lg"
        class="default complete"
      >
        메인
      </v-btn>
      <v-btn
        variant="flat"
        color="primary"
        size="x-large"
        rounded="lg"
        class="default complete"
      >
        로그인
      </v-btn>
    </div>
  </div>
</template>
<template>
  <div class="member">
    <div class="member-header">
      <h3 class="h-title">계정전환</h3>
    </div>
    <div class="member-step">
      <div class="step-txt">신청 완료</div>
      <div class="step-flow">
        <ul>
          <li class="complete"><i>1단계 정보입력</i></li>
          <li class="current"><i>2단계 신청완료</i></li>
        </ul>
        <span class="blind">현재 2단계 진행중</span>
      </div>
    </div>
    <div class="complete-box">
      <v-icon>icon-success</v-icon>
      <div class="complete-text">
        <div>계정전환 신청 완료</div>
        <p>환영합니다. 고객님.<br>신청해주신 계정전환 서비스는 관리자 승인 후 이용 가능하며 로그인 후 기존 서비스는 이용 가능합니다.</p>
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
        확인
      </v-btn>
    </div>
  </div>
</template>
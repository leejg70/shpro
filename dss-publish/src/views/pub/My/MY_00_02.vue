<template>
  <div class="member">
    <div class="member-header">
      <h3 class="h-title">사업자계정전환</h3>
    </div>
    <div class="member-step">
      <div class="step-txt">전환 완료</div>
      <div class="step-flow">
        <ul>
          <li class="complete"><i>1단계 정보입력</i></li>
          <li class="current"><i>2단계 전환완료</i></li>
        </ul>
        <span class="blind">현재 2단계 진행중</span>
      </div>
    </div>
    <div class="complete-box">
      <v-icon>icon-success</v-icon>
      <div class="complete-text">
        <div>사업자계정 전환 완료</div>
        <p>사업자 계정으로 전환이 완료되었습니다.</p>
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
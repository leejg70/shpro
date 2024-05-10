<template>
  <div class="member">
    <div class="member-header">
      <h3 class="h-title">사업자계정전환</h3>
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
        <div>사업자계정 전환 신청 완료</div>
        <p>신청이 완료되었습니다.<br>관리자 승인 후 전환이 완료됩니다.</p>
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
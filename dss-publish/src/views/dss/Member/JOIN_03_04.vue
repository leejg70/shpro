<template>
    <div class="member">
      <div class="member-header">
        <h3 class="h-title">회원가입 (개인사업자)</h3>
      </div>
      <div class="member-step">
        <div class="step-txt">가입 완료</div>
        <div class="step-flow">
          <ul>
            <li class="complete"><i>1단계 본인인증</i></li>
            <li class="complete"><i>2단계 서비스이용동의</i></li>
            <li class="complete"><i>3단계 정보입력</i></li>
            <li class="current"><i>4단계 가입완료</i></li>
          </ul>
          <span class="blind">현재 4단계 진행중</span>
        </div>
      </div>
      <div class="complete-box">
        <v-icon
          icon="mdi-check-circle-outline"
          class="icon-success"
        ></v-icon>
        <div class="complete-text">
          <div>회원가입 완료</div>
          <p>환영합니다. 고객님.<br>신청해주신 개인사업자 서비스는 관리자 승인 후 이용 가능하며<br>로그인 후 기본 서비스는 이용 가능합니다.</p>
        </div>
      </div>
      <div class="btn-wrap">
        <v-btn
          variant="flat"
          color="primary"
          size="x-large"
          rounded="lg"
          class="btn-w14"
        >
          확인
        </v-btn>
      </div>
    </div>
  </template>
<script setup>
import { ref } from 'vue';

// reactive한 변수를 생성합니다.
const notice = ref(true);
const show = ref(false);
const allmenu = ref(false);
</script>
<template>
    <div class="main-top-banner" v-show="notice">
      <div class="top-banner-inner">
        <div class="notice-title">Notice</div>
        <div class="title">밴드공지 영역밴드공지 영역밴드공지 영역밴드공지 영역밴드공지 영역밴드공지 영역 </div>        
        <v-checkbox     
          label="오늘 그만보기"
          hide-details
          class="top-banner-check"
       ></v-checkbox>
        <v-btn
        @click="notice = false" 
        block
        class="btn-popup-close"
        >
        <span class="sr-only">닫기</span>
        </v-btn>
      </div>
    </div>
    <header class="header">
        <div class="head-inner">
            <div class="out-login-wrap">
                <button type="button" class="btn-daram">DataBlue</button>
                <ul>
                    <li><a href="javascript:;" class="">로그인</a></li>
                    <li><a href="javascript:;" class="">회원가입</a></li>
                    <!-- 로그인 후 -->
                    <!--
                    <li><a href="javascript:;" class="name">김신한님</a></li>
                    <li><a href="javascript:;" class="">로그아웃</a></li>
                    -->
                    <li><a href="javascript:;" class="">고객센터</a></li>
                </ul>
            </div>
            <div class="gnb-wrap">
                <h1 class="logo-title"><img src="../../assets/images/common/logo.png" alt="" class="logo"></h1>
                <nav class="gnb-menu" @mouseover="show = true" @mouseout="show = false">
                    <ul class="menu-list">
                        <li><a href="javascript:;" class="">Data서비스</a></li>
                        <li><a href="javascript:;" class="">솔루션서비스</a></li>
                        <li><a href="javascript:;" class="">광고서비스</a></li>
                        <li><a href="javascript:;" class="">API서비스</a></li>
                        <li><a href="javascript:;" class="">MY</a></li>
                    </ul>
                </nav>
                <div class="util-wrap">
                    <ul class="util-list">
                        <li><button class="btn-community"><i class="ico ico_thumb_m ico-community"></i>커뮤니티</button></li>                       
                        <li><button  color="" @click="allmenu = true" class="btn-allmenu"><i class="ico ico_thumb_m ico-allmenu"><span class="sr-only">전체메뉴</span></i></button></li>
                    </ul>
                </div>
            </div>
        </div>    
        <div class="gnb-menu-wrap"  v-show="show"  @mouseover="show = true" @mouseout="show = false">
            <div class="gnb-menu-inner">
                <div class="gnb-menu-list">
                    <h2 class="title"><a href="javascript:;" class="title-link">Data서비스</a></h2>
                    <ul class="dep1-list">
                        <li class="item"><a href="javascript:;">Data상품</a></li>
                        <li class="item"><a href="javascript:;">맞춤Data</a></li>
                    </ul>
                </div>
                <div class="gnb-menu-list">
                    <h2 class="title"><a href="javascript:;" class="title-link">솔루션서비스</a></h2>
                    <ul class="dep1-list">
                        <li class="item"><a href="javascript:;">솔루션 상품</a></li>
                    </ul>
                </div>
                <div class="gnb-menu-list">
                    <h2 class="title"><a href="javascript:;" class="title-link">광고서비스</a></h2>
                    <ul class="dep1-list">
                        <li class="item"><a href="javascript:;">타겟마케팅</a></li>
                        <li class="item"><a href="javascript:;">서베이 대행서비스</a></li>
                        <li class="item"><a href="javascript:;">Sol-Pay 배너광고</a></li>
                    </ul>
                </div>
                <div class="gnb-menu-list">
                    <h2 class="title"><a href="javascript:;" class="title-link">API서비스</a></h2>
                    <ul class="dep1-list">
                        <li class="item"><a href="javascript:;">API상품</a></li>
                    </ul>
                </div>
                <div class="gnb-menu-list">
                    <h2 class="title"><a href="javascript:;" class="title-link">MY</a></h2>
                    <ul class="dep1-list">
                        <li class="item"><a href="javascript:;">나의 계약</a></li>
                        <li class="item"><a href="javascript:;">관심상품</a></li>                  
                        <li class="item"><a href="javascript:;">나의문의</a></li>
                        <li class="item"><a href="javascript:;">알림</a></li>
                    </ul>
                </div>
            </div>
        </div>   
    </header>
 
    <!--  전체메뉴 -->
    <v-dialog v-model="allmenu" fullscreen  class="menu-full-popup">
        <div class="allmenu">
            <div class="allmenu-inner">
                <div class="allmenu-head">
                    <div class="logo-title"><img src="../../assets/images/common/logo.png" alt="" class="logo"></div>
                    <div class="allmenu-login-wrap">
                        <!-- <ul class="login-txt-box">
                            <li><a href="javascript:;" class="menu-login"><v-icon>icon-login</v-icon>로그인</a></li>
                            <li><a href="javascript:;" class="menu-join"><v-icon>icon-join</v-icon>회원가입</a></li>              
                        </ul> -->
                        <div class="logout-txt-box">
                            <div class="logout-txt">안녕하세요. <span class="name">김신한님!</span></div>
                        </div>
                    </div>
                </div>
                <div class="outlogin-box">
                    <div class="logout-btn-area">
                        <v-btn class="btn-mylink">
                        <v-icon>icon-my-contract</v-icon>
                        <span class="text">나의계약</span>
                        </v-btn>
                        <v-btn class="btn-mylink">
                        <v-icon>icon-my-qa</v-icon>
                        <span class="text">나의문의</span>
                        </v-btn>
                        <v-btn class="btn-mylink">
                        <v-icon>icon-my-alarm on</v-icon>
                        <span class="text">알림</span>
                        </v-btn>
                    </div>
                </div>
                <div class="allmenu-list-wrap">
                    <div class="allmenu-list">
                        <h2 class="title"><a href="javascript:;">Data서비스</a></h2>
                        <ul class="dep1_list">
                            <li class="item"><a href="javascript:;">Data상품</a></li>
                            <li class="item"><a href="javascript:;">맞춤Data</a></li>
                        </ul>
                    </div>
                    <div class="allmenu-list">
                        <h2 class="title"><a href="javascript:;">솔루션서비스</a></h2>
                        <ul class="dep1_list">
                            <li class="item"><a href="javascript:;">솔루션 상품</a></li>
                        </ul>
                    </div>
                    <div class="allmenu-list">
                        <h2 class="title"><a href="javascript:;">광고서비스</a></h2>
                        <ul class="dep1_list">
                            <li class="item"><a href="javascript:;">타겟마케팅</a></li>
                            <li class="item"><a href="javascript:;">서베이 대행서비스</a></li>
                            <li class="item"><a href="javascript:;">Sol-Pay 배너광고</a></li>
                        </ul>
                    </div>
                    <div class="allmenu-list">
                        <h2 class="title"><a href="javascript:;">API서비스</a></h2>
                        <ul class="dep1_list">
                            <li class="item"><a href="javascript:;">API상품</a></li>
                        </ul>
                    </div>
                    <div class="allmenu-list">
                        <h2 class="title"><a href="javascript:;">MY</a></h2>
                        <ul class="dep1_list">
                            <li class="item"><a href="javascript:;">나의 계약</a></li>
                            <li class="item"><a href="javascript:;">관심상품</a></li>                        
                            <li class="item"><a href="javascript:;">나의문의</a></li>
                            <li class="item"><a href="javascript:;">알림</a></li>
                        </ul>
                    </div>
                    <div class="allmenu-list">
                        <h2 class="title"><a href="javascript:;">DataBlue</a></h2>
                        <ul class="dep1_list">
                            <li class="item"><a href="javascript:;">DataBlue</a></li>
                            <li class="item"><a href="javascript:;">신한 DataUniverse</a></li>
                        </ul>
                    </div>
                    <div class="allmenu-list">
                        <h2 class="title"><a href="javascript:;">커뮤니티</a></h2>
                        <ul class="dep1_list">
                            <li class="item"><a href="javascript:;">활용장</a></li>
                            <li class="item"><a href="javascript:;">토론장</a></li>
                        </ul>
                    </div>
                    <div class="allmenu-list">
                        <h2 class="title"><a href="javascript:;">고객센터</a></h2>
                        <ul class="dep1_list">
                            <li class="item"><a href="javascript:;">공지사항</a></li>
                            <li class="item"><a href="javascript:;">FAQ</a></li>
                            <li class="item"><a href="javascript:;">고객문의</a></li>
                       </ul>
                    </div>                 
                    <ul class="customer-box ">
                        <li><a href="javascript:;" class="notice">공지사항</a></li>
                        <li><a href="javascript:;" class="faq">FAQ</a></li>
                        <li><a href="javascript:;" class="customer-center">고객문의</a></li>
                    </ul>                   
                </div>
                <v-btn
                @click="allmenu = false"
                block
                class="btn-popup-close"
                >
                    <span class="sr-only">닫기</span>
                </v-btn>
            </div>
        </div>
    </v-dialog>
</template>
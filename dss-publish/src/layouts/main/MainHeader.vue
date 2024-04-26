<script setup>
import { ref } from 'vue';

const allmenu = ref(false);
</script>
<template> 
    <div class="main-top-banner" style="height: 100px; background-color: #eee;"></div>
    <header class="header">       
        <div class="head-inner">                          
            <div class="out-login-wrap">
                <button type="button" class="btn-daram">DataBlue</button>
                <ul>
                    <li><a href="javascript:;" class="">로그인</a></li>
                    <li><a href="javascript:;" class="">회원가입</a></li>
                    <li><a href="javascript:;" class="">고객센터</a></li>
                </ul>
                <ul style="display: none;">
                    <li><a href="javascript:;" class="">로그아웃</a></li>                  
                    <li><a href="javascript:;" class="">고객센터</a></li>
                </ul>
            </div>
            <div class="gnb-wrap">
                <h1 class="title1"><img src="../../assets/images/common/logo.png" alt="" class="logo"></h1>
                <nav class="gnb-menu">
                    <ul class="menu-list">
                        <li><a href="javascript:;" class="">Data서비스</a></li>
                        <li><a href="javascript:;" class="">솔루션서비스</a></li>
                        <li><a href="javascript:;" class="">광고서비스</a></li>
                        <li><a href="javascript:;" class="">API서비스</a></li>
                        <li><a href="javascript:;" class="">MY</a></li>
                    </ul>                   
                </nav>
                <!-- // Menu --> 
                <div class="util-wrap">
                    <ul class="util-list">
                        <li><button class="btn-community"><i class="ico ico_thumb_m ico-community"></i>커뮤니티</button></li>
                        <!-- <li><button class="btn-search"><i class="ico ico_thumb_m ico-search"><span class="sr-only">검색</span></i></button></li> -->
                        <li><button  color="" @click="allmenu = true" class="btn-allmenu"><i class="ico ico_thumb_m ico-allmenu"><span class="sr-only">전체메뉴</span></i></button></li>
                    </ul>
                </div>
            </div>                     
        </div> 
        <div class="menu-over" style=""></div>  
    </header>
    <!-- //header-->
    <!--  전체메뉴 -->
    <v-dialog v-model="allmenu" fullscreen  class="menu-full-popup">                          
        <div class="allmenu">
            <div class="allmenu-inner">
                <div class="allmenu-head">
                    <div class="logo"></div>
                </div>
                <div class="allmenu-list-wrap">
                    <div class="allmenu-list" >
                        <h2 class="title">Data서비스</h2>
                        <ul class="dep1_list">
                            <li class="item"><a href="javascript:;">Data상품</a></li>
                            <li class="item"><a href="javascript:;">맞춤Data</a></li>
                        </ul>
                    </div>
                    <div class="allmenu-list">
                        <h2 class="title">솔루션서비스</h2>
                        <ul class="dep1_list">
                            <li class="item"><a href="javascript:;">솔루션 상품</a></li>
                        </ul>
                    </div>
                    <div class="allmenu-list">
                        <h2 class="title">광고서비스</h2>
                        <ul class="dep1_list">
                            <li class="item"><a href="javascript:;">타겟마케팅</a></li>
                            <li class="item"><a href="javascript:;">서베이 대행서비스</a></li>
                            <li class="item"><a href="javascript:;">Sol-Pay 배너광고</a></li>
                        </ul>
                    </div>
                    <div class="allmenu-list">
                        <h2 class="title">API서비스</h2>
                        <ul class="dep1_list">
                            <li class="item"><a href="javascript:;">API상품</a></li>
                        </ul>
                    </div>
                    <div class="allmenu-list">
                        <h2 class="title">MY</h2>
                        <ul class="dep1_list">
                            <li class="item"><a href="javascript:;">나의 계약</a></li>
                            <li class="item"><a href="javascript:;">관심상품</a></li>
                            <li class="item"><a href="javascript:;">타겟마케팅 신청내역</a></li>
                            <li class="item"><a href="javascript:;">나의문의</a></li>
                            <li class="item"><a href="javascript:;">알림</a></li>                  
                        </ul>
                    </div>
                    <div class="allmenu-list">
                        <h2 class="title">DataBlue</h2>
                        <ul class="dep1_list">
                            <li class="item"><a href="javascript:;">DataBlue</a></li>
                            <li class="item"><a href="javascript:;">신한 DataUniverse</a></li>
                        </ul>
                    </div>
                    <div class="allmenu-list">
                        <h2 class="title">커뮤니티</h2>
                        <ul class="dep1_list">
                            <li class="item"><a href="javascript:;">활용장</a></li>
                            <li class="item"><a href="javascript:;">토론장</a></li>               
                        </ul>
                    </div>
                    <div class="allmenu-list">
                        <h2 class="title">고객센터</h2>
                        <ul class="dep1_list">
                            <li class="item"><a href="javascript:;">공지사항</a></li>
                            <li class="item"><a href="javascript:;">FAQ</a></li>
                            <li class="item"><a href="javascript:;">고객문의</a></li>
                       </ul>
                    </div>
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
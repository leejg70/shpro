<template>
    <header class="header">
        <div class="head-inner">                          
            <div class="out-login-wrap">
                <button type="button" class="btn-daram">DataM</button>
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
                        <li><button class="btn-search"><i class="ico ico_thumb_m ico-search"><span class="sr-only">검색</span></i></button></li>
                        <li><button  color="" @click="menu = true" class="btn-allmenu"><i class="ico ico_thumb_m ico-allmenu"><span class="sr-only">전체메뉴</span></i></button></li>
                    </ul>
                </div>
            </div>                     
        </div>    
    </header>
    <!-- //header-->
    <!--  전체메뉴 -->
    <v-dialog v-model="menu" width="auto">                          
        <div class="allmenu" style="width: 500px; height:500px; border:2px solid #eee; background-color: #fff;">
            메뉴테스트
            <v-btn color="" class="btn-close" block @click="menu = false">Close Dialog</v-btn>
        </div> 
    </v-dialog>  
</template>

<script lang="ts">
export default {
data () {
   return { 
    menu : false,
   }
},
};
</script>
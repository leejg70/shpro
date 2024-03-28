<template>
  <header class="header">
            <div class="head-inner">             
        
                <div class="gnb-wrap">
                    <h1 class="title1"><img src="../../assets/img/common/logo.png" alt="" class="logo"></h1>
                    <nav class="gnb-menu">
                        <ul class="menu-list">
                            <li><router-link to="/guide/01">인풋가이드</router-link></li>
                            <li><router-link to="/guide/02">버튼가이드</router-link></li>
                            <li><router-link to="/guide/03">체크박스가이드</router-link></li>
                            <li><router-link to="/worklist">워크리스트</router-link></li>             
                        </ul>                         
                    </nav>
                    <!-- // Menu --> 
                    <div class="util-wrap">
                        <ul class="util-list">
                            <li><button class="btn-community"><i class="ico ico_thumb_m ico-community"></i>커뮤니티</button></li>
                            <li><button class="btn-search"><i class="ico ico_thumb_m ico-search"><span class="sr-only">검색</span></i></button></li>
                            <li><button class="btn-allmenu"><span class="sr-only">전체메뉴</span></button></li>
                        </ul>
                    </div>
                </div>                
             </div>    
        </header>
  <!-- //header-->
</template>
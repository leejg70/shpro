
<template>
  <header class="header">
            <div class="head-inner">       
                <div class="gnb-wrap">
                    <h1 class="title1">
                        <router-link to="/">worklist</router-link>                       
                    </h1>
                    <nav class="gnb-menu">
                        <ul class="menu-list">
                            <li><router-link to="/guide/01" >인풋</router-link></li>
                            <li><router-link to="/guide/02"  >버튼</router-link></li>
                            <li><router-link to="/guide/03"  >아이콘</router-link></li>
                            <li><router-link to="/guide/04"  >팝업</router-link></li>                                    
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
<style scoped>
</style>
<script setup>
import { shallowRef } from 'vue';

const footerLink = shallowRef([
  {
    title: '이용약관',
    link: 'javascript:;'
  },
  {
    title: '개인정보처리방침',
    link: 'https://www.shinhancard.com/pconts/html/helpdesk/personProtect/MOBFM170/1226665_2386.html'
  }
]);
</script>
<template>
  <v-footer class="footer">
    <div class="foot-inner">
        <div class="bottom-logo"><span class="sr-only">신한카드</span></div>
        <div class="addr-wrap">
            <ul>
                <li v-for="(item, i) in footerLink" :key="i"><a :href="item.link">{{ item.title }}</a></li>          
            </ul>
            <address>
                <p><span>서울특별시 중구 을지로 100 (을지로2가, 파인에비뉴 A동) 신한카드</span></p>
                <p><span>이메일: databada@shinhan.com</span></p>    
            </address>
            <p class="copyright">Copyright 2024 Shinhan Card DataBada. All Rights Reserved.</p>
        </div>
    </div>            
  </v-footer>
  <!-- //header-->
</template>
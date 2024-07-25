<script setup>
import { shallowRef } from 'vue';

const footerLink = shallowRef([
    {
        title: '이용약관',
        link: 'javascript:;'
    },
    {
        title: '개인정보처리방침',
        link: 'javascript:;'
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
                    <span>서울특별시 중구 을지로 100 (을지로2가, 파인에비뉴 A동) 신한카드 데이터전문기관</span><br>
                    <span>대표전화 : 02-6950-8888</span>
                    <span>이메일 : data_admin@shinhan.com</span>
                </address>
                <p class="copyright">Copyright 2024 Shinhan Data Specialized Institution All Rights Reserved.</p>
            </div>
        </div>
    </v-footer>
    <!-- //header-->
</template>
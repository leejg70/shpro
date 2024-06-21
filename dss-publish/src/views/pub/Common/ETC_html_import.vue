<template>
  <div class="popup">
    <h1>Fetched HTML Content</h1>
    <div v-html="htmlContent"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const htmlContent = ref('');

// 가져오고 싶은 웹페이지의 URL
const targetUrl = 'https://www.shinhancard.com/pconts/html/agree/1217932_7911.html';
const proxyUrl = 'https://api.allorigins.win/get?url=';

const fetchHTML = async () => {
  try {
    const response = await fetch(proxyUrl + encodeURIComponent(targetUrl));
    if (response.ok) {
      const data = await response.json();
      htmlContent.value = data.contents;
    } else {
      console.error('Failed to retrieve the webpage:', response.status);
    }
  } catch (error) {
    console.error('Error fetching the HTML:', error);
  }
};

onMounted(() => {
  fetchHTML();
});
</script>

<style >
/* 약관 */
.termsConts{font-size: 1.6rem;}
.termsConts > p > b{color:#111}
.termsConts {padding-bottom:4rem;}
.termsConts .t-tit-1{font-size: 2.4rem;margin-top:5rem;}
.termsConts .t-tit0{font-size: 2rem;}
.termsConts .t-tit1{font-size: 1.6rem;margin-top:1rem;}
.termsConts p + table,
.termsConts table + p,
.termsConts table + table,
.termsConts table + ul,
.termsConts .t-tit1 + table,
.termsConts .t-tit1 + ul,
.termsConts ul + table,
.termsConts .t-tit1 + p{margin-top: 1.5rem;}
.termsConts ul > li{padding-left:1.9rem;text-indent: -1.6rem;}
.termsConts ul > li + li{margin-top:0.3rem;}
.termsConts ul > li > li{padding-left:1.8rem;text-indent: -1.6rem;} 
.termsConts ul > li .c-bull1{margin-top:0.3rem;}
.termsConts ul + br + .t-tit0,
.termsConts p + br + .t-tit0,
.termsConts p + .t-tit0{margin-top:5rem;margin-bottom:2rem;}
.termsConts p.hide + .t-tit0{margin-top:0;}
.termsConts .t-tit1{font-size:1.15em}
.termsConts  b{color:#111}
.termsConts ul > li > *{text-indent:0}
.termsConts ul > li > .c-bull3{text-indent:-1.9rem}
.termsConts table{margin:1rem 0rem}
.termsConts .table-inner table::after{height:1px;background-color:#ddd;}
.termsConts .table-inner table th {background-color:transparent;}
.termsConts .c-bull1, 
.termsConts .c-bull1 > li{padding-left:1.2rem;text-indent:0;}
.termsConts ul.c-bull1{padding-left:0;}
.termsConts  p + p,
.termsConts  p + ul,
.termsConts  ul + p{margin-top:1rem;}
.termsConts  p > ul{margin-top:0.3rem}
.termsConts ul.num2 > li {padding-left:2.9rem;text-indent:-2.6rem;}
.termsConts .t-box1{padding:2rem;background:#f6f6f6;margin:1rem 0rem;}
.termsConts .btn-cover3{margin-top:1rem;}
.termsConts strong{font-size:1.15em}
.termsConts .termsConts-btm{background:#f6f6f6;padding:3rem;}
.termsConts .termsConts-btm .flex-box{display:flex;}
.termsConts [class*=btn-terms]{display:inline-block;height: 2.8rem;padding: 0 1rem;border: 0.1rem solid #bbb;border-radius: 0.3rem;background: #fff;font-weight: 400;font-size: 1.3rem;color: #333;line-height: 2.6rem;position:relative;}
.termsConts .btn-terms3:after{content:'';display: inline-block;width: 0.8rem;height: 0.8rem;margin-left: 0.8rem;margin-bottom: 0;background: url(/pconts/images/icon/ico_outlink05.png) no-repeat center;}
.termsConts .termsConts-btm .text-sec *{font-size:13px;color:#111;}
.termsConts .termsConts-btm .text-sec .c-bull1 li:before{top:0.6rem;}
.termsConts .termsConts-btm .text-sec{flex:1;width:8.6rem;position:relative;}
.termsConts .termsConts-btm .img-sec{flex:none;position:relative;width:8.6rem;margin-left:1rem;}
.termsConts .termsConts-btm .img-sec img{position:absolute;right:0;top:0;width:8.6rem;height:8.6rem;}
.termsConts .termsConts-btm .btn-sec{margin-top:1rem;clear:both;}
.termsConts .termsConts-btm .ods-show{display:none;}
.termsConts [class*='c-bull'] .c-bull3 > li,
.termsConts [class*='c-bull'] p.c-bull3 {text-indent:-1.9rem !important;}
#pop_cont_trems .popup .pop_cont .termsConts{outline:0}
.termsConts .t-tit1.has-img {display:flex;align-items:center;margin-bottom:1.2rem;}
.termsConts .t-tit1.has-img .img {width:3.6rem;min-width:3.6rem;margin-left:0.8rem;}
.termsConts .t-tit1.has-img .img + .img{margin-left:0.4rem;}
@media only screen and (max-width: 1280px) {
  .termsConts{font-size: 1.4rem;}
}
</style>
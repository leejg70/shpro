<script setup>
const link = 'https://www.shinhancard.com/pconts/html/agree/1217932_7911.html'
</script>

<template>
  <div class="popup-wrap w62">
    <div class="popup-head">
      <h3 class="title">휴대폰 본인확인 이용 동의</h3>
    </div>
    <div class="popup-cont">
      <iframe :src="link" class="iframe"></iframe>
    </div>
  </div>
</template>

<style lang="scss">
.iframe {
  border: 1px solid #ddd;
  width: 100%;
  height: 25rem;
}
</style>
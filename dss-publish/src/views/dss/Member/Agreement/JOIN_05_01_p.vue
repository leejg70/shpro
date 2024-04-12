<script setup lang="ts">
const link = 'https://www.shinhancard.com/pconts/html/agree/1217932_7911.html'
</script>

<template>
  <div class="popup-agree-wrap">
    <div class="popup-head">
      <h3 tabindex="0">팝업 타이틀</h3>
    </div>
    <div class="popup-cont">
      <iframe :src="link" width="100%" height="100%"></iframe>
    </div>
  </div>
</template>
<script setup>
import snackbar from '../Components/SnackBar.vue';
</script>

<template>
  <div class="contents-area">
    Contents<br>Area
  </div>
  <!-- 토스트팝업 -->
  <snackbar/>
</template>

<style lang="scss" Scoped>
.contents-area{
  height: 100rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  text-align: center;
  font-weight: 700;
  line-height: 100%; 
  border: 1px solid #ddd;
  background: #F3F5F8;
}
</style>
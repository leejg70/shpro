<script setup lang="ts">
import { ref } from 'vue';
const dialog = ref(false);
const alert= ref(false);
import Agreement from  '@/views/members/agreement/sample.vue'

</script>
<template>
  팝업테스트 
    <v-btn
      :ripple="false"
      append-icon="mdi-chevron-right"
      variant="text"
      @click="dialog = true"
      class="btn-link"
    >
      내용보기
    </v-btn>
    <v-btn
      :ripple="false"
      append-icon="mdi-chevron-right"
      variant="text"
      @click="alert = true"
      class="btn-link"
    >
      얼럿보기
    </v-btn>

<!-- 약관팝업 -->
  <v-dialog
  v-model="dialog"
  width="auto"
  >  
    <div class="popup-agree-wrap">
    <Agreement></Agreement>
      <v-btn
      @click="dialog = false"  
      block
      class="btn-popup-close"
    >
      <span class="sr-only">닫기</span>
    </v-btn>
    </div>
  </v-dialog>
<!-- 얼럿 -->
<v-dialog
  v-model="alert"
  width="auto"
  >  
    <div class="popup-alert-wrap">
      <div class="alert-head"></div>
      <div class="alert-cont"></div>
      <div class="alert-foot">
        <v-btn
        @click="dialog = false"  
        block
        class="btn-popup-close"
        >
        확인
        </v-btn>
      </div>  
    </div>
  </v-dialog>



</template>
<style lang="scss">

</style>



<script setup>
import { ref } from 'vue';
import Agreement from  './PopupAgree.vue'
import Alert from  './AlertSample.vue'
const dialog = ref(false);
const alert= ref(false);
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
      <Agreement></Agreement>
      <v-btn
      @click="dialog = false"  
      block
      class="btn-popup-close"
      >
      <span class="sr-only">닫기</span>
      </v-btn>
    </v-dialog>

    <!-- 얼럿 -->
    <v-dialog
    v-model="alert"
    width="auto"
    >  
    <div class="popup-alert-wrap">
      <!-- <div class="alert-head"></div> -->
      <Alert></Alert>
      <div class="alert-foot">
        <v-btn
        @click="alert = false"  
        block
        class="btn-alert-close"
        >
        확인
        </v-btn>
      </div>  
    </div>
  </v-dialog>
</template>
<style lang="scss">

</style>



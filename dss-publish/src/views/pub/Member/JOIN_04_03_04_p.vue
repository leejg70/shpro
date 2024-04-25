<script setup>
import { ref } from 'vue';
import helppopup from  '../Popup/InPopup.vue';

const inpopup = ref(false);
</script>

<template>
  <v-btn
    @click="inpopup= true"
    class="btn-link"
  >
    기업추가 팝업
  </v-btn>

  <!-- 기업추가 팝업 -->
  <v-dialog
    v-model="inpopup"
    width="auto"
  >
    <helppopup></helppopup>
    <v-btn
      @click="inpopup= false"  
      block
      class="btn-popup-close"
    >
      <span class="sr-only">닫기</span>
    </v-btn>
  </v-dialog>
</template>
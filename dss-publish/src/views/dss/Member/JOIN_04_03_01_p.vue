<script setup>
import { ref } from 'vue';
import searchpopup from  '../Popup/SearchPopup.vue';

const popup = ref(false);
</script>

<template>
  <v-btn
    @click="popup= true"
    class="btn-link"
  >
    기업찾기 팝업
  </v-btn>

  <!-- 기업찾기 팝업 -->
  <v-dialog
    v-model="popup"
    width="auto"
  >
    <searchpopup></searchpopup>
    <v-btn
      @click="popup = false"
      block
      class="btn-popup-close"
    >
      <span class="sr-only">닫기</span>
    </v-btn>
  </v-dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue';

import helppopup from  '@/views/dss/Member/Agreement/InPopup.vue'
const inpopup = ref(false);
</script>

<template>
  기업추가 팝업
    <v-btn
      :ripple="false"  
      @click="inpopup= true"
      class="btn-link"
    >
    기업추가 팝업
    </v-btn>

    <!--  기업찾기 팝업  -->
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
<style lang="scss">

</style>



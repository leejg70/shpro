<script setup>
import { ref } from 'vue';

const company = ref(false);
</script>

<template>
  <v-dialog
    v-model="company"
    width="auto"
    persistent
  >
    <!-- 샘플 버튼 -->
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps">
        기업찾기 팝업
      </v-btn>
    </template>
    <!-- // 샘플 버튼 -->

    <!-- 기업찾기 -->
    <div class="popup-wrap large">

    </div>
    <!-- // 기업찾기 -->
  </v-dialog>
</template>
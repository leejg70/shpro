<script setup lang="ts">
import { RouterView } from 'vue-router';
import PageHeader from '@/layouts/main/MainHeader.vue'
import PageFooter from '@/layouts/main/MainFooter.vue'
</script>
<template>
  <v-app>
    <PageHeader/> <!-- 헤더 컴포넌트 -->
    <v-main class="page-wrapper">
      <RouterView />
    </v-main>
    <PageFooter/> <!-- 푸터 컴포넌트 -->
  </v-app>
</template>

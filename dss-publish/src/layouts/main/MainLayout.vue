<script setup>
import { RouterView } from 'vue-router';
import PageHeader from '@/layouts/main/MainHeader.vue'
import PageFooter from '@/layouts/main/MainFooter.vue'
</script>
<template>
  <v-app class="wrap">
    <PageHeader/> <!-- 헤더 컴포넌트 -->
    <v-main class="container">
      <div class="ly-inner">
        <RouterView />
      </div>      
    </v-main>
    <PageFooter/> <!-- 푸터 컴포넌트 -->
  </v-app>
</template>

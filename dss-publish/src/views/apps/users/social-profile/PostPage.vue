<script setup lang="ts">
import { ref } from 'vue';
import Banner from '../../../../components/apps/socialprofile/BannerSection.vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import PostListing from '@/components/apps/socialprofile/PostListing.vue';
import About from './AboutCard.vue';
import WritePost from './WritePost.vue';

const page = ref({ title: 'Social Profile' });
const breadcrumbs = ref([
  {
    title: 'Users',
    disabled: false,
    href: '/'
  },
  {
    title: 'Social Profile',
    disabled: true,
    href: '#'
  }
]);
</script>

<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  <v-row>
    <v-col cols="12">
      <Banner />
    </v-col>
  </v-row>
  <v-row class="mt-4">
    <v-col lg="8" md="8" sm="12" cols="12">
      <WritePost />
      <PostListing />
    </v-col>
    <v-col lg="4" md="4" sm="12" cols="12">
      <About />
    </v-col>
  </v-row>
</template>

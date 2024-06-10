<script setup>
import { ref } from 'vue';
import Tab01 from './PRDM_01_tab01.vue';
import Tab02 from './PRDM_01_tab02.vue';
import Tab03 from './PRDM_01_tab03.vue';

const tabs = ref('');
</script>

<template>
  <div class="sub-group">
    <div class="sub-title-area">
      <h4 class="sub-title">광고서비스</h4>
    </div>
    <div class="static-content">
      <v-sheet>
        <v-slide-group v-model="tabs" show-arrows mandatory class="line-tabs">
          <v-slide-group-item
            v-for="item in [ '타겟마케팅', '모바일서베이', 'SoL-Pay배너광고' ]"
            :key="item"
            v-slot="{ isSelected, toggle }"
          >
            <v-btn
              variant="text"
              size="large"
              :class="isSelected ? 'active': ''"
              @click="toggle"
            >
              {{ item }}
            </v-btn>
          </v-slide-group-item>
        </v-slide-group>

        <v-window v-model="tabs">
          <v-window-item value="0">
            <Tab01 />
          </v-window-item>
          <v-window-item value="1">
            <Tab02 />
          </v-window-item>
          <v-window-item value="2">
            <Tab03 />
          </v-window-item>
        </v-window>
      </v-sheet>
      <div class="btn-list">
        <v-btn variant="flat" rounded="lg" size="x-large" color="primary">문의하기</v-btn>
      </div>
    </div>
  </div>
</template>
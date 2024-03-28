<script setup lang="ts">
import { ref, watch } from 'vue';
import SvgSprite from '@/components/shared/SvgSprite.vue';
import { useCustomizerStore } from '../../../stores/customizer';

// assets
import message1 from '@/assets/images/widget/message/message1.svg';
import message2 from '@/assets/images/widget/message/message2.svg';
import message3 from '@/assets/images/widget/message/message3.svg';
import message4 from '@/assets/images/widget/message/message4.svg';

const messagedrawer = ref(false);

// dropdown imports
import LanguageDD from './LanguageDD.vue';
import NotificationDD from './NotificationDD.vue';
import ProfileDD from './ProfileDD.vue';
import MegaMenuDD from './MegaMenuDD.vue';
import Searchbar from './SearchBarPanel.vue';
import type { PerfectScrollbar } from 'vue3-perfect-scrollbar';

const customizer = useCustomizerStore();
const priority = ref(customizer.setHorizontalLayout ? 0 : 0);
watch(priority, (newPriority) => {
  // yes, console.log() is a side effect
  priority.value = newPriority;
});
</script>

<template>
  <v-app-bar elevation="0" :priority="priority" height="74" class="px-sm-10 px-5">
    <v-btn
      class="hidden-md-and-down mr-5 ml-0"
      color="secondary"
      icon
      aria-label="sidebar button"
      rounded="sm"
      variant="tonal"
      @click.stop="customizer.SET_MINI_SIDEBAR(!customizer.mini_sidebar)"
    >
      <SvgSprite name="custom-menu-outline" style="width: 24px; height: 24px" />
    </v-btn>
    <v-btn
      class="hidden-lg-and-up text-secondary"
      color="darkText"
      icon
      rounded="sm"
      variant="text"
      @click.stop="customizer.SET_SIDEBAR_DRAWER"
      size="small"
    >
      <SvgSprite name="custom-menu-outline" style="width: 24px; height: 24px" />
    </v-btn>

    <!-- search mobile -->
    <v-menu :close-on-content-click="false" class="hidden-lg-and-up" offset="10, 0">
      <template v-slot:activator="{ props }">
        <v-btn class="hidden-lg-and-up ml-1" color="secondary" icon rounded="sm" variant="text" size="small" v-bind="props">
          <div class="text-lightText d-flex align-center">
            <SvgSprite name="custom-search" style="width: 16px; height: 16px" />
          </div>
        </v-btn>
      </template>
      <v-sheet class="search-sheet v-col-12 pa-0" elevation="24" width="320" rounded="md">
        <v-text-field persistent-placeholder placeholder="Search here.." rounded="md" color="primary" variant="solo" hide-details>
          <template v-slot:prepend-inner>
            <div class="text-lightText d-flex align-center">
              <SvgSprite name="custom-search" style="width: 16px; height: 16px" />
            </div>
          </template>
        </v-text-field>
      </v-sheet>
    </v-menu>

    <!-- ---------------------------------------------- -->
    <!-- Search part -->
    <!-- ---------------------------------------------- -->
    <v-sheet color="transparent" class="d-none d-lg-block" width="224">
      <Searchbar />
    </v-sheet>

    <!---/Search part -->

    <v-spacer />
    <!-- ---------------------------------------------- -->
    <!---right part -->
    <!-- ---------------------------------------------- -->

    <!-- ---------------------------------------------- -->
    <!-- Messages -->
    <!-- ---------------------------------------------- -->
    <v-menu :close-on-content-click="false" offset="10, 380">
      <template v-slot:activator="{ props }">
        <v-btn
          icon
          class="hidden-sm-and-down d-lg-block d-none"
          aria-label="Megamenu"
          color="secondary"
          rounded="sm"
          variant="text"
          v-bind="props"
        >
          <SvgSprite name="custom-window" />
        </v-btn>
      </template>
      <v-sheet width="1024" height="325" rounded="md" class="d-lg-block d-none">
        <MegaMenuDD />
      </v-sheet>
    </v-menu>
    <!-- ---------------------------------------------- -->
    <!-- translate -->
    <!-- ---------------------------------------------- -->
    <v-menu :close-on-content-click="false" location="bottom" offset="6, 80">
      <template v-slot:activator="{ props }">
        <v-btn icon class="ml-sm-2 ml-1" color="secondary" aria-label="language button" rounded="sm" v-bind="props">
          <SvgSprite name="custom-translation" />
        </v-btn>
      </template>
      <v-sheet rounded="md" width="200">
        <LanguageDD />
      </v-sheet>
    </v-menu>

    <!-- ---------------------------------------------- -->
    <!-- Notification -->
    <!-- ---------------------------------------------- -->
    <NotificationDD />

    <!-- ---------------------------------------------- -->
    <!-- Message -->
    <!-- ---------------------------------------------- -->
    <v-btn
      icon
      class="ml-sm-2 ml-1"
      aria-label="message button"
      color="secondary"
      rounded="sm"
      @click.stop="messagedrawer = !messagedrawer"
    >
      <SvgSprite name="custom-message-note" />
    </v-btn>

    <!-- ---------------------------------------------- -->
    <!-- User Profile -->
    <!-- ---------------------------------------------- -->
    <v-menu :close-on-content-click="false" offset="8, 0">
      <template v-slot:activator="{ props }">
        <v-btn class="profileBtn mr-0" aria-label="profile" variant="text" rounded="circle" icon v-bind="props">
          <v-avatar class="py-2" size="40" rounded="circle">
            <img src="@/assets/images/users/avatar-6.png" class="rounded-circle" alt="profile" />
          </v-avatar>
        </v-btn>
      </template>
      <v-sheet rounded="md" width="290">
        <ProfileDD />
      </v-sheet>
    </v-menu>
  </v-app-bar>
</template>

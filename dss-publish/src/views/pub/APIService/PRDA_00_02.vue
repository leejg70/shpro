<script setup>
import { ref } from 'vue';
import Tab01 from './PRDA_00_02_tab01.vue';
import Tab02 from './PRDA_00_02_tab02.vue';

const tabs = ref('');
</script>

<template>
    <div class="sub-group">
        <div class="sub-title-area">
            <div class="sub-title">API상품</div>
        </div>

        <!--  -->
        <div class="static-content">
            <v-sheet>
                <v-slide-group v-model="tabs" show-arrows mandatory class="line-tabs">
                    <v-slide-group-item
                        v-for="item in [ 'API 공통 가이드', 'API 명세서(예시)' ]"
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
                </v-window>
            </v-sheet>
            <div class="btn-list">
                <v-btn variant="flat" rounded="lg" size="x-large" color="primary">목록</v-btn>
            </div>
        </div>
        <!--//  -->
    </div>
</template>
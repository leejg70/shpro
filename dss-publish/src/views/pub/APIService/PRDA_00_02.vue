<script setup>
import { ref } from 'vue';
import Tab01 from './PRDA_00_02_tab01.vue';
import Tab02 from './PRDA_00_02_tab02.vue';

const tabs = ref('');
</script>

<template>
    <div class="sub-group">
        <div class="sub-title-area">
            <h4 class="sub-title">API상품</h4>
        </div>

        <!--  -->
        <div class="static-content">
            <v-card flat rounded="0">
                <v-tabs v-model="tabs" class="line-tabs">
                    <v-tab value="1">API 공통 가이드</v-tab>
                    <v-tab value="2">API 명세서</v-tab>
                </v-tabs>

                <v-window v-model="tabs">
                    <v-window-item value="1">
                        <Tab01 />
                    </v-window-item>
                    <v-window-item value="2">
                        <Tab02 />
                    </v-window-item>
                </v-window>
            </v-card>
            <div class="btn-list">
                <v-btn variant="flat" rounded="lg" size="x-large" color="primary">목록</v-btn>
            </div>
        </div>
        <!--//  -->
    </div>
</template>
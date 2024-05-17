<script setup>
import { ref } from 'vue';

const active = ref(false);
</script>

<template>
    <v-card role="button" to="/PRDD_00_01" variant="outlined" class="service-list">
        <div class="top-area">
            <div class="category-title text-16">Data/API서비스</div>
            <div class="icon-area">
                <div class="badge">
                    <v-badge color="#FFF5E7" text-color="#FF9C00" content="NEW" class="badge-txt" />
                    <v-badge color="#FFF5F5" text-color="#FF6666" content="HOT" class="badge-txt" />
                </div>
                <div class="favorites">
                    <v-btn @click.prevent="active = !active" variant="flat" min-width="auto" height="auto" class="pa-0">
                        <v-icon :icon="active ? 'icon-pick-on' : 'icon-pick-off'" />
                    </v-btn>
                </div>
            </div>
        </div>
        <div class="middle-area">
            <div class="prod-flag-wrap">
                <span class="flag blue">시장분석</span>
                <span class="flag violet">지역경제</span> 
                <span class="flag green">대안신용</span>
                <span class="flag yellow">마이데이터</span>
                <span class="flag pink">카드데이터</span>
            </div>
            <div class="subtitle-22 text-truncate" title="상품명은 한줄로 제한 한줄 초과 시 말줄임처리~~~">
                상품명은 한줄로 제한 한줄 초과 시 말줄임처리 말줄임처리 말줄임처리 말줄임처리
            </div>
            <div class="text-area">
                <div class="text text-twolines" title="2024 전국 ~~">2024 전국 스타벅스 매장 연령별 결제 데이터 두줄일 경우 2024 전국 스타벅스 매장 연령별 결제 데이터 두줄일 2024 전국 스타벅스 매장 연령별 결제 데이터 두줄일 경우</div>
                <div class="img-thumbnail">
                    <img src="@/assets/images/img_thumbnail.png" alt="썸네일이미지" />
                </div>
            </div>
        </div>
        <div class="bottom-area text-truncate">
            <span v-for="n in ['스타벅스', '전국', '시간대별결제데이터', '해시태그 한줄까지']" class="hashtag text-16">#{{  n  }}</span>
        </div>
    </v-card>
</template>
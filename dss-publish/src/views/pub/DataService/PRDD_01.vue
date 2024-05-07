<script setup>
import { ref } from 'vue';

const active1 = ref('');
const active2 = ref('');
const active3 = ref('');
const items1 = ['전체', '시장분석', '상권분석', '고객분석', '관광분석', '지역경제', '대안신용', '심사전략', '신용모형', '마케팅','전체', '시장분석', '상권분석', '고객분석', '관광분석', '지역경제', '대안신용', '심사전략', '신용모형', '마케팅'];
const items2 = ['전체', '개인사업자', '카드데이터', '마이데이터', '가맹결합'];
const items3 = ['전체', '공공기관', '민간기관', '금융기관', '마케팅대행사'];
const active = ref(true);
</script>

<template>
    <div class="data-service">
        <div class="sub-header-area">
            <h4 class="sub-header">Data 상품</h4>
        </div>

        <!-- search -->
        <div class="service-search-area">
            <div class="search-row">
                <div class="search-title">분석 목적</div>
                <div class="search-form">
                    <v-btn-toggle v-model="active1" multiple class="btn-group">
                        <v-btn
                            v-for="item in items1"
                            rounded="xl"
                            min-width="auto"
                        >
                            {{  item }}
                        </v-btn>
                    </v-btn-toggle>
                </div>
            </div>
            <div class="search-row">
                <div class="search-title">데이터 기준</div>
                <div class="search-form">
                    <v-btn-toggle v-model="active2" multiple class="btn-group">
                        <v-btn
                            v-for="item in items2"
                            min-width="auto"
                            rounded="xl"
                        >
                            {{  item }}
                        </v-btn>
                    </v-btn-toggle>
                </div>
            </div>
            <div class="search-row">
                <div class="search-title">고객사 기준</div>
                <div class="search-form">
                    <v-btn-toggle v-model="active3" multiple class="btn-group">
                        <v-btn
                            v-for="item in items3"
                            min-width="auto"
                            rounded="xl"
                        >
                            {{  item }}
                        </v-btn>
                    </v-btn-toggle>
                </div>
            </div>
            <div class="search-row">
                <div class="search-title">검색어</div>
                <div class="search-form">
                    <v-text-field
                        hide-details clearable
                        variant="outlined"
                        color="primary"
                        placeholder="검색어 입력"
                    />
                </div>
            </div>
            <div class="btn-area">
                <v-btn variant="flat" min-width="12.8rem" rounded="md" size="large" color="secondary">초기화</v-btn>
                <v-btn variant="flat" min-width="22.4rem" rounded="md" size="large" color="primary">검색</v-btn>
            </div>
        </div>
        <!--// search -->

        <!-- 상품리스트 -->
        <div class="service-list-area">
            <v-row>
                <v-col cols="12" md="6" v-for="item in 6">
                    <v-card role="button" variant="outlined" class="service-list">
                        <div class="top-area">
                            <div class="category-title">Data/API서비스</div>
                            <div class="icon-area">
                                <div class="badge">
                                    <v-icon class="icon-new" />
                                    <v-icon class="icon-hot" />
                                </div>
                                <div class="favorites">
                                    <v-btn @click.stop="active = !active" variant="flat" min-width="auto" height="auto" class="pa-0">
                                        <v-icon :icon="active ? 'icon-wishlist' : 'icon-wishlist-off'" />
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
                            <div class="title text-truncate" title="상품명은 한줄로 제한 한줄 초과 시 말줄임처리 말줄임처리 말줄임처리 말줄임처리">상품명은 한줄로 제한 한줄 초과 시 말줄임처리 말줄임처리 말줄임처리 말줄임처리</div>
                            <div class="text-area">
                                <div class="text text-twolines" title="2024 전국 ~~">2024 전국 스타벅스 매장 연령별 결제 데이터 두줄일 경우 2024 전국 스타벅스 매장 연령별 결제 데이터 두줄일 2024 전국 스타벅스 매장 연령별 결제 데이터 두줄일 경우</div>
                                <div class="flex-shrink-0 ml-auto">
                                    <div class="d-flex align-center justify-center" style="width:6.4rem; height:6.4rem; background:#eee;">썸네일이미지</div>
                                </div>
                            </div>
                        </div>
                        <div class="bottom-area text-truncate">
                            <span v-for="n in ['스타벅스', '전국', '시간대별결제데이터', '해시태그 한줄까지']" class="hashtag">#{{  n  }}</span>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            <div class="services-more-area">
                <v-btn variant="outlined" rounded="xl" class="btn-more">더보기<v-icon class="icon-arrow" /></v-btn>
            </div>
        </div>
        <!--// 상품리스트 -->
    </div>
</template>
<script setup>
import { ref } from 'vue';

const slide = ref([
    { name: '전체', num: 111, },
    { name: 'Data 상품', num: 0 },
    { name: '솔루션서비스', num: 5 },
    { name: 'API서비스', num: 4 },
    { name: '솔루션서비스', num: 5 },
    { name: 'API서비스', num: 4 },
    { name: '솔루션서비스', num: 5 },
    { name: 'API서비스', num: 4 },
    { name: '솔루션서비스', num: 5 },
    { name: 'API서비스', num: 4 },
    { name: '솔루션서비스', num: 5 },
    { name: 'API서비스', num: 4 },
    { name: '솔루션서비스', num: 5 },
    { name: 'API서비스', num: 4 },
]);
const active = ref(true);
function onClick() {
};

</script>

<template>
    <div class="inner-wrapper">
        <div class="sub-group">
            <div class="sub-title-area">
                <h4 class="sub-title">검색결과</h4>
            </div>
    
            <!-- search -->
            <div class="search-wrap">
                <div class="search-box">
                    <div class="inp">
                        <v-text-field
                            hide-details clearable
                            variant="outlined"
                            color="primary"
                            append-inner-icon="btn-search-blue"
                            placeholder="검색어 입력"
                            value="스타벅스"
                            @click:append-inner="onClick"
                        />
                    </div>
                </div>
                <!-- <div class="hashtag-area">
                    <span v-for="n in ['스타벅스', '전국', '시간대별결제데이터', '해시태그 한줄까지']" class="hashtag">#{{  n  }}</span>
                </div> -->
            </div>
            <!--// search -->

            <div class="slide-btn">
                <v-slide-group show-arrows mandatory>
                    <v-slide-group-item
                        v-for="n in slide"
                        :key="n"
                        v-slot="{ isSelected, toggle }"
                    >
                        <v-btn
                            min-width="auto"
                            rounded="xl"
                            variant="outlined"
                            size="large"
                            :class="isSelected ? 'bg-primary-darkblue': ''"
                            @click="toggle"
                        >
                            {{ n.name }} ({{ n.num }})
                        </v-btn>
                    </v-slide-group-item>
                </v-slide-group>
            </div>

            <v-divider class="svc-divide" />

            <!-- 검색결과 - 있음 -->
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
                                        <v-btn @click.prevent="active = !active" variant="flat" min-width="auto" height="auto" class="pa-0">
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
                                    <div class="img-biz flex-shrink-0 ml-auto">
                                        <img src="@/assets/images/icon/icon-biz.png" alt="샘플이미지" />
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
            <!--// 검색결과 - 있음 -->

            <!-- 검색결과  - 없음 -->
            <div class="search-result">
                <div class="text">검색 결과</div>
                <div class="desc">검색된 결과가 없습니다.</div>
            </div>
            <div class="btn-list">
                <v-btn variant="flat" rounded="lg" size="x-large" color="primary">메인으로</v-btn>
            </div>
            <!--// 검색결과  - 없음 -->

            <div class="inquiry-area">
                <div class="title">원하시는 데이터 상품이 없으신가요?</div>
                <div class="inquiry-box">
                    <div class="text">
                        Datablue의 데이터 전문가가 해결해 드립니다.<br />
                        궁금하신점은 데이터 전문가에게 문의해주세요.
                    </div>
                    <div class="ml-auto">
                        <v-btn variant="flat" rounded="md" size="large" color="Tertiary">맞춤Data 서비스란?</v-btn>
                        <v-btn variant="flat" rounded="md" size="large" color="Tertiary">문의하기</v-btn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
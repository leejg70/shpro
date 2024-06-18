<script setup>
import { ref } from 'vue';
import ProductList from '../Components/ProductList.vue';

const selected = ref(0);
const search = ref('');
const onClear = () => {
    search.value = ''
};
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
                            v-model="search"
                            hide-details clearable
                            variant="outlined"
                            color="primary"
                            append-inner-icon="btn-search-blue"
                            placeholder="제목 검색"
                            @click:append-inner="onClick"
                            @click:clear="onClear()"
                        />
                    </div>
                    <div class="hashtag-area">
                        <div role="button" v-for="n in ['스타벅스', '전국', '시간대별결제데이터', '해시태그 한줄까지']" class="hashtag">#{{  n  }}</div>
                    </div>
                </div>
            </div>
            <!--// search -->

            <div class="slide-btn">
                <v-slide-group v-model="selected" show-arrows mandatory>
                    <v-slide-group-item
                        v-for="item in [ '전체', 'Data 상품', '솔루션서비스', 'API서비스' ]"
                        :key="item"
                        v-slot="{ isSelected, toggle }"
                    >
                        <v-btn
                            min-width="8rem"
                            rounded="xl"
                            variant="outlined"
                            size="large"
                            :class="isSelected ? 'bg-primary-darkblue': ''"
                            @click="toggle"
                        >
                            {{ item }}
                        </v-btn>
                    </v-slide-group-item>
                </v-slide-group>
            </div>

            <v-divider class="svc-divide" />

            <!-- 검색결과 - 있음 -->
            <div class="service-list-area">
                <v-row>
                    <v-col cols="12" md="6" v-for="item in 6">
                        <ProductList />
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
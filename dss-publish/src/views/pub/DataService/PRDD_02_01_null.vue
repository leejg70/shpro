<script setup>
import { ref } from 'vue';

const active1 = ref('');
const active2 = ref('');
const active3 = ref('');
const items1 = ['전체', '시장분석', '상권분석', '고객분석', '관광분석', '지역경제', '대안신용', '심사전략', '신용모형', '마케팅','전체', '시장분석', '상권분석', '고객분석', '관광분석', '지역경제', '대안신용', '심사전략', '신용모형', '마케팅'];
const items2 = ['전체', '개인사업자', '카드데이터', '마이데이터', '가맹결합'];
const items3 = ['전체', '공공기관', '민간기관', '금융기관', '마케팅대행사'];

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
                        value="이마트"
                    />
                </div>
            </div>
            <div class="btn-area">
                <v-btn variant="flat" min-width="12.8rem" rounded="md" size="large" color="secondary">초기화</v-btn>
                <v-btn variant="flat" min-width="22.4rem" rounded="md" size="large" color="primary">검색</v-btn>
            </div>
        </div>
        <!--// search -->

        <!-- 검색결과 -->
        <div class="search-result">
            <div class="text">검색 결과</div>
            <div class="desc">검색된 결과가 없습니다.</div>
        </div>
        <div class="btn-list">
            <v-btn variant="flat" rounded="lg" size="x-large" color="primary">목록보기</v-btn>
        </div>
        <!--// 검색결과 -->

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
</template>
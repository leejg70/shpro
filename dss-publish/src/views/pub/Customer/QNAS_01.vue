<script setup>
import { ref } from 'vue';

const slide = ref([
    { name: '전체', num: 111, },
    { name: '이용문의', num: 0 },
    { name: '제휴문의', num: 5 },
    { name: '기술문의', num: 4 },
    { name: 'Data상품', num: 5 },
    { name: '솔루션서비스', num: 4 },
    { name: 'API서비스', num: 5 },
    { name: '광고서비스', num: 4 }
]);
const selected = ref(0);
function onClick() {};
</script>

<template>
    <div class="sub-group">
        <div class="sub-title-area">
            <div class="sub-title">고객문의</div>
        </div>

        <div class="contents-qna">
            <!-- search -->
            <div class="search-wrap">
                <div class="search-box">
                    <div class="inp">
                        <v-text-field
                            hide-details clearable
                            variant="outlined"
                            color="primary"
                            append-inner-icon="btn-search-blue"
                            placeholder="제목 검색"
                            @click:append-inner="onClick"
                        />
                    </div>
                </div>
            </div>
            <!--// search -->

            <div class="slide-btn">
                <v-slide-group v-model="selected" show-arrows mandatory>
                    <v-slide-group-item
                        v-for="n in slide"
                        :key="n"
                        v-slot="{ isSelected, toggle }"
                    >
                        <v-btn
                            min-width="8rem"
                            rounded="xl"
                            variant="outlined"
                            size="large"
                            :class="isSelected ? 'bg-primary-darkblue': ''"
                            :disabled="n.num === 0"
                            @click="toggle"
                        >
                            {{ n.name }} ({{ n.num }})
                        </v-btn>
                    </v-slide-group-item>
                </v-slide-group>
            </div>

            <!-- <v-divider class="svc-divide" /> -->

            <div class="text-right mb-2">
                <v-btn to="/QNAS_01_01_c" variant="flat" rounded="md" size="large" min-width="22.4rem" color="primary">문의하기</v-btn>
            </div>
            <!-- list -->
            <div class="customer-list">
                <v-list>
                    <v-list-item
                        v-for="item in 10" :value="item"
                        link
                        to="/QNAS_00_01_r"
                    >
                        <div class="item-content">
                            <div class="category text-16">솔루션서비스</div>
                            <div class="title text-16">
                                <div class="text-truncate">이메일 인증 지연 관련 안내 메일이 발송되었습니다. 제목이 길어질 경우 한줄 말줄임</div>
                                <v-icon class="icon-lock" />
                            </div>
                            <div class="text-row text-14">
                                <div class="date">2024.05.05</div>
                                <v-divider vertical />
                                <div class="id">shinhan****card</div>
                            </div>
                        </div>
                        <template v-slot:append>
                            <div class="status txt-waiting text-14">답변대기</div>
                            <div class="status txt-complete text-14">답변완료</div>
                        </template>
                    </v-list-item>
                </v-list>
            </div>
            <div class="services-more-area">
                <v-btn variant="outlined" rounded="xl" class="btn-more">더보기<v-icon class="icon-arrow" /></v-btn>
            </div>
            <!--// list -->

            <!-- list - 검색결과없음 -->
            <div>
                <v-divider class="svc-divide" />
                <div class="search-result">
                    <div class="text">검색 결과</div>
                    <div class="desc">검색된 결과가 없습니다.</div>
                </div>
                <div class="btn-list">
                    <v-btn variant="flat" rounded="lg" size="x-large" color="primary">목록보기</v-btn>
                </div>
            </div>
            <!--// list - 검색결과없음 -->
        </div>
    </div>
</template>
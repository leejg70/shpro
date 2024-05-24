<script setup>
import { ref } from 'vue';

const search = ref('');
const onClear = () => {
    search.value = ''
};
function onClick() {};
</script>

<template>
    <div class="sub-group">
        <div class="sub-title-area">
            <div class="sub-title">토론장</div>
        </div>

        <div class="contents-discussion">
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
                </div>
            </div>
            <!--// search -->

            <div class="text-right mb-2">
                <v-btn to="/COMU_02_02_c" variant="flat" rounded="md" size="large" min-width="22.4rem" color="primary">작성하기</v-btn>
            </div>

            <!-- list -->
            <div class="customer-list">
                <v-list>
                    <v-list-item
                        v-for="item in 10"
                        :key="item"
                        link
                        to="/COMU_02_02_r"
                    >
                        <div class="item-content">
                            <div class="text-16 text-truncate mb-2">
                                우측 댓글 등록 최대 3자릿수까지인지 확인 요망. 3자릿수 width값 32px로 맞추면 4자릿수일때 숫자 개행됩니다.
                            </div>
                            <div class="text-row text-14">
                                <div class="date">2024.05.05</div>
                                <v-divider vertical />
                                <div class="id">shinhan****card</div>
                            </div>
                        </div>
                        <template v-slot:append>
                            <v-spacer />
                            <div class="text-row text-16">
                                <div class="re-title">댓글</div>
                                <v-divider vertical />
                                <div class="re-num">999</div>
                            </div>
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
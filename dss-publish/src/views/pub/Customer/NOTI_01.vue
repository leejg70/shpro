<script setup>
import { ref } from 'vue';

const search = ref('');
const onClear = () => {
    search.value = ''
};
function onClick() {
};
</script>

<template>
    <div class="sub-group">
        <div class="sub-title-area">
            <h4 class="sub-title">공지사항</h4>
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
            </div>
        </div>
        <!--// search -->

        <!-- list -->
        <div class="customer-list">
            <v-list>
                <v-list-item
                    v-for="(item, i) in 10" :value="i"
                    link
                    to="/NOTI_00_01"
                    class="text-16"
                >
                    <template v-slot:prepend>
                        <div class="num">{{ i + 1 }}</div>
                    </template>
                    <div class="title">
                        <div class="text-16 text-truncate">우리은행, 광주은행 시스템 점검으로 인한 서비스 일시 중단 안내</div>
                        <v-icon class="icon-clip" />
                    </div>
                    <template v-slot:append>
                        <div class="date">2024.05.05</div>
                    </template>
                </v-list-item>
            </v-list>
            <div class="services-more-area">
                <v-btn variant="outlined" rounded="xl" class="btn-more">더보기<v-icon class="icon-arrow" /></v-btn>
            </div>
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
</template>
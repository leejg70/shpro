<template>
    <div class="sub-group">
        <div class="sub-title-area">
            <h4 class="sub-title">활용장</h4>
        </div>

        <!-- 활용장 상세  -->
        <div class="contents-detail">
            <div class="article summary-info">
                <div class="text subtitle-24">신한카드가 선정한 2023년 트랜드 키워드 SPARK</div>
                <div class="text-row text-16">
                    <div class="category">DataNews</div>
                    <v-divider vertical />
                    <div class="date">2024.02.05</div>
                </div>
            </div>
            <div class="article">
                <ul class="download-list">
                    <li v-for="x in 4">
                        <router-link to="" class="d-flex text-16">
                            <v-icon class="icon-download" />[신한카드데이터데이터전문기관] 비밀유지서약서(230101).pdf
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="article">
                <div class="detail-info">
                    <div class="text-16">
                        해당 데이터는 23년 9월 기준 전국 행정동 단위 신한카드 배달 산업 가맹점 결제 트랜드 데이터를 제공합니다.<br />
                        데이터를 통해 상세한 배달 산업 결제 트랜드를 확인 할 수 있습니다.<br />
                        또한 해당 데이터는 k-익명성에 따라 3건 이상 결제 데이터만 제공하고 있습니다.
                    </div>
                    <div class="img">
                        <div class="d-flex align-center justify-center" style="max-width: 120rem; min-height: 30rem; background: #eee;">이미지영역</div>
                    </div>
                </div>
            </div>
        </div>
        <!--// 활용장 상세  -->

        <div class="btn-list">
            <v-btn variant="flat" rounded="lg" size="x-large" color="primary">목록으로</v-btn>
        </div>
    </div>
</template>
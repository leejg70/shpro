<template>
    <div class="sub-group">
        <div class="sub-title-area">
            <h4 class="sub-title">활용장</h4>
        </div>

        <div class="inp-checkbox justify-end">
            <v-checkbox
                hide-details
                density="comfortable"
                label="Trendreport만 모아보기"
            />
        </div>

        <!-- 컨텐츠 리스트 -->
        <div class="contents-list-area">
            <v-row>
                <v-col cols="6" md="4" v-for="item in 9">
                    <v-card role="button" to="/COMU_01_01_r" variant="outlined" class="item">
                        <div class="cell">
                            <div class="thumbnail">
                                <img src="@/assets/images/img_dummy.png" alt="샘플이미지" />
                            </div>
                            <div class="text">
                                <div class="category text-16">DataNews</div>
                                <div class="text-18 text-twolines">신한카드가 선정한 2023년 트랜드 키워드 SPARK 두줄 초과 시 말줄임처리 두줄 초과 시 말줄임처리 두줄 초과 시 말줄임처리</div>
                                <div class="date text-14">2024.02.05</div>
                            </div> 
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            <div class="services-more-area">
                <v-btn variant="outlined" rounded="xl" class="btn-more">더보기<v-icon class="icon-arrow" /></v-btn>
            </div>
        </div>
        <!--// 컨텐츠 리스트 -->
    </div>
</template> 
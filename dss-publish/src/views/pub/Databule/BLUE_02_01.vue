<script setup>
import { ref } from 'vue';
import Tab02 from './BLUE_02_02.vue';   //MyData
import Tab03 from './BLUE_02_03.vue';   //MyCredit
import Tab04 from './BLUE_02_04.vue';   //데이터전문기관

const tabs = ref('');
</script>

<template>
    <div class="sub-group">
        <div class="sub-title-area">
            <div class="sub-title">신한 Data Universe</div>
        </div>

        <!--  -->
        <div class="static-content">
            <v-sheet>
                <v-slide-group v-model="tabs" show-arrows mandatory class="line-tabs">
                    <v-slide-group-item
                        v-for="item in [ 'GranData', 'MyData', 'MyCredit', '데이터전문기관' ]"
                        :key="item"
                        v-slot="{ isSelected, toggle }"
                    >
                        <v-btn
                            variant="text"
                            size="large"
                            :class="isSelected ? 'active': ''"
                            @click="toggle"
                        >
                            {{ item }}
                        </v-btn>
                    </v-slide-group-item>
                </v-slide-group>

                <v-window v-model="tabs">
                    <v-window-item value="0">
                        <!-- tab1 - GranData -->
                        <div class="gran-data">
                            <!-- 01 -->
                            <div class="cnt-group">
                                <div class="cnt-title subtitle-24">
                                    <div class="num">01</div>
                                    <v-divider vertical />
                                    <div class="title">About GranData</div>
                                </div>
                                <div class="cnt-text">
                                    <div class="text-16">
                                        데이터 수요가 가장 높은 카드/통신/신용 각 업권별 1위 사업자가 2021년 출범한 데이터 사업 Alliance로, 현재 금융결제원 및 제조업·유통업도 참여하고 있습니다.
                                    </div>
                                    <div class="img">
                                        <img src="@/assets/images/content/img_grandata_01_01.png" alt="" />
                                    </div>
                                    <div class="subtitle-22 mt-16">GranData사업 Alliance 체계</div>
                                    <div class="img mt-4">
                                        <img src="@/assets/images/content/img_grandata_01_02.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <!-- 02 -->
                            <div class="cnt-group">
                                <div class="cnt-title subtitle-24">
                                    <div class="num">02</div>
                                    <v-divider vertical />
                                    <div class="title">데이터 상품</div>
                                </div>
                                <div class="cnt-text">
                                    <div class="text-16">카드/통신/신용 데이터를 중심으로 고객의 분석 목적에 맞는 다양한 가명결합 및 통계결합 방식의 데이터 상품을 보유하고 있습니다.</div>
                                    <div class="card-list-area">
                                        <v-row>
                                            <v-col cols="12" md="6">
                                                <v-sheet rounded="lg" class="flat">
                                                    <div class="title subtitle-18" style="">가명 결합 상품</div>
                                                    <div class="img mt-6">
                                                        <img src="@/assets/images/content/img_grandata_02_01.png" alt="img" />
                                                    </div>
                                                    <div class="img mt-6">
                                                        <img src="@/assets/images/content/img_grandata_02_02.png" alt="img" />
                                                    </div>
                                                    <div class="img mt-6">
                                                        <img src="@/assets/images/content/img_grandata_02_03.png" alt="img" />
                                                    </div>
                                                </v-sheet>
                                            </v-col>
                                            <v-col cols="12" md="6">
                                                <v-sheet rounded="lg" class="flat">
                                                    <div class="title subtitle-18" style="">통계 결합 상품</div>
                                                    <div class="img mt-6">
                                                        <img src="@/assets/images/content/img_grandata_02_04.png" alt="img" />
                                                    </div>
                                                    <div class="img mt-6">
                                                        <img src="@/assets/images/content/img_grandata_02_05.png" alt="img" />
                                                    </div>
                                                </v-sheet>
                                            </v-col>
                                        </v-row>
                                    </div>
                                </div>
                            </div>
                            <!-- 03 -->
                            <div class="cnt-group">
                                <div class="cnt-title subtitle-24">
                                    <div class="num">03</div>
                                    <v-divider vertical />
                                    <div class="title">기업 비즈니스 가치 제고</div>
                                </div>
                                <div class="cnt-text">
                                    <div class="text-16">
                                        GranData는 기업의 비즈니스 성공을 목표로 데이터 분석 기반 다양한 서비스를 제공하고 있습니다.<br />
                                        차별화된 데이터 서비스를 통한 비지니스 Value-up의 기회를 확인해보세요.
                                    </div>
                                    <div class="img">
                                        <img src="@/assets/images/content/img_grandata_03.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <!-- 다운로드 -->
                            <div role="button" class="text-download text-16 mt-16">
                                <v-icon class="icon-pdf" /><span class="txt">GranData 브로슈어.pdf</span>
                            </div>
                        </div>
                        <!--// tab1 - GranData -->
                    </v-window-item>
                    <v-window-item value="1">
                        <Tab02 />
                    </v-window-item>
                    <v-window-item value="2">
                        <Tab03 />
                    </v-window-item>
                    <v-window-item value="3">
                        <Tab04 />
                    </v-window-item>
                </v-window>
            </v-sheet>
        </div>
        <!--//  -->
    </div>
</template>
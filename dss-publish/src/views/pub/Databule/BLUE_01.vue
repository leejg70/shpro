<script setup>
import { VCarousel } from 'vuetify/components';

</script>

<template>
    <div class="sub-group">
        <div class="sub-title-area">
            <div class="sub-title">DataBada 안내</div>
        </div>

        <!--  -->
        <div class="static-content">
            <div class="data-bada">
                <!-- 01 -->
                <div class="cnt-group">
                    <div class="cnt-title subtitle-24">
                        <div class="num">01</div>
                        <v-divider vertical />
                        <div class="title">About DataBada</div>
                    </div>
                    <div class="cnt-text">
                        <div class="custom-carousel">
                            <div class="group">
                                <div class="text-area">
                                    <div class="title">
                                        <div class="txt-one"><strong class="primary--text">Data</strong>를 통해</div>
                                        <v-carousel
                                            direction="vertical"
                                            height="77"
                                            :show-arrows="false"
                                            hide-delimiters
                                            cycle
                                            interval="3000"
                                        >
                                            <v-carousel-item
                                                v-for="slide in ['시장트랜드', '고객페르소나', '주요 상권 변화', '마케팅 전략']"
                                                :key="slide"
                                            >
                                                <div class="keyword">{{ slide }}</div>
                                            </v-carousel-item>
                                        </v-carousel>
                                        <div class="txt-two"><strong class="primary--text">바</strong>라보<strong class="primary--text">다</strong></div>
                                    </div>
                                    <div class="text subtitle-18">
                                        <div>DataBada는 대한민국 최대/최고 품질의 빅데이터를 통해,<br />
                                            놀라운 가치와 혁신, 무한한 가능성을 경험할 수 있는 Data Business Platform입니다.</div>
                                        <div>넓고 다양한 데이터와 깊은 분석 경험으로 고객사의 의사결정을 지원하고 <br />
                                            차별화된 가치 제공을 최우선으로 합니다.</div>
                                    </div>
                                </div>
                                <div class="img-area">
                                    <img src="@/assets/images/content/img_databada_01_02.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 02 -->
                <div class="cnt-group">
                    <div class="cnt-title subtitle-24">
                        <div class="num">02</div>
                        <v-divider vertical />
                        <div class="title">데이터 구성</div>
                    </div>
                    <div class="cnt-text">
                        <div class="text-16">
                            카드 본업 기반의 고객/가맹점/카드승인 정보와 MyData, MyCredit 사업을 통한 다양하고 심도있는 Big Data를 구성하고 있습니다.<br />
                            Data 기반 정량적 분석과 최적화된 타켓팅을 기반한 마케팅/서베이를 활용한 정성적 분석을 결합하여 종합적인 인사이트를 제공합니다.
                        </div>
                        <div class="img">
                            <img src="@/assets/images/content/img_databada_02.png" alt="" />
                        </div>
                    </div>
                </div>
                <!-- 03 -->
                <div class="cnt-group">
                    <div class="cnt-title subtitle-24">
                        <div class="num">03</div>
                        <v-divider vertical />
                        <div class="title">주요 서비스</div>
                    </div>
                    <div class="cnt-text">
                        <div class="text-16">
                            빅데이터 기반의 정교화 된 타겟 분석, 소비 효과 및 경제동향 분석 등을 통해 전략적 의사 결정을 지원합니다. 
                            데이터 외에 효율적 마케팅을 지원하는 타겟마케팅과 모바일 서베이 서비스가 있습니다.
                        </div>
                        <div class="img">
                            <img src="@/assets/images/content/img_databada_03.png" alt="" />
                        </div>
                    </div>
                </div>
                <!-- 다운로드 -->
                <div role="button" class="text-download text-16 mt-16">
                    <v-icon class="icon-pdf" /><span class="txt">Data Biz팀 브로슈어_2312_출력용.pdf</span>
                </div>
            </div>
        </div>
        <!--//  -->
    </div>
</template>
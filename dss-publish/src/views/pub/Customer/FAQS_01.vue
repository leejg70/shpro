<template>
    <div class="sub-group">
        <div class="sub-title-area">
            <div class="sub-title">FAQ</div>
        </div>

        <div class="contents-faq">
            <v-expansion-panels flat class="faq-list">
                <v-expansion-panel
                    v-for="item in 10"
                    :key="item"
                    rounded="lg"
                >
                    <v-expansion-panel-title>
                        <div class="d-flex">
                            <v-icon class="icon-q" />
                            <div class="text-16">AI분석을 통해 실시간 인사이트를 확인해 보세요.</div>
                        </div>
                        <template v-slot:actions="{ expanded }">
                            <v-icon :class="expanded ? 'icon-minus' : 'icon-plus'" />
                        </template>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <div class="d-flex">
                            <v-icon class="icon-a" />
                            <div class="text-16">
                                해당 데이터는 23년 9월 기준 전국 행정동 단위 신한카드 배달산업 가맹점 결제 트랜드 데이터를 제공합니다.
                                데이터를 통해 상세한 배달 산업 결제 트랜드를 확인 할 수 있습니다. 
                                또한 해당 데이터는 k-익명성에 따라 3건 이상 결제 데이터만 제공하고 있습니다.
                            </div>

                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
            <div class="services-more-area">
                <v-btn variant="outlined" rounded="xl" class="btn-more">더보기<v-icon class="icon-arrow" /></v-btn>
            </div>
        </div>
    </div>
</template>
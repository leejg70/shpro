<script setup>
import { ref } from 'vue';
import ProductList from '../Components/ProductList.vue';

const active = ref(true);
const expandRow = ref(false);
</script>

<template>
    <div class="sub-group data-service">
        <div class="sub-title-area">
            <div class="sub-title">Data 상품</div>
        </div>

        <!-- 상품 카드 영역 -->
        <div class="product-area">
            <div class="top-info">
                <div class="prod-flag-wrap">
                    <span class="flag blue">시장분석</span>
                    <span class="flag violet">지역경제</span>
                    <span class="flag green">대안신용</span>
                    <span class="flag yellow">마이데이터</span>
                    <span class="flag pink">카드데이터</span>
                </div>
                <div class="favorites">
                    <v-btn @click="active = !active" variant="flat" min-width="auto" height="auto" class="pa-0">
                        <v-icon :icon="active ? 'icon-pick-on' : 'icon-pick-off'" />
                    </v-btn>
                </div>
            </div>
            <div class="middle-info">
                <div class="text">
                    <div class="subtitle-22">상품명 영역 전국 배달 업종 결제 데이터 상품명 글자수 모두 노출</div>
                    <div class="text-18">상품 요약 내용 관리자페이지에서 등록한 모든 글자수 노출 23년 9월 기준 전국 행정동 단위 배달 산업 결제 트랜드</div>
                </div>
                <div class="img">
                    <img src="@/assets/images/img_thumbnail.png" alt="썸네일이미지" />
                </div>
            </div>
            <div class="bottom-info">
                <span v-for="n in [ '스타벅스', '전국', '시간대별결제데이터', '해시태그 영역', '모든 글자 수 노출' ]" class="hashtag text-16">#{{  n  }}</span>
            </div>
            <div class="btn-area">
                <v-btn variant="flat" rounded="md" size="large" color="secondary">자세히보기</v-btn> 
                <v-btn variant="flat" rounded="md" size="large" color="primary">문의하기</v-btn>
            </div>
        </div>
        <!--// 상품 카드 영역 -->

        <!-- 상품 상세 -->
        <div class="product-detail">
            <!-- 상품정보 -->
            <div class="detail-info">
                <div class="title">
                    <v-icon size="md" class="icon-prod" />상품 정보
                </div>
                <div class="desc">
                    해당 데이터는 23년 9월 기준 전국 행정동 단위 신한카드 배달 산업 가맹점 결제 트랜드 데이터를 제공합니다.<br />
                    데이터를 통해 상세한 배달 산업 결제 트랜드를 확인 할 수 있습니다.<br />
                    또한 해당 데이터는 k-익명성에 따라 3건 이상 결제 데이터만 제공하고 있습니다.
                </div>
                <div class="img">
                    <img src="@/assets/images/img_dummy.png" alt="이미지샘플" />
                </div>
                <div class="group-download">
                    <div class="box-title">추가자료 다운로드</div>
                    <!-- 로그인 후 -->
                    <ul class="download-list">
                        <li>
                            <router-link to="">전국배달업종 결제 데이터.CSV</router-link>
                        </li>
                        <li>
                            <router-link to="">데이터 가이드.excel</router-link>
                        </li>
                        <li>
                            <router-link to="">다운로드 리스트 맥시멈 5개.excel</router-link>
                        </li>
                    </ul>
                    <!--// 로그인 후 -->
                    <!-- 로그인 전 -->
                    <div class="member-only">
                        <div class="title">회원 전용</div>
                        <div class="text">로그인 후 이용 가능한 서비스입니다.</div>
                    </div>
                    <!--// 로그인 전 -->
                </div>
                <div class="group-setting-info">
                    <div class="box-title">업데이트 정보</div>
                    <!-- 로그인 후 -->
                    <div class="info-list">
                        <div class="border-box">
                            <div class="txt-dt"><v-icon class="ic01" />업데이트 주기</div>
                            <div class="txt-dd">일별, 주별, 월별, 분기별</div>
                        </div>
                        <div class="border-box">
                            <div class="txt-dt"><v-icon class="ic02" />제공방식</div>
                            <div class="txt-dd">웹 메일 발송, 파일 다운로드</div>
                        </div>
                        <div class="border-box">
                            <div class="txt-dt"><v-icon class="ic03" />데이터 포맷</div>
                            <div class="txt-dd">CSV, EXEL, JSON, API</div>
                        </div>
                    </div>
                    <div class="text-desc">
                        <p>※ 반드시 확인해주세요.</p>
                        <p>해당 상품의 저작권은 신한카드에 있으며 재판매 및 제3자 공유, 배포 금지 상품입니다.</p>
                    </div>
                    <!--// 로그인 후 -->
                    <!-- 로그인 전 -->
                    <div class="member-only">
                        <div class="title">회원 전용</div>
                        <div class="text">로그인 후 이용 가능한 서비스입니다.</div>
                    </div>
                    <!--// 로그인 전 -->
                </div>
            </div>

            <v-divider class="divide" />

            <!-- 데이터정보 -->
            <div class="detail-info">
                <div class="title">
                    <v-icon size="md" class="icon-data" />데이터 정보
                </div>
                <div class="desc mb-2">23년 9월 기준 전국 행정동 단위 배달 산업 결제 트랜드</div>

                <div class="table-overflow-x">
                    <v-table>
                        <colgroup>
                            <col width="140px" />
                            <col width="140px" />
                            <col width="140px" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th v-for="title in ['데이터 컬럼', '데이터 컬럼 설명', '데이터 예시']">{{ title }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in 5">
                                <td>Crym</td>
                                <td>기준년월</td>
                                <td>부산광역시</td>
                            </tr>
                        </tbody>
                    </v-table>
                </div>
                <div class="table-btn-more">
                    <v-btn variant="text">
                        더보기<v-icon class="btn-arrow-down" />
                    </v-btn>
                </div>
            </div>

            <v-divider class="divide" />

            <!-- 신한GPT -->
            <div class="detail-info">
                <div class="title">
                    <v-icon size="md" class="icon-gpt" />신한 GPT
                </div>
                <div class="gpt-box">
                    <div class="btn-row" :class="expandRow ? '' : 'btn-up'">
                        <div class="text">AI분석을 통해 실시간 인사이트를 확인해 보세요.</div>
                        <v-btn @click="expandRow = !expandRow" variant="flat" rounded="md" min-width="10rem" color="Tertiary">분석하기</v-btn>
                    </div>
                    <div v-if="expandRow" class="expand">
                        해당 데이터는 23년 9월 기준 전국 행정동 단위 신한카드 배달산업 가맹점 결제 트랜드 데이터를 제공합니다.<br />
                        데이터를 통해 상세한 배달 산업 결제 트랜드를 확인 할 수 있습니다.<br />
                        또한 해당 데이터는 k-익명성에 따라 3건 이상 결제 데이터만 제공하고 있습니다.
                    </div>
                </div>
            </div>

            <v-divider class="divide" />

            <!-- 활용사례 -->
            <div class="detail-info">
                <div class="title">
                    <v-icon size="md" class="icon-example" />활용사례
                </div>
                <div class="desc">텍스트영역 텍스트영역 텍스트영역 텍스트영역 텍스트영역 텍스트영역 텍스트영역 텍스트영역 텍스트영역 텍스트영역 텍스트영역</div>
                <div class="img">
                    <img src="@/assets/images/img_dummy.png" alt="이미지샘플" />
                </div>
            </div>

            <v-divider class="divide" />

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

            <!-- 추천상품 -->
            <div class="detail-info prod-pick">
                <div class="title">
                    <v-icon size="md" class="icon-recommend" />추천상품
                </div>
                <div class="service-list-area">
                    <v-row>
                        <v-col cols="12" md="6" v-for="item in 2">
                            <ProductList />
                        </v-col>
                    </v-row>
                </div>
            </div>
        </div>
        <!--// 상품 상세 -->

        <div class="btn-list">
            <v-btn variant="flat" rounded="lg" size="x-large" color="primary">목록</v-btn>
        </div>
    </div>
</template>
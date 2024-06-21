<template>
    <!-- tab2 - MyData -->
    <div class="my-data">
        <!-- 01 -->
        <div class="cnt-group">
            <div class="cnt-title subtitle-24">
                <div class="num">01</div>
                <v-divider vertical />
                <div class="title">About MyData</div>
            </div>
            <div class="cnt-text">
                <div class="text-16">
                    신한카드 마이데이터 서비스는 여러 기관(은행, 카드, 보험, 증권, 통신 등)에 흩어져 있는 개인의 금융정보를 간편한 동의로 일괄 수집하여 통합하고 관리해주는 서비스입니다.
                </div>
                <div class="card-list-area">
                    <v-row>
                        <v-col cols="12" lg="4" md="6" sm="12">
                            <v-sheet rounded="lg" class="outlined d-flex flex-column">
                                <div class="title subtitle-18">은행</div>
                                <div class="item">
                                    <v-icon class="agency banking" /> 
                                    <ul class="list-dot text-16">
                                        <li
                                            v-for="item in ['수신계좌','펀드상품','대출상품','개인형 IRP']"
                                            >
                                            {{ item }}
                                        </li>
                                    </ul>
                                </div>
                            </v-sheet>
                        </v-col>
                        <v-col cols="12" lg="4" md="6" sm="12">
                            <v-sheet rounded="lg" class="outlined d-flex flex-column">
                                <div class="title subtitle-18">카드</div>
                                <div class="item">
                                    <v-icon class="agency card" />
                                    <ul class="list-dot text-16">
                                        <li
                                            v-for="item in ['카드기본','포인트 및 선불카드','청구, 결제 및 리볼빙','승인상세','대출상품']"
                                            >
                                            {{ item }}
                                        </li>
                                    </ul>
                                </div>
                            </v-sheet>
                        </v-col>
                        <v-col cols="12" lg="4" md="6" sm="12">
                            <v-sheet rounded="lg" class="outlined d-flex flex-column">
                                <div class="title subtitle-18">보험</div>
                                <div class="item">
                                    <v-icon class="agency insurance" />
                                    <ul class="list-dot text-16">
                                        <li
                                            v-for="item in ['보험계약','자동차보험','대출상품','보장(담보)','개인형 IRP']"
                                            >
                                            {{ item }}
                                        </li>
                                    </ul>
                                </div>
                            </v-sheet>
                        </v-col>
                        <v-col cols="12" lg="4" md="6" sm="12">
                            <v-sheet rounded="lg" class="outlined d-flex flex-column">
                                <div class="title subtitle-18">금융투자</div>
                                <div class="item">
                                    <v-icon class="agency investment" />
                                    <ul class="list-dot text-16">
                                        <li 
                                            v-for="item in ['보유잔액','잔액 및 거래내역','개별상품','연금계좌','개인형 IRP']"
                                            >
                                            {{ item }}
                                        </li>
                                    </ul>
                                </div>
                            </v-sheet>
                        </v-col>
                        <v-col cols="12" lg="4" md="6" sm="12">
                            <v-sheet rounded="lg" class="outlined d-flex flex-column">
                                <div class="title subtitle-18">전자금융</div>
                                <div class="item">
                                    <v-icon class="agency e-finance" />
                                    <ul class="list-dot text-16">
                                        <li
                                            v-for="item in ['선불발행','선불거래','결제수단 등록','결제내역']"
                                            >
                                            {{ item }}
                                        </li>
                                    </ul>
                                </div>
                            </v-sheet>
                        </v-col>
                        <v-col cols="12" lg="4" md="6" sm="12">
                            <v-sheet rounded="lg" class="outlined d-flex flex-column">
                                <div class="title subtitle-18">통신업</div>
                                <div class="item">
                                    <v-icon class="agency telecom" />
                                    <ul class="list-dot text-16">
                                        <li
                                            v-for="item in ['통신계약','청구 및 납부','결제내역']"
                                            >
                                            {{ item }}
                                        </li>
                                    </ul>
                                </div>
                            </v-sheet>
                        </v-col>
                    </v-row>
                </div>
            </div>
        </div>
        <!-- 02 -->
        <div class="cnt-group">
            <div class="cnt-title subtitle-24">
                <div class="num">02</div>
                <v-divider vertical />
                <div class="title">내 손안의 금융 비서</div>
            </div>
            <div class="cnt-text">
                <div class="text-16">고객 일상과 지출 흐름, 소비성향을 분석해 생활밀착형 지출관리 서비스를 제공합니다.</div>
                <div class="img bg-gray">
                    <img src="@/assets/images/content/img_mydata_02.png" alt="" />
                </div>
            </div> 
        </div>
        <!-- 03 -->
        <div class="cnt-group">
            <div class="cnt-title subtitle-24">
                <div class="num">03</div>
                <v-divider vertical />
                <div class="title">DaaS (Data as a Service)</div>
            </div>
            <div class="cnt-text">
                <div class="text-16">기업 대상으로 마이데이터 금융정보와 마케팅 정보를 한 번에 제공합니다.</div>
                <div class="img">
                    <img src="@/assets/images/content/img_mydata_03.png" alt="" />
                </div>
            </div> 
        </div>
        <!-- 다운로드 -->
        <div role="button" class="text-download text-16 mt-16">
            <v-icon class="icon-pdf" /><span class="txt">MyData 브로슈어.pdf</span>
        </div> 
    </div>
    <!--// tab2 - MyData -->
</template>
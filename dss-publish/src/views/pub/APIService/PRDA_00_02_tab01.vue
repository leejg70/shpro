<template>
    <!-- tab1 - API 공통가이드 -->
    <div>
        <!-- 01 -->
        <div class="cnt-group">
            <div class="cnt-title subtitle-24">
                <div class="num">01</div>
                <v-divider vertical />
                <div class="title">공통 가이드</div>
            </div>
            <div class="cnt-text">
                <div class="text-16">
                    Data Blue는 고객사가 API 방식으로 제공된 데이터를 활용하여 다양한 업무를 개발하실 수 있도록 지원합니다.<br />
                    Data Blue API 서비스는 아래와 같은 절차로 진행됩니다.
                </div>
            </div>
        </div>
        <!-- 02 -->
        <div class="cnt-group">
            <div class="cnt-title subtitle-24">
                <div class="num">02</div>
                <v-divider vertical />
                <div class="title">서비스 프로세스</div>
            </div>        
            <div class="cnt-text">
                <div class="process">
                    <v-card variant="flat" color="#F2F3F6" text="계약체결" />
                    <v-icon class="icon-flow-arrow" />
                    <v-card variant="flat" color="#FFF1F8" text="API Key발급" />
                    <v-icon class="icon-flow-arrow" />
                    <v-card variant="flat" color="#F4EFFF" text="API 명세서 제공" />
                    <v-icon class="icon-flow-arrow" />
                    <v-card variant="flat" color="#EBF1FF" text="테스트 진행 (테스트/운영)" />
                </div>
                <div class="step-area">
                    <div class="step-group">
                        <div class="step-title subtitle-22">
                            <div class="num">Step 1</div>
                            <v-divider vertical />
                            <div>계약 체결</div>
                        </div>
                        <div class="step-text">
                            <ul class="list-dot text-16">
                                <li>데이터 서비스 이용을 위해서는 계약 체결이 필수입니다. 따라서 API 서비스 이용을 원하실 경우 문의를 남겨주시면 담당자가 최대한 빠르게 관련 안내를 드리도록 하겠습니다.</li>
                                <li>계약의 내용은 상품에 따라 상이하며, 이 때 인증키(API Key) 발급과 관련한 추가 정보 및 신청 정보를 고객사에게 요청 드릴 수 있습니다.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="step-group">
                        <div class="step-title subtitle-22">
                            <div class="num">Step 2</div>
                            <v-divider vertical />
                            <div>인증키<span class="primary--text">(API Key)</span> 발급 및 IP White list 관리</div>
                        </div>
                        <div class="step-text">
                            <ul class="list-dot text-16">
                                <li>인증키 또는 <span class="primary--text">API Key</span>란 API 이용자가 API 서비스의 이용허가를 받은 주체임을 식별하 수 있도록 Data Blue에서 이용자에게 개별적으로 부여하는 고유한 값을 말합니다.</li>
                                <li>체결된 계약에 근거하여 Data Blue에서 인증키를 발행하며, 이메일 또는 Data Blue 홈페이지를 통해서도 확인하실 수 있습니다.</li>
                                <li>
                                    <div>API접근을 위해 고객사에서 사용하시는 서버 IP(최대 3개)를 담당자에게 전달해 주시면 White List에 등록해 드립니다.</div>
                                    <div class="txt"><span>-</span>개발(테스트)용, 운영용 별도 제공</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="step-group">
                        <div class="step-title subtitle-22">
                            <div class="num">Step 3</div>
                            <v-divider vertical />
                            <div>API 명세서 제공</div>
                        </div>
                        <div class="step-text">
                            <ul class="list-dot text-16">
                                <li>
                                    API 운영을 위한 요청방식, 요청메시지, 응답메시지에 대한 상세 명세서를 제공합니다. 
                                    이 때 인증키를 포함하여 제공할 수 있으며 기관 인증 및 거래 무결성 검증 등의 중요 용도로 사용되는 중요 정보로 절대 외부에 노출되면 안됩니다.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="step-group">
                        <div class="step-title subtitle-22">
                            <div class="num">Step 4</div>
                            <v-divider vertical />
                            <div>테스트 진행</div>
                        </div>
                        <div class="step-text">
                            <ul class="list-dot text-16">
                                <li>개발(테스트) 서버에서 연동 서비스 개발 후 서비스 점검이 완료되어야 운영(온라인) 서버 호출이 가능합니다.</li>
                                <li>테스트 및 운영 오픈 일정은 Data Blue 담당자와 협의를 통해 지정이 가능합니다.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="desc text-16">
                        <span class="character">※</span>
                        <span>
                            본 문서의 인증 가이드가 절대적인 기준을 아니며, 이용하려는 개별 서비스나 관련 감독기관의 규정 변경에 따라 그 내용이 달라질 수 있습니다.<br />
                            관련 규정 및 이용 서비스에 따라 변경 발생 시, 연동 개발 전 세부 항목에 대한 별도 협의가 진행될 수 있습니다.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--// tab1 - API 공통가이드 -->
</template>
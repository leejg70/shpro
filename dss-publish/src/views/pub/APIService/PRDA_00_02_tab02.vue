<template>
    <!-- tab2 - API 명세서 -->
    <div>
        <!-- 01 -->
        <div class="cnt-group">
            <div class="cnt-title subtitle-24">
                <div class="num">01</div>
                <v-divider vertical />
                <div class="title">명세서</div>
            </div>
            <div class="cnt-text">
                <div class="text-16">Data Blue를 이용하는 고객에게 제공하는 API 명세서 예시이며, 상품에 따라 상세 내용은 변동될 수 있습니다.</div>
                <div>
                    <div class="specs-group">
                        <div class="title subtitle-22">요청 전문 샘플(Request Parameters)</div>
                        <div class="table-overflow-x">
                            <v-table>
                                <colgroup>
                                    <col width="140px" />
                                    <col width="140px" />
                                    <col width="140px" />
                                    <col width="140px" />
                                    <col width="160px" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th v-for="title in ['HTTP', 'Name', 'Type', 'Required', 'Description']">{{ title }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Header</td>
                                        <td>Apikey</td>
                                        <td>APIKEY</td>
                                        <td>Y</td>
                                        <td class="text-left">인증Key (Data Blue에서 발급)</td>
                                    </tr>
                                    <tr>
                                        <td rowspan="3">Body</td>
                                        <td>serviceId</td>
                                        <td>UUID</td>
                                        <td>Y</td>
                                        <td class="text-left">제휴사ID (Data Blue에서 발급)</td>
                                    </tr>
                                    <tr>
                                        <td style="border-left:1px solid #ddd;">contentID</td>
                                        <td>UUID</td>
                                        <td>Y</td>
                                        <td class="text-left">상품ID (Data Blue에서 발급)</td>
                                    </tr>
                                    <tr>
                                        <td style="border-left:1px solid #ddd;">version</td>
                                        <td>String</td>
                                        <td>N</td>
                                        <td class="text-left">데이터 생성일자 (yyyMMdd)</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </div>

                    <div class="specs-group">
                        <div class="title subtitle-22">요청 전문 예제(Request Example)</div>
                        <v-card variant="outlined" rounded="lg" class="text-16">
                            curl -X POST https://openapi.shinhancard.com:8443/v1.0/PEC/files/download<br />
                            -H "apiKey: {APIKEY}"<br />
                            -d {"serviceId":"제휴사ID","contentId":"상품ID","version":"20230724"}
                        </v-card>
                    </div>

                    <div class="specs-group">
                        <div class="title subtitle-22">응답전문(Response)</div>
                        <div class="table-overflow-x">
                            <v-table>
                                <colgroup>
                                    <col width="140px" />
                                    <col width="140px" />
                                    <col width="140px" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>UPJONG</td>
                                        <td>String</td>
                                        <td>업종명</td>
                                    </tr>
                                    <tr>
                                        <td>APV_TS_D</td>
                                        <td>Number</td>
                                        <td>거래일자</td>
                                    </tr>
                                    <tr>
                                        <td>CTY_CD1</td>
                                        <td>String</td>
                                        <td>광역시도명</td>
                                    </tr>
                                    <tr>
                                        <td>CTY_CD2</td>
                                        <td>String</td>
                                        <td>시군구명</td>
                                    </tr>
                                    <tr>
                                        <td>CTY_CD3</td>
                                        <td>String</td>
                                        <td>구명</td>
                                    </tr>
                                    <tr>
                                        <td>EST_TOT_AMT</td>
                                        <td>Number</td>
                                        <td>추정매출금액</td>
                                    </tr>
                                    <tr>
                                        <td>EST_TOT_CNT</td>
                                        <td>Number</td>
                                        <td>추정매출건수</td>
                                    </tr>
                                    <tr>
                                        <td>AVG_USE_AMT</td>
                                        <td>Number</td>
                                        <td>고객평균결제금액</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                    </div>

                    <div class="specs-group">
                        <div class="title subtitle-22">응답 전문 예제(Response Example)</div>
                        <v-card variant="outlined" rounded="lg" class="text-16">
                            [{"UPJONG":"요식업","APV_TS_D":"20230723","CTY_CD1":"경기","CTY_CD2":"수원시","CTY_CD3":"팔달구,"EST_TOT_AMT":54358674.0,"EST_TOT_CNT":2188.0,"AVG_USE_AMT":28701.0},<br />
                            {"UPJONG":"편의점","APV_TS_D":"20230723","CTY_CD1":"경기","CTY_CD2":"시흥시","CTY_CD3":null,"EST_TOT_AMT":39375391.0,"EST_TOT_CNT":1593.0,"AVG_USE_AMT":10301.0}]
                        </v-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--// tab2 - API 명세서 -->
</template>
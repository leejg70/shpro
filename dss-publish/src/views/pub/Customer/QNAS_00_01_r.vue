<template>
    <div class="sub-group">
        <div class="sub-title-area">
            <div class="sub-title">고객문의</div>
        </div>

        <!-- 고객문의 상세 -->
        <div class="contents-detail">
            <div class="article summary-info">
                <div class="title subtitle-24">My APP 삭제기능(문의글제목 노출)</div>
                <div class="text-row text-16">
                    <div class="category">이용문의<span class="txt">(비공개)</span></div>
                    <v-divider vertical />
                    <div class="date">2024.05.05</div>
                    <v-divider vertical />
                    <div class="id">shinhan****card</div>
                </div>
            </div>
            <div class="article product-name">
                <v-icon class="icon-prod" />
                <div class="text-18">전국 배달 업종 결제 데이터(상품명 노출)</div>
            </div>
            <div class="article question">
                <v-icon class="icon-q" />
                <div class="text-16">
                    생성한 MY APP에 대한 삭제 기능을 찾을 수 없어 문의드릡니다.<br />
                    [MY APP관리] 내에서 보이지 않습니다.<br /><br />
                    생성한 MY APP에 대한 삭제 기능을 찾을 수 없어 문의드릡니다. [MY APP관리] 내에서 보이지 않습니다.<br /><br />
                    [MY APP관리] 내에서 보이지 않습니다.<br />
                    생성한 MY APP에 대한 삭제 기능을 찾을 수 없어 문의드릡니다.<br />
                    [MY APP관리] 내에서 보이지 않습니다.
                </div>
            </div>
            <div class="article answer">
                <v-icon class="icon-a" />
                <div class="text-16">
                    <div class="date">2024.05.05</div>
                    <div class="text-16">
                        안녕하세요.<br />
                        어플리케이션은 요청하시는 경우 삭제해드리고 있습니다.<br /><br />
                        어플리케이션은 요청하시는 경우 삭제해드리고 있습니다. 어플리케이션은 요청하시는 경우 삭제해드리고 있습니다.<br /><br />
                        첨부파일을 확인해주세요.
                    </div>
                    <ul class="download-list">
                        <li v-for="x in 4">
                            <router-link to="" class="d-flex text-16">
                                <v-icon class="icon-download" />[신한카드데이터데이터전문기관] 비밀유지서약서(230101).pdf
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="detail-btn-area">
                <v-btn variant="outlined" rounded="md" size="large" min-width="12.8rem">삭제</v-btn>
                <v-btn variant="flat" rounded="md" size="large" min-width="12.8rem" color="Tertiary">수정</v-btn>
            </div>
        </div>

        <!--// 고객문의 상세 -->

        <div class="btn-list">
            <v-btn variant="flat" rounded="lg" size="x-large" color="primary">목록으로</v-btn>
        </div>
    </div>
</template>
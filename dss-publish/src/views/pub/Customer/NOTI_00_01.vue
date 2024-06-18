<template>
    <div class="sub-group">
        <div class="sub-title-area">
            <h4 class="sub-title">공지사항</h4>
        </div>

        <!-- 공지사항 상세  -->
        <div class="contents-detail">
            <div class="article summary-info">
                <div class="text subtitle-24">이메일 인증 지연 관련 안내 메일이 발송되었습니다.</div>
                <div class="date text-16">2024.02.05</div>
            </div>
            <div class="article">
                <ul class="download-list">
                    <li v-for="x in 4">
                        <div role="button" class="d-flex text-16">
                            <v-icon class="icon-download" />[신한카드데이터데이터전문기관] 비밀유지서약서(230101).pdf
                        </div>
                    </li>
                </ul>
            </div>
            <div class="article">
                <div class="detail-info">
                    <div class="text-16">
                        현재 이메일 인증 서버 변경 작업으로 인해 이메일 인증 관련 메일 발송 서비스에 장애가 발생하고 있습니다.<br />
                        현재 복구 중으로 5/20 복구 완료 예정이며 복구 확인 후 재 안내 드리도록 하겠습니다.<br />
                        불편을 드려 죄송합니다.<br />
                        감사합니다.
                    </div>
                </div>
            </div>
        </div>
        <!--// 공지사항 상세  -->

        <div class="btn-list">
            <v-btn variant="flat" rounded="lg" size="x-large" color="primary">목록</v-btn>
        </div>
    </div>
</template>
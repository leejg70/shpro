<script setup>
import { ref } from 'vue';

const edit = ref(false);

</script>

<template>
    <div class="sub-group">
        <div class="sub-title-area">
            <div class="sub-title">토론장</div>
        </div>

        <!-- 토론장 상세 -->
        <div class="contents-detail">
            <div class="article summary-info">
                <div class="title subtitle-24">노트북 추천해주세요.(토론글제목 노출)</div>
                <div class="text-row text-16">
                    <div class="date">2024.05.05</div>
                    <v-divider vertical />
                    <div class="id">shinhan****card</div>
                </div>
            </div>
            <div class="article question">
                <div class="text-16">
                    업무에 필요하여 노트북을 구매하려고 합니다.<br />
                    이제 막 업무시작한 직딩이라 비싼거 말고 저렴한 노트북 추천해주세요.<br /><br />
                    업무에 필요하여 노트북을 구매하려고 합니다. 업무에 필요하여 노트북을 구매하려고 합니다. 업무에 필요하여 노트북을 구매하려고 합니다.<br /><br />
                    이제 막 업무시작한 직딩이라 비싼거 말고 저렴한 노트북 추천해주세요.
                </div>
            </div>
            <div class="detail-btn-area">
                <v-btn variant="outlined" rounded="md" size="large" min-width="12.8rem">삭제</v-btn>
                <v-btn variant="flat" rounded="md" size="large" min-width="12.8rem" color="Tertiary">수정</v-btn>
            </div>

            <!-- 댓글 -->
            <div class="comment-box">
                <div class="comment-title-area">
                    <div class="comment-title subtitle-18">댓글</div>
                    <v-divider vertical />
                    <div class="comment-text text-16">총<strong>0개</strong>의 댓글이 있습니다.</div>
                </div>

                <!-- 댓글작성 -->
                <div class="comment-area write py-6">
                    <div class="text-row text-14">
                        <div class="id">shinhan****card</div>
                    </div>
                    <div class="text-box">
                        <div class="ele-inp">
                            <v-textarea
                                hide-details
                                variant="outlined"
                                color="primary"
                                auto-grow
                                placeholder="500자까지 작성할 수 있으며 비속어, 혐오 문구를 포함한 글은 등록하실 수 없습니다."
                            />
                        </div>
                    </div>
                    <div class="comment-tool">
                        <v-btn variant="flat" color="primary" rounded="md">등록</v-btn>
                    </div>
                </div>
                <!--// 댓글작성 -->

                <!-- 내 글 수정 -->
                <div class="comment-area mine py-8">
                    <div class="text-row text-14">
                        <div class="id" :style="edit ? 'color: #111518' : ''">shinhan****card</div>
                        <v-divider v-if="!edit" vertical />
                        <div v-if="!edit" class="date">2024.05.05</div>
                    </div>
                    
                    <div v-if="!edit" class="text-box text-16">
                        본인이 작성한 댓글에는 수정/삭제 버튼이 보입니다.
                        본인이 작성한 댓글에는 수정/삭제 버튼이 보입니다.
                        본인이 작성한 댓글에는 수정/삭제 버튼이 보입니다. 
                        본인이 작성한 댓글에는 수정/삭제 버튼이 보입니다.
                        본인이 작성한 댓글에는 수정/삭제 버튼이 보입니다.
                    </div>
                    <div v-if="edit" class="text-box">
                        <div class="ele-inp">
                            <v-textarea
                                hide-details
                                variant="outlined"
                                color="primary"
                                auto-grow
                                placeholder="500자까지 작성할 수 있으며 비속어, 혐오 문구를 포함한 글은 등록하실 수 없습니다."
                            />
                        </div>
                    </div>
                    <div class="comment-tool">
                        <v-btn v-if="!edit" variant="text">
                            <v-icon class="icon-trash" />삭제
                        </v-btn>
                        <v-btn v-if="!edit" @click="edit = !edit" variant="text">
                            <v-icon class="icon-pencil" />수정
                        </v-btn>
                        <v-btn
                            v-if="edit"
                            @click="edit = !edit"
                            variant="flat"
                            rounded="md"
                            color="secondary"
                        >
                            취소
                        </v-btn>
                        <v-btn
                            v-if="edit"
                            @click="edit = !edit"
                            variant="flat"
                            rounded="md"
                            color="primary"
                        >
                            저장
                        </v-btn>
                    </div>
                </div>
                <!--// 내 글 수정 -->

                <!-- 일반댓글 -->
                <div class="comment-area mine py-8">
                    <div class="text-row text-14">
                        <div class="id">shinhan****card</div>
                        <v-divider vertical />
                        <div class="date">2024.05.05</div>
                    </div>
                    
                    <div class="text-box text-16">
                        본인이 작성한 댓글에는 수정/삭제 버튼이 보입니다.
                        본인이 작성한 댓글에는 수정/삭제 버튼이 보입니다.
                        본인이 작성한 댓글에는 수정/삭제 버튼이 보입니다. 
                        본인이 작성한 댓글에는 수정/삭제 버튼이 보입니다.
                        본인이 작성한 댓글에는 수정/삭제 버튼이 보입니다.
                    </div>
                    <!-- <div v-if="edit" class="text-box">
                        <div class="ele-inp">
                            <v-textarea
                                hide-details
                                variant="outlined"
                                color="primary"
                                auto-grow
                                placeholder="500자까지 작성할 수 있으며 비속어, 혐오 문구를 포함한 글은 등록하실 수 없습니다."
                            />
                        </div>
                    </div>
                    <div class="comment-tool">
                        <v-btn v-if="!edit" variant="text">
                            <v-icon class="icon-trash" />삭제
                        </v-btn>
                        <v-btn v-if="!edit" @click="edit = !edit" variant="text">
                            <v-icon class="icon-pencil" />수정
                        </v-btn>
                        <v-btn
                            v-if="edit"
                            @click="edit = !edit"
                            variant="flat"
                            rounded="md"
                            color="secondary"
                        >
                            취소
                        </v-btn>
                        <v-btn
                            v-if="edit"
                            @click="edit = !edit"
                            variant="flat"
                            rounded="md"
                            color="primary"
                        >
                            저장
                        </v-btn>
                    </div> -->
                </div>
                <!--// 일반댓글 -->

            </div>
            <!--// 댓글 -->

            <div class="btn-list">
                <v-btn variant="flat" rounded="lg" size="x-large" color="primary">목록</v-btn>
            </div>
        </div>
        <!--// 토론장 상세 -->
    </div>
</template>
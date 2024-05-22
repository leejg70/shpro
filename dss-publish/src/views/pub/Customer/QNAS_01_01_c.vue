<script setup>
import { ref } from 'vue';

const radioGroup = ref('비공개');
const text = ref('');
const rules1 = (v) => {
    if(!v) {
        return '제목은 필수입력입니다.';
    }
    return true;
}
const rules2 = (v) => {
    if(!v) {
        return '내용은 필수입력입니다.';
    }
    return true;
}
</script>

<template>
    <div class="sub-group">
        <div class="sub-title-area">
            <div class="sub-title">고객문의</div>
        </div>

        <!-- 글쓰기 -->
        <div class="contents-detail">
            <v-form>
                <div class="insert-form-wrap">
                    <!-- 문의유형 -->
                    <div class="insert-row">
                        <div class="ele-tit">문의유형</div>
                        <div class="ele-inp">
                            <div class="inp-select" style="max-width:38.4rem;">
                                <v-select
                                    :items="[ '이용문의', '제휴문의', '기술문의', 'Data서비스 문의', '솔루션서비스 문의', 'API서비스 문의', '광고서비스 문의' ]"
                                    hide-details
                                    variant="outlined"
                                    color="primary"
                                    placeholder="선택"
                                />
                            </div>
                        </div>
                    </div>
                    <!-- 문의상품 -->
                    <div class="insert-row">
                        <div class="ele-tit">문의상품</div>
                        <div class="ele-inp">
                            <v-text-field
                                hide-details
                                disabled
                                variant="outlined"
                                color="primary"
                                value="전국 배달 업종 결제 데이터"
                            />
                        </div>
                    </div>
                    <!-- 제목 -->
                    <div class="insert-row">
                        <div class="ele-tit">제목</div>
                        <div class="ele-inp">
                            <v-text-field
                                hide-details="auto"
                                :rules="[rules1]"
                                clearable
                                variant="outlined"
                                color="primary"
                                placeholder="제목 입력"
                            />
                        </div>
                    </div>
                    <!-- 공개여부 -->
                    <div class="insert-row">
                        <div class="ele-tit">공개여부</div>
                        <div class="ele-inp">
                            <div class="inp-radio">
                                <v-radio-group
                                    v-model="radioGroup"
                                    hide-details
                                    inline
                                    density="compact"
                                >
                                    <v-radio
                                        v-for="item in [ '공개', '비공개' ]"
                                        :key="item"
                                        :label="item"
                                        :value="item"
                                    />
                                </v-radio-group>
                            </div>
                        </div>
                    </div>
                    <!-- 내용 -->
                    <div class="insert-row">
                        <div class="ele-tit">내용</div>
                        <div class="ele-inp">
                            <v-textarea
                                v-model="text"
                                hide-details="auto"
                                :rules="[rules2]"
                                persistent-counter
                                no-resize
                                clearable
                                variant="outlined"
                                color="primary"
                                rows="13"
                                placeholder="문의 내용을 입력하세요."
                            >
                                <template v-slot:counter>
                                    <strong>{{ text.length }}자</strong><span>/ 1000자</span>
                                </template>
                            </v-textarea>
                        </div>
                    </div>
                </div>
                <ul class="list-dot text-16">
                    <li>첨부파일을 통한 고객문의는 <span>DataBlue@shinhan.com</span>으로 문의 주시기 바랍니다.</li>
                </ul>
                <div class="detail-btn-area">
                    <v-btn variant="flat" rounded="lg" size="x-large" min-width="12.8rem" color="secondary">이전</v-btn>
                    <v-btn variant="flat" rounded="lg" size="x-large" min-width="22.4rem" color="primary">저장</v-btn>
                </div>
            </v-form>
        </div>
        <!--// 글쓰기 -->
    </div>
</template>
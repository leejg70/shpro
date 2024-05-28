<script setup>
import { ref } from 'vue';

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
            <div class="sub-title">토론장</div>
        </div>

        <!-- 글쓰기 -->
        <div class="contents-detail">
            <v-form>
                <div class="insert-form-wrap">
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
                <div class="detail-btn-area">
                    <v-btn variant="flat" rounded="lg" size="x-large" min-width="12.8rem" color="secondary">이전</v-btn>
                    <v-btn variant="flat" rounded="lg" size="x-large" min-width="22.4rem" color="primary">등록</v-btn>
                </div>
            </v-form>
        </div>
        <!--// 글쓰기 -->
    </div>
</template>
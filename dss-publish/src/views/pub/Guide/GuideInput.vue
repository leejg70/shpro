<script setup>
import { ref } from 'vue';

const items = [
    { name: '이용문의', value: '01' },
    { name: '제휴문의', value: '02' },
    { name: '기술문의', value: '03' },
    { name: 'Data서비스 문의', value: '04' },
    { name: '솔루션서비스 문의', value: '05' },
    { name: 'API서비스 문의', value: '06' },
    { name: '광고서비스 문의', value: '07' },
]
const selected = ref();
const radioGroup = ref('비공개');
const text = ref('');
const rules1 = (v) => {
    if (!v) {
        return '제목은 필수입력입니다.';
    }
    return true;
}
const rules2 = (v) => {
    if (!v) {
        return '내용은 필수입력입니다.';
    }
    return true;
}
</script>

<template>
    <div class="guide-wrap">
        <div class="member">
            <h2 class="sub-title">input 유형</h2>  
            <Form class="form-wrap">
                <div class="form-box">
                    <div class="form-group">
                        <div class="ele-tit">
                            <v-label>이름</v-label>
                        </div>
                        <div class="input-wrap">
                            <v-text-field aria-label="이름" v-model="realNm" placeholder="이름 입력" title="이름 입력"
                                density="comfortable" variant="outlined" color="primary" hide-details="auto" clearable
                                required></v-text-field>
                        </div>
                        <p class="text-tip error">이름은 필수 입력입니다.</p>
                    </div>
                    <div class="form-group">
                        <div class="ele-tit">
                            <v-label>주민등록번호</v-label>
                        </div>
                        <div class="jumin-wrap">
                            <div class="first">
                                <div class="input-wrap">
                                    <v-text-field aria-label="주민등록번호 숫자 앞 6자리" v-model="birthday" placeholder="앞 6자리"
                                        title="주민등록번호 숫자 앞 6자리 입력" density="comfortable" variant="outlined"
                                        color="primary" hide-details="auto" clearable required></v-text-field>
                                </div>
                            </div>
                            <span class="space">-</span>
                            <div class="last">
                                <div class="input-wrap">
                                    <v-text-field aria-label="주민등록번호 숫자 뒤 1자리" v-model="gender" placeholder="뒤 1자리"
                                        title="주민등록번호 숫자 뒤 1자리 입력" density="comfortable" variant="outlined"
                                        color="primary" hide-details="auto" clearable required></v-text-field>
                                </div>
                                <div class="masking">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <p class="text-tip error">주민등록번호는 필수 입력입니다.</p>
                        <!--
                        <p class="text-tip error">만 19세 미만은 회원가입이 불가합니다.</p>
                        -->
                    </div>
                    <div class="form-group">
                        <div class="ele-tit">
                            <v-label>통신사 선택</v-label>
                        </div>
                        <div class="phone-wrap">
                            <div class="input-wrap">
                                <v-radio-group v-model="radioGroup" class="v-btn-radio" inline>
                                    <v-radio label="SKT" color="primary" value="SKT"></v-radio>
                                    <v-radio label="KT" color="primary" value="KT"></v-radio>
                                    <v-radio label="LG U+" color="primary" value="LG U+"></v-radio>
                                    <v-radio label="알뜰폰" color="primary" value="알뜰폰"></v-radio>
                                </v-radio-group>
                            </div>
                            <div v-if="radioGroup == '알뜰폰'" class="select-wrap">
                                <!-- 2024.05.21 기존 방식 삭제
                                <v-select
                                    aria-label="알뜰폰"
                                    v-model="selected"
                                    :items="items"
                                    variant="outlined"
                                    color="primary"
                                    hide-details="auto"
                                    required
                                ></v-select>
                                -->
                                <v-select :items="items" placeholder="선택" variant="outlined" color="primary"
                                    hide-details="auto"></v-select>
                            </div>
                        </div>
                        <p class="text-tip error">통신사 선택은 필수입니다.</p>
                    </div>
                    <div class="form-group">
                        <div class="ele-tit">
                            <v-label>휴대폰번호</v-label>
                        </div>
                        <div class="input-wrap side-btn">
                            <div class="input-wrap">
                                <v-text-field aria-label="휴대폰번호" v-model="phone" placeholder="[-] 없이 숫자만 입력"
                                    title="휴대폰번호 숫자 최대 11자리 입력" density="comfortable" variant="outlined" color="primary"
                                    hide-details="auto" clearable required></v-text-field>
                            </div>
                            <v-btn variant="outlined" color="primary" size="large" rounded="md" class="line-blue">
                                인증번호전송
                            </v-btn>
                            <!--
                            <v-btn
                            variant="outlined"
                            color="primary"
                            size="large"
                            rounded="md"
                            class="line-blue"
                            >
                            재전송
                            </v-btn>
                            -->
                        </div>
                        <p class="text-tip success">인증번호가 전송되었습니다. 인증번호를 입력해주세요.</p>
                        <!--
          <p class="text-tip error">휴대폰번호는 필수 입력입니다.</p>
          <p class="text-tip error">인증번호 전송에 실패했습니다. 인증정보를 확인해주세요.</p>
          -->
                    </div>
                    <div class="form-group">
                        <div class="ele-tit">
                            <v-label>인증번호</v-label>
                        </div>
                        <div class="input-wrap side-btn side-timer">
                            <v-text-field aria-label="인증번호" v-model="sms" placeholder="숫자 6자리 입력" title="인증번호 숫자 6자리 입력"
                                density="comfortable" variant="outlined" color="primary" hide-details="auto" clearable
                                required></v-text-field>
                            <span class="timer-box">
                                <v-icon>icon-timer</v-icon>
                                <span>99:99</span>
                            </span>
                            <v-btn variant="outlined" color="primary" size="large" rounded="md" class="line-blue">
                                휴대폰인증
                            </v-btn>
                        </div>
                        <p class="text-tip error">입력시간을 초과하였습니다. 인증번호 재전송 후 다시 시도해주세요.</p>
                    </div>
                </div>
            </Form>
        </div>
        <!-- 고객센터  input 유형-->
        <div class="insert-form-wrap">
            <!-- 문의유형 -->
            <div class="insert-row">
                <div class="ele-tit">문의유형</div>
                <div class="ele-inp">
                    <div class="inp-select" style="max-width:38.4rem;">
                        <v-select v-model="selected" :items="items" item-title="name" item-value="value" hide-details
                            variant="outlined" color="primary" placeholder="선택" />
                    </div>
                </div>
            </div>
            <!-- 문의상품 -->
            <div class="insert-row">
                <div class="ele-tit">문의상품</div>
                <div class="ele-inp">
                    <v-text-field hide-details disabled variant="outlined" color="primary" value="전국 배달 업종 결제 데이터" />
                </div>
            </div>
            <!-- 제목 -->
            <div class="insert-row">
                <div class="ele-tit">제목</div>
                <div class="ele-inp">
                    <v-text-field hide-details="auto" :rules="[rules1]" clearable variant="outlined" color="primary"
                        placeholder="제목 입력" />
                </div>
            </div>
            <!-- 공개여부 -->
            <div class="insert-row">
                <div class="ele-tit">공개여부</div>
                <div class="ele-inp">
                    <div class="inp-radio">
                        <v-radio-group v-model="radioGroup" hide-details inline density="compact">
                            <v-radio label="공개" value="공개" />
                            <v-radio label="비공개" value="비공개" />
                        </v-radio-group>
                    </div>
                </div>
            </div>
            <!-- 내용 -->
            <div class="insert-row">
                <div class="ele-tit">내용</div>
                <div class="ele-inp">
                    <v-textarea v-model="text" hide-details="auto" :rules="[rules2]" persistent-counter no-resize
                        variant="outlined" color="primary" rows="13" placeholder="문의 내용을 입력하세요.">
                        <template v-slot:counter>
                            <strong>{{ text.length }}자</strong><span>/ 1000자</span>
                        </template>
                    </v-textarea>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.guide-wrap {
    padding: 4rem;
    margin: 0 auto;
    max-width: 128rem;
   .sub-title{
    padding: 1rem 0;    
    font-size: 2.5rem;
   }
   .member {
        padding: 0;
        max-width: 100%;
    }
}

</style>

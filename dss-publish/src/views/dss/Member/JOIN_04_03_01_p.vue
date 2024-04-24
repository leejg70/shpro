<script setup>
import { ref } from 'vue';

const company = ref(false);
const radios = ref('1');

// radios = ref('기업명을 동일하게 입력해주세요');

</script>

<template>
  <v-dialog
    v-model="company"
    width="auto"
  >
    <!-- 샘플 버튼 -->
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps">
        기업찾기 팝업
      </v-btn>
    </template>
    <!-- // 샘플 버튼 -->

    <!-- 기업찾기 -->
    <div class="popup-wrap large">
      <div class="popup-head">
        <h3 class="h-title">기업찾기</h3>
      </div>
      <div class="popup-cont">
        <div class="radio-wrap radio-tap">
          <v-radio-group v-model="radios">
            <v-radio label="기업명 검색" value="1"></v-radio>
            <v-radio label="사업자등록번호 검색" value="2"></v-radio>
          </v-radio-group>
        </div>
        <div class="search-area" v-if="radios ==1">
          <div class="input-wrap">
            <v-text-field
              color="primary"
              hide-details="auto"             
              placeholder="기업명을 입력해주세요."
              variant="outlined"
              clearable
            ></v-text-field>
            <v-btn
              block
              class="btn-search"
            >
              <span class="sr-only">검색</span>
            </v-btn>
          </div>
        </div>
        <div class="search-area" v-if="radios ==2">
          <div class="input-wrap">
            <v-text-field
              color="primary"
              hide-details="auto"              
              placeholder="사업자등록번호를 입력해주세요."
              variant="outlined"
              clearable
            ></v-text-field>
            <v-btn
              block
              class="btn-search"
            >
              <span class="sr-only">검색</span>
            </v-btn>
          </div>
        </div>
        <div class="popup-scroll-area">
          <div class="table-wrap search">
            <div class="table-head" :aria-hidden="true">
              <ul class="table-list-head">
                <li class="bo-select">선택</li>
                <li class="bo-name">기업명</li>
                <li class="bo-num">사업자 번호</li>
                <li class="bo-email">사용 가능 이메일</li>
              </ul>
            </div>
            <div class="table-content">
              <v-radio-group hide-details="auto">
                <ul class="table-list-body" v-if="radios ==1">
                  <!--
                  <li class="table-list-group">
                    <div class="tb-radio">
                      <v-radio
                        label="기업선택"
                        value="개인 회원1"
                        class="default-type-radio"
                      ></v-radio>
                    </div>
                    <ul class="table-list">                 
                      <li class="bo-name">신한카드</li>
                      <li class="bo-num">111-11-11111</li>
                      <li class="bo-email">@samsung.com</li>
                    </ul>
                  </li>
                  <li class="table-list-group">
                    <div class="tb-radio">
                      <v-radio
                        label="기업선택"
                        value="개인 회원2"
                        class="default-type-radio"
                      ></v-radio>
                    </div>
                    <ul class="table-list">
                      <li class="bo-name">신한카드</li>
                      <li class="bo-num">111-11-11111</li>
                      <li class="bo-email">@naver.com</li>
                    </ul>
                  </li>
                  <li class="table-list-group">
                    <div class="tb-radio">
                      <v-radio
                        label="기업선택"
                        value="개인 회원3"
                        class="default-type-radio"
                      ></v-radio>
                    </div>
                    <ul class="table-list">
                      <li class="bo-name">신한카드</li>
                      <li class="bo-num">111-11-11111</li>
                      <li class="bo-email">@shinhancard.com</li>
                    </ul>
                  </li>
                  <li class="table-list-group">
                    <div class="tb-radio">
                      <v-radio
                        label="기업선택"
                        value="개인 회원4"
                        class="default-type-radio"
                      ></v-radio>
                    </div>
                    <ul class="table-list">
                      <li class="bo-name">신한카드</li>
                      <li class="bo-num">111-11-11111</li>
                      <li class="bo-email">@samsung.com</li>
                    </ul>
                  </li>
                  <li class="table-list-group">
                    <div class="tb-radio">
                      <v-radio
                        label="기업선택"
                        value="개인 회원5"
                        class="default-type-radio"
                      ></v-radio>
                    </div>
                    <ul class="table-list">
                      <li class="bo-name">신한카드</li>
                      <li class="bo-num">111-11-11111</li>
                      <li class="bo-email">@naver.com</li>
                    </ul>
                  </li>
                  <li class="table-list-group">
                    <div class="tb-radio">
                      <v-radio
                        label="기업선택"
                        value="개인 회원6"
                        class="default-type-radio"
                      ></v-radio>
                    </div>
                    <ul class="table-list">
                      <li class="bo-name">신한카드</li>
                      <li class="bo-num">111-11-11111</li>
                      <li class="bo-email">@shinhancard.com</li>
                    </ul>
                  </li>
                  -->
                  <!--
                  <li class="no-data">
                    <p class="no-data-tit">검색 결과</p>
                    <p class="no-data-txt">검색된 결과가 없습니다.</p>
                  </li>
                  -->
                  <li class="no-data" >
                    <p class="no-data-tit">기업명 검색</p>
                    <p class="no-data-txt">기업명 검색을 해주시기 바랍니다.</p>
                  </li>
                </ul>
                <ul class="table-list-body" v-if="radios ==2">
                  <!--
                  <li class="table-list-group">
                    <div class="tb-radio">
                      <v-radio
                        label="기업선택"
                        value="개인 회원1"
                        class="default-type-radio"
                      ></v-radio>
                    </div>
                    <ul class="table-list">                 
                      <li class="bo-name">신한카드</li>
                      <li class="bo-num">111-11-11111</li>
                      <li class="bo-email">@samsung.com</li>
                    </ul>
                  </li>
                  <li class="table-list-group">
                    <div class="tb-radio">
                      <v-radio
                        label="기업선택"
                        value="개인 회원2"
                        class="default-type-radio"
                      ></v-radio>
                    </div>
                    <ul class="table-list">
                      <li class="bo-name">신한카드</li>
                      <li class="bo-num">111-11-11111</li>
                      <li class="bo-email">@naver.com</li>
                    </ul>
                  </li>
                  <li class="table-list-group">
                    <div class="tb-radio">
                      <v-radio
                        label="기업선택"
                        value="개인 회원3"
                        class="default-type-radio"
                      ></v-radio>
                    </div>
                    <ul class="table-list">
                      <li class="bo-name">신한카드</li>
                      <li class="bo-num">111-11-11111</li>
                      <li class="bo-email">@shinhancard.com</li>
                    </ul>
                  </li>
                  <li class="table-list-group">
                    <div class="tb-radio">
                      <v-radio
                        label="기업선택"
                        value="개인 회원4"
                        class="default-type-radio"
                      ></v-radio>
                    </div>
                    <ul class="table-list">
                      <li class="bo-name">신한카드</li>
                      <li class="bo-num">111-11-11111</li>
                      <li class="bo-email">@samsung.com</li>
                    </ul>
                  </li>
                  <li class="table-list-group">
                    <div class="tb-radio">
                      <v-radio
                        label="기업선택"
                        value="개인 회원5"
                        class="default-type-radio"
                      ></v-radio>
                    </div>
                    <ul class="table-list">
                      <li class="bo-name">신한카드</li>
                      <li class="bo-num">111-11-11111</li>
                      <li class="bo-email">@naver.com</li>
                    </ul>
                  </li>
                  <li class="table-list-group">
                    <div class="tb-radio">
                      <v-radio
                        label="기업선택"
                        value="개인 회원6"
                        class="default-type-radio"
                      ></v-radio>
                    </div>
                    <ul class="table-list">
                      <li class="bo-name">신한카드</li>
                      <li class="bo-num">111-11-11111</li>
                      <li class="bo-email">@shinhancard.com</li>
                    </ul>
                  </li>
                  -->
                  <!--
                  <li class="no-data">
                    <p class="no-data-tit">검색 결과</p>
                    <p class="no-data-txt">검색된 결과가 없습니다.</p>
                  </li>
                  -->
                  <li class="no-data">
                    <p class="no-data-tit">사업자등록번호 검색</p>
                    <p class="no-data-txt">사업자등록번호 검색을 해주시기 바랍니다.</p>
                  </li>
                </ul>
              </v-radio-group>
            </div>
          </div>
        </div>
      </div>
      <div class="popup-foot fixed">
        <div class="info-area">
          <div class="info-tip">
            <p>법인 사업자 계정으로 가입하시려면 법인 이메일 주소가 필요합니다.</p>
            <p>법인 이메일이 없으신 경우, 개인 계정으로 가입 후 고객센터로 문의 해 주시기 바랍니다.</p>
          </div>
          <div class="info-title">
            <p class="info-txt">소속 기업이 등록되어있지 않다면?</p>
            <v-btn
              variant="outlined"
              color="Outlinded"
              size="x-small"
              rounded="md"
              class="text-outlinded "
            >
              기업 추가
            </v-btn>
          </div>
        </div>
        <div class="btn-popwrap">
          <v-btn
            variant="flat"
            color="primary"
            size="large"
            rounded="md"
            class="default"
          >
            확인
          </v-btn>
        </div>
      </div>
      <v-btn
        @click="company = false"
        block
        class="btn-popup-close"
      >
        <span class="sr-only">닫기</span>
      </v-btn>
    </div>
    <!-- // 기업찾기 -->
  </v-dialog>
</template>

<style scoped>
.v-btn--size-default {
  font-size: 1.4rem;
}
</style>
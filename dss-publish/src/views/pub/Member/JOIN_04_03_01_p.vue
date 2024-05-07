<script setup>
import { ref } from 'vue';

const tab = ref(null);
const company = ref(false);
</script>

<template>
  <v-dialog
    v-model="company"
    persistent
  >
    <!-- 샘플 버튼 -->
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps">
        기업찾기 팝업
      </v-btn>
    </template>
    <!-- // 샘플 버튼 -->

    <!-- 기업찾기 -->
    <div class="popup-wrap large fixed">
      <div class="popup-head">
        <h3 class="h-title">기업찾기</h3>
      </div>
      <div class="popup-cont">
        <v-card
          flat
          rounded="0"
          class="tab-cont"
        >
          <v-tabs
            v-model="tab"
            bg-color="transparent"
            color="selected"
            class="tab-search"
          >
            <v-tab value="tab01_1">기업명 검색</v-tab>
            <v-tab value="tab01_2">사업자등록번호 검색</v-tab>
          </v-tabs>
          <v-window v-model="tab">
            <v-window-item value="tab01_1">
              <v-card 
                flat
                rounded="0"
                class="search-cont"
              >
                <v-card-text>
                  <div class="search-area">
                    <div class="input-wrap">
                      <v-text-field
                        placeholder="기업명 입력"
                        title="기업명 입력"
                        variant="outlined"
                        color="primary"
                        hide-details="auto"
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
                  <div class="table-wrap">
                    <ul class="table-head">
                      <li class="bo-select">선택</li>
                      <li class="bo-name">기업명</li>
                      <li class="bo-num">사업자 번호</li>
                      <li class="bo-email">사용 가능 이메일</li>
                    </ul>
                    <v-radio-group hide-details="auto">
                      <ul class="table-body">
                        <!-- 검색 안내 -->
                        <li class="no-data">
                          <p class="title">기업 검색</p>
                          <p class="text">기업 검색을 해주시기 바랍니다.</p>
                        </li>
                        <!-- 검색 결과
                        <li class="tb-list-group">
                          <div class="tb-radio">
                            <v-radio
                              label="기업선택"
                              value="개인 회원1"
                              class="default-type-radio"
                            ></v-radio>
                          </div>
                          <ul class="tb-list">
                            <li class="name">신한카드</li>
                            <li class="num">111-11-11111</li>
                            <li class="email">@samsung.com</li>
                          </ul>
                        </li>
                        <li class="tb-list-group">
                          <div class="tb-radio">
                            <v-radio
                              label="기업선택"
                              value="개인 회원2"
                              class="default-type-radio"
                            ></v-radio>
                          </div>
                          <ul class="tb-list">
                            <li class="name">신한카드</li>
                            <li class="num">111-11-11111</li>
                            <li class="email">@naver.com</li>
                          </ul>
                        </li>
                        <li class="tb-list-group">
                          <div class="tb-radio">
                            <v-radio
                              label="기업선택"
                              value="개인 회원3"
                              class="default-type-radio"
                            ></v-radio>
                          </div>
                          <ul class="tb-list">
                            <li class="name">신한카드</li>
                            <li class="num">111-11-11111</li>
                            <li class="email">@shinhancard.com</li>
                          </ul>
                        </li>
                        -->
                        <!-- 검색 결과 없을시
                        <li class="no-data">
                          <p class="title">검색 결과</p>
                          <p class="text">검색된 결과가 없습니다.</p>
                        </li>
                        -->
                      </ul>
                    </v-radio-group>
                  </div>
                </v-card-text>
              </v-card>
            </v-window-item>
            <v-window-item value="tab01_2">
              <v-card 
                flat
                rounded="0"
                class="search-cont"
              >
                <v-card-text>
                  <div class="search-area">
                    <div class="input-wrap">
                      <v-text-field
                        placeholder="[-] 없이 숫자만 입력"
                        title="사업자등록번호 숫자 10자리 입력"
                        variant="outlined"
                        color="primary"
                        hide-details="auto"
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
                  <div class="table-wrap">
                    <ul class="table-head">
                      <li class="bo-select">선택</li>
                      <li class="bo-name">기업명</li>
                      <li class="bo-num">사업자 번호</li>
                      <li class="bo-email">사용 가능 이메일</li>
                    </ul>
                    <v-radio-group hide-details="auto">
                      <ul class="table-body">
                        <!-- 검색 안내 -->
                        <li class="no-data">
                          <p class="title">기업 검색</p>
                          <p class="text">기업 검색을 해주시기 바랍니다.</p>
                        </li>
                        <!-- 검색 결과
                        <li class="tb-list-group">
                          <div class="tb-radio">
                            <v-radio
                              label="기업선택"
                              value="개인 회원1"
                              class="default-type-radio"
                            ></v-radio>
                          </div>
                          <ul class="tb-list">
                            <li class="name">신한카드</li>
                            <li class="num">111-11-11111</li>
                            <li class="email">@samsung.com</li>
                          </ul>
                        </li>
                        <li class="tb-list-group">
                          <div class="tb-radio">
                            <v-radio
                              label="기업선택"
                              value="개인 회원2"
                              class="default-type-radio"
                            ></v-radio>
                          </div>
                          <ul class="tb-list">
                            <li class="name">신한카드</li>
                            <li class="num">111-11-11111</li>
                            <li class="email">@naver.com</li>
                          </ul>
                        </li>
                        <li class="tb-list-group">
                          <div class="tb-radio">
                            <v-radio
                              label="기업선택"
                              value="개인 회원3"
                              class="default-type-radio"
                            ></v-radio>
                          </div>
                          <ul class="tb-list">
                            <li class="name">신한카드</li>
                            <li class="num">111-11-11111</li>
                            <li class="email">@shinhancard.com</li>
                          </ul>
                        </li>
                        -->
                        <!-- 검색 결과 없을시
                        <li class="no-data">
                          <p class="title">검색 결과</p>
                          <p class="text">검색된 결과가 없습니다.</p>
                        </li>
                        -->
                      </ul>
                    </v-radio-group>
                  </div>
                </v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
          <v-card-text class="info-area">
            <p class="info-tip">법인 사업자 계정으로 가입하시려면 법인 이메일 주소가 필요합니다.<br>법인 이메일이 없으신 경우, 개인 계정으로 가입 후 고객센터로 문의 해 주시기 바랍니다.</p>
            <div class="info-title">
              <p class="info-text">소속 기업이 등록되어있지 않다면?</p>
              <v-btn
                variant="outlined"
                color="Outlinded"
                size="x-small"
                rounded="md"
                class="text-outlinded"
              >
                기업 추가
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div class="popup-foot">
        <div class="btn-popwrap">
          <v-btn
            variant="flat"
            color="primary"
            size="x-large"
            rounded="md"
            class="default"
          >
            확인
          </v-btn>
        </div>
      </div>
      <v-btn
        @click="company = false"
        variant="text"
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
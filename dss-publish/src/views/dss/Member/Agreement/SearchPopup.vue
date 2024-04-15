<script setup lang="ts">
import { ref } from 'vue';

const radios = ref('기업명을 동일하게 입력해주세요');
</script>
<template>
  <div class="popup-wrap w62">
    <div class="popup-head">
      <h3 tabindex="0">기업찾기</h3>
    </div>
    <div class="top-contet">
          <div class="radio-wrap radio-tap">
            <v-radio-group v-model="radios">
              <v-radio label="기업명 검색" value="기업명을 동일하게 입력해주세요"></v-radio>
              <v-radio label="사업자등록번호 검색" value="사업자등록번호를 동일하게 입력해주세요"></v-radio> 
            </v-radio-group>
          </div>  
          <div  class="search-area">          
            <div class="input-wrap">
              <v-text-field 
                color="primary" 
                hide-details="auto"                 
                persistent-placeholder 
                :placeholder="radios" 
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
      </div>
    <div class="popup-cont">
      <div class="popup-scroll-area">
      <div class="table-wrap search">
        <div class="table-head" :aria-hidden="true">
          <div class="tb-radio-head">선택</div>
          <ul class="table-list-head">              
            <li class="bo-name">기업명</li>
            <li class="bo-num">사업자 번호</li>
            <li class="bo-email">사용 가능 이메일</li>
          </ul>
        </div>
        <div class="table-content">
          <v-radio-group hide-details="auto">                    
            <ul class="table-list-body">
              <li class="table-list-group">
                <div class="tb-radio">
                  <v-radio 
                  label="기업선택"
                  class="default-type-radio"
                  value="개인 회원1"          
                  >                          
                </v-radio>
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
                  class="default-type-radio"
                  value="개인 회원2"                
                  >
                </v-radio>
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
                  class="default-type-radio"
                  value="개인 3"                
                  >
                </v-radio>
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
                  class="default-type-radio"
                  value="개인 4"                
                  >
                </v-radio>
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
                  class="default-type-radio"
                  value="개인 5"                
                  >
                </v-radio>
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
                  class="default-type-radio"
                  value="개인 6"                
                  >
                </v-radio>
                </div>
                <ul class="table-list">                  
                  <li class="bo-name">신한카드</li>
                  <li class="bo-num">111-11-11111</li>
                  <li class="bo-email">@naver.com</li>
                </ul>
              </li>
            </ul>
            <ul class="table-list-body">
              <li class="table-list-group">               
                <ul class="table-list">                  
                  <li class="no-data">
                    <p class="no-data-tit"></p>검색 결과
                    <p class="no-data-txt">검색된 결과가 없습니다.</p>
                  </li>                  
                </ul> 
              </li>
            </ul> 
          </v-radio-group>               
        </div>
        <div class="table-foot">  
        </div>  
      </div>
      </div> 
    </div>
    <div class="popup-foot fixed ">
      <div class="info-area">
        <div class="info-tip">
          <p>법인 사업자 계정으로 가입하시려면 법인 이메일 주소가 필요합니다.</p>
          <p>법인 이메일이 없으신 경우, 개인 계정으로 가입 후 고객센터로 문의 해 주시기 바랍니다.</p>
        </div>
        <div class="info-title">
          <p class="info-txt">소속 기업이 등록되어있지 않다면?</p>
          <v-btn
          :ripple="false"
          variant="outlined"
          color="Outlinded"
          size="x-small"
          rounded="md"
          class="text-outlinded"
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
          rounded="lg"
          class="btn-w14"
        >
          다음
        </v-btn> 
      </div>    
    </div>
  </div>
</template>

<style lang="scss">
 
</style>
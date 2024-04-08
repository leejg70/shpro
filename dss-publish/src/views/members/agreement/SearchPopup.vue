<script setup lang="ts">
import { ref } from 'vue';
const radios = ref('기업명을 동일하게 입력해주세요');

</script>
<template>
  <div class="popup-agree-wrap">
    <div class="popup-head">
      <h3 tabindex="0">기업찾기</h3>
    </div>
    <div class="popup-cont">
        <div class="radio-wrap radio-tap">
          <v-radio-group v-model="radios">
            <v-radio label="기업명 검색" value="기업명을 동일하게 입력해주세요"></v-radio>
            <v-radio label="사업자등록번호 검색" value="사업자등록번호를 동일하게 입력해주세요"></v-radio> 
          </v-radio-group>
        </div>
        <div class="top-contet">     
            <div  class="search-area">          
              <div class="input-wrap">
                <v-text-field 
                  color="primary" 
                  hide-details="auto"                 
                  persistent-placeholder 
                  placeholder="{{ radios }}" 
                  variant="outlined" 
                  clearable
                ></v-text-field>  
              </div>
            </div> 
            <div class="table-wrap">
                <div class="table-head">
                  <div>선택</div>
                  <div>기업명</div>
                  <div>사업자 번호</div>
                  <div>사용 가능 이메일</div>
                </div>
                <div class="table-content">
                  <ul class="table-list-group">
                    <li>
                      <div class="tb-radio"></div>
                        <ul class="table-list-group">
                          <li>신한카드</li>
                          <li>111-11-11111</li>
                          <li>@naver.com</li>
                        </ul>
                    </li>
                  </ul>                
                </div>
                <div class="table-foot"></div>
                <div class="info-area">
                    <div class="info-tip">
                      <p>법인 사업자 계정으로 가입하시려면 법인 이메일 주소가 필요합니다.</p>
                      <p>법인 이메일이 없으신 경우, 개인 계정으로 가입 후 고객센터로 문의 해 주시기 바랍니다.</p>
                    </div>
                    <div class="info-title"> 
                      <p>소속 기업이 등록되어있지 않다면? </p>                   
                      <v-btn
                      :ripple="false"
                      variant="outlined"
                      color="Outlinded"
                      size="large"
                      rounded="md"
                      class="text-outlinded"
                    >
                      Outlinded
                    </v-btn>
                    </div>
                </div>
            </div>
            <div class="btn-wrap">
              <v-btn
                variant="flat"
                color="primary"
                size="x-large"
                rounded="lg"
                class="btn-w14"
              >
                다음
              </v-btn> 
            </div>        
        </div>
    </div>
  </div>
</template>
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
                  :placeholder="radios" 
                  variant="outlined" 
                  clearable
                ></v-text-field>
              </div>
            </div> 
            <div class="table-wrap">
                <div class="table-head" :aria-hidden="true">
                  <div class="tb-radio-head">선택</div>
                  <ul class="table-list-head">              
                    <li>기업명</li>
                    <li>사업자 번호</li>
                    <li>사용 가능 이메일</li>
                  </ul>
                </div>
                <div class="table-content">
                  <v-radio-group >
                    
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
                          <li>신한카드</li>
                          <li class="tb-center">111-11-11111</li>
                          <li class="tb-center">@naver.com</li>      
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
                          <li>신한카드</li>
                          <li class="tb-center">111-11-11111</li>
                          <li class="tb-center">@naver.com</li>
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
                          <li>신한카드</li>
                          <li class="tb-center">111-11-11111</li>
                          <li class="tb-center">@naver.com</li>
                        </ul>
                      </li>
                    </ul> 
                  </v-radio-group>
               
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

<style lang="scss">
.search-area{
  background: #F7F8FC;
  .input-wrap{
    display: flex;
    padding: 1rem 2rem;
    flex-direction: column;
    align-items: center;
    width:100%;
    .v-input,
    .v-input__control{
      max-width:36.75rem;
      width:100%;      
      background-color: #fff !important;
      border-radius: 0.5rem;
    }
  }
}


.table-head{
  border-top: 1px solid  #111518;
  border-bottom: 1px solid  #DDD;
  display: flex;
  .tb-radio-head{
    display: flex;
    align-items: center;
    justify-content: center;
    width:4rem;  
  }
  .table-list-head{
      width:100%;
      display: flex;
      padding: 1rem;
      li{
        width: 33.5555%;
        text-align:center;
      }    
  }
} 
 .table-list-body{
  .table-list-group{
    display: flex;
    border-bottom: 1px solid  #DDD;
    .tb-radio{
      display: flex;
      align-items: center;
      justify-content: center;
      width:4rem;  
    }
    .table-list{
      width:100%; 
      display: flex;
      padding: 1rem;
      li{
        width: 33.5555%;
        &.tb-center{
         text-align:center;
        }
      }

    }
  }

} 

</style>
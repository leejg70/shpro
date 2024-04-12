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

                <v-btn
                  block
                  class="btn-search"
                  >
                  <span class="sr-only">검색</span>
                </v-btn>
              </div>
            </div> 
            <div class="popup-scroll-area">
              <div class="table-wrap">
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
    </div>
    <div class="popup-foot">
      <div class="info-area">
        <div class="info-tip">
          <p>법인 사업자 계정으로 가입하시려면 법인 이메일 주소가 필요합니다.</p>
          <p>법인 이메일이 없으신 경우, 개인 계정으로 가입 후 고객센터로 문의 해 주시기 바랍니다.</p>
        </div>
        <div class="info-title"> 
          <p class="info-txt">소속 기업이 등록되어있지 않다면? </p>                   
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
      <div class="btn-wrap popup">
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
.no-data{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  width: 100%;
  .no-data-tit{
    color:  #111518;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 150%;
  }
  .no-data-txt{
    margin-top: .75rem; 
    color: #666;
    font-size: 1rem;
    line-height: 150%;
  }
}
.search-area{
  .v-field__clearable {
    right: 3rem;
  }

  .v-theme--DefaultTheme .v-field__input{
    padding-right: 5rem;
  }
}
.btn-wrap.popup{
  margin-top: .5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #E5E5E5;
}
.popup-agree-wrap .popup-cont{
  overflow: hidden;
  max-height:max-content;
}
.info-area{
  .info-tip{
    color:  #666;
    font-size: 0.875rem;
  }
  .info-title{
    padding: .5rem 0;
    display: flex;
    align-items: center;
    font-size: 1rem;
    color:  #111518;
    line-height: 100%;
    .info-txt{
      margin-right:.5rem;
    }
  }
}
.search-area{
  padding: 1rem 2rem;
  background: #F7F8FC;
  display: flex;
  flex-direction: column;
  align-items: center;
  .input-wrap{
    position: relative;
    width: 36.75rem;  
    .v-input,
    .v-input__control{    
      width:100%;      
      background-color: #fff !important;
      border-radius: 0.5rem;
    }
  }
}
.popup-scroll-area .table-wrap {
  overflow: auto;
  height: 18.75rem;
  .v-input {
    font-size: 1rem;
  }
}
.table-wrap{
  padding: 0.75rem 0rem;
  margin: .5rem 0 2rem;
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
        &.bo-name{
          width: calc(100% - 26rem);
          text-align:center;
        }
        &.bo-num{
          width: 10rem;
          text-align:center;
        }
        &.bo-email{
          width: 16rem;
          text-align:center;
        }
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
        &.bo-name{
          width: calc(100% - 26rem);
          text-align:left;
        }
        &.bo-num{
          width: 10rem;
          text-align:center;
        }
        &.bo-email{
          width: 16rem;
          text-align:center;
        }
      }
    }
  }
} 

@media only screen and (max-width: 1280px) {
.no-data{
  padding: 2rem 1.5rem;
  .no-data-tit{
    font-size: 1.125rem;
  }
  .no-data-txt{
    margin-top: .25rem;
    font-size: 0.875rem;  
  }
}
  
.table-content{
  border-top: 1px solid #111518;
  
}
  .search-area{
    .v-field__clearable {
      right: 2.5rem;
    }
    .v-theme--DefaultTheme .v-field__input{
      padding-right: 5rem;
    }
  }
  .search-area{
    background: #F7F8FC;
    padding: 1rem 2rem;
    .input-wrap{
      max-width:36.75rem;
      width:100%;
      .v-input,
      .v-input__control{
        width:100%;      
        background-color: #fff !important;
        border-radius: 0.5rem;
      }
    }
  }
  .popup-scroll-area .table-wrap {
    overflow: auto;
      height: calc(100vh - 28rem); 
    .v-input {
      font-size: 0.875rem;
    }
  }
  .info-area{
    display: flex;
    min-height: 7.5rem;
    flex-direction: column;
    justify-content: flex-end;
    .info-tip{
      color:  #666;
      font-size: 0.75rem;
    }
    .info-title{
      font-size: 0.75rem;
    }
  }
  .table-head{
    display: none;
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
        padding: .75rem;
        flex-direction: column;
        li{    
          &.bo-name{
            width: 100%;
            text-align:left;
          }
          &.bo-num{
            width: 100%;
            text-align:left;;
          }
          &.bo-email{
            width: 100%;
            text-align:left;
          }
        }
      }
    }
  } 
}
</style>
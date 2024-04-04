<script setup lang="ts">
import { ref } from 'vue';
import { Form } from 'vee-validate';

const formTerms = ref({
  value: ['0', '1', '2', '3', '4'],
  allSelected: false,
});
const realNm = ref(false);
const pwRules = ref([(v: string) => !!v || '숫자, 영문, 특수문자를 조합해 8~20자리로 생성해주세요.']);
</script>

<template>
  <div class="member">
    <div class="member-header">
      <h3 class="h-title">아이디 찾기·비밀번호 변경</h3>
    </div>
    <div class="member-step">
      <div class="step-txt">비밀번호 변경</div>
    </div>
    <div class="completion-box">
      <i class="ico-success"><img src="@/assets/dss/images/icon/ic_ending_success_80.png" alt=""></i>
      <div class="completion-tit">
        <div><span >김신한</span>님의</div> 
        <p>비밀번호가 재설정 되었습니다.</p>
      </div>
    </div>
    <div class="completion-btn-area">
      <v-btn
        :ripple="false"
        variant="tonal"
        color="secondary"
        size="x-large"
        rounded="lg"           
        class="btn-w14"    
      >
      메인
      </v-btn>
      <v-btn
        :ripple="false"
        variant="flat"
        color="primary"           
        size="x-large"
        rounded="lg"     
        class="btn-w14"         
      >
      로그인
      </v-btn>
    </div> 
  </div>
</template>
<style lang="scss">
.member {
  .completion-box{
   
    padding: 3rem 0rem;
    text-align:center;
   
    .ico-success{
      img{
      width: 5rem;
      height:5rem;
      }
    }
    .completion-tit{
      margin-top:2rem;
      > div{
        font-size: 1.5rem;
        font-weight: 500;
        color: #111518;
       > span{
          color: #356CFF;
        }
      }
      > p{
        padding-top:.75rem;
        font-size: 1.125rem;
        font-weight: 400;
      }
 
    }
  }
  .btn-w14{
  min-width: 14rem;
  max-width: 14rem;
  }
  .completion-btn-area{
      margin: 0 auto;
      padding-top: 4rem;
      display:flex;
      width: 29rem;     
      text-align: center;
    .v-btn {
        min-width: calc(50% - .5rem);        
      + .v-btn{
        margin-left: 1rem;
      }
    } 
  }
}
@media only screen and (max-width: 1280px) {
  .member { 
    .completion-btn-area{
      margin: 0 auto;
      max-width: 19.5rem;
      padding-top: 2.5rem;
    }
    .completion-box{
      padding: 2rem 0rem;
      text-align:center;
      .ico-success{
        img{
        width: 4.5rem;
        height:4.5rem;
        }
      }
      .completion-tit{
        margin-top:2rem;
        > div{
          font-size: 1.125rem;
          font-weight: 500; 
        }
        p{
          padding-top:.5rem;
          font-size: 1rem;     
        } 
      }
    }
    .btn-w14{
        min-width: 100%;
    }

  } 
}
</style>
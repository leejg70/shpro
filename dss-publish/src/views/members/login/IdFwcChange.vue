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
    <!-- <div class="member-step">
      <div class="step-txt">본인 인증</div>
    </div>
    <div class="member-text">
      <p class="text">본인 확인을 위한 휴대폰인증을 진행합니다.</p>
    </div> -->
    <div class="change-box">
      <p class="change-tit">김신한님의 아이디는 <span>hg**@ shinhan.com</span> 입니다</p>
      <div class="change-btn-area">
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
    <div class="form-tit-area">
      <div class="form-txt"><span>비밀번호</span> 를 잊으셨나요?</div>
      <p class="form-s-txt">비밀번호 재설정을 통해 변경이 가능합니다.</p>
    </div>
    <Form class="form-wrap change">
      <div class="form-box-group">
        <div class="form-group">
          <div class="ele-tit">
            <v-label>비밀번호 재설정</v-label>
          </div>
          <div class="input-wrap">
            <v-text-field 
              color="primary" 
              hide-details="auto"
              :rules="pwRules"
              persistent-placeholder 
              placeholder="새 비밀번호" 
              variant="outlined" clearable
            ></v-text-field>  
          </div>
        </div>
        <div class="form-group">
          <div class="ele-tit">
            <v-label>비밀번호 확인</v-label>
          </div>
          <div class="input-wrap">
            <v-text-field 
              color="primary" 
              hide-details="auto"
              :rules="pwRules"             
              persistent-placeholder 
              placeholder="새 비밀번호 확인" 
              variant="outlined" clearable
            ></v-text-field>  
          </div>
        </div>
      </div>
      <div class="change-btn-area">
          <v-btn
            :ripple="false"
            variant="flat"
            color="primary"           
            size="x-large"
            rounded="lg"     
            class="btn-w14"
            disabled
          >
          비밀번호 변경
        </v-btn>
      </div>  
    </Form>
  </div>
</template>
<style lang="scss">
.member {
  .form-tit-area{
    padding-top: 5rem;
    .form-txt{
      font-size: 1.5rem;   
      font-weight: 500;
      line-height: 150%;
      span{
        color: #356CFF;
      }
    }
    .form-s-txt{
      margin-top: 0.5rem;
      font-size: 1.125rem;
      line-height: 150%;
    }
  }
  .form-wrap.change{
    border-bottom: 0;
    .form-box-group{
      margin: 1rem 0 2.5rem;
      padding: 1.5rem 0; 
      border-top: 1px solid #111518;
      border-bottom: 1px solid #E5E5E5;
      .form-group{
        .ele-tit{
          padding-top: 0.6rem;
        }
      }
    }
  }
  .change-box{
    .change-tit{
      padding: 3rem 0rem;
      font-size: 1.5rem;
      text-align: center;
      span{
        color:#356CFF;
      }  
    }
  }
  .btn-w14{
  min-width: 14rem;
  }
  .change-btn-area{
    padding-top: 1.5rem;
    text-align: center;
  }
}
@media only screen and (max-width: 1280px) {
  .member { 
    .form-wrap.change{ 
    .form-box-group{
      margin: 1rem 0 1.5rem;
      .form-group{
        .ele-tit{
          padding-top: 0;
        }
      }
    }
  }
  .btn-w14{
      min-width: 100%;
  }
  .form-tit-area{
    padding-top: 4rem; 
    .form-txt{
      font-size: 1.25rem;  
    }
    .form-s-txt{
      margin-top: 0.75rem;
      font-size: 1rem;
    }
  }
  .change-btn-area{
    padding-top: 1rem;
  }
  .change-box{
    .change-tit{
      padding: 2rem 0; 
      font-size: 1.125rem; 
    }
  }

  } 
}
</style>
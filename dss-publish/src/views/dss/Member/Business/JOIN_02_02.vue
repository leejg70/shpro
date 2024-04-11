<script setup lang="ts">
import { ref } from 'vue';

const checkbox = ref(false);
</script>

<template>
  <div class="member">
    <div class="member-header">
      <h3 class="h-title">회원가입 (개인)</h3>
    </div>
    <div class="member-step">
      <div class="step-txt">서비스 이용약관</div>
    </div>
    <div class="member-text">
      <p class="text">서비스 이용약관에 동의해 주세요.</p>
    </div>
    <Form class="form-wrap">    
      <div class="form-group agree-checkbox">
        <div class="form-checkbox"> 
          <v-checkbox
            v-model="checkbox"
            label="아래의 이용약관에 동의합니다."
            hide-details
            class="check-all"
          ></v-checkbox>  
        </div> 
        <div class="text-area">

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
    </Form>
  </div>
</template> 

<style>
.form-group{
  &.agree-checkbox{ 
  .text-area{
    height: 25rem;
    padding: 1.5rem 2rem 0rem 0rem;
    border-top: 1px solid #E5E5E5;
    border-bottom: 1px solid #E5E5E5;
  }
  .form-checkbox {
      padding: 1.5rem 0;
      border-top: 1px solid #111518;     
    .v-checkbox {
      .v-label{
        margin-left: .5rem;
        font-size: .875rem;
      }
    }
  }
}
}

@media only screen and (max-width: 1280px) {
  .form-group{
    &.agree-checkbox{ 
      .form-checkbox {
          padding: 1rem 0;
          border-top: 1px solid #111518;    
        .v-checkbox {
          .v-label{
            margin-left: .5rem;
            font-size: .875rem;
          }
        }
      }
    }
  }
}
</style>
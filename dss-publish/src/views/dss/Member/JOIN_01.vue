<template>
  <div class="member">
    <div class="member-header">
      <h3 class="h-title">회원가입</h3>
    </div>
    <div class="member-step">
      <div class="step-txt">회원 유형 선택</div>
    </div>
    <div class="member-text">
      <p class="text">회원님에게 맞는 유형을 선택해주세요.</p>
    </div>
    <Form class="form-wrap">  
        <v-radio-group class="mb-type-wrap">
          <v-radio 
            label="개인 회원" 
            value="개인 회원"
            class="mb-type-radio"
          >      
          <p class="mb-type-stit">개인 회원인 경우 선택하세요. 만 19세 이상만 가입 가능합니다.</p>
          </v-radio>
          <v-radio 
            label="개인사업자 회원" 
            value="개인사업자 회원"
            class="mb-type-radio"
          >  
          <p class="mb-type-stit">개인사업자 회원은 가입 후 관리자의 승인 이후 자유로운 사용이 가능합니다.</p>
          </v-radio>
          <v-radio 
            label="법인사업자 회원" 
            value="t법인사업자 회원"
            class="mb-type-radio"
          >         
          <p class="mb-type-stit">법인 사업자 회원은 법인 이메일 주소가 필요하며 없으신 경우, 개인 계정으로 가입 후 고객센터로 문의해 주시기 바랍니다.</p>
          </v-radio>
        </v-radio-group>
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
    </Form>
  </div>
</template> 
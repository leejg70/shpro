<script setup>
import { ref } from 'vue';
</script>
<template>
  <div class="popup-wrap w36">
    <div class="popup-head">
      <h3 tabindex="0">기업추가</h3>
    </div>
    <div class="popup-cont">         
        <div class="member"> 
            <Form class="form-wrap">
                <div class="form-box busi-add">                 
                    <div class="form-group">
                    <div class="ele-tit">
                        <v-label>기업명</v-label>
                    </div>
                    <div class="input-wrap">
                        <v-text-field
                        aria-label="기업명 입력"                           
                        placeholder="기업명 입력"
                        density="comfortable"
                        variant="outlined"
                        color="primary"
                        hide-details="auto"
                        clearable
                        required
                        ></v-text-field>
                    </div>
                                        
                    </div>
                    <div class="form-group">
                        <div class="ele-tit">
                            <v-label>사업자등록번호</v-label>
                        </div>
                        <div class="input-wrap">
                            <v-text-field
                            aria-label="사업자등록번호 입력"                           
                            placeholder="[-]를 제외한 사업자등록번호 입력"
                            density="comfortable"
                            variant="outlined"
                            color="primary"
                            hide-details="auto"
                            clearable
                            required
                            ></v-text-field>
                        </div>
                        <p class="text-tip error">유효한 사업자번호가 아닙니다. 확인 후 다시 입력해주세요.</p>                  
                    </div>
                    <div class="form-group">
                        <div class="ele-tit">
                            <v-label>법인 도메인</v-label>
                        </div>
                        <div class="input-wrap">
                            <v-text-field
                            aria-label="법인 도메인 입력"                           
                            placeholder="@를 제외한 주소 입력"
                            density="comfortable"
                            variant="outlined"
                            color="primary"
                            hide-details="auto"
                            clearable
                            required
                            ></v-text-field>
                        </div>
                        <p class="text-tip error">인 도메인이 올바르지 않습니다. 확인 후 다시 입력해주세요.</p>                  
                    </div>                               
                </div>           
            </Form>
        </div>       
    </div>
    <div class="popup-foot">
      <div class="btn-wrap type2">
        <v-btn
            variant="outlined"
            color="Outlinded"
            size="large"
            rounded="lg"
            class="btn-w8"
        >
        취소
        </v-btn>
        <v-btn
          variant="flat"
          color="primary"
          size="large"
          rounded="lg"
          class="btn-w14"
        >
        기업추가
        </v-btn> 
      </div>    
    </div>
  </div>
</template>

<style lang="scss">
  .popup-scroll-area {padding: 0.5rem 0;}
</style>
<template>
  <v-dialog v-model="dialogInfo.toggle" width="auto">
    <div class="popup-alert-wrap">
      <div class="alert-cont">
        <p class="text">
          {{ dialogInfo.text }}
        </p>
        <!--
        <p class="text">인증이 완료 되었습니다.</p>
        <p class="text">인증번호가 올바르지 않습니다.<br>확인 후 다시 입력해 주세요.</p>
        <p class="text">비밀번호가 변경되었습니다.</p>
        <p class="text">본인인증 시간이 만료되었습니다.<br>비밀번호 변경을 계속 하시려면 다시 본인인증을 진행해주세요.</p>
        <p class="text">입력시간을 초과하였습니다.<br>인증번호 재전송 후 다시 시도해주세요.</p>
        <p class="text">입력하신 정보는 존재하지 않습니다.<br>홈페이지 회원가입 후 로그인 해주세요.</p>
        <p class="text">본인인증 시간이 만료되었습니다.<br>다시 시도하시려면 본인인증을 다시 진행해주세요.</p>
        -->
      </div>
      <div class="alert-foot">
        <v-btn variant="text" class="default" @click="close">확인</v-btn>
      </div>
    </div>
    <!-- // Alert 경고창 -->
  </v-dialog>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  dialogInfo: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}
</script>




<style scoped>
.v-btn--size-default {
  font-size: 1.4rem;
}
</style>
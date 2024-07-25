<template>
  <PopupAlert :dialog-info="dialogInfo" @close="closePopup" />
  <button @click="openPopup">팝업 열기</button>
</template>
<script setup>
import { reactive, onMounted } from 'vue'
import PopupAlert from '@/views/pub/Components/PopupAlert.vue'

// 
let dialogInfo = reactive({
  text: '',
  toggle: false
})
// 템플릿 시작될때
onMounted(() => {
  dialogInfo.text = '인증이 완료 되었습니다.'
  dialogInfo.toggle = true
})
// 오픈팝업
const openPopup = () => {
  dialogInfo.text = '인증이 완료 되었습니다.'
  dialogInfo.toggle = true
}
// 크로즈팝업
const closePopup = () => {
  dialogInfo.toggle = false
}
</script>
<style scoped>
</style>
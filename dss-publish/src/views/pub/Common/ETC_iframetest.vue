<template>
  <div class="iframe-container">
    <iframe ref="iframe" src="https://www.shinhancard.com/pconts/html/agree/1217932_7911.html" class="no-scroll-iframe" @load="onLoad"></iframe>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const iframe = ref(null)

const onLoad = () => {
  const iframeDocument = iframe.value.contentDocument
  if (iframeDocument) {
    const style = document.createElement('style')
    style.textContent = `
      ::-webkit-scrollbar {
        width: 12px;
      }

      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      ::-webkit-scrollbar-thumb {
        background: #888;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    `
    iframeDocument.head.appendChild(style)
  }
}
</script>

<style scoped>
.iframe-container {
  padding: 40px; /* 원하는 패딩 값 */
  width: 100%;
  height: 500px; /* iframe 높이 맞추기 */
  box-sizing: border-box;
  border: 1px solid #ddd;
}

.no-scroll-iframe {
  width: 100%; /* 패딩 값만큼 줄이기 */
  height: 100%;
  border: none; /* 필요에 따라 border 제거 */
  overflow: hidden; /* iframe의 스크롤 숨기기 */
}
</style>
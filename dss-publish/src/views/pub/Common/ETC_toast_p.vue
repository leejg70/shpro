<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
const screenTimer = ref(0);
const screenY = ref(0);
//const snackbar = ref(false);
const handleScroll = () => {
  if (screenTimer.value) return;
  screenTimer.value = setTimeout(() => {
    screenY.value = window.scrollY;
    clearTimeout(screenTimer.value);
    screenTimer.value = 0;
  }, 100);
};

const toTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

import snackbar from '../Components/SnackBar.vue';
</script>
  <template>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

    <snackbar/>
   
    <transition name="fade-ani">
      <button v-show="screenY > 200" @click="toTop" class="top-btn">Top</button>
    </transition>

</template>
<style lang="scss">
.top-btn.fade-ani-enter-active,
.top-btn.fade-ani-leave-active {
  transition: all 0.5s ease; 
}
.top-btn.fade-ani-enter-from,
.top-btn.fade-ani-leave-to {
  opacity: 0;
  transform: translateY(5rem);
}
.top-btn{
position: fixed;
bottom: 5rem;
right: 2rem;
width: 8rem;
height: 8rem;
color: #fff;
background-color: #000;
border-radius: 50%;
z-index: 1000;
}
</style>
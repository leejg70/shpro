<script setup>
import { ref } from 'vue';

const items = ref([
  {
    link: '/MY_03',
    icon: 'my-contract',
    text: '나의계약',
    select: ''
  },
  {
    link: 'MY_04',
    icon: 'my-wishlist',
    text: '관심상품',
    select: ''
  },
  {
    link: 'MY_08',
    icon: 'my-qa',
    text: '나의문의',
    select: 'selected'
  },
  {
    link: 'MY_06',
    icon: 'my-alarm',
    text: '알림',
    select: ''
  }
]);
</script>

<template>
  <div class="my data-service">
    <div class="sub-title-area">
      <h4 class="sub-title">My</h4>
    </div>
    <div class="">
      <div class="">
        <p class=""><span>김신한</span>님 안녕하세요!</p>
        <div class="">
          <p class="">사업자회원으로의 승인이 대기중입니다.</p>
        </div>
      </div>
      <div class="">

      </div>
    </div>
    <div class="submenu-list">
      <v-row>
        <v-col cols="12" md="3" v-for="(item, i) in items">
          <v-list
            density="compact"
            :class="item.select"
          >
            <v-list-item
              :value="item"
              :to="item.link"
              link
            >
              <template v-slot:append>
                <v-avatar>
                  <v-icon :icon="item.icon" />
                </v-avatar>
              </template>
              <v-list-item-title v-text="item.text" />
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </div>
    <div class="submenu-case">
      <div class="total">총&nbsp; <span>10건</span></div>
    </div>
    <v-divider class="svc-divide" />
    <!-- 상품리스트 -->
    
    <!--// 상품리스트 -->
  </div>
</template>
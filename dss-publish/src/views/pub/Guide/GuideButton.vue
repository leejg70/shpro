<script setup>
import { ref } from 'vue';

const radioGroup = ref('비공개');
const items = [
    { name: '이용문의', value: '01' },
    { name: '제휴문의', value: '02' },
    { name: '기술문의', value: '03' },
    { name: 'Data서비스 문의', value: '04' },
    { name: '솔루션서비스 문의', value: '05' },
    { name: 'API서비스 문의', value: '06' },
    { name: '광고서비스 문의', value: '07' },
]
const selected = ref()
const tabs = ref('');
</script>

<template> 
  <div class="guide-wrap">   
    <v-row>
        <h2 class="sub-title">Buttons</h2>
        <v-col cols="12">        
        <UiParentCard title="Button x-large">
            <div class="d-flex ga-4 align-center flex-column flex-wrap flex-sm-row fill-height">
            <v-btn
                :ripple="false"
                variant="flat"
                color="primary"
                size="x-large"
                rounded="lg"
            >
                primary
            </v-btn>
            <v-btn
                :ripple="false"
                variant="flat"
                color="secondary"
                size="x-large"
                rounded="lg"
            >
                secondary
            </v-btn>
            <v-btn
            :ripple="false"
                variant="flat"
                color="Tertiary"
                size="x-large"
                rounded="lg"
            >
                Tertiary
            </v-btn>
            <v-btn
                :ripple="false"
                variant="outlined"
                color="primary"
                size="x-large"
                rounded="lg"
            >
                primary outlined
            </v-btn>
            <v-btn
                :ripple="false"
                variant="outlined"
                color="Outlinded"
                size="x-large"
                rounded="lg"
            >
                Outlinded
            </v-btn>
            </div>
        </UiParentCard>
        </v-col>
        <!-- Outlined Buttons -->
        <v-col cols="12">
        <UiParentCard title="Button large">
            <div class="d-flex ga-4 align-center flex-column flex-wrap flex-sm-row fill-height">
            <v-btn
                :ripple="false"
                variant="flat"
                color="primary"
                size="large"
                rounded="md"
            >
                primary
            </v-btn>
            <v-btn
                :ripple="false"
                variant="flat"
                color="secondary"
                size="large"
                rounded="md"
            >
                secondary
            </v-btn>
            <v-btn
                :ripple="false"
                variant="flat"
                color="Tertiary"
                size="large"
                rounded="md"
            >
                Tertiary
            </v-btn>
            <v-btn
                :ripple="false"
                variant="outlined"
                color="primary"
                size="large"
                rounded="md"
            >
                primary outlined
            </v-btn>
            <v-btn
                :ripple="false"
                variant="outlined"
                color="Outlinded"
                size="large"
                rounded="md"
            >
                Outlinded
            </v-btn>
            </div>
        </UiParentCard>
        </v-col>
        <!-- Outlined Buttons -->
        <v-col cols="12">
        <UiParentCard title="Button small">
            <div class="d-flex ga-4 align-center flex-column flex-wrap flex-sm-row fill-height">               
            <v-btn
                :ripple="false"
                variant="flat"
                color="primary"
                size="small"
                rounded="md"
            >
                primary
            </v-btn>
            <v-btn
                :ripple="false"
                variant="flat"
                color="secondary"
                size="small"
                rounded="md"
            >
                secondary
            </v-btn>
            <v-btn
                :ripple="false"
                variant="flat"
                color="Tertiary"
                size="small"
                rounded="md"
            >
                Tertiary
            </v-btn> 
            <v-btn
                :ripple="false"
                variant="outlined"
                color="primary"
                size="small"
                rounded="md"
            >
                primary outlined
            </v-btn>
            <v-btn
                :ripple="false"
                variant="outlined"
                color="Outlinded"
                size="small"
                rounded="md"
            >
                Outlinded
            </v-btn>                  
            </div>
        </UiParentCard>
        </v-col>
        <!-- Outlined Buttons -->
        <v-col cols="12">
        <UiParentCard title="Button x-small">
            <div class="d-flex ga-4 align-center flex-column flex-wrap flex-sm-row fill-height">               
            <v-btn
                :ripple="false"
                variant="flat" 
                color="primary"
                size="x-small"
                rounded="md"
            >
                primary
            </v-btn>
            <v-btn
                :ripple="false"
                variant="flat"
                color="secondary"
                size="x-small"
                rounded="md"
            >
                secondary
            </v-btn>
            <v-btn
                :ripple="false"
                variant="flat"
                color="Tertiary"
                size="x-small"
                rounded="md"
            >
                Tertiary
            </v-btn> 
            <v-btn
                :ripple="false"
                variant="outlined"
                color="primary"
                size="x-small"
                rounded="md"
            >
                primary outlined
            </v-btn>
            <v-btn
                :ripple="false"
                variant="outlined"
                color="Outlinded"
                size="x-small"
                rounded="md"
            >
                Outlinded
            </v-btn>                  
            </div>
        </UiParentCard>
        </v-col>
        <!-- Outlined Buttons -->
        <v-col cols="12">
        <UiParentCard title="Button disabled">
            <div class="d-flex ga-4 align-center flex-column flex-wrap flex-sm-row fill-height">               
            <v-btn
                :ripple="false"
                variant="flat"
                color="primary"
                size="x-large"
                rounded="lg"
                disabled
            >
                primary
            </v-btn> 
            <v-btn
                :ripple="false"
                variant="outlined"
                color="primary"
                size="x-large"
                rounded="lg"
                disabled
            >
                primary outlined
            </v-btn>
            <v-btn
                :ripple="false"
                variant="outlined"
                color="Outlinded"
                size="x-large"
                rounded="lg"
                disabled
            >
                Outlinded
            </v-btn>                  
            </div>
        </UiParentCard>
        </v-col>
        <!-- Outlined Buttons --> 
    </v-row>

    <v-row>
        <h2 class="sub-title">Line Tabs</h2>
        <v-col cols="12">
            <v-sheet>
                <v-slide-group v-model="tabs" show-arrows mandatory class="line-tabs">
                    <v-slide-group-item
                        v-for="item in [ '1번째 텝', '2번째 텝', '3번째 텝', '4번째 텝' ]"
                        :key="item"
                        v-slot="{ isSelected, toggle }"
                    >
                        <v-btn
                            variant="text"
                            size="large"
                            :class="isSelected ? 'active': ''"
                            @click="toggle"
                        >
                            {{ item }}
                        </v-btn>
                    </v-slide-group-item>
                </v-slide-group>

                <v-window v-model="tabs">
                    <v-window-item value="0">
                        <!-- tab1 - GranData -->
                        1번째 텝
                        <!--// tab1 - GranData -->
                    </v-window-item>
                    <v-window-item value="1">
                        <!-- tab1 - GranData -->
                        2번째 텝
                        <!--// tab1 - GranData -->
                    </v-window-item>
                    <v-window-item value="2">
                        <!-- tab1 - GranData -->
                        3번째 텝
                        <!--// tab1 - GranData -->
                    </v-window-item>
                    <v-window-item value="3">
                       <!-- tab1 - GranData -->
                       4번째 텝
                     <!--// tab1 - GranData -->
                    </v-window-item>
                </v-window>
            </v-sheet>
        </v-col>
    </v-row>

    <v-row>
        <h2 class="sub-title">Slide Tabs</h2>
        <v-col cols="12">
            <div class="slide-btn">
                <v-slide-group v-model="selected" show-arrows mandatory>
                    <v-slide-group-item
                        v-for="item in [ '전체', 'Data 상품', '솔루션서비스', 'API서비스' ]"
                        :key="item"
                        v-slot="{ isSelected, toggle }"
                    >
                        <v-btn
                            min-width="8rem"
                            rounded="xl"
                            variant="outlined"
                            size="large"
                            :class="isSelected ? 'bg-primary-darkblue': ''"
                            @click="toggle"
                        >
                            {{ item }}
                        </v-btn>
                    </v-slide-group-item>
                </v-slide-group>
            </div>               
        </v-col>     
    </v-row>
    <v-row>
        <h2 class="sub-title">Flag</h2>
        <v-col cols="12">
            <div class="prod-flag-wrap">
                <span class="flag blue">시장분석</span>
                <span class="flag violet">지역경제</span> 
                <span class="flag green">대안신용</span>
                <span class="flag yellow">마이데이터</span>
                <span class="flag pink">카드데이터</span>
            </div>                
        </v-col>     
    </v-row>
    <v-row>
        <h2 class="sub-title">Badge</h2>
        <v-col cols="12">
            <div class="badge">
                    <v-badge color="#FFF5E7" text-color="#FF9C00" content="NEW" class="badge-txt" />
                    <v-badge color="#FFF5F5" text-color="#FF6666" content="HOT" class="badge-txt" />
                </div>              
        </v-col>     
    </v-row>
    <v-row>
        <h2 class="sub-title">Radio</h2>
        <v-col cols="12">
            <div class="inp-radio">
                <v-radio-group
                    v-model="radioGroup"
                    hide-details
                    inline
                    density="compact"
                >
                    <v-radio label="공개" value="공개" />
                    <v-radio label="비공개" value="비공개" />
                </v-radio-group>
            </div>                 
        </v-col>     
    </v-row>
    <v-row>
        <h2 class="sub-title">Select</h2>
        <v-col cols="12">
            <div class="inp-select" style="max-width:38.4rem;">
                <v-select
                    v-model="selected"
                    :items="items"
                    item-title="name"
                    item-value="value"
                    hide-details
                    variant="outlined"
                    color="primary"
                    placeholder="선택"
                />
            </div>                 
        </v-col>     
    </v-row>    
  </div>
</template>
<style scoped>
.guide-wrap {
    padding: 4rem;
    margin: 0 auto;
    max-width: 128rem;

   .sub-title {
    padding: 1rem 0;    
    font-size: 2rem;
   }
   .member {
        padding: 0;
        max-width: 100%;
    }
    .v-row + .v-row{
        margin-top: 5rem;
    }
}
</style>
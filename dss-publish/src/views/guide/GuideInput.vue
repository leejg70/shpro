<script setup lang="ts">
import { ref } from 'vue';

// common components
// import SvgSprite from '@/components/shared/SvgSprite.vue';
// import ComponentTitle from '@/components/shared/ComponentTitle.vue';
// import UiParentCard from '@/components/shared/UiParentCard.vue';

// define consts
const caption_email1 = ref('demo@company.com');
const caption_email2 = ref('demo@company.com');
const caption_email3 = ref('demo@company.com');
const validate_email1 = ref('demo.sd');
const validate_email2 = ref('demo.sd');
const multiline2 = ref('Default Value');
const select_sm = ref<string>('Small');
const full_text = ref('Default');
const some_imp1 = ref('Default');
const some_imp2 = ref('Default');
const some_imp3 = ref('Default');

// rules for email textfield
const rules = ref({
  required: (value: string) => !!value || 'Required.',
  counter: (value: string) => value.length <= 20 || 'Max 20 characters',
  email: (value: string) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || 'Invalid e-mail.';
  }
});

//  data of select
const items = ref(['None', 'demo@company.com', 'Judiya@company.com', 'taju_diya@company.com']);

// component content
const page = ref({ title: 'Textfield' });
const subContent = ref({ content: 'Text fields let users enter and edit text.' });
const path = ref({ filepath: 'src/views/forms/components/textfield' });
const link = ref({ filelink: 'https://vuetifyjs.com/en/components/text-fields/' });
</script>

<template>
  <ComponentTitle :title="page.title" :subContent="subContent.content" :path="path.filepath" :link="link.filelink"></ComponentTitle>
  <v-row>
    <v-col cols="12">
      <v-row>  
        <v-col cols="12" md="12">
          <!-- general -->
          <UiParentCard title="General">
            <div>
              <v-label>
                아이디
              </v-label>
              <v-text-field 
                color="primary" 
                persistent-placeholder 
                placeholder="Email Address" 
                variant="outlined"
              ></v-text-field>

              <v-label>
                아이디 value 있을경우
              </v-label>
              <v-text-field 
                color="primary" 
                persistent-placeholder 
                placeholder="Email Address" 
                value="demo@company.com" 
                variant="outlined"
              ></v-text-field>

              <v-label>
                아이디 placeholder/disabled 있을경우
              </v-label>
              <v-text-field 
                color="primary" 
                persistent-placeholder 
                placeholder="demo@company.com" 
                variant="outlined" 
                disabled
              ></v-text-field>

              <v-label>
                아이디 placeholder/value/disabled 있을경우
              </v-label>
              <v-text-field 
                color="primary" 
                persistent-placeholder 
                placeholder="demo@company.com" 
                value="demo@company.com" 
                variant="outlined" 
                disabled
              ></v-text-field>

              <v-label>
                아이디 삭제버튼
              </v-label>
              <v-text-field 
                color="primary" 
                persistent-placeholder 
                placeholder="demo@company.com" 
                variant="outlined" 
                clearable
              ></v-text-field>

              <v-label>
                패스워드 삭제버튼
              </v-label>
              <v-text-field 
                color="primary" 
                :rules="[() => !!password || '비밀번호를 입력해주세요.']" 
                persistent-placeholder 
                placeholder="demo@company.com" 
                variant="outlined" clearable
              ></v-text-field>             
        
              <v-label>
                셀렉트버튼
              </v-label>
              <!-- Radio with Label -->
                         
              <div>
                <v-radio-group class="v-btn-radio" inline>
                  <v-radio label="SKT" color="primary" value="SKT"></v-radio>
                  <v-radio label="KT" color="primary" value="KT"></v-radio>
                  <v-radio label="LG U+" color="primary" value="LG U+"></v-radio>
                  <v-radio label="알뜰폰" color="primary" value="알뜰폰" ></v-radio>
                </v-radio-group>
              </div>               
              <div>
                <v-select             
                label="Select"
                :items="['SKT알뜰폰', 'KT알뜰폰', 'LG U+알뜰폰']"              
                ></v-select> 
              </div>
         
            </div>
          </UiParentCard>
        </v-col>
      </v-row>
    </v-col>
  </v-row> 
</template>
<template>
  <div class="contents-box">
    <div class="has_flow_step">
      <div class="step_txt">회원가입-개인</div>
      <div class="flow_step" role="text">
        <ul>
          <li class="current"><i>1</i><span>본인확인</span></li>
          <li><i>2</i><span>서비스이용동의</span></li>
          <li><i>3</i><span>정보입력</span></li>
          <li><i>4</i><span>가입완료</span></li>
        </ul>
        <span class="blind">현재 1단계 본인확인 진행중</span>
      </div>
    </div>
    <div class="h_wrap h-wrap-dx line">
      <h4 class="h_title">본인확인을 위한 휴대폰인증을 진행합니다.</h4>
    </div>
    <div class="form_type">
      <v-form>
        <div class="form_ele">
          <div class="ele_tit">
            <label for="agreement">약관동의</label>
          </div>
          <div class="work_info">
            <div class="agreement_wrap">
              <div class="agreement_inner">
                <dl class="accordion_wrap accordion_check agree_depth01">
                  <dt class="accordion_header">
                    <div class="check_wrap type_agree all">
                      <v-checkbox label="휴대폰 본인확인 전체 동의"></v-checkbox>
                    </div>
                    <v-btn-toggle
                      v-model="toggle"
                      @click="toggleShow"
                    >
                      <v-btn icon="mdi-format-align-justify"></v-btn>
                    </v-btn-toggle>
                  </dt>
                  <dd class="accordion_body" :class="show ? 'active' : ''">
                    <div class="agree_depth02">
                      <div class="check_wrap">
                        <v-checkbox label="[필수] 휴대폰 본인확인 이용 동의"></v-checkbox>
                        <v-btn variant="text" @click="dialog = true">
                          내용보기
                        </v-btn>
                      </div>
                      <div class="check_wrap">
                        <v-checkbox label="[필수] 고유식별정보 처리 동의"></v-checkbox>
                        <v-btn variant="text" @click="dialog = true">
                          내용보기
                        </v-btn>
                      </div>
                      <div class="check_wrap">
                        <v-checkbox label="[필수] 통신사 이용약관 동의"></v-checkbox>
                        <v-btn variant="text" @click="dialog = true">
                          내용보기
                        </v-btn>
                      </div>
                      <div class="check_wrap">
                        <v-checkbox label="[필수] 개인정보 수집 및 이용 동의"></v-checkbox>
                        <v-btn variant="text" @click="dialog = true">
                          내용보기
                        </v-btn>
                      </div>
                      <div class="check_wrap">
                        <v-checkbox label="[필수] 개인정보 제3자 제공 동의"></v-checkbox>
                        <v-btn variant="text" @click="dialog = true">
                          내용보기
                        </v-btn>
                      </div>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </v-form>
    </div>
  </div>
  <!-- <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    fullscreen
    :scrim="false"
  >
    <v-card>
      <v-toolbar>
        <v-toolbar-title>휴대폰 본인확인 이용 동의</v-toolbar-title>
        <v-btn
          icon="mdi-close"
          @click="dialog = false"
        ></v-btn>
      </v-toolbar>
      <v-list>
        <v-list-item
          subtitle="Notify me about updates to apps or games that I downloaded"
          title="Notifications"
          @click="notifications = !notifications"
        >
          <template v-slot:prepend>
            <v-list-item-action start>
              <v-checkbox-btn v-model="notifications" color="primary"></v-checkbox-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-list-item
          subtitle="Auto-update apps at any time. Data charges may apply"
          title="Sound"
          @click="sound = !sound"
        >
          <template v-slot:prepend>
            <v-list-item-action start>
              <v-checkbox-btn v-model="sound" color="primary"></v-checkbox-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-list-item
          subtitle="Automatically add home screen widgets"
          title="Auto-add widgets"
          @click="widgets = !widgets"
        >
          <template v-slot:prepend>
            <v-list-item-action start>
              <v-checkbox-btn v-model="widgets" color="primary"></v-checkbox-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
      </v-list>
    </v-card>
  </v-dialog> -->
</template>
<script>
export default {
  data () {
    return {
      toggle: undefined,
      dialog: false,
      notifications: false,
      sound: false,
      widgets: false,
    }
  },
  methods: {
    toggleShow(){
        this.show = !this.show;
    }
  }
}
</script>
<style lang="scss">
.accordion_body {display: none;}
.accordion_body.active {display: block;}
</style>
<script setup>
import { ref } from 'vue';

const tab = ref(null);
const tab05_1 = ref(null);
const tab05_2 = ref(null);
const agree = ref(false);
</script>

<template>
  <v-dialog v-model="agree">
    <!-- 샘플 버튼 -->
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps">
        개인정보 제3자 제공 동의 팝업
      </v-btn>
    </template>
    <!-- // 샘플 버튼 -->

    <!-- 개인정보 제3자 제공 동의 -->
    <div class="popup-wrap large">
      <div class="popup-head">
        <h3 class="h-title">개인정보 제3자 제공 동의</h3>
      </div>
      <div class="popup-cont">
        <v-card
          flat
          rounded="0"
          class="tab-cont"
        >
          <v-tabs
            v-model="tab"
            bg-color="transparent"
            color="selected"
          >
            <v-tab value="tab05_1">NICE평가정보</v-tab>
            <v-tab value="tab05_2">KCB</v-tab>
          </v-tabs>
          <v-window v-model="tab">
            <v-window-item
              :transition="false"
              :reverse-transition="false"
              value="tab05_1"
            >
              <v-tabs
                v-model="tab05_1"
                bg-color="transparent"
                color="selected"
                class="tab-list"
              >
                <v-tab value="tab05_1_1">SKT</v-tab>
                <v-tab value="tab05_1_2">KT</v-tab>
                <v-tab value="tab05_1_3">LGU+</v-tab>
              </v-tabs>
              <v-window v-model="tab05_1">
                <v-window-item
                  :transition="false"
                  :reverse-transition="false"
                  value="tab05_1_1"
                >
                  <v-card
                    flat
                  >
                    <v-card-text>
                      [개인정보 제3자 제공 동의]<br>
                      "알뜰폰(MVNO)"사업자는 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.<br><br>
                      제1조 (알뜰폰(MVNO) 사업자)<br>
                      SK텔레콤의 알뜰폰(MVNO) 사업자는 SK텔링크(SK세븐모바일),아이즈비전(아이즈모바일),이마트(이마트알뜰폰),유니컴즈(모빙),LG헬로비전(헬로모바일),머천드코리아(마이월드),에스원(안심모바일),큰사람(이야기모바일),스마텔(스마텔),프리텔레콤(프리티),조이텔(조이텔),KCT(티플러스), KB국민은행(Liiv M)입니다.<br><br>
                      제2조 (제공목적)<br>
                      본 동의는 본인확인서비스를 제공하기 위하여 본인확인기관인 SK텔레콤과 본인확인서비스 이용자간 본인확인서비스 이용에 필요한 고객정보를 위탁하여 본인확인서비스를 제공 하는 것에 대해 동의합니다.<br><br>
                      제3조 (제공정보)<br>
                      휴대폰 본인확인서비스 제공에 필요한 개인정보로 성명, 휴대폰번호, 생년월일, 내·외국인구분, 성별 정보입니다.<br><br>
                      제4조 (제공받는자)<br>
                      SK텔레콤<br><br>
                      제5조 (제공기간)<br>
                      이동통신사에서 보유중인 정보로서 별도 이용기간은 없습니다.<br><br>
                      "본인"은 정보제공에 동의하지 않으실 수 있으며, 동의하지 않으실 경우 휴대폰 본인확인서비스를 이용 하실 수 없습니다.
                    </v-card-text>
                  </v-card>
                </v-window-item>
                <v-window-item
                  :transition="false"
                  :reverse-transition="false"
                  value="tab05_1_2"
                >
                  <v-card
                    flat
                  >
                    <v-card-text>
                      [개인정보 제3자 제공 동의]<br>
                      "알뜰폰(MVNO)"사업자는 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.<br><br>
                      제1조 (알뜰폰(MVNO) 사업자)<br>
                      (주)케이티의 알뜰폰(MVNO) 사업자는 LG헬로비전, KT파워텔, 홈플러스, 씨엔커뮤니케이션, 에넥스텔레콤, 에스원, 위너스텔, 에이씨앤코리아, 세종텔레콤, KT텔레캅, 프리텔레콤(freeT), 이지모바일, kt M모바일, 앤텔레콤, 아이즈비전, 제이씨티, 머천드코리아, 장성모바일, 유니컴즈, 아이원, (주)파인디지털, (주)미니게이트, (주)핀플레이, 드림라인(주), KCT(Tplus), 와이엘랜드(여유텔레콤), 큰사람(이야기알뜰폰), (주)니즈텔레콤, (주)에이프러스(아시아모바일), (주)케이티스카이라이프, 한국피엠오㈜(밸류컴), (주)스마텔, (주)국민은행 입니다.<br><br>
                      제2조 (제공목적)<br>
                      본 동의는 본인확인서비스를 제공하기 위하여 본인확인기관인 (주)케이티와 본인확인서비스 이용자간 본인확인서비스 이용에 필요한 고객정보를 위탁하여 본인확인서비스를 제공 하는 것에 대해 동의합니다.<br><br>
                      제3조 (제공정보)<br>
                      휴대폰 본인확인서비스 제공에 필요한 개인정보로 성명, 휴대폰번호, 생년월일, 내·외국인구분, 성별 정보입니다.<br><br>
                      제4조 (제공받는자)<br>
                      (주)케이티<br><br>
                      제5조 (제공기간)<br>
                      이동통신사에서 보유중인 정보로서 별도 이용기간은 없습니다.<br><br>
                      "본인"은 정보제공에 동의하지 않으실 수 있으며, 동의하지 않으실 경우 휴대폰 본인확인서비스를 이용 하실 수 없습니다.
                    </v-card-text>
                  </v-card>
                </v-window-item>
                <v-window-item
                  :transition="false"
                  :reverse-transition="false"
                  value="tab05_1_3"
                >
                  <v-card
                    flat
                  >
                    <v-card-text>
                      [개인정보 제3자 제공 동의]<br>
                      "알뜰폰(MVNO)"사업자는 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.<br><br>
                      제1조 (알뜰폰(MVNO) 사업자)<br>
                      엘지유플러스의 알뜰폰(MVNO) 사업자는 인스코비(프리티), 머천드코리아(마이월드), (주)엠티티텔레콤(메리큐), (주)미디어로그, 이마트, 서경방송, 울산방송, 푸른방송, 남인천방송, 금강방송, 제주방송, (주)와이엘랜드(여유텔레콤), ACN코리아(플래시모바일), 이지모바일, 유니컴즈(모빙), 큰사람(이야기), 스마텔, 에넥스텔레콤(A모바일), 레그원(온국민폰), 드림에이치앤비(셀모바일), 조이텔(조이텔), 에스원(안심모바일), 원텔레콤, (주)국민은행(Liiv M), LG헬로비전(헬로모바일), 엔티온텔레콤, 인스모바일, 아시아모바일, 슈가모바일, 코나아이 입니다.<br><br>
                      제2조 (제공목적)<br>
                      본 동의는 본인확인 서비스를 제공하기 위하여 본인확인기관인 (주)엘지유플러스와 본인확인서비스 이용자간 본인확인서비스 이용에 필요한 고객정보를 위탁하여 본인확인서비스를 제공 하는 것에 대해 동의합니다.<br><br>
                      제3조 (제공정보)<br>
                      휴대폰 본인확인 서비스 제공에 필요한 개인정보로 성명, 휴대폰번호, 생년월일, 내·외국인구분, 성별 정보입니다.<br><br>
                      제4조 (제공받는자)<br>
                      (주)엘지유플러스<br><br>
                      제5조 (제공기간)<br>
                      이동통신사에서 보유중인 정보로서 별도 이용기간은 없습니다.<br><br>
                      "본인"은 정보제공에 동의하지 않으실 수 있으며, 동의하지 않으실 경우 휴대폰 본인 확인 서비스를 이용 하실 수 없습니다.
                    </v-card-text>
                  </v-card>
                </v-window-item>
              </v-window>
            </v-window-item>
            <v-window-item
              :transition="false"
              :reverse-transition="false"
              value="tab05_2"
            >
            <v-tabs
                v-model="tab05_2"
                bg-color="transparent"
                color="selected"
                class="tab-list"
              >
                <v-tab value="tab05_2_1">SKT</v-tab>
                <v-tab value="tab05_2_2">KT</v-tab>
                <v-tab value="tab05_2_3">LGU+</v-tab>
              </v-tabs>
              <v-window v-model="tab05_2">
                <v-window-item
                  :transition="false"
                  :reverse-transition="false"
                  value="tab05_2_1"
                >
                  <v-card
                    flat
                  >
                    <v-card-text>
                      [SKT 알뜰폰 제3자 동의]<br>
                      "알뜰폰(MVNO)" 사업자는 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.<br><br>
                      제1조 (알뜰폰(MVNO) 사업자)<br>
                      SK텔레콤의 알뜰폰(MVNO) 사업자는 KCT, 아이즈비전, 유니컴즈, 큰사람, 스마텔, SK텔링크, 이마트, 에스원, 프리텔레콤, LG헬로비전, 조이텔, 머천드코리아, KB국민은행입니다.<br><br>
                      제2조 (제공목적)<br>
                      본 동의는 본인확인 서비스를 제공하기 위하여 본인확인기관인 SK텔레콤와 본인확인서비스 이용자간 본인확인서비스 이용에 필요한 고객정보를 위탁하여 본인확인서비스를 제공 하는 것에 대해 동의합니다.<br><br>
                      제3조 (제공정보)<br>
                      휴대폰 본인확인 서비스 제공에 필요한 개인정보로 성명, 휴대폰번호, 생년월일, 내.외국인구분, 성별 정보입니다.<br><br>
                      제4조 (제공받는자)<br>
                      SK텔레콤<br><br>
                      제5조 (제공기간)<br>
                      이동통신사에서 보유중인 정보로서 별도 이용기간은 없습니다.<br><br>
                      "본인"은 정보제공에 동의하지 않으실 수 있으며, 동의하지 않으실 경우 휴대폰 본인 확인 서비스를 이용 하실 수 없습니다.
                    </v-card-text>
                  </v-card>
                </v-window-item>
                <v-window-item
                  :transition="false"
                  :reverse-transition="false"
                  value="tab05_2_2"
                >
                  <v-card
                    flat
                  >
                    <v-card-text>
                      [개인정보 제3자 제공 동의]<br>
                      "알뜰폰(MVNO)"사업자는 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.<br><br>
                      제1조 (알뜰폰(MVNO) 사업자)<br>
                      ㈜케이티의 알뜰폰(MVNO) 사업자는 LG헬로비전(헬로모바일),세종텔레콤(스노우맨),씨앤커뮤니케이션(WMVNO),에넥스텔레콤(A mobile),프리텔레콤(프리티),코드모바일(이지모바일),KT파워텔,위너스텔(Well),ACN코리아(플래시모바일),앤알커뮤니케이션(앤텔레콤),에스원(안심모바일),아이즈비전(아이즈모바일),머천드코리아(마이월드),KT M모바일(M모바일),유니컴즈(모빙),더원플랫폼(IplusU),스테이지파이브(핀플레이),드림라인(드림모바일),한국케이블텔레콤(TPLUS),와이엘랜드(여유알뜰폰),큰사람커넥트(이야기모바일),니즈텔레콤(니즈텔레콤),KT스카이라이프(스카이라이프모바일),에이프러스(아시아모바일), 한국피엠오(주)(밸류컴),(주)스마텔 입니다.<br><br>
                      제2조 (제공목적)<br>
                      본 동의는 본인확인 서비스를 제공하기 위하여 본인확인기관인 ㈜케이티와 본인확인서비스 이용자간 본인확인서비스 이용에 필요한 고객정보를 위탁하여 본인확인서비스를 제공 하는 것에 대해 동의합니다.<br><br>
                      제3조 (제공정보)<br>
                      휴대폰 본인확인 서비스 제공에 필요한 개인정보로 성명, 휴대폰번호, 생년월일, 내.외국인구분, 성별 정보입니다.<br><br>
                      제4조 (제공받는자)<br>
                      ㈜케이티<br><br>
                      제5조 (제공기간)<br>
                      이동통신사에서 보유중인 정보로서 별도 이용기간은 없습니다.<br><br>
                      "본인"은 정보제공에 동의하지 않으실 수 있으며, 동의하지 않으실 경우 휴대폰 본인 확인 서비스를 이용 하실 수 없습니다.
                    </v-card-text>
                  </v-card>
                </v-window-item>
                <v-window-item
                  :transition="false"
                  :reverse-transition="false"
                  value="tab05_2_3"
                >
                  <v-card
                    flat
                  >
                    <v-card-text>
                      [개인정보 제3자 제공 동의]<br>
                      "알뜰폰(MVNO)"사업자는 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.<br><br>
                      제1조 (알뜰폰(MVNO) 사업자)<br>
                      엘지유플러스의 알뜰폰(MVNO) 사업자는 프리티,마이월드,U+알뜰모바일,서경모바일,여유텔레콤,플래시모바일,이지톡,모빙,이야기모바일,스마텔,A모바일,온국민폰,셀모바일,조이텔,아이즈모바일,에스원안심모바일,원텔레콤,리브엠 (Liiv M),헬로모바일,밸류컴,엔티온텔레콤,스노우맨,앤텔레콤,제주방송,이마트,도시락모바일,인스모바일,니즈텔레콤,아시아모바일,슈가모바일, 코나아이 입니다.<br><br>
                      제2조 (제공목적)<br>
                      본 동의는 본인확인 서비스를 제공하기 위하여 본인확인기관인 ㈜엘지유플러스와 본인확인서비스 이용자간 본인확인서비스 이용에 필요한 고객정보를 위탁하여 본인확인서비스를 제공 하는 것에 대해 동의합니다.<br><br>
                      제3조 (제공정보)<br>
                      휴대폰 본인확인 서비스 제공에 필요한 개인정보로 성명, 휴대폰번호, 생년월일, 내.외국인구분, 성별 정보입니다.<br><br>
                      제4조 (제공받는자)<br>
                      ㈜엘지유플러스<br><br>
                      제5조 (제공기간)<br>
                      이동통신사에서 보유중인 정보로서 별도 이용기간은 없습니다.<br><br>
                      "본인"은 정보제공에 동의하지 않으실 수 있으며, 동의하지 않으실 경우 휴대폰 본인 확인 서비스를 이용 하실 수 없습니다.
                    </v-card-text>
                  </v-card>
                </v-window-item>
              </v-window>
            </v-window-item>
          </v-window>
        </v-card>
      </div>
      <v-btn
        @click="agree = false"
        variant="text"
        class="btn-popup-close"
      >
        <span class="sr-only">닫기</span>
      </v-btn>
    </div>
    <!-- // 개인정보 제3자 제공 동의 -->
  </v-dialog>
</template>

<style scoped>
.v-btn--size-default {
  font-size: 1.4rem;
}
</style>
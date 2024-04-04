
  <template>
      <v-dialog
      v-model="dialog"
      width="auto"
      >
      <div class="aaaaaa" style="width: 500px; height:500px; border:2px solid #eee">
        약관테스트
        <v-btn
          @click="dialog = false"
          color="primary"
          block
        >
          Close Dialog
        </v-btn>
      </div>
      </v-dialog>
  </template>


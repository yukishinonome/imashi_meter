<template>
  <div>
    <div v-if="printPage == 0" class="d-flex flex-column align-center">
      <hoge-card />
      <v-btn color="orange" @click="toInput()">課金金額入力</v-btn>
    </div>
    <div v-else-if="printPage == 1" class="d-flex flex-column align-center">
      <input-screen />
      <v-btn color="orange" @click="toImashime()">追加</v-btn>
    </div>
    <div v-else class="d-flex flex-column align-center">
      <imashime-card />
      <v-btn color="orange" @click="toMain()">閉じる</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import HogeCard from '~/components/HogeCard.vue'
import InputScreen from '~/components/InputScreen.vue'
import ImashimeCard from '~/components/ImashimeCard.vue'

enum PrintPage {
  MAIN,
  INPUT,
  IMASHIME
}

export default {
  components: {
    HogeCard,
    InputScreen,
    ImashimeCard
  },
  data: () => ({
    printPage: PrintPage.MAIN
  }),
  methods: {
    toInput() {
      this.printPage = PrintPage.INPUT
    },
    toImashime() {
      this.printPage = PrintPage.IMASHIME
    },
    toMain() {
      this.printPage = PrintPage.MAIN
    }
  }
}
</script>

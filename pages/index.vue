<template>
  <div>
    <div v-if="printPage == 'MAIN'" class="d-flex flex-column align-center">
      <hoge-card />
      <v-btn color="orange" @click="toInput()">課金金額入力</v-btn>
    </div>
    <div v-else-if="printPage == 'INPUT'" class="d-flex flex-column align-center">
      <input-screen />
      <v-btn color="orange" @click="toImashime()">追加</v-btn>
    </div>
    <div v-else class="d-flex flex-column align-center">
      <imashime-card />
      <v-btn color="orange" @click="toMain()">閉じる</v-btn>
    </div>
  </div>
</template>

<script>
import HogeCard from '~/components/HogeCard.vue'
import InputScreen from '~/components/InputScreen.vue'
import ImashimeCard from '~/components/ImashimeCard.vue'

export default {
  components: {
    HogeCard,
    InputScreen,
    ImashimeCard
  },
  data: () => ({
    printPage: 'MAIN'
  }),
  methods: {
    toInput() {
      this.printPage = 'INPUT'
    },
    toImashime() {
      this.printPage = 'IMASHIME'
    },
    toMain() {
      this.printPage = 'MAIN'
    }
  }
}
</script>

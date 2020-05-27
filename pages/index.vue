<template>
  <div>
    <div
      v-if="printPage == 'MAIN'"
      class="d-flex flex-column justify-space-around align-center container"
    >
      <div>
        <div class="circle d-flex flex-column justify-center align-center">
          <div>今月の課金総額</div>
          <div>
            <span class="big-text">＊＊＊</span>円
          </div>
        </div>
      </div>
      <v-btn color="#006FFF" outlined rounded large @click="toInput()">課金金額入力</v-btn>
    </div>
    <div v-else-if="printPage == 'INPUT'" class="d-flex flex-column align-center">
      <input-screen />
      <v-btn color="#006FFF" outlined rounded large @click="toImashime()">追加</v-btn>
    </div>
    <div v-else class="d-flex flex-column align-center">
      <imashime-card />
      <v-btn color="#006FFF" outlined rounded large @click="toMain()">閉じる</v-btn>
    </div>
  </div>
</template>

<script>
import InputScreen from '~/components/InputScreen.vue'
import ImashimeCard from '~/components/ImashimeCard.vue'

export default {
  components: {
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

<style lang="scss">
.container {
  height: 80vh;
}

.circle {
  border: 12px solid #006fff;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  font-size: 1.2rem;
}

.big-text {
  font-size: 2.2rem;
}

.v-btn.v-size--large {
  font-size: 1.2rem;
}

.v-btn--outlined {
  border: 2px solid #006fff;
}
</style>

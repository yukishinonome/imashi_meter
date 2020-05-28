<template>
  <div
    class="component-container d-flex flex-column justify-center align-center"
  >
    <div class="text-center result-box">
      あなたが今投じた金額は・・・<br />{{ judgementResult }}
    </div>
    <img :src="imagePath" alt="result" class="margin-up-down" />
    <div class="text-center margin-up-down">
      <v-btn
        color="#006FFF"
        outlined
        rounded
        large
        :ripple="false"
        @click="toMain"
        >閉じる</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputedAmount: 0,
      imagePath: '',
      judgementResult: ''
    }
  },
  mounted() {
    this.loadHistories()
  },

  methods: {
    // ランダムに画像表示
    showImage() {
      const wordsArray = ['うな重', '小説', 'ハーゲンダッツ ']
      const randomWord =
        wordsArray[Math.floor(Math.random() * wordsArray.length)]

      if (randomWord === 'うな重' && this.inputedAmount >= 3000) {
        this.imagePath = '/list_unadon.png'
        this.judgementResult =
          'うな重約' +
          String(Math.floor(this.inputedAmount / 3000)) +
          '杯分です！！'
      } else if (randomWord === '小説' && this.inputedAmount >= 500) {
        this.imagePath = '/list_novel.png'
        this.judgementResult =
          '小説約' +
          String(Math.floor(this.inputedAmount / 500)) +
          '冊分です！！'
      } else if (randomWord === 'ハーゲンダッツ' && this.inputedAmount >= 300) {
        this.imagePath = '/list_haagen-dazs.png'
        this.judgementResult =
          'ハーゲンダッツ約' +
          String(Math.floor(this.inputedAmount / 300)) +
          '個分です！！'
      } else {
        this.imagePath = '/list_umaibo.png'
        this.judgementResult =
          'うまい棒約' +
          String(Math.floor(this.inputedAmount / 10)) +
          '本分です！！'
      }
    },
    // APIより履歴データをロード
    async loadHistories() {
      try {
        const historyData = await this.$axios.$get(
          'https://api-server-gtb.herokuapp.com/histories'
        )
        // 最新の履歴の課金額取得（直前に入力された課金額）
        this.inputedAmount = historyData.slice(-1)[0].amounts

        // 課金額に応じて画像を表示
        this.showImage()
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style lang="scss">
.result-box {
  border: 2px solid #006fff;
  border-radius: 5px;
  padding: 10px 20px;
  text-align: center;
  font-size: 1.2rem;
}
</style>

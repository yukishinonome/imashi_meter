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
            <span class="big-text">{{ totalAmount.toLocaleString() }}</span> 円
          </div>
        </div>
      </div>
      <v-btn color="#006FFF" outlined rounded large :ripple="false" @click="toInput">課金金額入力</v-btn>
    </div>
    <div v-else-if="printPage == 'INPUT'" class="d-flex flex-column align-center">
      <input-screen />
      <div>
        <v-btn
          color="#006FFF"
          class="btn-margin"
          outlined
          rounded
          large
          :ripple="false"
          @click="toMain"
        >戻る</v-btn>
        <v-btn
          color="#006FFF"
          class="margin-left-right"
          outlined
          rounded
          large
          :ripple="false"
          @click="toImashime"
        >追加</v-btn>
      </div>
    </div>
    <div v-else class="d-flex flex-column align-center">
      <imashime-card />
      <v-btn color="#006FFF" outlined rounded large :ripple="false" @click="toMain">閉じる</v-btn>
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
    printPage: 'MAIN',
    totalAmount: 0
  }),
  mounted() {
    this.loadHistories()
  },
  methods: {
    toInput() {
      this.printPage = 'INPUT'
    },
    toImashime() {
      this.printPage = 'IMASHIME'
    },
    toMain() {
      this.printPage = 'MAIN'
    },
    async loadHistories() {
      try {
        const data = await this.$axios.$get(
          'https://api-server-gtb.herokuapp.com/histories'
        )
        const now = new Date()
        const thisMonth = now.getMonth() + 1
        Object.entries(data).forEach(([key, value]) => {
          if (this.getHistoryMonth(value) === thisMonth) {
            this.totalAmount += value.amounts
          }
        })
      } catch (e) {
        console.error(e)
      }
    },
    getHistoryMonth(history) {
      let month = history.created_at.slice(5, 7)
      month = parseInt(month)
      return month
    }
  }
}
</script>

<style lang="scss">
.container {
  height: 70vh;
}

.circle {
  border: 12px solid #006fff;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  font-size: 1.2rem;
  filter: drop-shadow(0 0 5px #006fff);
  animation: circle 3s linear infinite;
}

@keyframes circle {
  0% {
    border-color: #006fff;
    filter: drop-shadow(0 0 5px #006fff);
  }
  30% {
    border-color: #006fff;
    filter: drop-shadow(0 0 5px #006fff);
  }
  40% {
    border-color: #00d4ff;
    filter: drop-shadow(0 0 15px #00d4ff);
  }
  100% {
    border-color: #006fff;
    filter: drop-shadow(0 0 5px #006fff);
  }
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

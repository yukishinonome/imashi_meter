<template>
  <div>
    <div class="text-center">今月</div>
    <!-- <doughnut-chart-component v-if="loaded" :chartdata="datas" :options="options" /> -->
    <canvas id="myChart"></canvas>
    <v-divider></v-divider>
    <v-simple-table fixed-header dark height="300px">
      <thead>
        <tr class="text-left">
          <th>総額</th>
          <th>{{ totalAmount }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="history in histories" :key="history.id">
          <td>{{ history.category }}</td>
          <td>{{ history.amounts }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
import Vue from 'vue'
import graphScreen from '~/components/graphScreen'

export default {
  components: {
    graphScreen
  },
  data() {
    return {
      loaded: false,
      options: {
        responsive: true
      },
      data: {
        labels: [],
        data: []
      },
      totalAmount: 0,
      histories: [],
      thisMonthHistories: []
    }
  },
  mounted() {
    this.loadHistories()
    // this.renderChart(this.datas, this.options)
  },
  methods: {
    // 各履歴の月を取得
    getHistoryMonth(history) {
      const month = history.created_at.slice(5, 7)
      let historyMonth

      if (month.match(/0/)) {
        // もし1（01）〜9（09）月なら
        historyMonth = month.substring(1, 2)
      } else {
        // もし10（10）〜12（12）月なら
        historyMonth = month
      }
      return historyMonth
    },

    // 各カテゴリーの総額計算
    calculateCategoriesAmounts(histories) {},

    calculateTotalAmounts(histories) {
      Object.entries(histories).forEach(([key, value]) => {
        console.log(value.amounts)
        this.totalAmount += value.amounts
      })
    },

    // APIより履歴データをロード
    async loadHistories() {
      this.loaded = false
      try {
        const historyData = await this.$axios.$get(
          'https://api-server-gtb.herokuapp.com/histories'
        )

        const now = new Date()
        const thisMonth = now.getMonth() + 1

        // 今月である履歴データだけ取り出す
        for (let i = 0; i < historyData.length; i++) {
          if (this.getHistoryMonth(historyData[i]) == thisMonth) {
            console.log('今月は等しい')
            // 今月分の履歴のみthisMonthHistoriesに追加
            this.thisMonthHistories.push(historyData[i])
          } else {
            console.log('今月は等しくない')
          }
        }
        console.log(this.thisMonthHistories)
        this.calculateTotalAmounts(this.thisMonthHistories)

        // 重複がないようにカテゴリーを配列labelsに追加
        for (let i = 0; i < this.thisMonthHistories.length; i++) {
          // this.datas.labels.push(this.thisMonthHistories[i].category)
          // this.datas.datasets[0].data.push(this.thisMonthHistories[i].amounts)
          // this.datas.datasets[0].backgroundColor.push('#006FFF')
        }

        this.histories = historyData

        console.log(this.datas.labels)
        console.log(this.datas.datasets[0].data)
        console.log(this.datas.datasets[0].backgroundColor)

        this.loaded = true
      } catch (e) {
        console.error(e)
      }
    }
  }
}

Vue.component('doughnut-chart-component', graphScreen)
</script>

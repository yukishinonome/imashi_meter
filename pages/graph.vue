<template>
  <div>
    <div class="text-center">今月</div>
    <doughnut-chart-component v-if="loaded" :chart-data="dataCollection" />
    <v-divider></v-divider>
    <v-simple-table fixed-header dark height="300px">
      <thead>
        <tr class="text-left">
          <th>総額</th>
          <th>{{ totalAmount }}円</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="[key, value] in Array.from(categoriesAmounts)">
          <td>{{ key }}</td>
          <td>{{ value }}円</td>
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
      // options: {
      //   responsive: true,
      //   maintainAspectRatio: true
      // },
      // data: {
      //   labels: [],
      //   data: []
      // },
      dataCollection: null,
      totalAmount: 0,
      histories: [],
      thisMonthHistories: [],
      categoriesAmounts: []
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
    calculateCategoriesAmounts(histories) {
      const array = []

      // カテゴリーの重複をなくす
      Object.entries(histories).forEach(([key, value]) => {
        array.push(value.category)
      })
      const categoryArray = Array.from(new Set(array))

      const map = new Map()
      const sum = Array(categoryArray.length)

      Object.entries(categoryArray).forEach(([categoryKey, categoryValue]) => {
        sum[categoryKey] = 0
        Object.entries(histories).forEach(([historyKey, history]) => {
          if (categoryValue == history.category) {
            sum[categoryKey] = sum[categoryKey] + history.amounts
            map.set(categoryValue, sum[categoryKey])
          }
        })
      })
      this.categoriesAmounts = map
    },

    // 課金総額計算
    calculateTotalAmounts(histories) {
      Object.entries(histories).forEach(([key, value]) => {
        this.totalAmount += value.amounts
      })
    },

    fillData(labels, data, backgroundColor) {
      this.loaded = true
      this.dataCollection = {
        labels: ['A', 'B', 'C'],
        datasets: [
          {
            data: [10, 20, 30],
            backgroundColor: ['#f87979', '#aa4c8f', '#38b48b']
          }
        ]
      }
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

        Object.entries(historyData).forEach(([key, value]) => {
          if (this.getHistoryMonth(value) == thisMonth) {
            console.log('今月に等しい')
            this.thisMonthHistories.push(value)
          } else {
            console.log('今月ではない')
          }
        })

        // 今月の課金総額と今月のカテゴリー別の課金総額を計算
        this.calculateTotalAmounts(this.thisMonthHistories)
        this.calculateCategoriesAmounts(this.thisMonthHistories)

        // 重複がないようにカテゴリーを配列labelsに追加
        for (let i = 0; i < this.thisMonthHistories.length; i++) {
          // this.datas.labels.push(this.thisMonthHistories[i].category)
          // this.datas.datasets[0].data.push(this.thisMonthHistories[i].amounts)
          // this.datas.datasets[0].backgroundColor.push('#006FFF')
        }

        this.histories = historyData

        this.fillData(2, 3, 4)

        // console.log(this.datas.labels)
        // console.log(this.datas.datasets[0].data)
        // console.log(this.datas.datasets[0].backgroundColor)

        this.loaded = true
      } catch (e) {
        console.error(e)
      }
    }
  }
}

Vue.component('doughnut-chart-component', graphScreen)
</script>

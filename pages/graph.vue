<template>
  <div class="page-container d-flex flex-column align-center">
    <div class="text-center">今月</div>
    <graph-screen
      v-if="loaded"
      class="graph-container"
      :data="dataCollection"
    />
    <div class="list-title full-width">カテゴリー別の課金総額</div>
    <v-simple-table fixed-header dark height="30vh" class="full-width">
      <thead>
        <tr class="text-left">
          <th>総額</th>
          <th>{{ totalAmount }}円</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="[key, value] in Array.from(categoriesAmounts)" :key="key">
          <td>{{ key }}</td>
          <td>{{ value }}円</td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
import graphScreen from '~/components/graphScreen'

export default {
  components: {
    graphScreen
  },
  data() {
    return {
      loaded: false,
      dataCollection: null,
      totalAmount: 0,
      histories: [],
      thisMonthHistories: [],
      categoriesAmounts: []
    }
  },
  mounted() {
    this.loadHistories()
  },
  methods: {
    // 各履歴の月を取得
    getHistoryMonth(history) {
      let month = history.created_at.slice(5, 7)
      month = parseInt(month)
      return month
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
          if (categoryValue === history.category) {
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
        labels,
        datasets: [
          {
            data,
            backgroundColor,
            borderWidth: 1
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
          if (this.getHistoryMonth(value) === thisMonth) {
            this.thisMonthHistories.push(value)
          }
        })

        // 今月の課金総額と今月のカテゴリー別の課金総額を計算
        this.calculateTotalAmounts(this.thisMonthHistories)
        this.calculateCategoriesAmounts(this.thisMonthHistories)

        const labelsForGraph = []
        const datasForGraph = []

        this.categoriesAmounts.forEach(function(value, key) {
          console.log(key + ' : ' + value)
          labelsForGraph.push(key)
          datasForGraph.push(value)
        })

        /// 念のためコードの保存
        // const categories = ['ゲーム', 'ジュース']
        // const ammounts = [18000, 12000]
        // const bgColors = ['#ffffff', '#00ff00', '#006FFF', '#00ff00']
        // this.fillData(categories, ammounts, bgColors)
        /// ////////////

        // グラフの描画
        const categories = labelsForGraph
        const amounts = datasForGraph
        const bgColors = ['#3300CC', '#6600CC', '#CC00CC', '#FF0066']
        this.fillData(categories, amounts, bgColors)
        this.loaded = true
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style lang="scss">
.graph-container {
  max-width: 300px;
  width: 80%;
  margin-bottom: 15px;
}

.full-width {
  width: 100%;
}
</style>

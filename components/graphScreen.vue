<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  data() {
    return {
      histories: [],
      thisMonthHistories: [],
      datas: {
        labels: [] /* ['ゲーム', '酒'] */,
        datasets: [
          {
            data: [] /* [45000, 15000] */,
            backgroundColor: [] /* ['#006FFF', '#F2C94C'] */
          }
        ]
      },
      options: {
        responsive: true
      }
    }
  },
  mounted() {
    this.loadHistory()
    // this.loadGraphData();
    this.renderChart(this.datas, this.options)
  },
  methods: {
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

    // APIより履歴データをロード
    async loadHistory() {
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

      // 重複がないようにカテゴリーを配列labelsに追加
      for (let i = 0; i < this.thisMonthHistories.length; i++) {
        this.datas.labels.push(this.thisMonthHistories[i].category)
        this.datas.datasets[0].data.push(this.thisMonthHistories[i].amounts)
        this.datas.datasets[0].backgroundColor.push('#006FFF')
      }
      // for (const [key, value] of Object.entries(this.thisMonthHistories)) {
      //   this.labels.push(value.category)
      // }
      console.log(this.datas.labels)
      console.log(this.datas.datasets[0].data)
      console.log(this.datas.datasets[0].backgroundColor)
    }
  }
}
</script>

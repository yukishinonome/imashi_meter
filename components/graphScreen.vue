<script>
import {Doughnut} from 'vue-chartjs'

export default {
  extends: Doughnut,
  data() {
    return {
      datas: {
        labels: [],
        datasets: [
          {
            data: [10, 15, 6, 22, 11, 49, 32],
            backgroundColor: ['#f87979', '#aa4c8f', '#38b48b', '#006e54', '#c1e4e9', '#89c3eb', '#c3d825']
          }
        ]
      },
      options: {
        responsive: true
      }
    }
  },
  mounted() {
    this.renderChart(this.datas, this.options);
  }
}
</script>

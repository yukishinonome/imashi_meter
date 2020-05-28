<template>
  <div class="page-container d-flex flex-column justify-center">
    <div class="price-box">
      課金総額
      <br />
      <span class="big-text">{{ sum.toLocaleString() }}</span> 円
    </div>
    <br />
    <div class="list-title">戒めリスト</div>
    <v-simple-table fixed-header dark class="table-margin" height="45vh">
      <tbody>
        <tr v-for="item in items" :key="item.category">
          <td>{{ item.category }}</td>
          <td class="text-right">{{ item.num }} {{ item.unit }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      histories: [],
      sum: 0,
      items: [
        {
          category: 'うまい棒（10円）',
          price: 10,
          num: 0,
          unit: '個分'
        },
        {
          category: 'ハーゲンダッツ（300円）',
          price: 300,
          num: 0,
          unit: '個分'
        },
        {
          category: '小説（500円）',
          price: 500,
          num: 0,
          unit: '冊分'
        },
        {
          category: '専門書（1,000円）',
          price: 1000,
          num: 0,
          unit: '冊分'
        },
        {
          category: 'うな重（3,000円）',
          price: 3000,
          num: 0,
          unit: '食分'
        },
        {
          category: '焼肉（5,000円）',
          price: 5000,
          num: 0,
          unit: '食分'
        },
        {
          category: '美容院（10,000円）',
          price: 10000,
          num: 0,
          unit: '回分'
        },
        {
          category: '国内旅行（30,000円）',
          price: 30000,
          num: 0,
          unit: '回分'
        },
        {
          category: 'ハワイ旅行（400,000円）',
          price: 4000000,
          num: 0,
          unit: '回分'
        },
        {
          category: 'ベンツ（10,000,000円）',
          price: 10000000,
          num: 0,
          unit: '台分'
        },
        {
          category: '別荘（30,000,000円）',
          price: 30000000,
          num: 0,
          unit: '軒分'
        }
      ]
    }
  },
  mounted() {
    this.loadHistories()
  },
  methods: {
    // APIより履歴データをロード
    async loadHistories() {
      const data = await this.$axios.$get(
        'https://api-server-gtb.herokuapp.com/histories'
      )
      this.histories = data
      Object.entries(this.histories).forEach(([key, value]) => {
        this.sum += value.amounts
      })
      Object.entries(this.items).forEach(([key, value]) => {
        this.items[key].num = parseInt(this.sum / value.price)
      })
    }
  }
}
</script>

<style lang="scss">
.price-box {
  border: 2px solid #006fff;
  border-radius: 5px;
  padding: 10px 0;
  text-align: center;
  font-size: 1.2rem;
}
.theme--dark.v-data-table {
  background-color: transparent;
}
.theme--dark.v-data-table
  tbody
  tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
  background-color: darkblue;
}
</style>

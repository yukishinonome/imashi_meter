<template>
  <div>
    <v-card class="mx-auto" max-width="800" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1 text-align-center">
            課金総額
            <br />
            {{ sum }}円
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <br />
    <div>戒めリスト</div>
    <v-simple-table fixed-header dark>
      <tbody>
        <tr v-for="item in items" :key="item.category">
          <td>{{ item.category }}</td>
          <td>{{ item.num }}</td>
          <td>{{ item.unit }}</td>
          </v-row>
        </tr>
      </tbody>
    </v-simple-table>
    <v-divider></v-divider>
  </div>
</template>

<style lang="scss">
.text-align-center {
  text-align: center;
}
</style>
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
          price: 100000,
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
      // console.log(parseInt(3.5))
      console.log(this.num)

      Object.entries(this.histories).forEach(([key, value]) => {
        console.log(value.amounts)
        this.sum += value.amounts
      })
      Object.entries(this.items).forEach(([key, value]) => {
        this.items[key].num = parseInt(this.sum / value.price)
      })
      console.log(Object.values(this.items))
    }
  }
}
</script>

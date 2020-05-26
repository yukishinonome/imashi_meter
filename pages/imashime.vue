<template>
  <div>
    <v-card class="mx-auto" max-width="800" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1 text-align-center">
            課金総額
            <br />***,***円
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <br />
    <div>戒めリスト</div>
    <v-simple-table fixed-header dark>
      <tr v-for="item in items" :key="item.category">
        <td>{{ item.category }}</td>
        <td>{{ item.unit }}</td>
      </tr>
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
      items: [
        {
          category: 'うまい棒（10円）',
          unit: '個分'
        },
        {
          category: 'ハーゲンダッツ（300円）',
          unit: '個分'
        },
        {
          category: '小説（500円）',
          unit: '冊分'
        },
        {
          category: '専門書（1,000円）',
          unit: '冊分'
        },
        {
          category: 'うな重（3,000円）',
          unit: '食分'
        },
        {
          category: '焼肉（5,000円）',
          unit: '食分'
        },
        {
          category: '美容院（10,000円）',
          unit: '回分'
        },
        {
          category: '国内旅行（30,000円）',
          unit: '回分'
        },
        {
          category: 'ハワイ旅行（400,000円）',
          unit: '回分'
        },
        {
          category: 'ベンツ（10,000,000円）',
          unit: '台分'
        },
        {
          category: '別荘（30,000,000円）',
          unit: '軒分'
        }
      ]
    }
  }
}
</script>

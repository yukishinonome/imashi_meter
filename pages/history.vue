<template>
  <div>
    <v-list-item-title>履歴</v-list-item-title>
    <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">課金額</th>
          <th class="text-left">カテゴリー</th>
          <th class="text-left">日付</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="history in histories" :key="history.id">
          <td>{{history.id}}</td>
          <td>{{history.amounts}}</td>
          <td>{{history.category}}</td>
          <td>{{history.created_at.slice(0, 10)}}</td>
        </tr>
      </tbody>
    </v-simple-table>
    <!-- <v-list-item v-for="n of 5" :key="n">
      <v-list-item-content>
        <v-list-item-title>{{history.amounts}}</v-list-item-title>
        <v-list-item-title>{{history.category}}</v-list-item-title>
        <v-list-item-title>Single-line item</v-list-item-title>
      </v-list-item-content>
    </v-list-item> -->
  </div>
</template>
<script>

export default {
  data(){
    return {
      histories:[],
      items: [
        {
          id: 1,
          amounts: 1230,
          category: "カジノ",
          created_at: "2020/06/23"
        },
        {
          id: 2,
          amounts: 1230,
          category: "カジノ",
          created_at: "2020/06/23"
        }
      ]
    }
  },
  methods: {
    // APIより履歴データをロード
    async loadHistories() {
      const data = await this.$axios.$get('https://api-server-gtb.herokuapp.com/histories')
      this.histories = data;
    }
  },
  mounted() {
    this.loadHistories()
  }
}
</script>

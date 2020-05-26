<template>
  <div>
    <br>
    <h2>履歴</h2>
    <br>
    <v-divider></v-divider>
    <v-simple-table fixed-header dark>
      <thead>
        <tr>
          <th class="text-left">カテゴリー</th>
          <th class="text-left">課金額</th>
          <th class="text-left">日付</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="history in histories" :key="history.id">
          <td>{{history.category}}</td>
          <td>{{history.amounts}}</td>
          <td>{{history.created_at.slice(0, 10)}}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>
<script>

export default {
  data(){
    return {
      histories:[]
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

<template>
  <div class="page-container">
    <div class="list-title">履歴</div>
    <v-divider></v-divider>
    <v-simple-table fixed-header dark height="65vh">
      <thead>
        <tr>
          <th>日付</th>
          <th>カテゴリー</th>
          <th>課金額</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="history in histories" :key="history.id">
          <td>{{ history.created_at.slice(0, 10) }}</td>
          <td>{{ history.category }}</td>
          <td>{{ history.amounts }} 円</td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      histories: {}
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
      this.histories = data.reverse()
    }
  }
}
</script>

<style lang="scss">
.theme--dark.v-data-table.v-data-table--fixed-header thead th {
  background-color: rgb(0, 0, 47);
}
</style>

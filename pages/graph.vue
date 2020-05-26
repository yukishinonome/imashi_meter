<template>
  <div>
    <v-card class="mx-auto" max-width="800" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">グラフ</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <v-divider></v-divider>
    <v-simple-table fixed-header dark height="300px">
      <thead>
        <tr class="text-left">
          <th class="font-weight-black">総額</th>
          <th class="font-weight-black">{{totalAmount}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="history in histories" :key="history.id">
          <td>{{history.category}}</td>
          <td>{{history.amounts}}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  data(){
    return {
      totalAmount: String(1888) + "円",
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

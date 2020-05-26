<template>
  <div>
    <div class="text-center">今月</div>
    <graph-chart-component></graph-chart-component>
    <v-divider></v-divider>
    <v-simple-table fixed-header dark height="300px">
      <thead>
        <tr class="text-left">
          <th class="font-weight-black" height="1000px">総額</th>
          <th class="font-weight-black" height="1000px">{{totalAmount}}</th>
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
import Vue from 'vue'
import graphScreen from '~/components/graphScreen'

export default {
  data(){
    return {
      totalAmount: String(1888) + "円",
      histories:[]
    }
  },
  components: {
    graphScreen
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

Vue.component('doughnut-chart-component', graphScreen)
</script>

<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div v-if="printPage == 0">
        <hoge-card />
        <v-btn color="orange">課金金額入力</v-btn>
      </div>
      <div v-else-if="printPage == 1">
        <input-screen />
      </div>
      <div v-else>
        <imashime-card />
      </div>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import HogeCard from '~/components/HogeCard.vue'
import InputScreen from '~/components/InputScreen.vue'
import ImashimeCard from '~/components/ImashimeCard.vue'

enum PrintPage {
  MAIN,
  INPUT,
  IMASHIME
}

export default {
  components: {
    HogeCard,
    InputScreen,
    ImashimeCard
  },
  data: () => ({
    printPage: PrintPage.MAIN
  }),
  methods: {}
}
</script>

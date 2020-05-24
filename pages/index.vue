<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <hoge-card />
    </v-flex>
  </v-layout>
</template>

<script>
import HogeCard from '~/components/HogeCard.vue'
import InputScreen from '~/components/InputScreen.vue'
import ImashimeCard from '~/components/ImashimeCard.vue'
export default {
  components: {
    HogeCard,
    InputScreen,
    ImashimeCard
  }
}
</script>

<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <hoge-card />
    </v-flex>
  </v-layout>
</template>

<script>
import HogeCard from '~/components/HogeCard.vue'
export default {
  components: {
    HogeCard
  }
}
</script>

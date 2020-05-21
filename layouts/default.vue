<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-bottom-navigation :value="activeBtn" color="primary" horizontal grow>
      <v-btn>
        <span>ホーム</span>
        <!-- <v-icon>mdi-history</v-icon> -->
      </v-btn>

      <v-btn>
        <span>戒め</span>
        <!-- <v-icon>mdi-heart</v-icon> -->
      </v-btn>

      <v-btn>
        <span>グラフ</span>
        <!-- <v-icon>mdi-map-marker</v-icon> -->
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      title: 'Vuetify.js',
      activeBtn: 0
    }
  }
}
</script>

<style lang="scss">
.v-toolbar__title {
  margin: 0 auto;
}
</style>

<template>
  <v-app dark>
    <v-app-bar flat app hide-on-scroll>
      <img src="/logo_white.svg" alt="logo" />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-bottom-navigation fixed :value="activeBtn" color="#006FFF" grow>
      <v-btn v-for="(item, index) in items" :key="index" nuxt :to="item.to">
        <span>{{ item.title }}</span>
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
          title: 'ホーム',
          to: '/'
        },
        {
          title: '戒め',
          to: '/imashime'
        },
        {
          title: 'グラフ',
          to: '/graph'
        },
        {
          title: '履歴',
          to: '/history'
        }
      ],
      title: '戒メーター',
      activeBtn: 0
    }
  },
  methods: {
    // titleChange(index) {
    //   this.title = this.items[index].title
    // }
  }
}
</script>

<style lang="scss">
.theme--dark.v-app-bar.v-toolbar.v-sheet {
  background-color: #121212;
}

.theme--dark.v-bottom-navigation {
  /* border-top: 1px solid #006fff; */
  background-color: #121212;
}

img {
  margin: 0 auto;
  height: 90%;
}
</style>

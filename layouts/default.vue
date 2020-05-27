<template>
  <v-app dark>
    <header>
      <img src="/logo_white.svg" alt="logo" />
    </header>
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
header {
  height: 54px;
  text-align: center;
  padding-top: 14px;
  padding-bottom: 4px;
}

.theme--dark.v-bottom-navigation {
  /* border-top: 1px solid #006fff; */
  background-color: #121212;
}

img {
  height: 100%;
}
</style>

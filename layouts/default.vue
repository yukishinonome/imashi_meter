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
    <v-bottom-navigation fixed :value="activeBtn" color="primary" horizontal grow>
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
.v-toolbar__title {
  margin: 0 auto;
}
</style>

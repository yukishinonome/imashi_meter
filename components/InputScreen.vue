<template>
  <div class="component-container d-flex flex-column justify-center">
    <div class="list-title">カテゴリー</div>
    <div class="d-flex justify-space-around margin-up-down">
      <v-btn-toggle
        v-for="(icon, index) in icons"
        :key="index"
        v-model="iconType"
        tile
        background-color="transparent"
        borderless
        active-class="icon-style"
      >
        <v-btn :value="icon.alt" color="#006FFF" outlined>
          <img :src="icon.src" :alt="icon.alt" width="48" />
        </v-btn>
      </v-btn-toggle>
    </div>
    <div class="list-title">課金額</div>
    <div>
      <div class="text-center margin-up-down">
        <span class="big-text">{{ price }}</span> 円
      </div>
      <!-- <v-text-field color="#006FFF" label="懺悔せよ" suffix="円" single-line outlined type="number"></v-text-field> -->
      <div class="d-flex justify-space-around margin-up-down">
        <div v-for="(slider, index) in sliders" :key="index">
          <v-slider
            v-model="slider.val"
            color="#FF007A"
            track-color="#006FFF"
            vertical
            step="10"
            max="90"
          ></v-slider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    activeBtn: 0,
    iconType: 'game_icon',
    icons: [
      {
        src: '/category_game.png',
        alt: 'game_icon'
      },
      {
        src: '/category_cigarette.png',
        alt: 'cigarette_icon'
      },
      {
        src: '/category_beer.png',
        alt: 'beer_icon'
      },
      {
        src: '/category_pachinko.png',
        alt: 'pachinko_icon'
      }
    ],
    sliders: [
      {
        val: 10
      },
      {
        val: 20
      },
      {
        val: 30
      },
      {
        val: 40
      },
      {
        val: 50
      },
      {
        val: 60
      }
    ]
  }),
  computed: {
    price() {
      return (
        this.sliders[0].val * 10000 +
        this.sliders[1].val * 1000 +
        this.sliders[2].val * 100 +
        this.sliders[3].val * 10 +
        this.sliders[4].val +
        this.sliders[5].val / 10
      ).toLocaleString()
    }
  },
  methods: {
    async postData() {
      await this.$axios.$post(
        'https://api-server-gtb.herokuapp.com/histories',
        { amounts: 5000, category: 'ゲーム' }
      )
    }
  }
}
</script>

<style lang="scss">
.icon-style {
  background-color: #006fff;
}
</style>

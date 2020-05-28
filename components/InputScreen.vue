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
    <div class="list-title">課金額（半角数字）</div>
    <div>
      <div class="text-center big-text margin-up-down">＊＊＊円</div>
      <!-- <v-text-field color="#006FFF" label="懺悔せよ" suffix="円" single-line outlined type="number"></v-text-field> -->
      <v-slider
        v-model="slider.val"
        :color="slider.color"
        :track-color="slider.trackColor"
        :label="slider.label"
      ></v-slider>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    activeBtn: 0,
    iconType: 'heart',
    slider: {
      label: 'color',
      val: 25,
      color: '#FF007A',
      trackColor: '#006FFF'
    },
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
    ]
  })
}
</script>

<style lang="scss">
.icon-style {
  background-color: #006fff;
}
</style>

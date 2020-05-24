<template>
  <div>
    <div>カテゴリー</div>
    <v-btn-toggle v-model="iconType" tile color="indigo" group class="d-flex justify-space-around">
      <v-btn value="game" outlined>
        <v-icon>mdi-gamepad-variant</v-icon>
      </v-btn>
      <v-btn value="smoking" outlined>
        <v-icon>mdi-smoking</v-icon>
      </v-btn>
      <v-btn value="sake" outlined>
        <v-icon>mdi-glass-mug-variant</v-icon>
      </v-btn>
    </v-btn-toggle>
    <div>課金額（半角数字）</div>
    <v-text-field label="懺悔せよ" suffix="円" single-line outlined type="number"></v-text-field>
  </div>
</template>

<script>
export default {
  data: () => ({
    activeBtn: 0,
    iconType: 'heart'
  })
}
</script>

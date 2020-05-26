<template>
  <div>
    <v-card class="mx-auto" max-width="800" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1 text-align-center">
            課金総額
            <br />＊＊＊円
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <br />
    <div>戒めリスト</div>
    <v-simple-table fixed-header dark>
      <thead>
        <tr>
          <th>うまい棒（10円）</th>
          <v-spacer></v-spacer>
          <th>＊個分</th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th>ハーゲンダッツ（300円）</th>
          <v-spacer></v-spacer>
          <th>＊個分</th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th>小説（500円）</th>
          <v-spacer></v-spacer>
          <th>＊冊分</th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th>専門書（1,000円）</th>
          <v-spacer></v-spacer>
          <th>＊冊分</th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th>うな重（3,000円）</th>
          <v-spacer></v-spacer>
          <th>＊個分</th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th>焼肉（5,000円）</th>
          <v-spacer></v-spacer>
          <th>＊食分</th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th>美容院（10,000円）</th>
          <v-spacer></v-spacer>
          <th>＊回分</th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th>国内旅行（30,000円）</th>
          <v-spacer></v-spacer>
          <th>＊回分</th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th>ハワイ旅行（400,000円）</th>
          <v-spacer></v-spacer>
          <th>＊回分</th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th>ベンツ（10,000,000円）</th>
          <v-spacer></v-spacer>
          <th>＊台分</th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th>別荘（30,000,000円）</th>
          <v-spacer></v-spacer>
          <th>＊軒分</th>
        </tr>
      </thead>
    </v-simple-table>
    <v-divider></v-divider>
  </div>
</template>

<style lang="scss">
.text-align-center {
  text-align: center;
}
</style>

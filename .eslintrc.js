module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'space-before-function-paren': ['error', 'never'],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off'
  }
}

var fs = require('fs')
var path = require('path')

let ENV_DEV = false

//Development Environment
let port = 8080
let host = 'localhost'
let https = false

//Production Environment
if (ENV_DEV == false) {
  port = 2083 // make sure this port is open on your server you can do that via WHM or talk to you hosting company
  host = 'https://staging.vmcafe.id'
  https = {
    key: fs.readFileSync(
      path.resolve(
        __dirname,
        './../../ssl/keys/bfb12_0f985_2e20053df15a9a16b5eeca2540d62907.key'
      )
    ),
    cert: fs.readFileSync(
      path.resolve(
        __dirname,
        './../../ssl/certs/www_staging_vmcafe_id_bfb12_0f985_1621805448_96e28761d33540337ac248f159717c45.crt'
      )
    ),
  }
}
export default {
  mode: 'universal',
  env: {},
  server: {
    port: port,
    host: host,
    timing: false,
    https: https,
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'vmcafe',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/styles/reset.styl', '@/styles/global.styl'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/vuelidate.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/toast',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://api.vmcafe.id',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

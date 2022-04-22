export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SSRTest',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  target: 'server',

  render: {
    csp: {
      reportOnly: false,
      addMeta: true,     // Add CSP meta-tag in addition to the HTTP header
      unsafeInlineCompatiblity: true,
      policies: {
        'script-src': ["'self'", "'strict-dynamic'", 'https:'],
        'style-src': ["'self'", "'strict-dynamic'", 'https:'],
        'frame-src': [],
        'object-src': ["'none'"],
        'base-uri': ["'self"]
      }
    }
  },


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios','nuxt-helmet'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

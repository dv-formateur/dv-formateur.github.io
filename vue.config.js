// vue.config.js
module.exports = {
  pwa: {
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      runtimeCaching: [ {
        urlPattern: new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
        handler: 'staleWhileRevalidate'
      }]
    }
  }
}
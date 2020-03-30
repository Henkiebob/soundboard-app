module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/soundboard-app/dist/'
  : '/',
  "transpileDependencies": [
    "vuetify"
  ]
  
}

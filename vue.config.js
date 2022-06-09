const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  // publicPath: process.env.NODE_ENV === "production" ? "/vue-portfolio-project/" : "/",
  // publicPath: '/portfolio-vue/'
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio-vue/'
    : '/'
};
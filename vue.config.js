const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: './docs',
  publicPath: 'rvege1409.github.io/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/styles/_var.scss";`,
      },
    },
  },
  configureWebpack: {
    devtool: 'source-map'
  }
})
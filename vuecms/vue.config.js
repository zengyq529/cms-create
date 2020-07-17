const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const devServer = {
  port: 80,
  disableHostCheck: true,
  progress: false, // 删除进度显示
  proxy:{
    '/node':{
      target:'http://127.0.0.1:7001/'
    },
  }
};
module.exports = {
  devServer,
  lintOnSave: false, // 暂时关闭eslint。
  productionSourceMap: false,
  runtimeCompiler: true,
  publicPath: './',
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/common/index.scss";',
      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.extensions.prepend('.vue');
    // const oneOfsMap = config.module.rule('scss').oneOfs.store;
    // oneOfsMap.forEach((item) => {
    //   item
    //     .use('sass-resources-loader')
    //     .loader('sass-resources-loader')
    //     .options({
    //       resources: [resolveResource('style.scss')],
    //     })
    //     .end();
    // });
    config.module.rule('md').test(/\.md$/)
      .use('text-loader')
      .loader('text-loader')
      .end();
  },
  configureWebpack: (config) => {
    config.plugins.push(new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './static'),
        to: './static',
        ignore: ['.*'],
      },
    ]));
  },

};

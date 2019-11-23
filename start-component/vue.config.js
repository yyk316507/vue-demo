const webpack = require('webpack')
const path = require('path')
const appData = require('./data.json')
const seller = appData.seller

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // css: {
  //   loaderOptions: {
  //     less: {
  //       'resolve url': true,
  //       'import': [
  //         './src/common/less/index.less'
  //       ]
  //     }
  //   }
  // },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [resolve('./src/common/less/index.less')]
    }
  },
  devServer: {
    before (app) {
      app.get('/api/seller', function (req, res) {
        res.json({
          errno: 0,
          data: seller
        })
      })
    }
  },

  chainWebpack (config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
      .set('api', resolve('src/api'))

    config.plugin('context')
      .use(webpack.ContextReplacementPlugin,
        [/moment[/\\]locale$/, /zh-cn/])
  }
}

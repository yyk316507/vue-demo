module.exports = {
  devServer: {
    host: 'localhost',
    port: '8080',
    disableHostCheck: true,
    https: false,
    hotOnly: false,
    // 代理
    proxy: {
      '/newapi': {
        target: 'http://192.168.1.102:3000/api',
        changeOrigin: true,
        ws: true,
        // 重写路径  需要设置重写的话，要在后面的调用接口前加上/api 来代替target
        pathRewrite: {
          '^/newapi': '/'
        }
      }
    }
  }
}

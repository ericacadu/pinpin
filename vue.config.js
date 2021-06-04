module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/pinpin/'
    : '/',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '拼拼 - 拍出會動的照片'
        return args
      })
  }
}

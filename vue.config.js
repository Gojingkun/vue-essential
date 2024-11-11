module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vue-essential/dist/'
        : '/',
  chainWebpack: config =>{
    config.plugin('html')
        .tap(args => {
          args[0].title = "个人论坛";
          return args;
        })
  }
}


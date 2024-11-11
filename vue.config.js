module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vuejs-essential/dist/'
        : '/',
  chainWebpack: config =>{
    config.plugin('html')
        .tap(args => {
          args[0].title = "个人论坛";
          return args;
        })
  }
}


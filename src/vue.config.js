module.exports = {
  chainWebpack: config => {
    config.resolve.extensions
      .add('ts')
      .add('tsx');
  }
}
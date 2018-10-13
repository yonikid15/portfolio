module.exports = baseConfig => {
  baseConfig.module.rules = [{
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'babel-loader' // this will use your `babel-loader@8`
  }];
  return baseConfig;
};
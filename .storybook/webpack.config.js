module.exports = baseConfig => {
  baseConfig.module.rules = [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader', // this will use your `babel-loader@8`
    },
    {
      test: /\.css$/,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            modules: true,
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
          },
        },
      ],
    },
  ];
  return baseConfig;
};

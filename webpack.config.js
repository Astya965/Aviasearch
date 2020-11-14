const path = require(`path`);
const pathMain = path.join(__dirname, `public`);

module.exports = {
  entry: `./source/js/index.js`,
  output: {
    filename: `bundle.js`,
    path: pathMain
  },
  devServer: {
    contentBase: pathMain,
    open: false,
    inline: false,
    port: 1881,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        }
      },
      {
        test: /\.css$/i,
        use: [`style-loader`, `css-loader`],
      }
    ],
  },
  devtool: `source-map`,
};

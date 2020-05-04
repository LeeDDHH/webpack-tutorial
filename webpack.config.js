const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');// cssを別ファイルとして吐き出す
const HtmlWebpackPlugin = require('html-webpack-plugin');//htmlを自動で生成したり、指定したhtmlをテンプレートにwebpackを通してjs,cssが読み込まれるようにする

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
};

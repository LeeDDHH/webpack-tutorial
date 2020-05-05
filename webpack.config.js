const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');// cssを別ファイルとして吐き出す
const HtmlWebpackPlugin = require('html-webpack-plugin');//htmlを自動で生成したり、指定したhtmlをテンプレートにwebpackを通してjs,cssが読み込まれるようにする
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//dist内に必要なファイルだけ残るように整理するプラグイン

module.exports = {
  entry: "./src/javascripts/main.js",
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "javascripts/main.js",
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: 'images/[name].[ext]?' + (+new Date)
            }
          }
        ]
      },
      {
        test: /\.pug/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true,
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./stylesheets/main.css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/index.pug",
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/access.pug",
      filename: "access.html"
    }),
    new CleanWebpackPlugin(),
  ],
};

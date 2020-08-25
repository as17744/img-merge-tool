var path = require('path');

var BUILD_DIR = path.resolve(__dirname, '../build');

var config = {
  entry: './src/index.jsx',	// 入口
  mode: 'production',
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/, // 编译后缀为js和jsx格式文件
            exclude: /node_modules/,
            use: ['thread-loader', 'babel-loader']
        },
        {
          test: /\.less$/,
          use: ['style-loader', {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }, 'less-loader'],
          exclude: /node_modules/
        },
    ]
  },
  output: {
    path: BUILD_DIR,		// 出口
    filename: 'bundle.js'	// 出口文件名
  },
  resolve: {
    extensions: [".js", '.jsx'],
    mainFiles: ['index'],
    alias: {
      '@redux': path.resolve(__dirname, '../redux'),
    },
  },
};

module.exports = config;

const path = require('path');

module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'go__lightweight-modal.js',
    path: path.resolve(__dirname, 'dist')
  }
};

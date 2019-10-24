import path from 'path';

export default {
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [],
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|examples)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
          {
            loader: 'eslint-loader',
          }
        ],
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|examples)/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

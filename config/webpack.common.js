const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

// Use Babel to transpile JavaScript files.
const configureBabelLoader = () => ({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  use: ['babel-loader'],
});

// Copy image files to build folder and compresses them
const configureImageLoader = () => ({
  test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[path][name].[ext]',
        context: 'src', // prevent display of src/ in filename
      },
    },
    {
      loader: 'image-webpack-loader',
      options: {
        bypassOnDebug: true,
        mozjpeg: {
          progressive: true,
          arithmetic: false,
        },
        optipng: {
          optimizationLevel: 5,
        },
        pngquant: {
          enabled: false,
        },
        gifsicle: {
          enabled: false,
        },
      },
    },
  ],
});

const configureFontLoader = () => ({
  test: /\.(ttf|eot|woff2?)$/i,
  loader: 'url-loader',
  options: {
    limit: 8192,
    name: '[path][name].[ext]',
    context: 'src', // prevent display of src/ in filename
  },
});

module.exports = {
  entry: [`${paths.src}/index.js`],
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: paths.static,
        ignore: ['*.DS_Store'],
      },
    ]),
    new HtmlWebpackPlugin({
      title: 'SPA React Starter',
      favicon: `${paths.src}/images/favicon.png`,
      template: `${paths.src}/template.html`,
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      configureBabelLoader(),
      configureImageLoader(),
      configureFontLoader(),
    ],
  },
};

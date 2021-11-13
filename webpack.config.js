const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // installed via npm

module.exports = (env) => {
  const config = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    devtool: 'source-map',
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-class-properties'],
            },
          },
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(scss|sass)$/,
          exclude: /\.module\.(scss|sass)$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.module\.(scss|sass)$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader',
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader',
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
    ],
  };

  if (env.development) {
    config.devServer = {
      // enable HTML5 routing
      historyApiFallback: true,
      static: path.join(__dirname, 'public'),
      host: 'localhost',
      port: 4200,
      /**
       * TODO: use a solid solution for the proxy and for all enviornments
       * see server/proxies/api.js for current proxy defined in composer
       */
      proxy: [{
        context: ['/api', '/upload'],
        target: 'http://localhost:3000',
        secure: false,
        logLevel: 'debug',
      }],
    };
  }
  return config;
};

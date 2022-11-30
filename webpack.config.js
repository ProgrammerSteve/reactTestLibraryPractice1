const HtmlWebpackPlugin= require('html-webpack-plugin')
const path = require('path');

module.exports={
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path:path.resolve(__dirname, "dist"),
  },
  mode: 'development',
  stats: {
    children: true,
},
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
              test: /\.(png|jp(e*)g|svg|gif)$/,
              use: ['file-loader'],
            }
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
          template: path.join(__dirname, "src", "index.html"),
        })
    ]
};
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
  {
    entry: "./src/client/index.tsx",
    mode: "development",
    target: "web",
    output: {
      path: path.resolve(__dirname, "dist/client"),
      filename: "bundle-[fullhash].js",
    },

    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      compress: true,
      port: 9000,
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/client/index.html",
      }),
    ],
    resolve: {
      extensions: [".js", ".ts", ".tsx", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.ts(x)?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(js|jsx)$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-typescript",
                "@babel/preset-react",
              ],
            },
          },
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|svg|ttf)$/i,
          type: "asset/resource",
        },
      ],
    },
  },
];

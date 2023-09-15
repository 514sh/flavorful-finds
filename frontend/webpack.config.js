const path = require("path");
const webpack = require("webpack");
require('dotenv').config()

const config = (env, argv) => {
  const backend_url =
    argv.mode === "production"
      ? process.env.REACT_APP_BACKEND_URL
      : "http://0.0.0.0:5000/api";

  const food_images_url = process.env.REACT_APP_FOOD_IMAGES_BUCKET
  const public_ip=process.env.REACT_APP_PUBLIC_IP
  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "main.js",
    },
    devServer: {
      static: path.resolve(__dirname, "build"),
      compress: true,
      port: 3000,
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          use: ["file-loader"],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        BACKEND_URL: JSON.stringify(backend_url),
        FOOD_IMAGES_URL: JSON.stringify(food_images_url),
        PUBLIC_IP: JSON.stringify(public_ip)
      }),
    ],
  };
};

module.exports = config;

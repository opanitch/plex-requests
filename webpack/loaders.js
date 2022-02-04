module.exports = [
  {
    test: /\.ts(x)?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "ts-loader",
        options: {
          transpileOnly: true, // Speed up compilation in development mode
        },
      },
    ],
  },
  {
    test: /\.(s)?css$/,
    exclude: /node_modules/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
    ],
  },
  // .svg files to be handled by @svgr/webpack
  {
      test: /\.svg$/,
      use: ["@svgr/webpack"],
  },
  {
    test: /\.(eot|ttf|woff|woff2)$/,
    exclude: /node_modules/,
    type: 'asset/resource',
  },
];

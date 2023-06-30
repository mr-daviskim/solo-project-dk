const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({ mode } = { mode: "production" }) => {
    console.log(`mode is: ${mode}`);

    return {
            mode,
            entry: "./src/index.js",
            output: {
                publicPath: "/",
                path: path.resolve(__dirname, "build"),
                filename: "bundle.js"
            },
            devServer: {
                historyApiFallback: true,
            },
            resolve: {
                extensions: ['.js', '.json', '.jsx', '.css'],
              },
            module: {
                rules: [
                 {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                 },
                 {
                    test: /\.jpe?g|png$/,
                    exclude: /node_modules/,
                    use: ["url-loader", "file-loader"]
                },
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        loader: "babel-loader"
                    }
                ]
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: "./public/index.html"
                }),
            ],
        }
};


                // static: {
                //     directory: path.join(__dirname, 'build'),
                //     publicPath: '/build'
                // },
                // compress: true,
                // port: 8080,
                //   proxy: {
                //     '/addpieces': 'http://localhost:3000',
                //   }
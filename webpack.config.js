const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // Bundling JavaScript
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    /*
        Webpack dev server
        - Run using 'npx webpack serve'
        - hosts on 'http://localhost:8080/'
    */
    devtool: "eval-source-map", // ensures error messages match up to correct files/line numbers in development code
    devServer: {
        watchFiles: ["./src/template.html"], // tells dev server to detect any changes to the HTML template
    },
    // Handling HTML
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],
    module: {
        rules: [
            {
                // Loading CSS
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },

            {
                // Loading images
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },

            {   
                // Loading fonts
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
};
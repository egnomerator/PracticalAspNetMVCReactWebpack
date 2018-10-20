const path = require("path");
var appPath = __dirname;

module.exports = {
    context: appPath,
    devtool: "source-map",
    entry: {
        app: [
            "./Scripts/renderComponents.js"
        ]
    },
    output: {
        path: path.resolve(appPath, "Scripts/dist"),
        filename: "webpack_bundle_[name].js?[hash]",
        publicPath: "~/Scripts/dist/"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-env"],
                            ["@babel/preset-react"]
                        ]
                    }
                }
            }
        ]
    }
};

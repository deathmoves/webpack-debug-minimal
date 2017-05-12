module.exports = {
    entry: './src/ts/main.ts',
    output: {
        path: __dirname + "/dist",
        filename: "app.js"
    },
    module: {
        rules: [
            // {
            //     enforce: 'pre',
            //     test: /\.js$/,
            //     loader: "source-map-loader"
            // },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                use: "source-map-loader"
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devtool: 'inline-source-map'
};
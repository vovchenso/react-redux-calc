module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'dist/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            }
        ],
    },
};
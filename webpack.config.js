const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode : "development",
    entry : './src/index.js',
    output: {
        path: path.resolve(__dirname,'docs'),
        filename: 'bundle.js'
    },
    //loaders
    module:{
        rules: [
            {
                test: /.css$/,
                use: ['style-loader' , 'css-loader'],
                exclude: /node_modules/,
            },
        ]
    },
    //plugins
    plugins:[
        new HtmlWebpackPlugin({
            title: 'thoughts',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/html/index.html')
        })
    ],
    watch: true,
}
const path = require('path')

module.exports = {
    entry: './src/app/main.js',
    output : {
        path : path.join(__dirname, 'src/public/js'),
        filename : 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.js$/,
                loader : 'babel-loader',
                exclude : /node_modules/
            },
            {
                test : /\.vue$/,
                loader: 'vue-loader',
                exclude : /node_modules/
            }
        ]
    }
}

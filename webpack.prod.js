const common =  require('./webpack.config');
const {merge} = require('webpack-merge');
const path = require('path');

module.exports = merge(common, {

    output: {
        path: path.join(__dirname, './dist'),
        filename: 'main.bundle.js',
        chunkFilename: '[name].bundle.[hash].js'
    },

});
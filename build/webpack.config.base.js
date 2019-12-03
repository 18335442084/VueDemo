//所有环境公共配置
const path = require('path');//引入vue path包
//const VueLoaderPlugin = require('vue-loader/lib/plugin');
//const HTMLplugin = require('html-webpack-plugin');
//const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';//设置环境

const createVueLoaderOptions = require('./vue-loader.config');
const config = {
    target: 'web',
    entry: path.join(__dirname, '../client/index.js'),//配置入口文件，__dirname为项目文件的绝对路径
    output: {  //输出文件配置
        filename: 'bundle.[hash:8].js',
        path: path.join(__dirname, '../dist')
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: createVueLoaderOptions(isDev)
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(gif|jpg|jpeg|svg|png)$/,
                use:[
                    {
                        loader: 'url-loader',
                        options:{
                            limit: '1024',//小于1024byte都直接转成64位码以减少http请求
                            name: 'resource/[path][name]-[hash:8].[ext]',//图片输出的名字，[name]原名,[ext]拓展名
                        }
                    }
                ]
            }
        ],
    }
}

module.exports = config;
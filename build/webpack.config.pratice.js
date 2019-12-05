//pratice环境配置
const path = require('path');//引入vue path包
//const ExtractPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');//合并webpack配置
const baseConfig = require('./webpack.config.base.js');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLplugin = require('html-webpack-plugin');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';//设置环境


const devServer = {
    host: '0.0.0.0',
    port: 8080,
    overlay: {//页面覆盖报错信息
        errors: true
    },
    hot: true,//热加载功能
    //open: true,//每重新加载一次便新打开一个页面显示
    //historyFallback:{},//ip映射

};
let config;

const definePlugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"development"' 
        }
    }),
    new HTMLplugin({
        template: path.join(__dirname,'./template.html')
    }),
    //new VueLoaderPlugin()
]

config = merge(baseConfig, {
    entry: path.join(__dirname,'../pratice/index.js'),
    devtool: '#cheap-module-eval-source-map',//调试设置,可以在源代码上调试，无需在编译后的代码上调试
    module:{
        rules:[//数组
            {
                test: /\.styl(us)?$/,
                use: [
                    'vue-style-loader',//有样式热更新功能，较于 style-loader
                    {
                        loader: 'css-loader',
                        options: {
                            //modules: true,
                            //localsConvention: 'camelCase'
                            //localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options:{
                            sourceMap: true
                        }    
                    },
                    'stylus-loader'
                ]
            }
        ]
    },
    devServer,
    resolve:{
        alias:{//import Vue from 'vue'  设置vue的路径，默认为runtime文件
            'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
        }
    },
    plugins: definePlugins.concat([//数组
        new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoEmitOnErrorsPlugin() webpack4 废弃
    ])
});

module.exports = config;

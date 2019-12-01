const path = require('path');//引入vue path包
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';//设置环境

const HTMLplugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


const config = {
    target: 'web',
    entry: path.join(__dirname, 'src/index.js'),//配置入口文件，__dirname为项目文件的绝对路径
    output: {  //输出文件配置
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.jsx$/,
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
                test: /\.styl/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    'stylus-loader'
                ]
            },
            {
                test: /\.(gif|jpg|jpeg|svg|png)$/,
                use:[
                    {
                        loader: 'url-loader',
                        options:{
                            limit: '1024',//小于1024byte都直接转成64位码以减少http请求
                            name: '[name]-aaa.[ext]',//图片输出的名字，[name]原名,[ext]拓展名
                        }
                    }
                ]
            }
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"' 
            }
        }),
        new HTMLplugin(),
        new VueLoaderPlugin()
    ]
}


if(isDev){
    config.devtool = '#cheap-moudle-eval-source-map',//调试设置,可以在源代码上调试，无需在编译后的代码上调试
    config.devServer = {
        port: 8000,
        host: '0.0.0.0',
        overlay: {
            errors: true
        },
        hot: true//热加载功能
        //open: true 重新加载配置自动打开一个主页
        /*historyFallback: {
            //ip映射
        }*/
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()//减少不需要的信息展示插件，不重要
    )
}

module.exports = config;
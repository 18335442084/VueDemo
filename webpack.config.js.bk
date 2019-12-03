const path = require('path');//引入vue path包
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';//设置环境

const HTMLplugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');



const config = {
    target: 'web',
    entry: path.join(__dirname, 'src/index.js'),//配置入口文件，__dirname为项目文件的绝对路径
    output: {  //输出文件配置
        filename: 'bundle.[hash:8].js',
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
    config.module.rules.push(
        {
            test: /\.styl(us)?$/,
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
        }
    );
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
}else{
    config.mode='development';
    config.entry = {
        app: path.join(__dirname, 'src/index.js'),
        vendor: ['vue']
    };
    config.output.filename = '[name].[chunkhash:8].js';
    config.module.rules.push(
        {
            test: /\.styl(us)?$/,
            use: ExtractPlugin.extract({
                fallback: 'style-loader',
                use:[
                    'css-loader',
                    {
                        loader:'postcss-loader',
                        options:{
                            sourceMap: false
                        }
                    },
                    'stylus-loader'
                ]
            })
        }
    );
    config.plugins.push(
        //有利于浏览器长缓存，用户加载页面速度
        new ExtractPlugin('styles.[hash:8].css'),
        // new webpack.optimize.CommonsChunkPulgin({
        //     name: 'vender' //vendorz一定要放在runtime之上，打包类库文件
        // }),
        // new webpack.optimize.CommonsChunkPulgin({
        //     name: 'runtime'//将webpack文件分离出来打包
        // })
    );

    config.optimization = {
        splitChunks: {
            chunks: 'all'
        }
    };
}

module.exports = config;
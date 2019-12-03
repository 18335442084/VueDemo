//开发，生产环境配置
const path = require('path');//引入vue path包
const ExtractPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');//合并webpack配置
const baseConfig = require('./webpack.config.base.js');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLplugin = require('html-webpack-plugin');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';//设置环境


const devServer = {
    host: '0.0.0.0',
    port: 8000,
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
            NODE_ENV: isDev ? '"development"' : '"production"' 
        }
    }),
    new HTMLplugin(),
    new VueLoaderPlugin()
]

if(isDev){
    config = merge(baseConfig, {
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
                                // modules: true,
                                localsConvention: 'camelCase'
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
        plugins: definePlugins.concat([//数组
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ])
    });
}else{
    config = merge(baseConfig, {
        mode: 'production',
        entry: {
            app: path.join(__dirname, '../client/index.js'),
            vendor: ['vue']//供应商，框架
        },
        output: {
            filename: '[name].[chunkhash:8].js'
        },
        module: {
            rules:[
                {
                    test: /\.styl(us)?$/,
                    use: ExtractPlugin.extract({
                        fallback: 'vue-style-loader',
                        use: [
                            'css-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: false
                                }
                            },
                            'stylus-loader'
                        ]
                    }),
                }
            ]       
        },
        plugins:definePlugins.concat([
            //有利于浏览器长缓存，加速页面加载速度
            new ExtractPlugin('styles.[chunkhash:8].css'),
        ]),    
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        }
    });

   // config.plugins.push(
        //有利于浏览器长缓存，用户加载页面速度
      //  new ExtractPlugin('styles.[hash:8].css'),
        // new webpack.optimize.CommonsChunkPulgin({
        //     name: 'vender' //vendorz一定要放在runtime之上，打包类库文件
        // }),
        // new webpack.optimize.CommonsChunkPulgin({
        //     name: 'runtime'//将webpack文件分离出来打包
        // })
 //   );
}

module.exports = config;
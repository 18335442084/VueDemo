module.exports = isDev => {
    return {
        preserveWhitepace: true,  //.vue文件自动去除不需要的空格
        extractCss: !isDev, //.vue文件中样式文件抽离打包
        cssModules: {//用处：1：使例如类名不会重复 2：保密性更强
            //localIdentName: isDev ?'[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',//设置相关变量名的格式
            //camelCase: true //烤串式命名自动转换为驼峰式
        },//在.vue文件中调用样式文件，按照此配置处理样式文件
        //postcss: {}
        //hotReload: false,   //.vue文件的components热重载，而不是样式
        //loaders:{}    //自定义loader
        //preLoader:{}  //在loader解析之前先用preLoader配置去解析
        //postLoader:{} //在loader解析之后再用postLoader配置去解析
    }
}
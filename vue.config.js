const path=require("path")
module.export={
    publicPath:'/',//基本路径
    outputDir:'dist',//构建输出目录（打包地址）
    assetsDir:'assets',//放置生成的静态资源 (js、css、img、fonts) 的目录
    lintOnSave: false, // eslint-loader 是否在保存的时候检查
    productionSourceMap:false,  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
    //indexPath: 'index.html',// 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    //filenameHashing: true, // 默认在生成的静态资源文件名中包含hash以控制缓存

    // 所有 webpack-dev-server 的选项都支持
    devServer: {
        open: true,//设置自动打开
        port: 1880,//设置端口
        proxy: {
            //设置代理
            '/axios': {
                target: 'http://101.15.22.98',
                changeOrigin: true,
                secure: false, //如果是http接口，需要配置该参数
                pathRewrite: {
                    '^/axios': ''
                }
            }
        }
    },
    // pages: {   // 构建多页面应用，页面的配置
    //     index: {
    //         // page 的入口
    //         entry: 'src/index/main.js',
    //         // 模板来源
    //         template: 'public/index.html',
    //         // 在 dist/index.html 的输出
    //         filename: 'index.html',
    //         // 当使用 title 选项时，
    //         // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    //         title: 'Index Page',
    //         // 在这个页面中包含的块，默认情况下会包含
    //         // 提取出来的通用 chunk 和 vendor chunk。
    //         chunks: ['chunk-vendors', 'chunk-common', 'index']
    //     },
    //     // 当使用只有入口的字符串格式时，
    //     // 模板会被推导为 `public/subpage.html`
    //     // 并且如果找不到的话，就回退到 `public/index.html`。
    //     // 输出文件名会被推导为 `subpage.html`。
    //     subpage: 'src/subpage/main.js'
    // },


    // 是否使用包含运行时编译器的 Vue 构建版本
    runtimeCompiler: false,

    // Babel 显式转译列表
    transpileDependencies: [],


    // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性（注：仅影响构建时注入的标签）
    crossorigin: '',

    // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)
    integrity: false,

    // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中
    // 如果你需要基于环境有条件地配置行为，或者想要直接修改配置，那就换成一个函数 (该函数会在环境变量被设置之后懒执行)。该方法的第一个参数会收到已经解析好的配置。在函数内，你可以直接修改配置，或者返回一个将会被合并的对象
    configureWebpack: {},

    // 对内部的 webpack 配置（比如修改、增加Loader选项）(链式操作)
    chainWebpack: () =>{

    },

    // css的处理
    css: {
        // 当为true时，css文件名可省略 module 默认为 false
        modules: true,
        // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中,当作为一个库构建时，你也可以将其设置为 false 免得用户自己导入 CSS
        // 默认生产环境下是 true，开发环境下是 false
        extract: false,
        // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能
        sourceMap: false,
        //向 CSS 相关的 loader 传递选项(支持 css-loader postcss-loader sass-loader less-loader stylus-loader)
        loaderOptions: {
            css: {},
            less: {}
        }
    },



    // 是否为 Babel 或 TypeScript 使用 thread-loader
    parallel: require('os').cpus().length > 1,

    // 向 PWA 插件传递选项
    pwa: {},

    // 可以用来传递任何第三方插件选项
    pluginOptions: {}
}

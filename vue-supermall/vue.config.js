
// 配置文件路径别名
module.exports = {
   configureWebpack : {
       resolve: {
        //    @ 代表src文件夹，vue内部配置好了
           alias: {
               'assets': '@/assets',
               'components': '@/components',
               'views': '@/views',
               'network': '@/network',
               'common': '@/common',
           }
       }
   },

devServer: {
  open: true,
  host: '127.0.0.1',
  port: 8080,
  disableHostCheck: true, // 忽略host检查, 从而不会出现hot-reload失效
  //设置服务代理
  proxy:{
      // /api 自定义服务代理名字
      "/api":{
          target:"http://localhost:8080", //代理帮助你请求的具体服务
          changeOrign:true, // 开启代理
          pathRewrite:{  // 格式化path
              "^/api":""
          }
      }
  }
 }

}

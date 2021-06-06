
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

}
